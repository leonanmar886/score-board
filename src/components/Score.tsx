'use client';

interface ScoreProps {
  teamName: string;
  score: number;
  position?: string;
}

export default function Score({ teamName, score, position }: ScoreProps) {
  function renderPosition() {
    if (position === "right") {
      return (
        <>
          <span className="text-4xl font-bold bg-gray-200 rounded-lg p-2">{score}</span>
          <h2 className="text-lg font-semibold">{teamName}</h2>
        </>
      );
    }
    // padrão: nome à esquerda, score à direita
    return (
      <>
        <h2 className="text-lg font-semibold">{teamName}</h2>
        <span className="text-4xl font-bold bg-gray-200 rounded-lg p-2">{score}</span>
      </>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row items-center gap-2">
        {renderPosition()}
      </div>
    </div>
  );
}