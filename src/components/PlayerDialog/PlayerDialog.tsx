import React, { useState } from "react";
import Typed from "react-typed";

//styles
import "./PlayerDialog.scss";

//interfaces
interface Props {
  isCaught: boolean;
  isCatchable: boolean;
}

const PlayerDialog: React.FC<Props> = ({ isCaught, isCatchable }) => {
  const generateDialog = (): string => {
    if (isCaught) return "You already caught this one, try catching new ones to level up ";
    if (isCatchable) return "Hey! you can catch this one, but what it's name again ?";
    else return "Oh no, your level is too low for now, try catching the ones that comes before in the pokedex";
  };

  return (
    <>
      <div className="player-dialog">
        <Typed strings={[generateDialog()]} typeSpeed={20} startDelay={1500} />
      </div>
    </>
  );
};

export default PlayerDialog;
