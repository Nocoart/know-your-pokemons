import React from "react";

//styles
import "./PlayerDialog.scss";
import { IPokemon } from "pokeapi-typescript";

//interfaces
interface Props {
  isCaught: boolean;
  handleSuccess: () => void;
  currentPokemon: IPokemon;
}

const PlayerDialog: React.FC<Props> = ({ isCaught, handleSuccess, currentPokemon }) => {
  return <div className="player-dialog">{isCaught ? "" : ""}</div>;
};

export default PlayerDialog;
