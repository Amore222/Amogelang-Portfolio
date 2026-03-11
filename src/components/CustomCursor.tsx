import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [cursorState, setCursorState] = useState<'default' | 'hover' | 'click'>('default');

  // Smooth spring follow for the outer ring
  const springX = useSpring(cursorX, { stiffness: 120, damping: 18, mass: 0.5 });
  const springY = useSpring(cursorY, { stiffness: 120, damping: 18, mass: 0.5 });

  const isHovering = useRef(false);

  useEffect(() => {
    // Hide native cursor globally
    document.documentElement.style.cursor = 'none';

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseDown = () => setCursorState('click');
    const handleMouseUp = () =>
      setCursorState(isHovering.current ? 'hover' : 'default');

    // Detect interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, [data-cursor="hover"], input, textarea, select');
      if (isInteractive) {
        isHovering.current = true;
        setCursorState('hover');
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, [data-cursor="hover"], input, textarea, select');
      if (isInteractive) {
        isHovering.current = false;
        setCursorState('default');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.documentElement.style.cursor = '';
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Inner dot — follows cursor exactly */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: cursorState === 'hover' ? 10 : cursorState === 'click' ? 6 : 8,
          height: cursorState === 'hover' ? 10 : cursorState === 'click' ? 6 : 8,
          backgroundColor:
            cursorState === 'hover' ? '#22d3ee' : '#a855f7',
          boxShadow:
            cursorState === 'hover'
              ? '0 0 12px 4px rgba(34,211,238,0.7)'
              : '0 0 8px 2px rgba(168,85,247,0.6)',
        }}
        transition={{ duration: 0.1 }}
      />

      {/* Outer trailing ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border-2"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: cursorState === 'hover' ? 44 : cursorState === 'click' ? 28 : 36,
          height: cursorState === 'hover' ? 44 : cursorState === 'click' ? 28 : 36,
          borderColor:
            cursorState === 'hover'
              ? 'rgba(34,211,238,0.6)'
              : 'rgba(168,85,247,0.4)',
          boxShadow:
            cursorState === 'hover'
              ? '0 0 20px 4px rgba(34,211,238,0.25)'
              : '0 0 12px 2px rgba(168,85,247,0.2)',
          opacity: cursorState === 'click' ? 0.5 : 1,
        }}
        transition={{ duration: 0.15 }}
      >
        {/* "View" label shown on hover */}
        {cursorState === 'hover' && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="absolute inset-0 flex items-center justify-center text-[8px] font-bold text-cyan-400 tracking-widest select-none"
          >
            VIEW
          </motion.span>
        )}
      </motion.div>
    </>
  );
}
