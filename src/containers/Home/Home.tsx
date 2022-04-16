import React, { useState, useEffect, useContext } from "react";
import Loader from "../../components/Loader/Loader";
import { PokeListContext } from "../../contexts/PokeListProvider";

//styles
import "./Home.scss";

import PokeAPI, { IPokemon } from "pokeapi-typescript";
import PokeCarousel from "../../components/PokeCarousel/PokeCarousel";

interface State {
  pokeList: IPokemon[];
  setPokeList: React.Dispatch<React.SetStateAction<{ pokeList: IPokemon[] }>>;
}

const Home: React.FC = () => {
  const { isLoading, setIsLoading, pokeList, setPokeList } = useContext(PokeListContext);

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
    if (pokeList.length === 0) fetchData();
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="home-page-container container">
      <h1>Complete Pokedex</h1>
      <PokeCarousel pokeList={pokeList} />
    </div>
  );
};

export default Home;
