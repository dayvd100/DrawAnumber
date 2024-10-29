import React from 'react';
import { Video, VideoOff, Download } from 'lucide-react';

interface RecordingControlsProps {
  recording: boolean;
  hasRecording: boolean;
  onStartRecording: () => void;
  onStopRecording: () => void;
  onDownloadRecording: () => void;
}

export function RecordingControls({
  recording,
  hasRecording,
  onStartRecording,
  onStopRecording,
  onDownloadRecording,
}: RecordingControlsProps) {
  return (
    <>
      {!recording ? (
        <button
          onClick={onStartRecording}
          className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold transition-all"
        >
          <Video className="w-5 h-5" />
          Iniciar Gravação
        </button>
      ) : (
        <button
          onClick={onStopRecording}
          className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 px-6 py-3 rounded-lg font-semibold transition-all"
        >
          <VideoOff className="w-5 h-5" />
          Parar Gravação
        </button>
      )}

      {hasRecording && (
        <button
          onClick={onDownloadRecording}
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold transition-all"
        >
          <Download className="w-5 h-5" />
          Baixar Gravação
        </button>
      )}
    </>
  );
}