import React, { PureComponent, ChangeEvent } from "react";
import _ from "lodash";
import {
  PokedexWrapper,
  PokedexContainer,
  PokedexTitle,
  PokedexRow,
  PokedexFilter,
  PokedexFilterText,
  PokedexTitleWrapper,
  PokedexLoadingWrapper,
  PokedexLoading
} from "./index.styled";
import { IAppState } from "../../interfaces/state";
import { connect } from "react-redux";
import {
  fetchPokedex,
  fetchTypes,
  setFilter,
  fetchPokemonBaseType,
  setCurrentPage,
  setTotalResult,
  resetPokedex,
  adjustPokedexByTypes
} from "../../redux/actions/pokemon";
import PokemonListItem from "../../components/PokemonListItem";
import { POKEMON_PAGE_LIMIT, COLOR } from "../../constants";
import Filter from "../../components/Filter";
import Loading from "../../components/Loading";

interface IPokedex {
  state: IAppState;
  fetchPokedex: () => void;
  fetchTypes: () => void;
  setFilter: (filter: string) => void;
  fetchPokemonBaseType: (type: string) => void;
  setCurrentPage: (currentPage: number) => void;
  setTotalResult: (totalResult: number) => void;
  resetPokedex: () => void;
  adjustPokedexByTypes: () => void;
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
    const { fetchPokedex, state, adjustPokedexByTypes } = this.props;
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
      adjustPokedexByTypes();
    }
  };

  handleResize = () => {
    this.windowHeight = window.innerHeight;
    this.documentHeight = (document.documentElement as HTMLElement).offsetHeight;
  };

  handleChangeFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    const {
      setFilter,
      fetchPokemonBaseType,
      resetPokedex,
      setCurrentPage,
      setTotalResult
    } = this.props;
    setFilter(e.target.value);
    setCurrentPage(1);
    setTotalResult(0);
    resetPokedex();
    fetchPokemonBaseType(e.target.value);
  };

  render() {
    const { pokemonReducer, commonReducer } = this.props.state;
    return (
      <PokedexWrapper
        className={commonReducer.isLoading ? "overflow-hidden" : ""}>
        <PokedexContainer className="container">
          <PokedexTitleWrapper>
            <PokedexTitle>Pokédex</PokedexTitle>
            <PokedexFilter>
              {pokemonReducer.allTypes && (
                <>
                  <PokedexFilterText>Filter by Types</PokedexFilterText>
                  <Filter
                    types={pokemonReducer.allTypes}
                    handleChange={this.handleChangeFilter}
                    filter={pokemonReducer.filter || ""}
                  />
                </>
              )}
            </PokedexFilter>
          </PokedexTitleWrapper>
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
          {commonReducer.isLoading && (
            <PokedexLoadingWrapper>
              <PokedexLoading>
                <Loading color={COLOR.MINE_SHAFT} width={50} height={50} />
              </PokedexLoading>
            </PokedexLoadingWrapper>
          )}
        </PokedexContainer>
      </PokedexWrapper>
    );
  }
}

const mapStateToProps = (state: IAppState) => ({ state });

const mapDispatchToProps = {
  fetchPokedex,
  fetchTypes,
  setFilter,
  fetchPokemonBaseType,
  setCurrentPage,
  setTotalResult,
  resetPokedex,
  adjustPokedexByTypes
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pokedex);
