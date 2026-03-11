import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FiTerminal, FiPlay, FiChevronUp } from 'react-icons/fi';

interface FloatingActionsProps {
  onOpenTerminal: () => void;
  onOpenWordle: () => void;
}

export function FloatingActions({ onOpenTerminal, onOpenWordle }: FloatingActionsProps) {
  const [expanded, setExpanded] = useState(false);

  const actions = [
    {
      id: 'terminal',
      icon: FiTerminal,
      label: 'Open Terminal',
      hint: 'Ctrl + ~',
      color: '#22d3ee',
      glow: 'rgba(34,211,238,0.35)',
      onClick: onOpenTerminal,
    },
    {
      id: 'wordle',
      icon: FiPlay,
      label: 'Play Dev Wordle',
      hint: 'Game',
      color: '#a855f7',
      glow: 'rgba(168,85,247,0.35)',
      onClick: onOpenWordle,
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[90] flex flex-col items-end gap-3">
      {/* Action buttons revealed on expand */}
      <AnimatePresence>
        {expanded && actions.map((action, i) => (
          <motion.div
            key={action.id}
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            transition={{ delay: i * 0.06, duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Label chip */}
            <motion.div
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium text-white/80 border border-white/10 backdrop-blur-sm select-none"
              style={{ background: 'rgba(15,15,20,0.9)' }}
            >
              <span>{action.label}</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-white/10">{action.hint}</span>
            </motion.div>

            {/* Icon button */}
            <motion.button
              onClick={() => { action.onClick(); setExpanded(false); }}
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.9 }}
              className="w-11 h-11 rounded-2xl flex items-center justify-center border border-white/10 backdrop-blur-sm relative"
              style={{
                background: `rgba(15,15,20,0.95)`,
                boxShadow: `0 0 16px ${action.glow}`,
              }}
            >
              <motion.div
                className="absolute inset-0 rounded-2xl"
                animate={{ boxShadow: [`0 0 8px ${action.glow}`, `0 0 20px ${action.glow}`, `0 0 8px ${action.glow}`] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <action.icon className="w-4 h-4 relative z-10" style={{ color: action.color }} />
            </motion.button>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Main FAB toggle */}
      <motion.button
        onClick={() => setExpanded(p => !p)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="w-13 h-13 w-14 h-14 rounded-2xl flex items-center justify-center border border-purple-500/30 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #1a0a2e, #0a0a1a)',
          boxShadow: '0 0 0 1px rgba(168,85,247,0.2), 0 8px 32px rgba(168,85,247,0.3)',
        }}
        aria-label="Open actions"
      >
        {/* Pulsing glow ring to draw attention */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          animate={{
            boxShadow: [
              '0 0 0 0px rgba(168,85,247,0.5)',
              '0 0 0 8px rgba(168,85,247,0)',
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FiChevronUp className="w-5 h-5 text-purple-400" />
        </motion.div>
      </motion.button>

      {/* First-visit tooltip hint */}
      <AnimatePresence>
        {!expanded && (
          <motion.div
            className="absolute bottom-16 right-0 px-3 py-1.5 rounded-xl text-[11px] text-white/70 border border-white/10 backdrop-blur-sm whitespace-nowrap pointer-events-none"
            style={{ background: 'rgba(15,15,20,0.95)' }}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: [0, 1, 1, 0], y: [5, 0, 0, -5] }}
            transition={{ duration: 4, delay: 1, times: [0, 0.1, 0.8, 1] }}
          >
            Click to explore hidden features
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
