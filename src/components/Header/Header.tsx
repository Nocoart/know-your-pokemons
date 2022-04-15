import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Switch from "../Switch/Switch";
import { ThemeContext } from "../ThemeProvider/ThemeProvider";

//styles
import "./Header.scss";

//interfaces
interface Props {}

const logo = require("../../assets/img/pokemon-logo.png");
const pokedex = require("../../assets/img/pokedex.png");
const pokeball = require("../../assets/img/pokeball.png");

const Header: React.FC<Props> = () => {
  const { theme } = useContext(ThemeContext);

  const style = {
    color: theme === "light" ? "#333" : "#FFF",
  };
  return (
    <header>
      <Switch />
      <nav>
        <Link style={style} to="/">
          <img className="link-pokedex" src={pokedex} alt="" />
        </Link>
        <img className="logo" src={logo} alt="" />

        <Link style={style} to="/play">
          <img className="link-pokeball" src={pokeball} alt="" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
