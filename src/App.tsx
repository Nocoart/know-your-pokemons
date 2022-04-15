import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//components
import Home from "./containers/Home/Home";
import Play from "./containers/Play/Play";
import Sandbox from "./components/Sandbox/Sandbox";
import Header from "./components/Header/Header";

//styles
import "./App.scss";
import "./Vars.scss";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Sandbox />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<Play />} />
      </Routes>
    </Router>
  );
}

export default App;
