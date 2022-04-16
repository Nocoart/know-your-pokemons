import { IPokemonType } from "pokeapi-typescript";
import React from "react";

//styles
import "./PokeType.scss";
import { getTypeColor } from "../../utils/GetTypeColor";

//interfaces
interface Props {
  type: IPokemonType;
}

const PokeType: React.FC<Props> = ({ type }) => {
  return (
    <div className="type" style={{ backgroundColor: getTypeColor(type.type.name) }}>
      {type.type.name}
    </div>
  );
};

export default PokeType;
