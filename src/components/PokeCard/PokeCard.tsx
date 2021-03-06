import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";
import { useLocation } from "react-router-dom";
import PokeType from "../PokeType/PokeType";

//components
import checkIfAlreadyCaught from "../../utils/checkIfAlreadyCaught";

//styles
import "./PokeCard.scss";

//interfaces
import { Poke, DispatchPoke } from "../../types/types";

interface Props {
  pokemon: Poke;
  setCurrentPokemon?: DispatchPoke;
  success?: "yes" | "no" | "wait";
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

//assets
const pokeball = require("../../assets/img/pokeball.png");

const PokeCard: React.FC<Props> = ({ pokemon, setCurrentPokemon, success, setIsOpen }) => {
  const { pathname } = useLocation();
  const [isCaught, setIsCaught] = useState(false);

  // slide-in animation on intersection
  const { ref: card, inView } = useInView({ threshold: 0 });
  const props = useSpring({
    to: { opacity: inView ? 1 : 0, x: inView ? 0 : -50 },
    from: { opacity: 0, x: -50 },
    config: { friction: 21 },
  });

  useEffect(() => {
    //controll isCaught
    if (checkIfAlreadyCaught(pokemon)) setIsCaught(true);
  }, [success]);

  const handleClick = () => {
    if (setCurrentPokemon) setCurrentPokemon(pokemon);
    if (pathname === "/play" && setIsOpen) setIsOpen(true);
  };

  return (
    pokemon && (
      <animated.div
        className="poke-card-container"
        ref={card}
        style={{ ...props, cursor: pathname === "/play" ? "pointer" : "" }}
        onClick={handleClick}
      >
        <div className="thumb-container">
          <img
            className="thumb"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon?.id}.svg`}
            alt=""
          />
        </div>
        <div className="details-container">
          <img src={isCaught ? pokeball : null} alt="" className="caught-indicator" />
          <div className="poke-name">{pathname === "/" || isCaught ? pokemon.name : "?"}</div>
          <div className="type-container">
            {pokemon.types.map((type, index) => (
              <PokeType type={type} key={pokemon.name + index.toString()} />
            ))}
          </div>
        </div>
      </animated.div>
    )
  );
};

export default PokeCard;
