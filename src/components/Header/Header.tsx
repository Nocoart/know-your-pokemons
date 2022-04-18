import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeProvider";

//styles
import "./Header.scss";
import Switch from "../Switch/Switch";

//interfaces
interface Props {}

//assets
const logo = require("../../assets/img/pokemon-logo.png");
const pokedex = require("../../assets/img/pokedex.png");
const pokeball = require("../../assets/img/pokeball.png");

const Header: React.FC<Props> = () => {
  const { theme } = useContext(ThemeContext);

  const style = {
    color: theme === "light" ? "#333" : "#FFF",
  };

  return (
    <header className="container">
      <img className="logo" src={logo} alt="" />
      <nav>
        <Link className="link-pokedex" style={style} to="/">
          <img src={pokedex} alt="" />
        </Link>
        <Switch />
        <Link className="link-pokeball" style={style} to="/play">
          <img src={pokeball} alt="" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
