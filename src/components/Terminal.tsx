import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FiTerminal, FiX } from 'react-icons/fi';

interface terminalEntry {
  command: string;
  output: React.ReactNode;
}

export function Terminal({ onPlayWordle, isOpen, onToggle }: { onPlayWordle?: () => void; isOpen?: boolean; onToggle?: () => void }) {
  const [internalOpen, setInternalOpen] = useState(false);
  const open = isOpen !== undefined ? isOpen : internalOpen;
  const setOpen = (v: boolean) => {
    if (onToggle) onToggle();
    else setInternalOpen(v);
  };
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<terminalEntry[]>([
    {
      command: '',
      output: (
        <div className="text-cyan-400 mb-2 space-y-1">
          <p className="font-bold text-sm">Amogelang OS [Version 1.0.0]</p>
          <p className="text-gray-400 text-xs">Welcome! This is an interactive terminal.</p>
          <br />
          <p>
            <span className="text-green-400">→ </span>
            Type <span className="text-pink-400 font-bold">'help'</span> to see what you can do here.
          </p>
          <p>
            <span className="text-green-400">→ </span>
            Type <span className="text-pink-400 font-bold">'play-wordle'</span> to play a coding game!
          </p>
          <p>
            <span className="text-green-400">→ </span>
            Type <span className="text-pink-400 font-bold">'projects'</span> to see clickable project links.
          </p>
        </div>
      ),
    },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Global keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === '`' || e.key === 'k' || e.key === '~')) {
        e.preventDefault();
        setOpen(!open);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  // Auto-focus input when opened
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  // Auto-scroll to bottom on new output
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.trim().toLowerCase();
    let output: React.ReactNode = '';

    switch (cmd) {
      case 'help':
        output = (
          <ul className="space-y-1 text-gray-300">
            <li><span className="text-cyan-400 w-28 inline-block">help</span> - Display this help menu</li>
            <li><span className="text-cyan-400 w-28 inline-block">about</span> - Display information about me</li>
            <li><span className="text-cyan-400 w-28 inline-block">projects</span> - List featured projects</li>
            <li><span className="text-cyan-400 w-28 inline-block">clear</span> - Clear the terminal window</li>
            <li><span className="text-cyan-400 w-28 inline-block">whoami</span> - Display current user info</li>
            <li><span className="text-cyan-400 w-28 inline-block">sudo</span> - Execute a command as superuser</li>
            <li><span className="text-pink-400 w-28 inline-block">play-wordle</span> - Launch Dev Wordle game</li>
          </ul>
        );
        break;
      case 'about':
        output = 'Software developer crafting digital experiences with code and creativity. I treat coding like a game - strategic, challenging, and incredibly rewarding.';
        break;
      case 'projects':
        output = (
          <div className="space-y-3">
            <p className="text-gray-400 mb-2">Featured projects — click a link to open it:</p>
            {[
              { name: 'Recipe Finder', url: 'https://recipe-finder-app-r3vk.vercel.app/' },
              { name: 'Streaming Movies', url: 'https://streaming-cinego-app-3.onrender.com' },
              { name: 'Melula', url: 'https://melula-app-7mlm.vercel.app/' },
              { name: 'Task Todo', url: 'https://task-tracker-app-drn3.vercel.app/' },
              { name: 'Hospital File Management System', url: '#' },
            ].map((p) => (
              <div key={p.name} className="flex items-center gap-3">
                <span className="text-purple-400">→</span>
                <span className="text-gray-300 w-52 shrink-0">{p.name}</span>
                {p.url !== '#' ? (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 underline hover:text-cyan-300 transition-colors truncate"
                  >
                    {p.url}
                  </a>
                ) : (
                  <span className="text-gray-500 italic">private/no demo</span>
                )}
              </div>
            ))}
          </div>
        );
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      case 'whoami':
        output = 'guest_user_99';
        break;
      case 'sudo':
        output = <span className="text-red-500">Access Denied. This incident will be reported.</span>;
        break;
      case 'play-wordle':
        onPlayWordle?.();
        setInput('');
        return;
      case 'play-snake':
        output = <span className="text-purple-400">Coming soon in v2.0...</span>;
        break;
      default:
        if (cmd.startsWith('echo ')) {
          output = input.slice(5);
        } else {
          output = <span className="text-red-400">Command not found: {input}</span>;
        }
    }

    setHistory((prev) => [...prev, { command: input, output }]);
    setInput('');
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ y: '-100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-0 left-0 right-0 z-[100] p-4 pt-16 md:p-8 md:pt-20 pointer-events-none" // pointer-events-none to let clicks pass through outside the terminal
        >
          <div className="max-w-4xl mx-auto rounded-xl overflow-hidden border border-primary/30 bg-black/80 backdrop-blur-xl shadow-2xl shadow-primary/20 pointer-events-auto flex flex-col h-[50vh] min-h-[400px]">
            {/* Terminal Header */}
            <div className="bg-gray-900 border-b border-primary/30 p-3 flex justify-between items-center select-none">
              <div className="flex items-center gap-2">
                <FiTerminal className="w-4 h-4 text-cyan-500" />
                <span className="text-xs font-mono text-gray-400">ntia@portfolio:~</span>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => setOpen(false)}
                  className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors flex items-center justify-center group"
                >
                  <FiX className="w-2 h-2 text-red-900 opacity-0 group-hover:opacity-100" />
                </button>
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
            </div>

            {/* Terminal Body */}
            <div 
              ref={containerRef}
              className="flex-1 p-4 font-mono text-sm overflow-y-auto"
              onClick={() => inputRef.current?.focus()}
            >
              {history.map((entry, i) => (
                <div key={i} className="mb-4">
                  {entry.command && (
                    <div className="flex items-center gap-2 text-gray-300">
                      <span className="text-green-500">➜</span>
                      <span className="text-cyan-500">~</span>
                      <span>{entry.command}</span>
                    </div>
                  )}
                  <div className="mt-1 text-gray-300 whitespace-pre-wrap leading-relaxed">
                    {entry.output}
                  </div>
                </div>
              ))}

              <form onSubmit={handleCommand} className="flex items-center gap-2 mt-4">
                <span className="text-green-500">➜</span>
                <span className="text-cyan-500">~</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none text-gray-300 font-mono caret-white focus:ring-0"
                  spellCheck={false}
                  autoComplete="off"
                  autoFocus
                />
              </form>
            </div>
            {/* Scanline overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-5 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
