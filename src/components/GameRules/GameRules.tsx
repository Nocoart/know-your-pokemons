import React from "react";
import Typewriter from "typewriter-effect";

//styles
import "./GameRules.scss";

//interfaces
interface Props {}

const rules = [
  "In this game your goal is to catch as much pokemonn as possible, it makes you level up.",
  "There is two pages :",
  "To go to the pokedex, click on the pokedex on the left.",
  "To go to the map and start catching pokemons click on the pokeball.",
  "Depending on the region you choose on the map a random set of pokemon will appear, if your level is too far from the pokemon level you'll not be able to catch it.",
  "Change area on the map to get a new set of pokemons.",
  "To catch a pokemon you must enter its exact name in the input field then click the pokeball",
];

const GameRules: React.FC<Props> = () => {
  return (
    <div className="rules-container">
      {rules.map((str: string, index: number) => (
        <Typewriter
          key={str}
          options={{ delay: 1, cursor: "" }}
          onInit={(typewriter) => {
            typewriter
              .pauseFor(index > 4 ? index * 2500 : index * 2000)
              .typeString(str)
              .start();
          }}
        />
      ))}
    </div>
  );
};

export default GameRules;
