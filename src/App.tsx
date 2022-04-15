import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import "./Vars.scss";
import Home from "./containers/Home/Home";
import Play from "./containers/Play/Play";
import Sandbox from "./components/Sandbox/Sandbox";
import { ThemeContext } from "./components/ThemeProvider/ThemeProvider";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <Router>
      <button onClick={toggleTheme}>Switch to {theme === "light" ? "dark" : "light"} mode</button>
      <Routes>
        {/* <Route path="/" element={<Sandbox />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<Play />} />
      </Routes>
    </Router>
  );
}

export default App;
