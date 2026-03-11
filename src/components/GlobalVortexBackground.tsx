import React from 'react';
import { useTheme } from './ThemeProvider';
import { Vortex } from './ui/vortex';

export function GlobalVortexBackground() {
  const { theme } = useTheme();

  return (
    <div className="fixed inset-0 w-full h-full pb-0 z-0">
      <Vortex
        key={theme}
        theme={theme}
        backgroundColor={theme === 'dark' ? 'black' : '#ffffff'}
        rangeY={200}
        particleCount={500}
        baseHue={theme === 'dark' ? 260 : 220} // Slightly different hue for light mode
        className="w-full h-full"
      />
    </div>
  );
}
