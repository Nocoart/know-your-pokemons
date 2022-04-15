import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import "./Vars.scss";
import Home from "./containers/Home/Home";
import Play from "./containers/Play/Play";
import Sandbox from "./components/Sandbox/Sandbox";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Sandbox />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<Play />} />
      </Routes>
    </Router>
  );
}

export default App;
