export interface IApiRequest {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  data?: any;
}

export interface IPokemonSprites {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
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
