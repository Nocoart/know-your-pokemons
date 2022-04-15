import axios, { Canceler } from "axios";
import { useState, useEffect } from "react";
import Loader from "../../components/Loader/Loader";

//styles
import "./Home.scss";

export interface Pokemon {
  entry_number: number;
  pokemon_species: { name: string; url: string };
  details: {};
}
const Home: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      let cancelToken: Canceler;

      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokedex/2/", {
          cancelToken: new axios.CancelToken((c) => (cancelToken = c)),
        });

        const dataArray: Pokemon[] = response.data.pokemon_entries;
        console.log(dataArray);

        dataArray.forEach(async (el) => {
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${el.entry_number}/`, {
            cancelToken: new axios.CancelToken((c) => (cancelToken = c)),
          });
          dataArray[el.entry_number - 1].details = response.data;
        });

        setPokemonList(dataArray);
        setIsLoading(false);
      } catch (error: any) {
        console.log(error.message);
      }

      return () => cancelToken();
    };

    fetchData();
  }, []);
  return isLoading ? (
    <Loader />
  ) : (
    <div>
      {pokemonList.map((pokemon, index: number) => {
        return <div key={index}>{pokemon.pokemon_species.name}</div>;
      })}
    </div>
  );
};

export default Home;
