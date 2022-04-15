import React from "react";

//styles
import "./PokeCard.scss";
import { IPokemon } from "pokeapi-typescript";
import PokeType from "../PokeType/PokeType";

//interfaces
interface Props {
  pokemon: IPokemon;
}

const PokeCard: React.FC<Props> = ({ pokemon }) => {
  return (
    <div className="poke-card-container">
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
          {pokemon.types.map((type) => (
            <PokeType type={type} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokeCard;
