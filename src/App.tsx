import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PokeListProvider } from "./contexts/PokeListProvider";

//components
import Home from "./containers/Home/Home";
import Play from "./containers/Play/Play";
import Header from "./components/Header/Header";

//styles
import "./App.scss";
import "./Vars.scss";

function App() {
  return (
    <Router>
      <Header />
      <PokeListProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/play" element={<Play />} />
        </Routes>
      </PokeListProvider>
    </Router>
  );
}

export default App;
