import React from 'react';
import { Dices } from 'lucide-react';
import { NumberGrid } from './components/NumberGrid';
import { RecordingControls } from './components/RecordingControls';
import { SelectedNumber } from './components/SelectedNumber';
import { useRecording } from './hooks/useRecording';
import { useLottery } from './hooks/useLottery';

function App() {
  const { selectedNumber, isSpinning, spinWheel } = useLottery();
  const {
    recording,
    error,
    hasRecording,
    startRecording,
    stopRecording,
    downloadRecording,
  } = useRecording();

  const numbers = Array.from({ length: 1000 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Sorteio</h1>
          <p className="text-xl text-purple-200">Escolha um número de 1 até 1000</p>
          {error && (
            <p className="mt-4 text-red-400 bg-red-900/50 p-3 rounded-lg inline-block">
              {error}
            </p>
          )}
        </div>

        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={spinWheel}
            disabled={isSpinning}
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold transition-all disabled:opacity-50"
          >
            <Dices className="w-5 h-5" />
            {isSpinning ? 'Sorteando...' : 'Sortear Número'}
          </button>

          <RecordingControls
            recording={recording}
            hasRecording={hasRecording}
            onStartRecording={startRecording}
            onStopRecording={stopRecording}
            onDownloadRecording={downloadRecording}
          />
        </div>

        <SelectedNumber number={selectedNumber} />
        <NumberGrid numbers={numbers} selectedNumber={selectedNumber} />
      </div>
    </div>
  );
}

export default App;