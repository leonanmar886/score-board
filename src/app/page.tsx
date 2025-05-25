'use client';

import Score from "../components/Score";
import InsertPlayer from "../components/InsertPlayer";
import React from "react";
import Player from "@app/components/Player";
import { useState } from "react";
import { IPlayer } from "@app/interfaces/index";
import sortPlayersByScore from "@app/utils/index";
import Button from "@app/components/Button";

export default function Home() {
  const [playersA, setPlayersA] = useState<IPlayer[]>([]);
  const [playersB, setPlayersB] = useState<IPlayer[]>([]);
  const [teamNameA, setTeamNameA] = useState("Fortaleza");
  const [teamNameB, setTeamNameB] = useState("Ceará");
  const [editingNames, setEditingNames] = useState(false);
  const [tempTeamNameA, setTempTeamNameA] = useState(teamNameA);
  const [tempTeamNameB, setTempTeamNameB] = useState(teamNameB);
  const [previousState, setPreviousState] = useState<{ playersA: IPlayer[]; playersB: IPlayer[] } | null>(null);

  const totalScoreA = playersA.reduce((acc, player) => acc + player.score, 0);
  const totalScoreB = playersB.reduce((acc, player) => acc + player.score, 0);

  // Função unificada para adicionar pontos
  const handleAddPoints = (team: "A" | "B", playerName: string, pointsToAdd: number) => {
    setPreviousState({ playersA: [...playersA], playersB: [...playersB] });
    const setPlayers = team === "A" ? setPlayersA : setPlayersB;
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) =>
        player.name === playerName
          ? { ...player, score: player.score + pointsToAdd }
          : player
      )
    );
  };

  // Função unificada para inserir jogador
  const handleInsertPlayer = (team: "A" | "B", name: string) => {
    const players = team === "A" ? playersA : playersB;
    const setPlayers = team === "A" ? setPlayersA : setPlayersB;
    if (!name.trim() || players.some(player => player.name === name)) return;
    setPreviousState({ playersA: [...playersA], playersB: [...playersB] });
    setPlayers(prev => [...prev, { name, score: 0 }]);
    alert(`Jogador inserido no time ${team === "A" ? "Fortaleza" : "Ceará"}: ${name}`);
  };

  const handleUndo = () => {
  if (previousState) {
    setPlayersA(previousState.playersA);
    setPlayersB(previousState.playersB);
    setPreviousState(null); // Limpa o estado anterior após desfazer
  }
};


  return (
    <>
      <div className="grid items-center justify-items-center min-h-screen p-8 pb-2 gap-16 font-[family-name:var(--font-geist-sans)]">
        <div className="teams-name flex flex-row align-center gap-4 justify-center items-center">
          <Score teamName={teamNameA} score={totalScoreA} />
          <p>vs.</p>
          <Score teamName={teamNameB} score={totalScoreB} position="right" />
        </div>

        {editingNames && (
          <div>
          <strong>Altere o nome dos times:</strong>
          <div className="flex flex-row gap-4 justify-center items-center mb-2 bg-gray-200 p-4 rounded">
            <input
              type="text"
              value={tempTeamNameA}
              onChange={e => setTempTeamNameA(e.target.value)}
              className="border border-gray-300 bg-white rounded p-2"
              placeholder="Nome do Time A"
            />
            
            <p>vs.</p>

            <input
              type="text"
              value={tempTeamNameB}
              onChange={e => setTempTeamNameB(e.target.value)}
              className="border border-gray-300 bg-white rounded p-2"
              placeholder="Nome do Time B"
            />

            <Button onClick={() => {
              setTeamNameA(tempTeamNameA);
              setTeamNameB(tempTeamNameB);
              setEditingNames(false);
            }}>
              Salvar
            </Button>

            <Button onClick={() => setEditingNames(false)}>
              Cancelar
            </Button>
          </div>
          </div>
        )}

        <div className="teams flex flex-row gap-8 justify-center items-center-top">

          <div className="team flex flex-col gap-4">
            <InsertPlayer onInsertPlayer={(name) => handleInsertPlayer("A", name)} />
            <div className="flex flex-col gap-4 w-full max-w-xl">
              {sortPlayersByScore(playersA).map((player) => (
                <Player
                  key={player.name}
                  name={player.name}
                  score={player.score}
                  onAddPoints={(name, points) => handleAddPoints("A", name, points)}
                />
              ))}
            </div>
          </div>

          <div className="team flex flex-col gap-4">
            <InsertPlayer onInsertPlayer={(name) => handleInsertPlayer("B", name)} />
            <div className="flex flex-col gap-4 w-full max-w-xl">
              {sortPlayersByScore(playersB).map((player) => (
                <Player
                  key={player.name}
                  name={player.name}
                  score={player.score}
                  onAddPoints={(name, points) => handleAddPoints("B", name, points)}
                />
              ))}
            </div>
          </div>

        </div>
        <div className="buttons flex flex-row gap-4 justify-center items-center">
          <Button onClick={() => setEditingNames(true)}>
            Alterar Nomes
          </Button>

          <Button onClick={() => {
            setPreviousState({ playersA: [...playersA], playersB: [...playersB] });
            setPlayersA([]);
            setPlayersB([]);
            alert("Placar zerado!");
          }}>
            Resetar Placar
          </Button>

          <Button onClick={handleUndo} disabled={!previousState}>
            Desfazer
          </Button>
        </div>
      </div>
    </>
  );
}

