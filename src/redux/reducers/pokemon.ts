import { IPokemonState } from "../../interfaces/state";
import {
  IPokemonAction,
  E_POKEMON_ACTION,
  IPokemonSetCurrentPage,
  IPokemonSetTotalResult,
  IPokemonSetFilter,
  IPokemonSetDetail,
  IPokemonSetPokedex
} from "../../interfaces/action";

export const INITIAL_STATE: IPokemonState = {
  filter: null,
  totalResult: 0,
  currentPage: 0,
  pokemonList: null,
  pokemonDetail: null,
  pokemonByType: null
};

function pokemonReducer(
  state = INITIAL_STATE,
  action: IPokemonAction
): IPokemonState {
  switch (action.type) {
    case E_POKEMON_ACTION.POKEMON_SET_CURRENT_PAGE:
      const { currentPage } = action.payload as IPokemonSetCurrentPage;
      return { ...state, currentPage };
    case E_POKEMON_ACTION.POKEMON_SET_TOTAL_RESULT:
      const { totalResult } = action.payload as IPokemonSetTotalResult;
      return { ...state, totalResult };
    case E_POKEMON_ACTION.POKEMON_SET_FILTER:
      const { filter } = action.payload as IPokemonSetFilter;
      return { ...state, filter };
    case E_POKEMON_ACTION.POKEMON_SET_DETAIL:
      const { pokemonDetail } = action.payload as IPokemonSetDetail;
      return { ...state, pokemonDetail };
    case E_POKEMON_ACTION.POKEMON_SET_POKEDEX:
      const { pokemonList } = action.payload as IPokemonSetPokedex;
      if (state.pokemonList && pokemonList) {
        return {
          ...state,
          pokemonList: [...state.pokemonList, ...pokemonList]
        };
      }
      return { ...state, pokemonList: pokemonList };
    case E_POKEMON_ACTION.POKEMON_RESET_STATE:
      return INITIAL_STATE;
  }
  return state;
}

export default pokemonReducer;