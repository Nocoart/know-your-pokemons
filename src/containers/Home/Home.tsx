import { useEffect, useContext } from "react";

//components
import PokeCarousel from "../../components/PokeCarousel/PokeCarousel";
import Loader from "../../components/Loader/Loader";
import { PokeListContext } from "../../contexts/PokeListProvider";
import { fetchPokemonList } from "../../utils/fetchPokemonList";
import Pokedex from "../../components/Pokedex/Pokedex";

//styles
import "./Home.scss";

const Home: React.FC = () => {
  const { pokeList, setPokeList, isLoading, setIsLoading } = useContext(PokeListContext);

  useEffect(() => {
    if (pokeList.length === 0) fetchPokemonList(setPokeList, setIsLoading);
  }, []);

  return isLoading ? (
    <div className="loader-container">
      <p>Pika is loading your page...</p>
      <Loader />
    </div>
  ) : (
    <div className="container home-page">
      <Pokedex />
      <PokeCarousel pokeList={pokeList} />
    </div>
  );
};

export default Home;
