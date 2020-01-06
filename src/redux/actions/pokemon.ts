import { IPokemonAction, E_POKEMON_ACTION } from "../../interfaces/action";
import { IPokemon } from "../../interfaces";

export function setCurrentPage(currentPage: number): IPokemonAction {
  return {
    type: E_POKEMON_ACTION.POKEMON_SET_CURRENT_PAGE,
    payload: { currentPage }
  };
}

export function setTotalResult(totalResult: number): IPokemonAction {
  return {
    type: E_POKEMON_ACTION.POKEMON_SET_TOTAL_RESULT,
    payload: { totalResult }
  };
}

export function setFilter(filter: string | null): IPokemonAction {
  return {
    type: E_POKEMON_ACTION.POKEMON_SET_FILTER,
    payload: { filter }
  };
}

export function setPokemonDetail(
  pokemonDetail: IPokemon | null
): IPokemonAction {
  return {
    type: E_POKEMON_ACTION.POKEMON_SET_DETAIL,
    payload: { pokemonDetail }
  };
}

export function setPokedex(pokemonList: IPokemon[] | null): IPokemonAction {
  return {
    type: E_POKEMON_ACTION.POKEMON_SET_POKEDEX,
    payload: { pokemonList }
  };
}

export function resetPokemonState(): IPokemonAction {
  return {
    type: E_POKEMON_ACTION.POKEMON_RESET_STATE
  };
}
