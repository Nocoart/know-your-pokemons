import React, { useEffect } from "react";

//styles
import "./Pokedex.scss";
import getPlayerLvl from "../../utils/getPlayerLevel";
import getNumberCaught from "../../utils/getNumberCaught";

const pokedexImg = require("../../assets/img/pokedex.png");
const ash = require("../../assets/img/ash.png");

//interfaces
interface Props {}

const Pokedex: React.FC<Props> = () => {
  useEffect(() => {}, []);
  return (
    <div className="pokedex">
      <img src={pokedexImg} alt="pokedex" className="pokedex-img" />
      <img src={ash} alt="ash" className="ash" />
      <div className="description">
        <p className="level">Level {getPlayerLvl()}</p>
        <p className="caught-number">Attrapés : {getNumberCaught()}/151</p>
      </div>
    </div>
  );
};

export default Pokedex;
