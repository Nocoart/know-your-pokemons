import React, { useEffect, useState, useContext } from "react";
import Map from "../../components/Map/Map";
import { PokeListContext } from "../../contexts/PokeListProvider";
import { fetchPokemonList } from "../../utils/fetchPokemonList";
import { IPokemon } from "pokeapi-typescript";

//styles
import "./Play.scss";
import { getAreaPokemon } from "../../utils/getAreaPokemon";
import PokeCarousel from "../../components/PokeCarousel/PokeCarousel";
import Loader from "../../components/Loader/Loader";

const Play = () => {
  const [currentArea, setCurrentArea] = useState("");
  const [pokeInArea, setPokeInArea] = useState([] as IPokemon[]);
  const { pokeList, setPokeList, isLoading, setIsLoading } = useContext(PokeListContext);

  useEffect(() => {
    if (pokeList.length === 0) fetchPokemonList(setPokeList, setIsLoading);
  }, []);

  useEffect(() => {
    if (pokeList.length && currentArea) {
      setIsLoading(true);
      getAreaPokemon(currentArea, setPokeInArea, pokeList);
    }
    setIsLoading(false);
  }, [currentArea]);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="container">
      <h1>Catch'em All</h1>
      <div className="current-position">
        {currentArea ? `Currently in " ${currentArea.toUpperCase()} "` : "Choose an area on the map"}
      </div>
      <Map setCurrentArea={setCurrentArea} />
      <PokeCarousel pokeList={pokeInArea} />
    </div>
  );
};

export default Play;
