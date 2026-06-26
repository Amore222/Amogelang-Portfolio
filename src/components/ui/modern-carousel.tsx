import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useIsMobile } from "./use-mobile";

interface ModernCarouselProps {
  items: any[];
  renderItem: (item: any, isActive: boolean) => React.ReactNode;
  autoPlayInterval?: number;
}

export const ModernCarousel = ({
  items,
  renderItem,
  autoPlayInterval = 5000,
}: ModernCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useIsMobile();

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  useEffect(() => {
    if (isHovered || autoPlayInterval <= 0) return;
    const timer = setInterval(() => {
      next();
    }, autoPlayInterval);
    return () => clearInterval(timer);
  }, [next, isHovered, autoPlayInterval]);

  const offsetMultiplier = isMobile ? 60 : 250;

  return (
    <div 
      className="relative w-full overflow-hidden py-10 flex flex-col items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full max-w-5xl h-[400px] md:h-[500px] flex justify-center items-center perspective-[1000px] z-10">
        <AnimatePresence>
          {items.map((item, index) => {
            // Calculate relative position to handle infinite looping visually
            let offset = index - currentIndex;
            // Adjust offset to show continuous loop properly
            if (offset > items.length / 2) offset -= items.length;
            if (offset < -items.length / 2) offset += items.length;

            const isActive = offset === 0;
            // On mobile, only show 3 items (active + 1 on each side). On desktop, show 5.
            const visibleCount = isMobile ? 1 : 2;
            const isVisible = Math.abs(offset) <= visibleCount;

            if (!isVisible) return null;

            return (
              <motion.div
                key={item.id || index}
                className="absolute w-[85%] sm:w-[350px] md:w-[400px] cursor-pointer"
                initial={{
                  x: offset * offsetMultiplier,
                  scale: isActive ? 1 : 0.8,
                  rotateY: offset * -15,
                  zIndex: 10 - Math.abs(offset),
                  opacity: 0,
                }}
                animate={{
                  x: offset * offsetMultiplier,
                  scale: isActive ? 1 : 0.8,
                  rotateY: offset * -15,
                  zIndex: 10 - Math.abs(offset),
                  opacity: isActive ? 1 : 1 - Math.abs(offset) * 0.4,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.8,
                }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
                onClick={() => {
                  if (!isActive) setCurrentIndex(index);
                }}
                style={{
                  transformStyle: "preserve-3d"
                }}
              >
                <div className={`transition-all duration-300 ${!isActive ? 'pointer-events-none' : ''}`}>
                   {renderItem(item, isActive)}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      
      {/* Controls */}
      <div className="flex items-center gap-4 mt-8 z-20">
        <button
          onClick={prev}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent/50 border border-primary/20 flex items-center justify-center hover:bg-accent hover:border-cyan-500/50 transition-colors text-white"
        >
          <FiChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        <div className="flex gap-2">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "w-8 bg-cyan-500" : "w-2 bg-white/20"
              }`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent/50 border border-primary/20 flex items-center justify-center hover:bg-accent hover:border-cyan-500/50 transition-colors text-white"
        >
          <FiChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>
    </div>
  );
};
