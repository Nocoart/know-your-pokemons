import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";
import { useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import { IPokemon } from "pokeapi-typescript";
import PokeType from "../PokeType/PokeType";
import { checkIfAlreadyCaught } from "../../utils/checkIfAlreadyCaught";

//components

//styles
import "./PokeCard.scss";

const pokeball = require("../../assets/img/pokeball.png");

//interfaces
interface Props {
  pokemon: IPokemon;
  setCurrentPokemon?: Dispatch<SetStateAction<IPokemon>>;
  currentPokemon?: IPokemon;
}

const PokeCard: React.FC<Props> = ({ pokemon, setCurrentPokemon, currentPokemon }) => {
  const { pathname } = useLocation();
  const [isCaught, setIsCaught] = useState(false);
  const [renderSwitch, setRenderSwitch] = useState(false);

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
  }, [currentPokemon]);

  //when successfully catching pokemon updates cookies

  const handleClick = () => {
    if (setCurrentPokemon) setCurrentPokemon(pokemon);
  };

  return (
    pokemon && (
      <animated.div className="poke-card-container" ref={card} style={props} onClick={handleClick}>
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
