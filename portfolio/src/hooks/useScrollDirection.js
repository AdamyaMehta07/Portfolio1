import { useState, useEffect, useRef } from 'react';

export function useScrollDirection() {
  const [direction, setDirection] = useState('up');
  const [scrolled, setScrolled] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 40);

      if (Math.abs(currentY - lastY.current) < 6) return;

      if (currentY > lastY.current && currentY > 120) {
        setDirection('down');
      } else {
        setDirection('up');
      }
      lastY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { direction, scrolled };
}
