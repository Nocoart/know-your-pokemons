import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { IPokemon } from "pokeapi-typescript";
import Cookies from "js-cookie";

//components
import { checkIfAlreadyCaught } from "../../utils/checkIfAlreadyCaught";
import PlayerDialog from "../PlayerDialog/PlayerDialog";

//styles
import "./CatchGame.scss";

//assets
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

  const { base_experience } = currentPokemon;
  const pokeMinLvl = (base_experience / 340) * 90;
  const pokeMaxLvl = (base_experience * 100) / 340;
  const [oponnentLvl, setOponnentLvl] = useState(0);
  const [playerLvl, setPlayerLvl] = useState(1);

  useEffect(() => {
    if (checkIfAlreadyCaught(currentPokemon)) {
      setIsCaught(true);
    }

    //set up oponent lvl
    const oponnentLvl = Math.floor(Math.random() * (pokeMaxLvl - pokeMinLvl) + pokeMinLvl);

    setOponnentLvl(oponnentLvl > 99 ? 99 : oponnentLvl < 1 ? 1 : oponnentLvl);

    //update player lvl
    const cookie = Cookies.get("caughtList");
    let playerLvl: number = 1;
    if (typeof cookie === "string") {
      const caughtList = JSON.parse(cookie);
      const caugthArray = caughtList.split(";");
      playerLvl = Math.floor((caugthArray.length / 151) * 100);
      setPlayerLvl(playerLvl);
    }

    //update catchability
    if (playerLvl + 20 >= oponnentLvl) setIsCatchable(true);
    else setIsCatchable(false);
  }, []);

  //check success
  const handleSuccess = (guess: string) => {
    if (guess.toUpperCase() !== currentPokemon.name.toUpperCase()) {
      window.alert("oh no you missed it");
      setCurrentPokemon({} as IPokemon);
      return;
    }

    //manage caught list
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
    window.alert("Congrats! You got it !!!");
  };

  //animating game
  const opponentAnim = useSpring({
    from: { opacity: 0, x: -1000 },
    to: { opacity: 1, x: 0 },
    config: { friction: 46 },
  });
  const playerAnim = useSpring({
    from: { opacity: 0, x: 350 },
    to: { opacity: 1, x: 0 },
    config: { friction: 46 },
    delay: 1000,
  });

  return (
    <div className="catch-game-container">
      <animated.div className="opponent-container" style={opponentAnim}>
        <div className="opponent-info">
          <div className="info-top">
            <div className="opponent-name">{isCaught ? currentPokemon.name : "?"}</div>
            <div className="oppnonent-level">
              <span className="level">Lv </span>
              {oponnentLvl}
            </div>
          </div>

          <div className="opponent-info-bottom">
            <img
              src={pokeball}
              alt=""
              className="caught-indicator"
              style={{ filter: isCaught ? "" : "grayscale(1)" }}
            />
            <img src={hpBar} alt="" className="hp-bar" />
          </div>
        </div>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${currentPokemon?.id}.svg`}
          alt=""
        />
      </animated.div>

      <animated.div className="player-container" style={playerAnim}>
        <img src={ash} alt="" className="player-img" />
        <div className="player-info">
          <div className="info-top">
            <div className="player-name">Ash Ketchum </div>
            <div className="player-level">
              <span className="level">Lv </span>
              {playerLvl}
            </div>
          </div>
          <PlayerDialog isCaught={isCaught} isCatchable={isCatchable} />
          {isCatchable && !isCaught && (
            <div className="input-section">
              <input type="text" value={guess} onChange={(e) => setGuess(e.target.value)} placeholder="write here" />
              <button onClick={() => handleSuccess(guess)}>
                <img src={pokeball} alt="" className="caught-indicator" />
              </button>
            </div>
          )}
        </div>
      </animated.div>
    </div>
  );
};

export default CatchGame;
