import React, { useState, useContext } from "react";
import { ThemeContext } from "../../utils/ThemeProvider";

import "./Switch.scss";

const Switch: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const defaultToggle = theme === "light" ? true : false;
  const [toggled, setToggled] = useState(defaultToggle);

  const handleClick = () => {
    setToggled((s) => !s);
    toggleTheme();
  };
  return (
    <div onClick={handleClick} className={`toggle${!toggled ? " night" : ""}`}>
      <div className="notch">
        <div className="crater" />
        <div className="crater" />
      </div>
      <div>
        <div className="shape sm" />
        <div className="shape sm" />
        <div className="shape md" />
        <div className="shape lg" />
      </div>
    </div>
  );
};

export default Switch;
