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
import { fetchPokedex } from "../../redux/actions/pokemon";
import PokemonListItem from "../../components/PokemonListItem";

interface IPokedex {
  state: IAppState;
  fetchPokedex: () => void;
}

class Pokedex extends PureComponent<IPokedex> {
  private positionY: number = (document.documentElement as HTMLElement)
    .scrollTop;
  private windowHeight: number = window.innerHeight;
  private documentHeight: number = (document.documentElement as HTMLElement)
    .offsetHeight;

  componentDidMount() {
    const { fetchPokedex } = this.props;
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
    const { filter } = state.pokemonReducer;

    this.positionY = (document.documentElement as HTMLElement).scrollTop;
    this.windowHeight = window.innerHeight;
    this.documentHeight = (document.documentElement as HTMLElement).offsetHeight;

    if (this.positionY + this.windowHeight === this.documentHeight && !filter) {
      fetchPokedex();
    } else if (
      this.positionY + this.windowHeight === this.documentHeight &&
      filter
    ) {
      // adjustPokedexByTypes();
    }
  };

  handleResize = () => {
    this.windowHeight = window.innerHeight;
    this.documentHeight = (document.documentElement as HTMLElement).offsetHeight;
  };

  render() {
    const { pokemonReducer } = this.props.state;
    return (
      <PokedexWrapper>
        <PokedexContainer className="container">
          <PokedexTitle>Pokédex</PokedexTitle>
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
  fetchPokedex
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pokedex);
