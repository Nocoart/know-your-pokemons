import React, { useState, createContext } from "react";
import { IPokemon } from "pokeapi-typescript";

//interfaces
interface Props {
  children: React.ReactChild;
}

interface State {
  pokeList: IPokemon[];
  setPokeList: React.Dispatch<React.SetStateAction<IPokemon[]>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PokeListContext = createContext<State>({} as State);

export const PokeListProvider: React.FC<Props> = ({ children }) => {
  const [pokeList, setPokeList] = useState<State["pokeList"]>([] as State["pokeList"]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <PokeListContext.Provider value={{ isLoading, setIsLoading, pokeList, setPokeList }}>
      {children}
    </PokeListContext.Provider>
  );
};
