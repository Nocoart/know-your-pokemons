import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Switch from "../Switch/Switch";
import { ThemeContext } from "../ThemeProvider/ThemeProvider";

//styles
import "./Header.scss";
import Switch2 from "../Switch2/Switch2";

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
      <img className="logo" src={logo} alt="" />
      <nav>
        <Link style={style} to="/">
          <img className="link-pokedex" src={pokedex} alt="" />
        </Link>
        <Switch2 />
        <Link style={style} to="/play">
          <img className="link-pokeball" src={pokeball} alt="" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
