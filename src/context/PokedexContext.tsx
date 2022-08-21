import { createContext, useContext } from "react";
import { PokedexState } from "../interfaces/interfaces";

export type PokedexContextProps = {
  pokedexState: PokedexState;
};

export const PokedexContext = createContext<PokedexContextProps>(
  {} as PokedexContextProps
);
