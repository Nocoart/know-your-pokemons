import PokeAPI, { IPokemon } from "pokeapi-typescript";

interface Props {
  fn: (
    setPokeList: React.Dispatch<React.SetStateAction<IPokemon[]>>,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>;
}

export const FetchPokemonList: Props["fn"] = async (setPokeList, setIsLoading): Promise<void> => {
  setIsLoading(true);
  const dataArray: IPokemon[] = [];
  try {
    for (let i = 1; i < 152; i++) {
      const response = await PokeAPI.Pokemon.resolve(i);
      dataArray.push(response);
    }
    setPokeList(dataArray);
    setIsLoading(false);
    console.log(dataArray);
  } catch (error: any) {
    console.log(error.message);
  }
};
