import { useState, useCallback } from 'react';

export function useLottery() {
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);

  const spinWheel = useCallback(() => {
    if (isSpinning) return;
    
    setIsSpinning(true);
    let duration = 0;
    const interval = 50;
    const maxDuration = 3000;
    
    const spin = () => {
      const randomNum = Math.floor(Math.random() * 1000) + 1;
      setSelectedNumber(randomNum);
      
      if (duration < maxDuration) {
        duration += interval;
        setTimeout(spin, interval);
      } else {
        setIsSpinning(false);
      }
    };
    
    spin();
  }, [isSpinning]);

  return {
    selectedNumber,
    isSpinning,
    spinWheel,
  };
}