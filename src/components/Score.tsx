'use client';

interface ScoreProps {
  teamName: string;
  score: number;
  position?: string;
}

export default function Score({ teamName, score, position = "esquerda" }: ScoreProps) {
  // Função para renderizar de acordo com a posição
  // function renderByPosition() {
  //   if (position === "right") {
  //     return (
  //       <>
  //         <span className="text-2xl font-bold">{score}</span>
  //         <h2 className="text-lg font-semibold">{teamName}</h2>
  //       </>
  //     );
  //   }
  //   // padrão: esquerda
  //   return (
  //     <>
  //       <h2 className="text-lg font-semibold">{teamName}</h2>
  //       <span className="text-2xl font-bold">{score}</span>
  //     </>
  //   );
  // }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row items-center gap-2">
        <>
          <span className="text-2xl font-bold">{score}</span>
          <h2 className="text-lg font-semibold">{teamName}</h2>
        </>
        <>
          <span className="text-2xl font-bold">{score}</span>
          <h2 className="text-lg font-semibold">{teamName}</h2>
        </>

      </div>
      {/* Add your score display logic here */}
    </div>
  );
}