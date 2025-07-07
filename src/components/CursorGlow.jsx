import { useEffect } from 'react';

function CursorGlow() {
  useEffect(() => {
    const glow = document.getElementById('cursor-glow');
    const handleMouseMove = (e) => {
      if (glow) {
        glow.style.left = `${e.clientX}px`;
        glow.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      id="cursor-glow"
      className="pointer-events-none fixed w-32 h-32 rounded-full z-0"
      style={{
        background: 'radial-gradient(circle, rgba(168,85,247,0.30) 0%, transparent 80%)',
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
}

export default CursorGlow;
