import React, { useEffect, useState, useContext } from "react";
import Map from "../../components/Map/Map";
import { PokeListContext } from "../../contexts/PokeListProvider";
import { fetchPokemonList } from "../../utils/fetchPokemonList";
import { IPokemon } from "pokeapi-typescript";

import Modal from "../../components/Modal/Modal";
import CatchGame from "../../components/CatchGame/CatchGame";
//styles
import "./Play.scss";
import { getAreaPokemon } from "../../utils/getAreaPokemon";
import PokeCarousel from "../../components/PokeCarousel/PokeCarousel";
import Loader from "../../components/Loader/Loader";

const Play = () => {
  const [currentArea, setCurrentArea] = useState("");
  const [pokeInArea, setPokeInArea] = useState([] as IPokemon[]);
  const [randomPokeList, setRandomPokeList] = useState<IPokemon[]>([] as IPokemon[]);
  const [currentPokemon, setCurrentPokemon] = useState<IPokemon>({} as IPokemon);

  const { pokeList, setPokeList, isLoading, setIsLoading } = useContext(PokeListContext);

  //fetch all pokemons
  useEffect(() => {
    if (pokeList.length === 0) fetchPokemonList(setPokeList, setIsLoading);
  }, []);

  //filter according to types
  useEffect(() => {
    if (pokeList.length && currentArea) {
      getAreaPokemon(currentArea, setPokeInArea, pokeList);
    }
  }, [currentArea]);

  //get a random selecction of 10
  useEffect(() => {
    const randomIndexes: number[] = [];
    for (let i = 0; i < 10; i++) {
      const index = Math.floor(Math.random() * pokeInArea.length + 1);
      randomIndexes.push(index);
    }
    console.log("randomIndexes nombres", randomIndexes.length);

    const randomPokeInArea: IPokemon[] = [];
    for (let i = 0; i < randomIndexes.length; i++) {
      randomPokeInArea.push(pokeInArea[randomIndexes[i]]);
    }
    if (randomPokeInArea.length) {
      setRandomPokeList(randomPokeInArea);
    }
  }, [pokeInArea]);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="container">
      <h1>Catch'em All</h1>
      <div className="current-position">
        {currentArea ? `Currently in " ${currentArea.toUpperCase()} "` : "Choose an area on the map"}
      </div>
      <Map setCurrentArea={setCurrentArea} />
      <PokeCarousel pokeList={randomPokeList} setCurrentPokemon={setCurrentPokemon} currentPokemon={currentPokemon} />
      {currentPokemon.id ? (
        <Modal setCurrentPokemon={setCurrentPokemon}>
          <CatchGame currentPokemon={currentPokemon} setCurrentPokemon={setCurrentPokemon} />
        </Modal>
      ) : (
        ""
      )}
    </div>
  );
};

export default Play;
