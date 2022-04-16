import React, { useState, useEffect, createContext } from "react";
import { IPokemon } from "pokeapi-typescript";

//interfaces
interface Props {
  children: React.ReactChild;
}

interface State {
  pokeList: IPokemon[] | null;
}

// const pokemonListContext = createContext()

const PokemonListProvider: React.FC<Props> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [pokeList, setPokeList] = useState<State["pokeList"]>([] as State["pokeList"]);
  return <div></div>;
};

export default PokemonListProvider;
