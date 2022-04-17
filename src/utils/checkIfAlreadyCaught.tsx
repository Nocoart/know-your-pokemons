import Cookies from "js-cookie";
import { IPokemon } from "pokeapi-typescript";

export const checkIfAlreadyCaught = (pokemon: IPokemon) => {
  const cookie = Cookies.get("caughtList");
  if (typeof cookie === "string") {
    const caughtList = JSON.parse(cookie);
    const caugthArray = caughtList.split(";");
    if (caugthArray.includes(pokemon?.id.toString())) return true;
  } else return false;
};
