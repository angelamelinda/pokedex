import React, { FC } from "react";
import {
  PokemonListItemColumn,
  PokemonListItemImageWrapper,
  PokemonListItemImage,
  PokemonListItemName,
  PokemonListItemType,
  PokemonListItemTypeWrapper,
  PokemonListItemBottom
} from "./index.styled";
import { Link } from "react-router-dom";
import { TYPE_CONFIG } from "../../constants";

interface IPokemonListeItem {
  image: string | null;
  name: string;
  id: number;
  types: string[];
}

const PokemonListItem: FC<IPokemonListeItem> = ({ image, name, id, types }) => {
  return (
    <PokemonListItemColumn className="column">
      <Link to={`/${id}`} className="pokemon-list-item__link">
        <PokemonListItemImageWrapper>
          {image && <PokemonListItemImage alt="" src={image} />}
        </PokemonListItemImageWrapper>
        <PokemonListItemBottom>
          <PokemonListItemName>{name}</PokemonListItemName>
          <PokemonListItemTypeWrapper>
            {types.map((type, idx) => {
              const config = (TYPE_CONFIG as any)[type];
              return (
                <PokemonListItemType
                  key={idx}
                  color={config.color}
                  background1={config.background[0]}
                  background2={config.background[1]}>
                  {type}
                </PokemonListItemType>
              );
            })}
          </PokemonListItemTypeWrapper>
        </PokemonListItemBottom>
      </Link>
    </PokemonListItemColumn>
  );
};

export default PokemonListItem;
