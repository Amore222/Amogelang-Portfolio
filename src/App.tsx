import { ThemeProvider } from './components/ThemeProvider';
import { ThemeToggle } from './components/ThemeToggle';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { TechStack } from './components/TechStack';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300 dark:bg-[#0f0f0f] dark:text-white">
        {/* Fixed Navigation with transparency and dark theme support */}
        {/* <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 dark:bg-[#0f0f0f]/80 backdrop-blur-lg border-b border-primary/20 dark:border-[#ffffff33] transition-colors duration-300"> */}
          <Navigation />
        {/* </header> */}

        {/* Theme toggle button (optional placement) */}
      
          <ThemeToggle />
    

        {/* Main content */}
        <main className="pt-20">
          <Hero />
          <About />
          <Experience />
          <TechStack />
          <Projects />
          <Contact />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}
