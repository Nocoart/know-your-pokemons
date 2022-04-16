import React, { useState } from "react";

type Theme = "light" | "dark";
type ThemeContext = { theme: Theme; toggleTheme: () => void };

export const ThemeContext = React.createContext<ThemeContext>({} as ThemeContext);

interface Props {
  children: React.ReactChild;
}

const hours = new Date().getHours();

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(hours > 9 && hours < 18 ? "light" : "dark");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const color = theme === "light" ? "#333" : "#F8F8F8";
  const backgroundColor = theme === "light" ? "#F8F8F8" : "#333";
  const borderColor = theme === "light" ? "#333" : "#F8F8F8";

  document.body.style.color = color;
  document.body.style.backgroundColor = backgroundColor;
  document.body.style.borderColor = borderColor;

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
