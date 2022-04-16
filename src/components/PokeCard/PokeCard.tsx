import React, { useContext } from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";
import { useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import { IPokemon } from "pokeapi-typescript";
import PokeType from "../PokeType/PokeType";

//styles
import "./PokeCard.scss";
import { CaugthListContext } from "../../contexts/CaugthListProvider";

const pokeball = require("../../assets/img/pokeball.png");

//interfaces
interface Props {
  pokemon: IPokemon;
}

const PokeCard: React.FC<Props> = ({ pokemon }) => {
  const { pathname } = useLocation();
  const { caughtList, setCaughtList } = useContext(CaugthListContext);

  const { ref: card, inView } = useInView({ threshold: 0 });

  const props = useSpring({
    to: { opacity: inView ? 1 : 0, x: inView ? 0 : -50 },
    from: { opacity: 0, x: -50 },
    config: { friction: 21 },
  });

  const checkCaught = (): boolean => (caughtList.includes(pokemon.id) ? true : false);
  const handleClick = (): void => {
    if (caughtList.includes(pokemon.id)) return;
    else {
      const copy = [...caughtList];
      copy.push(pokemon.id);
      setCaughtList(copy);
    }
  };

  return (
    <animated.div className="poke-card-container" ref={card} style={props} onClick={handleClick}>
      <div className="thumb-container">
        <img
          className="thumb"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
          alt=""
        />
      </div>
      <div className="details-container">
        <div className="poke-name">{pathname === "/" || checkCaught() ? pokemon.name : "?"}</div>
        <div className="type-container">
          {pokemon.types.map((type, index) => (
            <PokeType type={type} key={pokemon.name + index.toString()} />
          ))}
        </div>
      </div>
      <img src={checkCaught() ? pokeball : null} alt="" className="caught-indicator" />
    </animated.div>
  );
};

export default PokeCard;
