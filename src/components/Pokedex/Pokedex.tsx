import { useEffect } from "react";

//styles
import "./Pokedex.scss";

//utils, services & context
import getPlayerLvl from "../../utils/getPlayerLevel";
import getNumberCaught from "../../utils/getNumberCaught";

const pokedexImg = require("../../assets/img/pokedex.png");
const ash = require("../../assets/img/ash.png");

const Pokedex: React.FC = () => {
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
