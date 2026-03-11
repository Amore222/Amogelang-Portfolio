import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FiX, FiRefreshCw } from 'react-icons/fi';

const WORDS = [
  'REACT', 'REDUX', 'SWIFT', 'FLASK', 'MONGO',
  'AXIOS', 'RAILS', 'EMBER', 'SOLID', 'REMIX',
  'ASTRO', 'NUMPY', 'PRISM', 'LINUX', 'NGINX',
  'IONIC', 'MYSQL', 'REDIS', 'MOCHA', 'BABEL',
  'GRUNT', 'XCODE', 'CARGO', 'DARTS', 'VUEJS',
  'SCALA', 'JULIA', 'ELIXR', 'VAPOR', 'NEXTS',
];

type TileState = 'correct' | 'present' | 'absent' | 'empty' | 'active';
type GameState = 'playing' | 'won' | 'lost';

function pickWord() {
  return WORDS[Math.floor(Math.random() * WORDS.length)];
}

function evaluateGuess(guess: string, target: string): TileState[] {
  const result: TileState[] = Array(5).fill('absent');
  const targetArr = target.split('');
  const guessArr = guess.split('');
  const used = Array(5).fill(false);

  // First pass: correct
  guessArr.forEach((letter, i) => {
    if (letter === targetArr[i]) {
      result[i] = 'correct';
      used[i] = true;
    }
  });

  // Second pass: present
  guessArr.forEach((letter, i) => {
    if (result[i] === 'correct') return;
    const j = targetArr.findIndex((t, idx) => t === letter && !used[idx]);
    if (j !== -1) {
      result[i] = 'present';
      used[j] = true;
    }
  });

  return result;
}

const TILE_COLORS: Record<TileState, string> = {
  correct: '#22c55e',
  present: '#eab308',
  absent: '#374151',
  empty: 'transparent',
  active: 'transparent',
};

const TILE_BORDERS: Record<TileState, string> = {
  correct: '#22c55e',
  present: '#eab308',
  absent: '#374151',
  empty: 'rgba(255,255,255,0.08)',
  active: 'rgba(168,85,247,0.6)',
};

const KEYBOARD_ROWS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '⌫'],
];

interface WordleGameProps {
  onClose: () => void;
}

