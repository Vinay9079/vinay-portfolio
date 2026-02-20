import { useEffect, useMemo, useState } from 'react';

const baseLogs = [
  '> Initializing secure portfolio shell...',
  '> Loading AI profile packets...',
  '> Syncing client signup gateway...',
  '> Activating neon defense layer...',
  '> Query inbox route: Kumawatvinay28@gmail.com',
  '> Status: READY FOR COLLABORATION',
];

const HackingConsole = () => {
  const [lineIndex, setLineIndex] = useState(0);

  const logs = useMemo(() => baseLogs.slice(0, lineIndex + 1), [lineIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLineIndex((prev) => (prev + 1) % baseLogs.length);
    }, 1300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hacking-console">
      <div className="console-header">
        <span className="console-dot red" />
        <span className="console-dot yellow" />
        <span className="console-dot green" />
        <p>VINAY_SECURE_TERMINAL.exe</p>
      </div>
      <div className="console-body">
        {logs.map((line, index) => (
          <p key={`${line}-${index}`} className="console-line">
            {line}
          </p>
        ))}
        <p className="console-cursor">root@vinay:~$ <span>_</span></p>
      </div>
    </div>
  );
};

export default HackingConsole;
