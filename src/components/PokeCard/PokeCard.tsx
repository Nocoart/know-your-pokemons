import React from "react";

//styles
import "./PokeCard.scss";
import { IPokemon } from "pokeapi-typescript";

//interfaces
interface Props {
  pokemon: IPokemon;
}

const PokeCard: React.FC<Props> = ({ pokemon }) => {
  return <div className="poke-card">{pokemon.name}</div>;
};

export default PokeCard;
