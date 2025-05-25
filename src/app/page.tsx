'use client';

import Score from "../components/Score";
import InsertPlayer from "../components/InsertPlayer";
import Image from "next/image";
import React from "react";
import Player from "@app/components/Player";
import { useState } from "react";
import { IPlayer } from "@app/interfaces/index";
import sortPlayersByScore from "@app/utils/index";

export default function Home() {
  const [players, setPlayers] = useState<IPlayer[]>([]);
  const handleAddPoints = (playerName: string, pointsToAdd: number) => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) =>
        player.name === playerName
          ? { ...player, score: player.score + pointsToAdd }
          : player
      )
    );
  };

  // Função de exemplo para lidar com a inserção de jogador
  const handleInsertPlayer = (name: string) => {
    if (!name.trim() || players.some(player => player.name === name)) return;
    setPlayers(prev => [...prev, { name, score: 0 }]);
    alert(`Jogador inserido: ${name}`);
    // Você pode adicionar lógica para inserir o jogador aqui
  };
  

  return (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <InsertPlayer onInsertPlayer={handleInsertPlayer} />

        <Score teamName="Ceará" score={0} position="right" />
        <Score teamName="Fortaleza" score={0} />
        <div className="flex flex-col gap-4 w-full max-w-xl">
        {sortPlayersByScore(players).map((player) => (
          <Player
            key={player.name}
            name={player.name}
            score={player.score}
            onAddPoints={handleAddPoints}
          />
        ))}
        </div>
      </div>
    </>
  );
}

