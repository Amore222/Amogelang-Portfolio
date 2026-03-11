import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const bootLines = [
  'Initializing kernel...',
  'Loading core modules...',
  'Mounting file systems...',
  'Starting network interfaces...',
  'Resolving dependencies...',
  'Loading Amogelang OS...',
  'Bypassing secure boot...',
  'Decrypting user profile...',
  'Executing launch sequence...',
  'Access Granted.',
];

export function BootSequence({ onComplete }: { onComplete: () => void }) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let currentLine = 0;
    
    // Add lines progressively faster to simulate a boot
    const interval = setInterval(() => {
      if (currentLine < bootLines.length) {
        setDisplayedLines((prev) => [...prev, bootLines[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
        
        // Wait a small moment after "Access Granted" before hiding
        setTimeout(() => {
          setIsComplete(true);
          setTimeout(onComplete, 800); // Allow fade out animation to finish
        }, 600);
      }
    }, 150); // Speed of text appearance

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          key="boot-sequence"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-black text-green-500 font-mono p-8 flex flex-col justify-end overflow-hidden"
        >
          {/* Subtle scanline overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />
          
          <div className="relative z-10 space-y-2 mb-8">
            {displayedLines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className={index === bootLines.length - 1 ? "text-cyan-400 font-bold mt-4 animate-pulse" : ""}
              >
                <span className="opacity-50 mr-2">[{new Date().toISOString().split('T')[1].slice(0, 8)}]</span> 
                {line}
              </motion.div>
            ))}
            
            {!isComplete && displayedLines.length < bootLines.length && (
              <motion.div
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="w-3 h-5 bg-green-500 mt-2"
              />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
