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
  success?: "yes" | "no" | "wait";
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const PokeCarousel: React.FC<Props> = ({ pokeList, setCurrentPokemon, success, setIsOpen }) => {
  return (
    <div className="poke-carousel-container">
      {pokeList?.map((pokemon, index) => (
        <PokeCard
          pokemon={pokemon}
          success={success}
          setCurrentPokemon={setCurrentPokemon}
          setIsOpen={setIsOpen}
          key={pokemon?.id + index.toString()}
        />
      ))}
      <Loader />
    </div>
  );
};

export default PokeCarousel;
