import { IPokemonType } from "pokeapi-typescript";
import React from "react";

//styles
import "./PokeType.scss";

//interfaces
interface Props {
  type: IPokemonType;
}

const PokeType: React.FC<Props> = ({ type }) => {
  const getBackground = (typeName: string): string => {
    let color: string = "";
    switch (typeName) {
      case "grass":
        color = "var(--grass)";
        break;
      case "fire":
        color = "var(--fire)";
        break;
      case "water":
        color = "var(--water)";
        break;
      case "electric":
        color = "var(--electric)";
        break;
      case "flying":
        color = "var(--flying)";
        break;
      case "ground":
        color = "var(--ground)";
        break;
      case "rock":
        color = "var(--rock)";
        break;
      case "psychic":
        color = "var(--psychic)";
        break;
      case "dragon":
        color = "var(--dragon)";
        break;
      case "steel":
        color = "var(--steel)";
        break;
      case "dark":
        color = "var(--dark)";
        break;
      case "ghost":
        color = "var(--ghost)";
        break;
      case "fighting":
        color = "var(--fighting)";
        break;
      case "ice":
        color = "var(--ice)";
        break;
      case "poison":
        color = "var(--poison)";
        break;
      case "normal":
        color = "var(--normal)";
        break;
      case "bug":
        color = "var(--bug)";
        break;
      case "fairy":
        color = "var(--fairy)";
        break;
    }
    return color;
  };

  return (
    <div className="type" style={{ backgroundColor: getBackground(type.type.name) }}>
      {type.type.name}
    </div>
  );
};

export default PokeType;
