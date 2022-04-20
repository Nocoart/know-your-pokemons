import { useEffect, useState, useContext } from "react";
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
  const [isOpen, setIsOpen] = useState(false);

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
    const randomPokeInArea: IPokemon[] = [];

    for (let i = 0; i < 10; i++) {
      randomPokeInArea.push(pokeInArea[Math.floor(Math.random() * pokeInArea.length)]);
    }
    if (randomPokeInArea.length) {
      setRandomPokeList(randomPokeInArea);
    }
  }, [pokeInArea]);

  return isLoading ? (
    <div className="loader-container">
      <p>Pika is loading your page...</p>
      <Loader />
    </div>
  ) : (
    <div className="container">
      <h1>Catch'em All</h1>
      <div className="current-position">
        {currentArea ? `Currently in " ${currentArea.toUpperCase()} "` : "Choose an area on the map"}
      </div>
      <Map setCurrentArea={setCurrentArea} />
      <PokeCarousel
        pokeList={randomPokeList}
        setCurrentPokemon={setCurrentPokemon}
        currentPokemon={currentPokemon}
        setIsOpen={setIsOpen}
      />
      {isOpen ? (
        <Modal setIsOpen={setIsOpen}>
          <CatchGame currentPokemon={currentPokemon} setIsOpen={setIsOpen} />
        </Modal>
      ) : (
        ""
      )}
    </div>
  );
};

export default Play;
