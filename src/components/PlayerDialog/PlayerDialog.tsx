import React from "react";
import Typewriter from "typewriter-effect";

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
    else return "Oh no, your level is too low for now, try catching the weakest ones";
  };

  return (
    <>
      <div className="player-dialog">
        <Typewriter
          options={{ delay: 20, cursor: "" }}
          onInit={(typewriter) => {
            typewriter.pauseFor(2000).typeString(generateDialog()).start();
          }}
        />
      </div>
    </>
  );
};

export default PlayerDialog;
