import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const onMove = (event) => setPosition({ x: event.clientX, y: event.clientY });
    const onDown = () => setActive(true);
    const onUp = () => setActive(false);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
    };
  }, []);

  return (
    <>
      <span
        className={`cursor-dot ${active ? 'active' : ''}`}
        style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${active ? 1.8 : 1})` }}
      />
      <span className="cursor-ring" style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }} />
    </>
  );
};

export default CustomCursor;
