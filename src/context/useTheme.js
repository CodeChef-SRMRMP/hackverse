import React, { useContext } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';

import { useState } from 'react';

const ThemeContext = createContext({});

const AuthProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Dark Mode Toggle
  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      localStorage.theme = 'dark';
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    } else {
      localStorage.theme = 'light';
      document.documentElement.classList.remove('dark');
      setDarkMode(false);
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode, scrollPosition }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default AuthProvider;

export function useTheme() {
  return useContext(ThemeContext);
}
