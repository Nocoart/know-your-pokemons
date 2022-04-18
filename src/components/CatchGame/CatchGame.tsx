import React, { useState, useEffect } from "react";

//styles
import "./CatchGame.scss";
import { IPokemon } from "pokeapi-typescript";
import Cookies from "js-cookie";
import { checkIfAlreadyCaught } from "../../utils/checkIfAlreadyCaught";
import PlayerDialog from "../PlayerDialog/PlayerDialog";

const pokeball = require("../../assets/img/pokeball.png");
const ash = require("../../assets/img/ash.png");
const hpBar = require("../../assets/img/hp-bar.png");

//interfaces
interface Props {
  currentPokemon: IPokemon;
  setCurrentPokemon: React.Dispatch<React.SetStateAction<IPokemon>>;
}

const CatchGame: React.FC<Props> = ({ currentPokemon, setCurrentPokemon }) => {
  const [isCaught, setIsCaught] = useState(false);
  const [isCatchable, setIsCatchable] = useState(false);
  const [guess, setGuess] = useState("");

  const { id } = currentPokemon;
  const pokeMinLvl = (id / 151) * 80;
  const pokeMaxLvl = (id * 110) / 151;
  const [oponnentLvl, setOponnentLvl] = useState(0);
  const [playerLvl, setPlayerLvl] = useState(0);

  useEffect(() => {
    if (checkIfAlreadyCaught(currentPokemon)) setIsCaught(true);

    //set up oponent lvl
    const oponnentLvl = Math.floor(Math.random() * (pokeMaxLvl - pokeMinLvl) + pokeMinLvl);
    setOponnentLvl(oponnentLvl > 99 ? 99 : oponnentLvl);

    //update player lvl
    const cookie = Cookies.get("caughtList");
    let playerLvl: number = 0;
    if (typeof cookie === "string") {
      const caughtList = JSON.parse(cookie);
      const caugthArray = caughtList.split(";");
      playerLvl = Math.floor((caugthArray.length / 151) * 100);
      setPlayerLvl(playerLvl);
    }

    //update catchability
    if (playerLvl + 10 >= oponnentLvl) setIsCatchable(true);
  }, []);

  const handleSuccess = (guess: string) => {
    //check success
    if (guess.toUpperCase() !== currentPokemon.name.toUpperCase()) {
      window.alert("oh no you missed it");
      setCurrentPokemon({} as IPokemon);
      return;
    }

    const cookie = Cookies.get("caughtList");
    if (typeof cookie === "string") {
      const caughtList = JSON.parse(cookie);
      const caugthArray = caughtList.split(";");
      if (caugthArray.includes(currentPokemon.id.toString())) return;
      caugthArray.push(currentPokemon.id.toString());

      Cookies.remove("caughtList");
      Cookies.set("caughtList", JSON.stringify(caugthArray.join(";")));
    } else {
      Cookies.set("caughtList", JSON.stringify(currentPokemon.id.toString()));
    }
    setCurrentPokemon({} as IPokemon);
  };

  return (
    <div className="catch-game-container">
      <div className="opponent-container">
        <div className="opponent-info">
          <div className="info-top">
            <div className="opponent-name">{isCaught ? currentPokemon.name : "?"}</div>
            <div className="oppnonent-level">
              <span className="level">Lv </span>
              {oponnentLvl}
            </div>
          </div>

          <div className="opponent-info-bottom">
            {isCaught && <img src={pokeball} alt="" className="caught-indicator" />}
            <img src={hpBar} alt="" className="hp-bar" />
          </div>
        </div>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${currentPokemon?.id}.svg`}
          alt=""
        />
      </div>

      <div className="player-container">
        <img src={ash} alt="" className="player-img" />
        <div className="player-info">
          <div className="info-top">
            <div className="player-name">Ash Ketchum </div>
            <div className="player-level">
              <span className="level">Lv </span>
              {playerLvl}
            </div>
          </div>
          <PlayerDialog
            isCaught={isCaught}
            handleSuccess={handleSuccess}
            currentPokemon={currentPokemon}
            isCatchable={isCatchable}
          />
          {isCatchable && !isCaught && (
            <div className="input-section">
              <input type="text" value={guess} onChange={(e) => setGuess(e.target.value)} autoFocus={true} />
              <button onClick={() => handleSuccess(guess)}>catch</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CatchGame;
