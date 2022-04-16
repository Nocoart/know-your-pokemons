import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";
import { useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import { IPokemon } from "pokeapi-typescript";
import PokeType from "../PokeType/PokeType";

//styles
import "./PokeCard.scss";

const pokeball = require("../../assets/img/pokeball.png");

//interfaces
interface Props {
  pokemon: IPokemon;
}

const PokeCard: React.FC<Props> = ({ pokemon }) => {
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
    const cookie = Cookies.get("caughtList");
    if (typeof cookie === "string") {
      const caughtList = JSON.parse(cookie);
      const caugthArray = caughtList.split(";");
      if (caugthArray.includes(pokemon.id.toString())) setIsCaught(true);
    }
  }, [renderSwitch]);

  const handleClick = () => {
    if (pathname === "/" || isCaught) return;
    else {
      const cookie = Cookies.get("caughtList");
      if (typeof cookie === "string") {
        const caughtList = JSON.parse(cookie);
        const caugthArray = caughtList.split(";");
        caugthArray.push(pokemon.id.toString());

        Cookies.remove("caughtList");
        Cookies.set("caughtList", JSON.stringify(caugthArray.join(";")));
      } else {
        Cookies.set("caughtList", JSON.stringify(pokemon.id.toString()));
      }
      setRenderSwitch(!renderSwitch);
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
        <div className="poke-name">{pathname === "/" || isCaught ? pokemon.name : "?"}</div>
        <div className="type-container">
          {pokemon.types.map((type, index) => (
            <PokeType type={type} key={pokemon.name + index.toString()} />
          ))}
        </div>
      </div>
      <img src={isCaught ? pokeball : null} alt="" className="caught-indicator" />
    </animated.div>
  );
};

export default PokeCard;
