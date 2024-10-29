import React from 'react';

interface SelectedNumberProps {
  number: number | null;
}

export function SelectedNumber({ number }: SelectedNumberProps) {
  if (!number) return null;

  return (
    <div className="text-center mb-12">
      <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-8 animate-bounce">
        <span className="text-6xl font-bold text-yellow-300">{number}</span>
      </div>
    </div>
  );
}