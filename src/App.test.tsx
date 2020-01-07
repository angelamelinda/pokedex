import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { Router, BrowserRouter } from "react-router-dom";
import { createMemoryHistory } from "history";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import RootReducer from "./redux/reducers";
import App from "./App";

export function customRenderWithRedux(ui: JSX.Element, store?: any) {
  return {
    ...render(
      <Provider store={store}>
        <BrowserRouter>{ui}</BrowserRouter>
      </Provider>
    ),
    store
  };
}

test("renders pokedex page", () => {
  const history = createMemoryHistory();
  const route = "/";
  history.push(route);

  const { getByTestId } = customRenderWithRedux(
    <Router history={history}>
      <App />
    </Router>,
    createStore(RootReducer, applyMiddleware(thunkMiddleware))
  );

  expect(getByTestId("pokedex-page")).toBeInTheDocument();
});

test("renders pokemon-detail page", () => {
  const history = createMemoryHistory();
  const route = "/1";
  history.push(route);

  const { getByTestId } = customRenderWithRedux(
    <Router history={history}>
      <App />
    </Router>,
    createStore(RootReducer, applyMiddleware(thunkMiddleware))
  );

  expect(getByTestId("pokemon-detail-page")).toBeInTheDocument();
});
