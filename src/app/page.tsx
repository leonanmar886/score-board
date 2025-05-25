'use client';

import Score from "../components/Score";
import InsertPlayer from "../components/InsertPlayer";
import Image from "next/image";
import React from "react";

export default function Home() {
  // Função de exemplo para lidar com a inserção de jogador
  const handleInsertPlayer = (name: string) => {
    alert(`Jogador inserido: ${name}`);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <InsertPlayer onInsertPlayer={handleInsertPlayer} />

      <Score teamName="Ceará" score={0} position="right" />
      <Score teamName="Fortaleza" score={0} />

    </div>

  );
}
