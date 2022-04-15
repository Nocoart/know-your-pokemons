import { IPokemonType } from "pokeapi-typescript";
import React from "react";

//styles
import "./PokeType.scss";

//interfaces
interface Props {
  type: IPokemonType;
}

const PokeType: React.FC<Props> = ({ type }) => {
  return <div className="type">{type.type.name}</div>;
};

export default PokeType;
