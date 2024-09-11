
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext'; 

// Header-komponent, der viser overskriften og en knap til at skifte tema
export const Header = () => {
  // Henter tema (theme) og funktionen til at skifte tema (toggleTheme) fra ThemeContext
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    // Anvender dynamisk CSS-klasse baseret på det nuværende tema (light eller dark)
    <header className={`header ${theme}`}>
      <h1>Dark and Light</h1>
      {/* Knap til at skifte tema; viser 'dark' hvis temaet er 'light' og omvendt */}
      <button onClick={toggleTheme}>
        {theme === 'light' ? 'dark' : 'light'}
      </button>
    </header>
  );
};
