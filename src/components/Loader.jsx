import { useEffect, useState } from 'react';

const Loader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 18;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(onFinish, 300);
          return 100;
        }
        return next;
      });
    }, 180);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="loader-screen">
      <div className="loader-inner">
        <p className="loader-tag">Booting Premium 3D Experience</p>
        <h1>ER. Vinay Kumawat</h1>
        <div className="loader-bar">
          <div className="loader-progress" style={{ width: `${progress}%` }} />
        </div>
        <p>{Math.floor(progress)}%</p>
      </div>
    </div>
  );
};

export default Loader;
