import React from "react";

//styles
import "./PokeCarousel.scss";

//interfaces
import { IPokemon } from "pokeapi-typescript";

interface Props {
  pokeList: IPokemon[] | null;
}

const PokeCarousel: React.FC<Props> = ({ pokeList }) => {
  return <div>{pokeList ? pokeList.map((poke) => <div>{poke.name}</div>) : null}</div>;
};

export default PokeCarousel;
