import {
  IPokemonAction,
  E_POKEMON_ACTION,
  TAllAction
} from "../../interfaces/action";
import {
  IPokemon,
  IApiRequest,
  IPokemonCommonEntityResp
} from "../../interfaces";
import { ThunkAction } from "redux-thunk";
import { IAppState } from "../../interfaces/state";
import { setLoading, setError } from "./common";
import { API_URL, POKEMON_PAGE_LIMIT, ERROR_MESSAGE } from "../../constants";
import {
  api,
  promiseFetchAll,
  sanitizeDataPokemonDetail
} from "../../helpers/api";

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

export function fetchPokemonDetail(): ThunkAction<
  void,
  IAppState,
  {},
  TAllAction
> {
  return dispatch => {};
}

export function fetchPokedex(): ThunkAction<void, IAppState, {}, TAllAction> {
  return (dispatch, getState) => {
    dispatch(setLoading(true));
    const totalFetchedPokemon =
      getState().pokemonReducer.currentPage * POKEMON_PAGE_LIMIT;
    const apiRequest: IApiRequest = {
      url: API_URL.ALL_POKEMON.replace(
        ":offset",
        totalFetchedPokemon.toString()
      ),
      method: "GET"
    };
    api(apiRequest)
      .then(resp => {
        const { count, results } = resp.data;

        dispatch(setTotalResult(count));

        const urls = results.map(
          (pokemon: IPokemonCommonEntityResp) => pokemon.url
        );

        promiseFetchAll(urls).then(responseAll => {
          const result = responseAll.map(response =>
            sanitizeDataPokemonDetail(response.data)
          );
          dispatch(setPokedex(result));
          dispatch(setCurrentPage(getState().pokemonReducer.currentPage + 1));
        });
      })
      .catch(_ => {
        dispatch(setError(ERROR_MESSAGE.DEFAULT));
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };
}

export function fetchPokemonImage(): ThunkAction<
  void,
  IAppState,
  {},
  TAllAction
> {
  return dispatch => {};
}

export function fetchPokemonBaseType(): ThunkAction<
  void,
  IAppState,
  {},
  TAllAction
> {
  return dispatch => {};
}
