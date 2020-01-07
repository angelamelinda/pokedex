import React from "react";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import Pokedex from ".";
import { ERROR_MESSAGE } from "../../constants";
import { INITIAL_STATE as commonReducer } from "../../redux/reducers/common";
import { INITIAL_STATE as pokemonReducer } from "../../redux/reducers/pokemon";
import { customRenderWithRedux } from "../../App.test";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Pokedex", () => {
  it("renders Pokedex with data-testid loading in the documents", () => {
    const store = mockStore({
      pokemonReducer,
      commonReducer: {
        ...commonReducer,
        isLoading: true
      }
    });

    const { getByTestId } = customRenderWithRedux(<Pokedex />, store);
    expect(getByTestId("loading")).toBeInTheDocument();
  });

  it("renders Pokedex with data-testid error-message in the documents", () => {
    const store = mockStore({
      pokemonReducer,
      commonReducer: {
        ...commonReducer,
        error: ERROR_MESSAGE.DEFAULT
      }
    });

    const { getByTestId } = customRenderWithRedux(<Pokedex />, store);
    expect(getByTestId("error-message")).toBeInTheDocument();
  });
});
