import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { MoonIconFilled, MoonIconEmpty } from '../assets/svg/svgIcons';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button 
      onClick={toggleTheme} 
      className="theme-toggle"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'dark' ? 
        <MoonIconFilled className="moon-icon selected" /> : 
        <MoonIconEmpty className="moon-icon" />
      }
    </button>
  );
};

export default ThemeToggle; 