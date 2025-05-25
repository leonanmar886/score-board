interface PlayerProps {
  name: string;
  score: number;
  onAddPoints: (playerName: string, pointsToAdd: number) => void; 
}

export default function Player({ name, score, onAddPoints }: PlayerProps) {
    return (
        <div className="grid grid-flow-col items-center gap-4">
        <h2 className="text-lg font-semibold">{name}</h2>
            <div className="flex items-center gap-2">
                <button onClick={() => onAddPoints(name, 1)} className="bg-blue-500 text-white hover:bg-blue-600 rounded p-2">+1</button>
                <button onClick={() => onAddPoints(name, 2)} className="bg-green-500 text-white hover:bg-green-600 rounded p-2">+2</button>
                <button onClick={() => onAddPoints(name, 3)} className="bg-green-500 text-white hover:bg-green-600 rounded p-2">+3</button>
                <span className="text-xl">{score}pts</span>
            </div>
        </div>
    );
}