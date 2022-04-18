import React, { Dispatch, SetStateAction } from "react";
import { IPokemon } from "pokeapi-typescript";

//components
import PokeCard from "../PokeCard/PokeCard";

//styles
import "./PokeCarousel.scss";

//interfaces
import Loader from "../Loader/Loader";

interface Props {
  pokeList: IPokemon[];
  setCurrentPokemon?: Dispatch<SetStateAction<IPokemon>>;
  currentPokemon?: IPokemon | undefined;
}

const PokeCarousel: React.FC<Props> = ({ pokeList, setCurrentPokemon, currentPokemon }) => {
  return (
    <div className="poke-carousel-container">
      {pokeList?.map((pokemon, index) => (
        <PokeCard
          pokemon={pokemon}
          currentPokemon={currentPokemon}
          setCurrentPokemon={setCurrentPokemon}
          key={pokemon?.id + index.toString()}
        />
      ))}
      <Loader />
    </div>
  );
};

export default PokeCarousel;
