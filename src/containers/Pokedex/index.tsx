import React, { PureComponent } from "react";
import _ from "lodash";
import {
  PokedexWrapper,
  PokedexContainer,
  PokedexTitle,
  PokedexRow
} from "./index.styled";
import { IAppState } from "../../interfaces/state";
import { connect } from "react-redux";
import { fetchPokedex, fetchTypes } from "../../redux/actions/pokemon";
import PokemonListItem from "../../components/PokemonListItem";
import { POKEMON_PAGE_LIMIT } from "../../constants";
import Filter from "../../components/Filter";

interface IPokedex {
  state: IAppState;
  fetchPokedex: () => void;
  fetchTypes: () => void;
}

class Pokedex extends PureComponent<IPokedex> {
  private positionY: number = (document.documentElement as HTMLElement)
    .scrollTop;
  private windowHeight: number = window.innerHeight;
  private documentHeight: number = (document.documentElement as HTMLElement)
    .offsetHeight;

  componentDidMount() {
    const { fetchPokedex, fetchTypes } = this.props;

    fetchTypes();
    fetchPokedex();

    window.addEventListener("scroll", _.debounce(this.handleScroll));
    window.addEventListener("resize", _.debounce(this.handleResize));
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", _.debounce(this.handleScroll));
    window.removeEventListener("resize", _.debounce(this.handleResize));
  }

  handleScroll = () => {
    const { fetchPokedex, state } = this.props;
    const { filter, currentPage, totalResult } = state.pokemonReducer;

    this.positionY = (document.documentElement as HTMLElement).scrollTop;
    this.windowHeight = window.innerHeight;
    this.documentHeight = (document.documentElement as HTMLElement).offsetHeight;

    if (
      this.positionY + this.windowHeight === this.documentHeight &&
      currentPage * POKEMON_PAGE_LIMIT + 1 < totalResult &&
      !filter
    ) {
      fetchPokedex();
    } else if (
      this.positionY + this.windowHeight === this.documentHeight &&
      currentPage * POKEMON_PAGE_LIMIT + 1 < totalResult &&
      filter
    ) {
      // adjustPokedexByTypes();
    }
  };

  handleResize = () => {
    this.windowHeight = window.innerHeight;
    this.documentHeight = (document.documentElement as HTMLElement).offsetHeight;
  };

  handleChangeFilter = () => {};

  render() {
    const { pokemonReducer } = this.props.state;

    return (
      <PokedexWrapper>
        <PokedexContainer className="container">
          <PokedexTitle>Pokédex</PokedexTitle>
          {pokemonReducer.allTypes && (
            <Filter
              types={pokemonReducer.allTypes}
              handleChange={this.handleChangeFilter}
              filter={pokemonReducer.filter || ""}
            />
          )}
          <PokedexRow className="row">
            {pokemonReducer.pokemonList &&
              pokemonReducer.pokemonList.map(pokemon => (
                <PokemonListItem
                  key={pokemon.id}
                  types={pokemon.types}
                  id={pokemon.id}
                  name={pokemon.name}
                  image={pokemon.sprites.front_default}
                />
              ))}
          </PokedexRow>
        </PokedexContainer>
      </PokedexWrapper>
    );
  }
}

const mapStateToProps = (state: IAppState) => ({ state });

const mapDispatchToProps = {
  fetchPokedex,
  fetchTypes
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pokedex);
