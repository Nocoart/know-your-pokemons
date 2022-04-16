import React, { useState, createContext } from "react";

//interfaces

interface Props {
  children: React.ReactChild;
}
interface State {
  caughtList: number[];
  setCaughtList: React.Dispatch<React.SetStateAction<number[]>>;
}

export const CaugthListContext = createContext<State>({} as State);

export const CaugthListProvider: React.FC<Props> = ({ children }) => {
  const [caughtList, setCaughtList] = useState<number[]>([] as number[]);

  return <CaugthListContext.Provider value={{ setCaughtList, caughtList }}>{children}</CaugthListContext.Provider>;
};
