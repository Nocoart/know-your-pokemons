import React, { Dispatch, SetStateAction } from "react";
import { IPokemon } from "pokeapi-typescript";

//components
import PokeCard from "../PokeCard/PokeCard";
import Loader from "../Loader/Loader";

//styles
import "./PokeCarousel.scss";

//interfaces
import { PokeList, DispatchPoke } from "../../types/types";

interface Props {
  pokeList: PokeList;
  setCurrentPokemon?: DispatchPoke;
  success?: "yes" | "no" | "wait";
  setIsOpen?: Dispatch<React.SetStateAction<boolean>>;
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
