import React, { useContext } from "react";
import { ThemeContext } from "../ThemeProvider/ThemeProvider";

//styles
import "./Switch.scss";

//interfaces
interface Props {}

const Switch: React.FC<Props> = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <button onClick={toggleTheme}>Switch to {theme === "light" ? "dark" : "light"} mode</button>
      coucou
    </div>
  );
};

export default Switch;
