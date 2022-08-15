import React from "react";

export const themes = {
    dark: {
      background: '#333',
    },
    light: {
        background: '#fff',
      }
  };

export const ThemeContext = React.createContext({
    theme: themes.dark,
    toggleTheme: () => {},
  });