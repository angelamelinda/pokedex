import { string } from "prop-types";

export interface IApiRequest {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  data?: any;
}

export interface IPokemonSprites {
  front_default: string | null;
}

export interface IPokemonStat {
  name: string;
  base_stat: number;
}

export interface IPokemon {
  id: number;
  name: string;
  types: string[];
  abilities: string[];
  sprites: IPokemonSprites;
  weight: number;
  height: number;
  stats: IPokemonStat[];
}

export interface IResponse {
  data?: any;
}

export interface IPokemonCommonEntityResp {
  url: string;
  name: string;
}

export interface IPokemonTypeResp {
  slot: number;
  type: IPokemonCommonEntityResp;
}

export interface IPokemonListTypeResp {
  slot: number;
  pokemon: IPokemonCommonEntityResp;
}

export interface IPokemonAbilitiyResp {
  slot: number;
  ability: IPokemonCommonEntityResp;
}

export interface IPokemonResp {
  id: number;
  name: string;
  types: IPokemonTypeResp[];
  abilities: IPokemonAbilitiyResp[];
  sprites: IPokemonSprites;
  weight: number;
  height: number;
  stats: IPokemonStat[];
}
