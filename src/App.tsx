import { useState } from 'react';
import { ThemeProvider } from './components/ThemeProvider';
import { BootSequence } from './components/BootSequence';
import { Terminal } from './components/Terminal';
import { CustomCursor } from './components/CustomCursor';
import { WordleGame } from './components/WordleGame';
import { FloatingActions } from './components/FloatingActions';
import { AnimatePresence } from 'motion/react';
import { ThemeToggle } from './components/ThemeToggle';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { TechStack } from './components/TechStack';
// import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { GlobalVortexBackground } from './components/GlobalVortexBackground';

export default function App() {
  const [isBootComplete, setIsBootComplete] = useState(false);
  const [isWordleOpen, setIsWordleOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <ThemeProvider defaultTheme="dark">
      <CustomCursor />
      {!isBootComplete && <BootSequence onComplete={() => setIsBootComplete(true)} />}
      
      {/* Main app is conditionally shown after boot completes to enhance the illusion */}
      {isBootComplete && (
        <div className="min-h-screen bg-background text-foreground transition-colors duration-300 dark:bg-[#0f0f0f] dark:text-white">
        {/* Fixed Navigation with transparency and dark theme support */}
        {/* <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 dark:bg-[#0f0f0f]/80 backdrop-blur-lg border-b border-primary/20 dark:border-[#ffffff33] transition-colors duration-300"> */}
          <Navigation />
        {/* </header> */}

        {/* Theme toggle button (optional placement) */}
      
          <ThemeToggle />
    
        <div className="relative w-full">
          {/* Global Vortex Background Layout with Theme Support */}
          <GlobalVortexBackground />

          <div className="relative z-10 w-full">
            {/* Main content */}
            <main className="pt-20">
              <Hero />
              <About />
              <TechStack />
              <Projects />
              {/* <Contact /> */}
            </main>

            <Footer />
            <Terminal
              onPlayWordle={() => setIsWordleOpen(true)}
              isOpen={isTerminalOpen}
              onToggle={() => setIsTerminalOpen(p => !p)}
            />
            <FloatingActions
              onOpenTerminal={() => setIsTerminalOpen(p => !p)}
              onOpenWordle={() => setIsWordleOpen(true)}
            />
          </div>
        </div>
        </div>
      )}
      <AnimatePresence>
        {isWordleOpen && <WordleGame onClose={() => setIsWordleOpen(false)} />}
      </AnimatePresence>
    </ThemeProvider>
  );
}
