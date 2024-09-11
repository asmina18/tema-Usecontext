
import { createContext, useState, useEffect } from 'react';

// Opretter en ny kontekst til tema (lys eller mørk)
export const ThemeContext = createContext();

// ThemeProvider-komponenten, der styrer temaet for hele appen
export const ThemeProvider = ({ children }) => {

  // Opretter state til temaet og sætter standarden til 'light'
  const [theme, setTheme] = useState('light');

  // Kører, når komponenten indlæses første gang
  // Henter det gemte tema fra lokal opbevaring (localStorage) og sætter det som tema
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme'); // Henter tema
    if (savedTheme) {
      setTheme(savedTheme); // Sætter temaet, hvis det findes
    }
  }, []);

  // Funktion til at skifte tema mellem 'light' og 'dark'
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'; // Skifter tema
    setTheme(newTheme); // Opdaterer temaet i state
    localStorage.setItem('theme', newTheme); // Gemmer det nye tema i localStorage
  };

  // Returnerer kontekst-provider med tema og funktion til at skifte tema
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children} {/* Indpakker børn-komponenter */}
    </ThemeContext.Provider>
  );
};
