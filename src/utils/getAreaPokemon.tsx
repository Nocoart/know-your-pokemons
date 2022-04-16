import React from "react";
import { IPokemon } from "pokeapi-typescript";

//styles

type setPokeInArea = React.Dispatch<React.SetStateAction<IPokemon[]>>;

interface State {
  getAreaPoke: (currentArea: string, setPokeInArea: setPokeInArea, pokeList: IPokemon[]) => void;
  getRightType: (currentArea: string) => string[];
}

const getRightType: State["getRightType"] = (area) => {
  let types: string[] = [""];
  switch (area) {
    case "plain":
      types = ["grass", "bug", "poison", "normal", "fairy", "electric"];
      break;
    case "mountain":
      types = ["ice", "fighting", "psychic", "dragon", "steel"];
      break;
    case "sea":
      types = ["water"];
      break;
    case "cave":
      types = ["fire", "ground", "rock", "ghost", "dark"];
      break;
    case "sky":
      types = ["flying"];
      break;
  }
  return types;
};

export const getAreaPokemon: State["getAreaPoke"] = (currentArea, setPokeInArea, pokeList) => {
  const pokeArray: IPokemon[] = [];

  pokeList.forEach((poke) => {
    poke.types.forEach((type) => {
      if (!pokeArray.includes(poke) && getRightType(currentArea).includes(type.type.name)) {
        pokeArray.push(poke);
      }
    });
  });

  setPokeInArea(pokeArray);
};
