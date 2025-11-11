import { motion } from 'motion/react';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 dark:bg-[#0f0f0f]/80 backdrop-blur-lg border-b border-primary/20 dark:border-[#ffffff33] transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center relative overflow-hidden">
              <span className="relative z-10 text-white">AN</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-500"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              />
            </div>
            <span className="hidden sm:block text-foreground dark:text-white transition-colors">
              Amogelang Ntia
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="text-sm text-foreground dark:text-white hover:text-primary transition-colors relative group"
              >
                {item.label}
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <ThemeToggle />

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-10 h-10 rounded-lg bg-accent/50 dark:bg-[#1f1f1f]/50 border border-primary/20 dark:border-[#ffffff33] flex items-center justify-center transition-colors"
            >
              {isOpen ? <X className="w-5 h-5 text-foreground dark:text-white" /> : <Menu className="w-5 h-5 text-foreground dark:text-white" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          className="md:hidden overflow-hidden transition-all duration-300"
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                whileTap={{ scale: 0.95 }}
                className="block px-4 py-2 rounded-lg hover:bg-accent dark:hover:bg-[#2a2a2a] text-foreground dark:text-white transition-colors"
              >
                {item.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
