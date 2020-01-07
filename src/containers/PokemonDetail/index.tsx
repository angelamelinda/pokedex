import React, { PureComponent } from "react";
import {
  PokemonDetailWrapper,
  PokemonDetailContainer,
  PokemonDetailName,
  PokemonDetailContent,
  PokemonDetailImageWrapper,
  PokemonDetailImage,
  PokemonDetailProfileWrapper,
  PokemonDetailProfileStatsWrapper,
  PokemonDetailColumn,
  PokemonDetailTypeWrapper,
  PokemonDetailType,
  PokemonDetailHeightWeight,
  PokemonDetailSubtitle,
  PokemonDetailAbilityTitle,
  PokemonDetailAbility,
  PokemonDetailAbilityUl,
  PokemonDetailAbilityLi,
  PokemonDetailBackButton
} from "./index.styled";
import { IPokemonDetailRoute } from "../../interfaces";
import { RouteComponentProps } from "react-router";
import { IAppState } from "../../interfaces/state";
import { connect } from "react-redux";
import {
  fetchPokemonDetail,
  resetPokemonState
} from "../../redux/actions/pokemon";
import { PokedexLoadingWrapper, PokedexLoading } from "../Pokedex/index.styled";
import Loading from "../../components/Loading";
import { COLOR, TYPE_CONFIG } from "../../constants";
import IndicatorStats from "../../components/IndicatorStats";
import BackButton from "../../components/BackButton";

interface IPokemonDetail extends RouteComponentProps<IPokemonDetailRoute> {
  state: IAppState;
  fetchPokemonDetail: (pokemonId: string) => void;
  resetPokemonState: () => void;
}

class PokemonDetail extends PureComponent<IPokemonDetail> {
  private pokemonId = "";
  constructor(props: IPokemonDetail) {
    super(props);
    this.pokemonId = props.match.params.pokemonId;
  }

  componentDidMount() {
    const { state, fetchPokemonDetail } = this.props;
    const { pokemonReducer } = state;
    const { pokemonDetail } = pokemonReducer;

    if (!pokemonDetail) {
      fetchPokemonDetail(this.pokemonId);
    }
  }

  handleBack = () => {
    const { resetPokemonState } = this.props;
    const { history } = this.props;
    resetPokemonState();
    history.goBack();
  };

  render() {
    const { state } = this.props;
    const { commonReducer, pokemonReducer } = state;
    const { pokemonDetail } = pokemonReducer;
    return (
      <PokemonDetailWrapper>
        <PokemonDetailContainer className="container">
          {pokemonDetail && (
            <>
              <PokemonDetailName>
                <PokemonDetailBackButton onClick={this.handleBack}>
                  <BackButton width={"20px"} height={"20px"} />
                </PokemonDetailBackButton>
                {pokemonDetail.name}
              </PokemonDetailName>
              <PokemonDetailContent className="row">
                <PokemonDetailColumn className="column one-to-third">
                  <PokemonDetailImageWrapper>
                    <PokemonDetailImage
                      alt=""
                      src={pokemonDetail.sprites.front_default || ""}
                    />
                  </PokemonDetailImageWrapper>
                </PokemonDetailColumn>
                <PokemonDetailColumn className="column two-to-third ">
                  <PokemonDetailProfileWrapper>
                    <PokemonDetailHeightWeight>
                      Height: {pokemonDetail.height}'' | Weight:{" "}
                      {pokemonDetail.weight} lbs
                    </PokemonDetailHeightWeight>
                    <PokemonDetailAbility>
                      <PokemonDetailAbilityTitle>
                        Abilities:
                      </PokemonDetailAbilityTitle>
                      <PokemonDetailAbilityUl>
                        {pokemonDetail.abilities.map(ability => {
                          return (
                            <PokemonDetailAbilityLi>
                              {ability}
                            </PokemonDetailAbilityLi>
                          );
                        })}
                      </PokemonDetailAbilityUl>
                    </PokemonDetailAbility>
                    <PokemonDetailTypeWrapper>
                      {pokemonDetail.types.map((type, idx) => {
                        const config = (TYPE_CONFIG as any)[type];
                        return (
                          <PokemonDetailType
                            key={idx}
                            color={config.color}
                            background1={config.background[0]}
                            background2={config.background[1]}>
                            {type}
                          </PokemonDetailType>
                        );
                      })}
                    </PokemonDetailTypeWrapper>
                    <PokemonDetailProfileStatsWrapper>
                      <PokemonDetailSubtitle>
                        Pokemon Stats
                      </PokemonDetailSubtitle>
                      {pokemonDetail.stats.map(item => (
                        <IndicatorStats
                          name={item.stat.name}
                          baseStat={item.base_stat}
                        />
                      ))}
                    </PokemonDetailProfileStatsWrapper>
                  </PokemonDetailProfileWrapper>
                </PokemonDetailColumn>
              </PokemonDetailContent>
            </>
          )}
          {commonReducer.isLoading && (
            <PokedexLoadingWrapper>
              <PokedexLoading>
                <Loading color={COLOR.MINE_SHAFT} width={50} height={50} />
              </PokedexLoading>
            </PokedexLoadingWrapper>
          )}
        </PokemonDetailContainer>
      </PokemonDetailWrapper>
    );
  }
}

const mapStateToProps = (state: IAppState) => ({ state });

const mapDispatchToProps = {
  fetchPokemonDetail,
  resetPokemonState
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
