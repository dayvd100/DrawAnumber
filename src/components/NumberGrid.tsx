import React from 'react';

interface NumberGridProps {
  numbers: number[];
  selectedNumber: number | null;
}

export function NumberGrid({ numbers, selectedNumber }: NumberGridProps) {
  return (
    <div className="grid grid-cols-10 gap-2 bg-white/5 backdrop-blur-sm p-6 rounded-xl">
      {numbers.map((number) => (
        <div
          key={number}
          className={`aspect-square flex items-center justify-center rounded-lg text-sm font-medium transition-all ${
            selectedNumber === number
              ? 'bg-yellow-400 text-black scale-110 shadow-lg'
              : 'bg-white/10 hover:bg-white/20'
          }`}
        >
          {number}
        </div>
      ))}
    </div>
  );
}