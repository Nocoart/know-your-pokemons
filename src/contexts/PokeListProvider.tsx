import React, { useState, createContext } from "react";
import { PokeList, DispatchPokelist } from "../types/types";

//interfaces
interface Props {
  children: React.ReactChild;
}

export interface State {
  pokeList: PokeList;
  setPokeList: DispatchPokelist;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PokeListContext = createContext<State>({} as State);

export const PokeListProvider: React.FC<Props> = ({ children }) => {
  const [pokeList, setPokeList] = useState<PokeList>([] as PokeList);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <PokeListContext.Provider value={{ isLoading, setIsLoading, pokeList, setPokeList }}>
      {children}
    </PokeListContext.Provider>
  );
};
