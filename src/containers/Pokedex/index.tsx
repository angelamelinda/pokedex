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
import Error from "../../components/Error";
import Filter from "../../components/Filter";
import Loading from "../../components/Loading";

interface IPokedex {
  state: IAppState;
  fetchPokedex: () => void;
  fetchTypes: () => void;
  setFilter: (filter: string | null) => void;
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

    window.addEventListener("scroll", _.throttle(this.handleScroll, 500));
    window.addEventListener("resize", _.throttle(this.handleResize, 500));
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", _.throttle(this.handleScroll, 500));
    window.removeEventListener("resize", _.throttle(this.handleResize, 500));
  }

  handleScroll = () => {
    const { fetchPokedex, state, adjustPokedexByTypes } = this.props;
    const { filter, currentPage, totalResult } = state.pokemonReducer;
    const { isLoading } = state.commonReducer;

    this.positionY = (document.documentElement as HTMLElement).scrollTop;
    this.windowHeight = window.innerHeight;
    this.documentHeight = (document.documentElement as HTMLElement).offsetHeight;

    if (
      this.positionY + this.windowHeight >= this.documentHeight - 10 &&
      currentPage * POKEMON_PAGE_LIMIT + 1 < totalResult &&
      !filter &&
      !isLoading
    ) {
      fetchPokedex();
    } else if (
      this.positionY + this.windowHeight >= this.documentHeight - 10 &&
      currentPage * POKEMON_PAGE_LIMIT + 1 < totalResult &&
      filter &&
      !isLoading
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
      setTotalResult,
      fetchPokedex
    } = this.props;
    const { value } = e.target;
    if (value !== "default") {
      setFilter(value);
      setCurrentPage(1);
      setTotalResult(0);
      resetPokedex();
      fetchPokemonBaseType(e.target.value);
    } else {
      setFilter(null);
      setCurrentPage(0);
      setTotalResult(0);
      resetPokedex();
      fetchPokedex();
    }
  };

  render() {
    const { pokemonReducer, commonReducer } = this.props.state;
    return (
      <PokedexWrapper data-testid="pokedex-page">
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

          {pokemonReducer.pokemonList && pokemonReducer.pokemonList.length > 0 && (
            <PokedexRow className="row">
              {pokemonReducer.pokemonList.map((pokemon, index) => (
                <PokemonListItem key={`pokemon-${index}`} pokemon={pokemon} />
              ))}
            </PokedexRow>
          )}

          {commonReducer.error && <Error message={commonReducer.error} />}

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