export function WordleGame({ onClose }: WordleGameProps) {
  const [target, setTarget] = useState(pickWord);
  const [guesses, setGuesses] = useState<string[]>([]);
  const [evaluations, setEvaluations] = useState<TileState[][]>([]);
  const [current, setCurrent] = useState('');
  const [gameState, setGameState] = useState<GameState>('playing');
  const [shake, setShake] = useState(false);
  const [reveal, setReveal] = useState<number | null>(null);

  const keyStates: Record<string, TileState> = {};
  evaluations.forEach((evalRow, gi) => {
    evalRow.forEach((state, li) => {
      const letter = guesses[gi][li];
      const prev = keyStates[letter];
      if (prev === 'correct') return;
      if (state === 'correct' || !prev) keyStates[letter] = state;
      else if (state === 'present') keyStates[letter] = state;
    });
  });

  const submitGuess = useCallback(() => {
    if (current.length !== 5) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }
    const newGuesses = [...guesses, current];
    const eval_ = evaluateGuess(current, target);
    const newEvals = [...evaluations, eval_];
    setGuesses(newGuesses);
    setEvaluations(newEvals);
    setReveal(newGuesses.length - 1);
    setTimeout(() => setReveal(null), 1500);

    if (current === target) {
      setTimeout(() => setGameState('won'), 1600);
    } else if (newGuesses.length >= 6) {
      setTimeout(() => setGameState('lost'), 1600);
    }
    setCurrent('');
  }, [current, guesses, evaluations, target]);

  const handleKey = useCallback((key: string) => {
    if (gameState !== 'playing') return;
    if (key === 'ENTER' || key === 'Enter') { submitGuess(); return; }
    if (key === '⌫' || key === 'Backspace') { setCurrent(p => p.slice(0, -1)); return; }
    if (/^[A-Za-z]$/.test(key) && current.length < 5) {
      setCurrent(p => p + key.toUpperCase());
    }
  }, [gameState, current, submitGuess]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => handleKey(e.key);
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [handleKey]);

  const reset = () => {
    setTarget(pickWord());
    setGuesses([]);
    setEvaluations([]);
    setCurrent('');
    setGameState('playing');
    setShake(false);
    setReveal(null);
  };

  // Build grid rows
  const rows = Array(6).fill(null).map((_, rowIdx) => {
    if (rowIdx < guesses.length) {
      return { letters: guesses[rowIdx].split(''), states: evaluations[rowIdx], isRevealed: rowIdx === reveal };
    }
    if (rowIdx === guesses.length && gameState === 'playing') {
      const letters = current.split('');
      const states: TileState[] = Array(5).fill('empty').map((_, i) => i < letters.length ? 'active' : 'empty');
      return { letters, states, isRevealed: false };
    }
    return { letters: [], states: Array(5).fill('empty') as TileState[], isRevealed: false };
  });

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <motion.div className="absolute inset-0 bg-black/85 backdrop-blur-xl" onClick={onClose} />

      {/* Game panel */}
      <motion.div
        className="relative z-10 w-full max-w-sm rounded-3xl overflow-hidden flex flex-col"
        style={{
          background: 'linear-gradient(160deg, #0f0f1a 0%, #0a0a14 100%)',
          boxShadow: '0 0 0 1px rgba(168,85,247,0.25), 0 30px 80px rgba(0,0,0,0.8), 0 0 60px rgba(168,85,247,0.08)',
        }}
        initial={{ scale: 0.85, y: 60 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.85, y: 60 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/5">
          <div>
            <p className="text-[10px] font-mono text-purple-400 uppercase tracking-[0.2em]">Dev Wordle</p>
            <h2 className="text-lg font-bold text-white leading-none mt-0.5">Guess the Tech</h2>
          </div>
          <div className="flex items-center gap-2">
            <motion.button
              onClick={reset}
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-colors"
            >
              <FiRefreshCw className="w-4 h-4" />
            </motion.button>
            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-red-400 transition-colors"
            >
              <FiX className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

        {/* Hint */}
        <p className="text-center text-xs text-gray-500 pt-4 px-5">
          Guess the 5-letter <span className="text-purple-400">programming language</span> or <span className="text-cyan-400">framework</span>
        </p>

        {/* Win / Lose banner */}
        <AnimatePresence>
          {gameState !== 'playing' && (
            <motion.div
              className={`mx-5 mt-3 px-4 py-3 rounded-2xl text-center text-sm font-bold border ${
                gameState === 'won'
                  ? 'bg-green-500/10 border-green-500/30 text-green-400'
                  : 'bg-red-500/10 border-red-500/30 text-red-400'
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              {gameState === 'won'
                ? `You cracked it! 🎉 The word was ${target}`
                : `Game over! The answer was ${target}`}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Grid */}
        <div className="flex flex-col items-center gap-2 py-5 px-5">
          {rows.map((row, rowIdx) => (
            <motion.div
              key={rowIdx}
              className="flex gap-2"
              animate={shake && rowIdx === guesses.length ? { x: [0, -8, 8, -6, 6, 0] } : {}}
              transition={{ duration: 0.4 }}
            >
              {Array(5).fill(null).map((_, colIdx) => {
                const letter = row.letters[colIdx] || '';
                const state = row.states[colIdx];
                const isRevealing = row.isRevealed;
                const delay = colIdx * 0.1;

                return (
                  <motion.div
                    key={colIdx}
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-base font-black border-2 select-none"
                    style={{
                      borderColor: TILE_BORDERS[state],
                    }}
                    animate={isRevealing ? {
                      rotateX: [0, -90, 0],
                      backgroundColor: [TILE_COLORS.active, TILE_COLORS.active, TILE_COLORS[state]],
                    } : {
                      backgroundColor: TILE_COLORS[state],
                    }}
                    transition={isRevealing ? { duration: 0.5, delay, ease: 'easeInOut' } : { duration: 0.1 }}
                  >
                    <motion.span
                      className="text-white"
                      animate={letter && !isRevealing ? { scale: [1, 1.2, 1] } : {}}
                      transition={{ duration: 0.1 }}
                    >
                      {letter}
                    </motion.span>
                  </motion.div>
                );
              })}
            </motion.div>
          ))}
        </div>

        {/* On-screen keyboard */}
        <div className="px-3 pb-5 space-y-1.5">
          {KEYBOARD_ROWS.map((row, ri) => (
            <div key={ri} className="flex justify-center gap-1">
              {row.map((key) => {
                const state = keyStates[key];
                const isWide = key === 'ENTER' || key === '⌫';
                let bg = 'rgba(255,255,255,0.07)';
                if (state === 'correct') bg = '#22c55e';
                else if (state === 'present') bg = '#eab308';
                else if (state === 'absent') bg = '#1f2937';

                return (
                  <motion.button
                    key={key}
                    onClick={() => handleKey(key)}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.92 }}
                    className={`${isWide ? 'px-3 text-[10px]' : 'w-8'} h-10 rounded-lg text-xs font-bold text-white border border-white/5 transition-colors`}
                    style={{ background: bg }}
                  >
                    {key}
                  </motion.button>
                );
              })}
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
