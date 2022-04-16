import React, { useEffect, useContext } from "react";
import Loader from "../../components/Loader/Loader";
import { PokeListContext } from "../../contexts/PokeListProvider";
import { fetchPokemonList } from "../../utils/fetchPokemonList";

//styles
import "./Home.scss";

import PokeCarousel from "../../components/PokeCarousel/PokeCarousel";

const Home: React.FC = () => {
  const { pokeList, setPokeList, isLoading, setIsLoading } = useContext(PokeListContext);

  useEffect(() => {
    if (pokeList.length === 0) fetchPokemonList(setPokeList, setIsLoading);
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <div className=" container">
      <h1>Pokedex</h1>
      <PokeCarousel pokeList={pokeList} />
    </div>
  );
};

export default Home;
