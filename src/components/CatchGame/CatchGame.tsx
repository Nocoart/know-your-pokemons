import React, { useState, useEffect } from "react";

//styles
import "./CatchGame.scss";
import { IPokemon } from "pokeapi-typescript";
import Cookies from "js-cookie";

//interfaces
interface Props {
  currentPokemon: IPokemon;
}

const CatchGame: React.FC<Props> = ({ currentPokemon }) => {
  const [isCaught, setIsCaught] = useState(false);

  useEffect(() => {
    const checkIfCaught = () => {
      if (true) setIsCaught(true);
    };
    checkIfCaught();
  }, []);

  const handleSuccess = () => {
    if (isCaught) return;
    else {
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
      // setRenderSwitch(!renderSwitch);
    }
  };
  return (
    <div className="catch-game-container">
      <div className="opponent container">
        <div className="opponent-info">
          {currentPokemon.name} -- {isCaught ? "caught" : "not yet"}
        </div>
      </div>
    </div>
  );
};

export default CatchGame;
