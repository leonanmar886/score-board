'use client';

interface InsertPlayerProps {
  onInsertPlayer: (name: string) => void;
}

export default function InsertPlayer({
  onInsertPlayer,
}: InsertPlayerProps) {

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget as HTMLFormElement);
    const name = formData.get('playerName') as string;
    onInsertPlayer(name);
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold">Insert Player</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="playerName"
          placeholder="Nome do Jogador"
          className="border border-gray-300 rounded p-2"
        />
        <button type="submit" className="bg-blue-500 text-white rounded p-2">Inserir Novo</button>
      </form>
    </div>
  );
}