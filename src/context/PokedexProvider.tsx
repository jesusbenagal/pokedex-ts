import axios from "axios";
import { useEffect, useReducer } from "react";
import { PokedexState } from "../interfaces/interfaces";
import { PokedexContext } from "./PokedexContext";
import { PokedexReducer } from "./PokedexReducer";

const INITIAL_STATE: PokedexState = {
  allPokemonsUrls: [],
  pokemons: [],
  isLoading: false,
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const PokedexProvider = ({ children }: Props) => {
  const [pokedexState, dispatch] = useReducer(PokedexReducer, INITIAL_STATE);

  const getAllPokemonsUrls = async () => {
    const { data } = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=100000"
    );
    dispatch({ type: "GET_ALL_POKEMON", payload: data.results });
  };

  const getAllPokemonsData = async () => {
    const { allPokemonsUrls } = pokedexState;
    const allPokemonsData = await Promise.all(
      allPokemonsUrls.map(async (pokemon) => {
        const { data } = await axios.get(pokemon.url);
        return data;
      })
    );
    dispatch({ type: "GET_POKEMON_DATA", payload: allPokemonsData });
  };

  useEffect(() => {
    getAllPokemonsUrls();
  }, []);

  useEffect(() => {
    getAllPokemonsData();
  }),
    [pokedexState.allPokemonsUrls];

  return (
    <PokedexContext.Provider
      value={{
        pokedexState,
      }}
    >
      {children}
    </PokedexContext.Provider>
  );
};
