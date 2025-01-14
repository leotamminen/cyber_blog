"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

// Tyypit ThemeContextille
interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

// Luo konteksti oletusarvoilla
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// ThemeProvider, joka jakaa teeman tilan sovelluksen läpi
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState(false);

  // Hae tallennettu teema localStoragesta (vain client-puolella)
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme) {
      setDarkMode(JSON.parse(savedTheme));
    }
  }, []);

  // Päivitä HTML-juuren "dark"-luokka ja tallenna tila localStorageen
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook kontekstin käyttöön komponenteissa
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
