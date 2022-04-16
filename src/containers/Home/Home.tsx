import React, { useEffect, useContext } from "react";
import Loader from "../../components/Loader/Loader";
import { PokeListContext } from "../../contexts/PokeListProvider";
import { FetchPokemonList } from "../../utils/FetchPokemonList";

//styles
import "./Home.scss";

import PokeCarousel from "../../components/PokeCarousel/PokeCarousel";

const Home: React.FC = () => {
  const { pokeList, setPokeList, isLoading, setIsLoading } = useContext(PokeListContext);

  useEffect(() => {
    if (pokeList.length === 0) FetchPokemonList(setPokeList, setIsLoading);
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
