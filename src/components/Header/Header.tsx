import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

//component
import { ThemeContext } from "../../contexts/ThemeProvider";
import Modal from "../Modal/Modal";
import Switch from "../Switch/Switch";

//styles
import "./Header.scss";
import GameRules from "../GameRules/GameRules";

//interfaces
interface Props {}

//assets
const logo = require("../../assets/img/pokemon-logo.png");
const pokedex = require("../../assets/img/pokedex.png");
const pokeball = require("../../assets/img/pokeball.png");

const Header: React.FC<Props> = () => {
  const { theme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  const style = {
    color: theme === "light" ? "#333" : "#FFF",
  };
  const backgroundStyle = {
    backgroundColor: theme === "light" ? "rgba(51, 51, 51, 0.222)" : "rgba(255, 255, 255, 0.224)",
  };

  return (
    <header className="container">
      <img className="logo" src={logo} alt="" />
      <nav>
        <Link className="link-pokedex" style={style} to="/">
          <img src={pokedex} alt="" />
        </Link>
        <div className="center">
          <button className="rule-btn" style={{ ...backgroundStyle }} onClick={() => setIsOpen(true)}>
            ?
          </button>
          <Switch />
        </div>

        <Link className="link-pokeball" style={style} to="/play">
          <img src={pokeball} alt="" />
        </Link>

        {isOpen && (
          <Modal setIsOpen={setIsOpen}>
            <GameRules />
          </Modal>
        )}
      </nav>
    </header>
  );
};

export default Header;
