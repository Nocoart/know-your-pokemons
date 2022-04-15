import React from "react";

//styles
import "./PokeCarousel.scss";

//interfaces
import { IPokemon } from "pokeapi-typescript";
import Loader from "../Loader/Loader";
import PokeCard from "../PokeCard/PokeCard";

interface Props {
  pokeList: IPokemon[] | null;
}

const PokeCarousel: React.FC<Props> = ({ pokeList }) => {
  return (
    <div className="poke-carousel">
      {pokeList ? pokeList.map((pokemon) => <PokeCard pokemon={pokemon} key={pokemon.id} />) : <Loader />}
    </div>
  );
};

export default PokeCarousel;
