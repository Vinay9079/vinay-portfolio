import { useEffect } from 'react';

const ClickSoundManager = () => {
  useEffect(() => {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();

    const playClick = () => {
      if (audioContext.state === 'suspended') {
        audioContext.resume();
      }
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      oscillator.type = 'triangle';
      oscillator.frequency.value = 540;
      gainNode.gain.value = 0.03;
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      oscillator.start();
      oscillator.stop(audioContext.currentTime + 0.05);
    };

    const handler = (event) => {
      const clickable = event.target.closest('a, button, input[type="submit"], .chip');
      if (clickable) {
        playClick();
      }
    };

    document.addEventListener('click', handler);

    return () => {
      document.removeEventListener('click', handler);
      audioContext.close();
    };
  }, []);

  return null;
};

export default ClickSoundManager;
