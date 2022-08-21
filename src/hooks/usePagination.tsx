import { ChangeEvent, useState } from "react";
import { Pokemon } from "../interfaces/interfaces";

export const usePagination = (pokemons: Pokemon[]) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState("");

  const filteredPokemons = (): Pokemon[] => {
    if (search.length === 0) {
      return pokemons.slice(currentPage, currentPage + 18);
    }

    const filtered = pokemons.filter((pokemon) =>
      pokemon.name.includes(search)
    );
    return filtered.slice(currentPage, currentPage + 18);
  };

  const nextPage = () => {
    if (
      pokemons.filter((pokemon) => pokemon.name.includes(search)).length >
      currentPage + 18
    ) {
      setCurrentPage(currentPage + 18);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 18);
    }
  };

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentPage(0);
    setSearch(e.target.value);
  };

  return {
    filteredPokemons,
    nextPage,
    prevPage,
    onSearchChange,
    search,
  };
};
