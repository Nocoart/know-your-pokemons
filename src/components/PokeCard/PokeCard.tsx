import React from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";

//styles
import "./PokeCard.scss";
import { IPokemon } from "pokeapi-typescript";
import PokeType from "../PokeType/PokeType";

//interfaces
interface Props {
  pokemon: IPokemon;
}

const PokeCard: React.FC<Props> = ({ pokemon }) => {
  const { ref: card, inView } = useInView({ threshold: 0 });
  const props = useSpring({
    to: { opacity: inView ? 1 : 0, x: inView ? 0 : -50 },
    from: { opacity: 0, x: -50 },
    config: { friction: 22 },
  });

  return (
    <animated.div className="poke-card-container" ref={card} style={props}>
      <div className="thumb-container">
        <img
          className="thumb"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
          alt=""
        />
      </div>
      <div className="details-container">
        <div className="poke-name">{pokemon.name}</div>
        <div className="type-container">
          {pokemon.types.map((type, index) => (
            <PokeType type={type} key={pokemon.name + index.toString()} />
          ))}
        </div>
      </div>
    </animated.div>
  );
};

export default PokeCard;
