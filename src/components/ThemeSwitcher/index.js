import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import './ThemeSwitcher.scss'; 

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="theme-switcher-btn"
      onClick={toggleTheme}
      aria-label="Mudar tema"
    >
      {theme === 'light' ? (
        <FontAwesomeIcon icon={faMoon} fixedWidth />
      ) : (
        <FontAwesomeIcon icon={faSun} fixedWidth />
      )}
    </button>
  );
};

export default ThemeSwitcher;