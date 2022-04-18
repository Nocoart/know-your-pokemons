import React, { useState, useEffect } from "react";

//styles
import "./CatchGame.scss";
import { IPokemon } from "pokeapi-typescript";
import Cookies from "js-cookie";
import { checkIfAlreadyCaught } from "../../utils/checkIfAlreadyCaught";

//interfaces
interface Props {
  currentPokemon: IPokemon;
  setCurrentPokemon: React.Dispatch<React.SetStateAction<IPokemon>>;
}

const CatchGame: React.FC<Props> = ({ currentPokemon, setCurrentPokemon }) => {
  const [isCaught, setIsCaught] = useState(false);

  useEffect(() => {
    if (checkIfAlreadyCaught(currentPokemon)) setIsCaught(true);
  }, []);

  const handleSuccess = () => {
    const cookie = Cookies.get("caughtList");
    if (typeof cookie === "string") {
      const caughtList = JSON.parse(cookie);
      const caugthArray = caughtList.split(";");
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
      <div className="opponent container">
        <div className="opponent-info">
          {currentPokemon.name} -- {isCaught ? "caught" : "not yet"}
        </div>
      </div>
      <button onClick={handleSuccess}>catch</button>
    </div>
  );
};

export default CatchGame;
