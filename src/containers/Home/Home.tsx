import axios from "axios";
import { useState, useEffect } from "react";
import Loader from "../../components/Loader/Loader";

//styles
import "./Home.scss";

interface Pokemon {}

const Home = () => {
  const [pokemonList, setPokemonList] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataArray = [];
        for (let i = 1; i < 151; i++) {
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
          const { data } = response;
          dataArray.push(data);
        }
        // const response = await axios.get("https://pokeapi.co/api/v2/pokemon?offset=151&limit=151");
        // const { results } = response.data;
        // const dataArray = [...results];
        // dataArray.map(async (el: { name: string; url: string }, index: number) => {
        //   const response = await axios.get(el.url);
        //   dataArray[index].details = response;
        // });
        console.log(dataArray);
        setPokemonList(dataArray);
        setIsLoading(false);
      } catch (error: any) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);
  return isLoading ? <Loader /> : <div>this will be a pokedex</div>;
};

export default Home;
