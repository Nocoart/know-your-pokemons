import React, { useState, useEffect } from "react";
import Loader from "../../components/Loader/Loader";

//styles
import "./Home.scss";

import PokeAPI, { IPokemon } from "pokeapi-typescript";
import PokeCarousel from "../../components/PokeCarousel/PokeCarousel";

interface State {
  pokeList: IPokemon[] | null;
}

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [pokeList, setPokeList] = useState<State["pokeList"]>(null);

  useEffect(() => {
    const fetchData = async () => {
      const dataArray: State["pokeList"] = [];
      try {
        for (let i = 1; i < 152; i++) {
          const result = await PokeAPI.Pokemon.resolve(i);
          dataArray.push(result);
        }
        setPokeList(dataArray);
        setIsLoading(false);
        console.log(dataArray);
      } catch (error: any) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  return isLoading && pokeList ? (
    <Loader />
  ) : (
    <div className="home-page-container">
      <h1>Pokedex Complet</h1>
      <PokeCarousel pokeList={pokeList} />
    </div>
  );
};

export default Home;
