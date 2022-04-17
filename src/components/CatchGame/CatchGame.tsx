import React from "react";

//styles
import "./CatchGame.scss";
import { IPokemon } from "pokeapi-typescript";

//interfaces
interface Props {
  currentPokemon: IPokemon;
}

const CatchGame: React.FC<Props> = ({ currentPokemon }) => {
  return <div className="catch-game-container">coucou</div>;
};

export default CatchGame;
