import { IPokemon } from "pokeapi-typescript";

export type Poke = IPokemon;
export type DispatchPoke = React.Dispatch<React.SetStateAction<Poke>>;
export type PokeList = IPokemon[];
export type DispatchPokelist = React.Dispatch<React.SetStateAction<PokeList>>;
// export type booleanState =

export interface PokeInterface {
  pokemon: Poke;
  setCurrentPokemon?: DispatchPoke;
}
