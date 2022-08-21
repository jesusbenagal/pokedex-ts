import { PokedexState, Pokemon, PokemonUrl } from "../interfaces/interfaces";

type PokedexAction =
  | { type: "GET_ALL_POKEMON"; payload: PokemonUrl[] }
  | { type: "GET_POKEMON_DATA"; payload: Pokemon[] }
  | { type: "SET_LOADING"; payload: boolean };

export const PokedexReducer = (state: PokedexState, action: PokedexAction) => {
  switch (action.type) {
    case "GET_ALL_POKEMON":
      return { ...state, allPokemonsUrls: action.payload };
    case "GET_POKEMON_DATA":
      return { ...state, pokemons: action.payload };
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};
