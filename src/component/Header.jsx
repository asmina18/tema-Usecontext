import { useContext } from 'react';

import { ThemeContext } from './ThemeContext'; 

export const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={`header ${theme}`}>
      <h1>Dark and Light</h1>
      <button onClick={toggleTheme}>
          {theme === 'light' ? 'dark' : 'light'} 
      </button>
    </header>
  );
};


