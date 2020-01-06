import React from "react";
import { Route, Switch } from "react-router-dom";
import { GlobalStyle } from "./index.styled";
import Pokedex from "./containers/Pokedex";
import PokemonDetail from "./containers/PokemonDetail";

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Pokedex}></Route>
        <Route exact path="/:pokemonId" component={PokemonDetail}></Route>
      </Switch>
    </div>
  );
};

export default App;
