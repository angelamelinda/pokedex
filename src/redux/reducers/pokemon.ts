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
  pokedex: null,
  pokemonDetail: null
};

function pokemonReducer(
  state = INITIAL_STATE,
  action: IPokemonAction
): IPokemonState {
  switch (action.type) {
    case E_POKEMON_ACTION.POKEMON_SET_CURRENT_PAGE:
      const { currentPage } = action.payload as IPokemonSetCurrentPage;
      return { ...INITIAL_STATE, currentPage };
    case E_POKEMON_ACTION.POKEMON_SET_TOTAL_RESULT:
      const { totalResult } = action.payload as IPokemonSetTotalResult;
      return { ...INITIAL_STATE, totalResult };
    case E_POKEMON_ACTION.POKEMON_SET_FILTER:
      const { filter } = action.payload as IPokemonSetFilter;
      return { ...INITIAL_STATE, filter };
    case E_POKEMON_ACTION.POKEMON_SET_DETAIL:
      const { pokemonDetail } = action.payload as IPokemonSetDetail;
      return { ...INITIAL_STATE, pokemonDetail };
    case E_POKEMON_ACTION.POKEMON_SET_POKEDEX:
      const { pokemonList } = action.payload as IPokemonSetPokedex;
      if (state.pokedex && pokemonList) {
        return {
          ...INITIAL_STATE,
          pokedex: [...state.pokedex, ...pokemonList]
        };
      }
      return { ...INITIAL_STATE, pokedex: pokemonList };
    case E_POKEMON_ACTION.POKEMON_RESET_STATE:
      return INITIAL_STATE;
  }
  return state;
}

export default pokemonReducer;
