import { useMousePosition } from '../../hooks/useMousePosition';
import { useState, useEffect } from 'react';

export default function CursorGlow() {
  const { x, y } = useMousePosition();
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(window.matchMedia('(pointer: coarse)').matches);
  }, []);

  if (isTouch) return null;

  return (
    <div
      className="pointer-events-none fixed z-30 hidden md:block"
      style={{
        left: x,
        top: y,
        transform: 'translate(-50%, -50%)',
        width: 420,
        height: 420,
        background:
          'radial-gradient(circle, rgba(234,88,12,0.08) 0%, rgba(234,88,12,0) 70%)',
        transition: 'left 120ms ease-out, top 120ms ease-out',
      }}
      aria-hidden="true"
    />
  );
}
