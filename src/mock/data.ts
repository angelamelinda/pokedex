export const POKEMON_DETAIL = {
  id: 18,
  name: "pidgeot",
  types: ["flying", "normal"],
  abilities: ["big-pecks", "tangled-feet", "keen-eye"],
  sprites: {
    back_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/18.png",
    back_female: null,
    back_shiny:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/18.png",
    back_shiny_female: null,
    front_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
    front_female: null,
    front_shiny:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/18.png",
    front_shiny_female: null
  },
  weight: 395,
  height: 15,
  stats: [
    {
      base_stat: 101,
      effort: 3,
      stat: { name: "speed", url: "https://pokeapi.co/api/v2/stat/6/" }
    },
    {
      base_stat: 70,
      effort: 0,
      stat: {
        name: "special-defense",
        url: "https://pokeapi.co/api/v2/stat/5/"
      }
    },
    {
      base_stat: 70,
      effort: 0,
      stat: { name: "special-attack", url: "https://pokeapi.co/api/v2/stat/4/" }
    },
    {
      base_stat: 75,
      effort: 0,
      stat: { name: "defense", url: "https://pokeapi.co/api/v2/stat/3/" }
    },
    {
      base_stat: 80,
      effort: 0,
      stat: { name: "attack", url: "https://pokeapi.co/api/v2/stat/2/" }
    },
    {
      base_stat: 83,
      effort: 0,
      stat: { name: "hp", url: "https://pokeapi.co/api/v2/stat/1/" }
    }
  ]
};
export const POKEMON_LIST = [
  {
    id: 1,
    name: "bulbasaur",
    types: ["poison", "grass"],
    abilities: ["chlorophyll", "overgrow"],
    sprites: {
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      back_female: null,
      back_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
      back_shiny_female: null,
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      front_female: null,
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
      front_shiny_female: null
    },
    weight: 69,
    height: 7,
    stats: [
      {
        base_stat: 45,
        effort: 0,
        stat: { name: "speed", url: "https://pokeapi.co/api/v2/stat/6/" }
      },
      {
        base_stat: 65,
        effort: 0,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/"
        }
      },
      {
        base_stat: 65,
        effort: 1,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/"
        }
      },
      {
        base_stat: 49,
        effort: 0,
        stat: { name: "defense", url: "https://pokeapi.co/api/v2/stat/3/" }
      },
      {
        base_stat: 49,
        effort: 0,
        stat: { name: "attack", url: "https://pokeapi.co/api/v2/stat/2/" }
      },
      {
        base_stat: 45,
        effort: 0,
        stat: { name: "hp", url: "https://pokeapi.co/api/v2/stat/1/" }
      }
    ]
  },
  {
    id: 2,
    name: "ivysaur",
    types: ["poison", "grass"],
    abilities: ["chlorophyll", "overgrow"],
    sprites: {
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png",
      back_female: null,
      back_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/2.png",
      back_shiny_female: null,
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
      front_female: null,
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/2.png",
      front_shiny_female: null
    },
    weight: 130,
    height: 10,
    stats: [
      {
        base_stat: 60,
        effort: 0,
        stat: { name: "speed", url: "https://pokeapi.co/api/v2/stat/6/" }
      },
      {
        base_stat: 80,
        effort: 1,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/"
        }
      },
      {
        base_stat: 80,
        effort: 1,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/"
        }
      },
      {
        base_stat: 63,
        effort: 0,
        stat: { name: "defense", url: "https://pokeapi.co/api/v2/stat/3/" }
      },
      {
        base_stat: 62,
        effort: 0,
        stat: { name: "attack", url: "https://pokeapi.co/api/v2/stat/2/" }
      },
      {
        base_stat: 60,
        effort: 0,
        stat: { name: "hp", url: "https://pokeapi.co/api/v2/stat/1/" }
      }
    ]
  },
  {
    id: 3,
    name: "venusaur",
    types: ["poison", "grass"],
    abilities: ["chlorophyll", "overgrow"],
    sprites: {
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png",
      back_female:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/3.png",
      back_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/3.png",
      back_shiny_female:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/female/3.png",
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
      front_female:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/3.png",
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/3.png",
      front_shiny_female:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/3.png"
    },
    weight: 1000,
    height: 20,
    stats: [
      {
        base_stat: 80,
        effort: 0,
        stat: { name: "speed", url: "https://pokeapi.co/api/v2/stat/6/" }
      },
      {
        base_stat: 100,
        effort: 1,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/"
        }
      },
      {
        base_stat: 100,
        effort: 2,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/"
        }
      },
      {
        base_stat: 83,
        effort: 0,
        stat: { name: "defense", url: "https://pokeapi.co/api/v2/stat/3/" }
      },
      {
        base_stat: 82,
        effort: 0,
        stat: { name: "attack", url: "https://pokeapi.co/api/v2/stat/2/" }
      },
      {
        base_stat: 80,
        effort: 0,
        stat: { name: "hp", url: "https://pokeapi.co/api/v2/stat/1/" }
      }
    ]
  },
  {
    id: 4,
    name: "charmander",
    types: ["fire"],
    abilities: ["solar-power", "blaze"],
    sprites: {
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png",
      back_female: null,
      back_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/4.png",
      back_shiny_female: null,
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
      front_female: null,
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/4.png",
      front_shiny_female: null
    },
    weight: 85,
    height: 6,
    stats: [
      {
        base_stat: 65,
        effort: 1,
        stat: { name: "speed", url: "https://pokeapi.co/api/v2/stat/6/" }
      },
      {
        base_stat: 50,
        effort: 0,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/"
        }
      },
      {
        base_stat: 60,
        effort: 0,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/"
        }
      },
      {
        base_stat: 43,
        effort: 0,
        stat: { name: "defense", url: "https://pokeapi.co/api/v2/stat/3/" }
      },
      {
        base_stat: 52,
        effort: 0,
        stat: { name: "attack", url: "https://pokeapi.co/api/v2/stat/2/" }
      },
      {
        base_stat: 39,
        effort: 0,
        stat: { name: "hp", url: "https://pokeapi.co/api/v2/stat/1/" }
      }
    ]
  },
  {
    id: 5,
    name: "charmeleon",
    types: ["fire"],
    abilities: ["solar-power", "blaze"],
    sprites: {
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/5.png",
      back_female: null,
      back_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/5.png",
      back_shiny_female: null,
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
      front_female: null,
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/5.png",
      front_shiny_female: null
    },
    weight: 190,
    height: 11,
    stats: [
      {
        base_stat: 80,
        effort: 1,
        stat: { name: "speed", url: "https://pokeapi.co/api/v2/stat/6/" }
      },
      {
        base_stat: 65,
        effort: 0,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/"
        }
      },
      {
        base_stat: 80,
        effort: 1,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/"
        }
      },
      {
        base_stat: 58,
        effort: 0,
        stat: { name: "defense", url: "https://pokeapi.co/api/v2/stat/3/" }
      },
      {
        base_stat: 64,
        effort: 0,
        stat: { name: "attack", url: "https://pokeapi.co/api/v2/stat/2/" }
      },
      {
        base_stat: 58,
        effort: 0,
        stat: { name: "hp", url: "https://pokeapi.co/api/v2/stat/1/" }
      }
    ]
  },
  {
    id: 6,
    name: "charizard",
    types: ["flying", "fire"],
    abilities: ["solar-power", "blaze"],
    sprites: {
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png",
      back_female: null,
      back_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/6.png",
      back_shiny_female: null,
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
      front_female: null,
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/6.png",
      front_shiny_female: null
    },
    weight: 905,
    height: 17,
    stats: [
      {
        base_stat: 100,
        effort: 0,
        stat: { name: "speed", url: "https://pokeapi.co/api/v2/stat/6/" }
      },
      {
        base_stat: 85,
        effort: 0,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/"
        }
      },
      {
        base_stat: 109,
        effort: 3,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/"
        }
      },
      {
        base_stat: 78,
        effort: 0,
        stat: { name: "defense", url: "https://pokeapi.co/api/v2/stat/3/" }
      },
      {
        base_stat: 84,
        effort: 0,
        stat: { name: "attack", url: "https://pokeapi.co/api/v2/stat/2/" }
      },
      {
        base_stat: 78,
        effort: 0,
        stat: { name: "hp", url: "https://pokeapi.co/api/v2/stat/1/" }
      }
    ]
  },
  {
    id: 7,
    name: "squirtle",
    types: ["water"],
    abilities: ["rain-dish", "torrent"],
    sprites: {
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png",
      back_female: null,
      back_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/7.png",
      back_shiny_female: null,
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
      front_female: null,
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/7.png",
      front_shiny_female: null
    },
    weight: 90,
    height: 5,
    stats: [
      {
        base_stat: 43,
        effort: 0,
        stat: { name: "speed", url: "https://pokeapi.co/api/v2/stat/6/" }
      },
      {
        base_stat: 64,
        effort: 0,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/"
        }
      },
      {
        base_stat: 50,
        effort: 0,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/"
        }
      },
      {
        base_stat: 65,
        effort: 1,
        stat: { name: "defense", url: "https://pokeapi.co/api/v2/stat/3/" }
      },
      {
        base_stat: 48,
        effort: 0,
        stat: { name: "attack", url: "https://pokeapi.co/api/v2/stat/2/" }
      },
      {
        base_stat: 44,
        effort: 0,
        stat: { name: "hp", url: "https://pokeapi.co/api/v2/stat/1/" }
      }
    ]
  },
  {
    id: 8,
    name: "wartortle",
    types: ["water"],
    abilities: ["rain-dish", "torrent"],
    sprites: {
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/8.png",
      back_female: null,
      back_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/8.png",
      back_shiny_female: null,
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
      front_female: null,
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/8.png",
      front_shiny_female: null
    },
    weight: 225,
    height: 10,
    stats: [
      {
        base_stat: 58,
        effort: 0,
        stat: { name: "speed", url: "https://pokeapi.co/api/v2/stat/6/" }
      },
      {
        base_stat: 80,
        effort: 1,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/"
        }
      },
      {
        base_stat: 65,
        effort: 0,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/"
        }
      },
      {
        base_stat: 80,
        effort: 1,
        stat: { name: "defense", url: "https://pokeapi.co/api/v2/stat/3/" }
      },
      {
        base_stat: 63,
        effort: 0,
        stat: { name: "attack", url: "https://pokeapi.co/api/v2/stat/2/" }
      },
      {
        base_stat: 59,
        effort: 0,
        stat: { name: "hp", url: "https://pokeapi.co/api/v2/stat/1/" }
      }
    ]
  },
  {
    id: 9,
    name: "blastoise",
    types: ["water"],
    abilities: ["rain-dish", "torrent"],
    sprites: {
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/9.png",
      back_female: null,
      back_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/9.png",
      back_shiny_female: null,
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
      front_female: null,
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/9.png",
      front_shiny_female: null
    },
    weight: 855,
    height: 16,
    stats: [
      {
        base_stat: 78,
        effort: 0,
        stat: { name: "speed", url: "https://pokeapi.co/api/v2/stat/6/" }
      },
      {
        base_stat: 105,
        effort: 3,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/"
        }
      },
      {
        base_stat: 85,
        effort: 0,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/"
        }
      },
      {
        base_stat: 100,
        effort: 0,
        stat: { name: "defense", url: "https://pokeapi.co/api/v2/stat/3/" }
      },
      {
        base_stat: 83,
        effort: 0,
        stat: { name: "attack", url: "https://pokeapi.co/api/v2/stat/2/" }
      },
      {
        base_stat: 79,
        effort: 0,
        stat: { name: "hp", url: "https://pokeapi.co/api/v2/stat/1/" }
      }
    ]
  },
  {
    id: 10,
    name: "caterpie",
    types: ["bug"],
    abilities: ["run-away", "shield-dust"],
    sprites: {
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/10.png",
      back_female: null,
      back_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/10.png",
      back_shiny_female: null,
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
      front_female: null,
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10.png",
      front_shiny_female: null
    },
    weight: 29,
    height: 3,
    stats: [
      {
        base_stat: 45,
        effort: 0,
        stat: { name: "speed", url: "https://pokeapi.co/api/v2/stat/6/" }
      },
      {
        base_stat: 20,
        effort: 0,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/"
        }
      },
      {
        base_stat: 20,
        effort: 0,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/"
        }
      },
      {
        base_stat: 35,
        effort: 0,
        stat: { name: "defense", url: "https://pokeapi.co/api/v2/stat/3/" }
      },
      {
        base_stat: 30,
        effort: 0,
        stat: { name: "attack", url: "https://pokeapi.co/api/v2/stat/2/" }
      },
      {
        base_stat: 45,
        effort: 1,
        stat: { name: "hp", url: "https://pokeapi.co/api/v2/stat/1/" }
      }
    ]
  },
  {
    id: 11,
    name: "metapod",
    types: ["bug"],
    abilities: ["shed-skin"],
    sprites: {
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/11.png",
      back_female: null,
      back_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/11.png",
      back_shiny_female: null,
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
      front_female: null,
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/11.png",
      front_shiny_female: null
    },
    weight: 99,
    height: 7,
    stats: [
      {
        base_stat: 30,
        effort: 0,
        stat: { name: "speed", url: "https://pokeapi.co/api/v2/stat/6/" }
      },
      {
        base_stat: 25,
        effort: 0,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/"
        }
      },
      {
        base_stat: 25,
        effort: 0,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/"
        }
      },
      {
        base_stat: 55,
        effort: 2,
        stat: { name: "defense", url: "https://pokeapi.co/api/v2/stat/3/" }
      },
      {
        base_stat: 20,
        effort: 0,
        stat: { name: "attack", url: "https://pokeapi.co/api/v2/stat/2/" }
      },
      {
        base_stat: 50,
        effort: 0,
        stat: { name: "hp", url: "https://pokeapi.co/api/v2/stat/1/" }
      }
    ]
  },
  {
    id: 12,
    name: "butterfree",
    types: ["flying", "bug"],
    abilities: ["tinted-lens", "compound-eyes"],
    sprites: {
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/12.png",
      back_female:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/12.png",
      back_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/12.png",
      back_shiny_female:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/female/12.png",
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      front_female:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/12.png",
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/12.png",
      front_shiny_female:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/12.png"
    },
    weight: 320,
    height: 11,
    stats: [
      {
        base_stat: 70,
        effort: 0,
        stat: { name: "speed", url: "https://pokeapi.co/api/v2/stat/6/" }
      },
      {
        base_stat: 80,
        effort: 1,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/"
        }
      },
      {
        base_stat: 90,
        effort: 2,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/"
        }
      },
      {
        base_stat: 50,
        effort: 0,
        stat: { name: "defense", url: "https://pokeapi.co/api/v2/stat/3/" }
      },
      {
        base_stat: 45,
        effort: 0,
        stat: { name: "attack", url: "https://pokeapi.co/api/v2/stat/2/" }
      },
      {
        base_stat: 60,
        effort: 0,
        stat: { name: "hp", url: "https://pokeapi.co/api/v2/stat/1/" }
      }
    ]
  },
  {
    id: 13,
    name: "weedle",
    types: ["poison", "bug"],
    abilities: ["run-away", "shield-dust"],
    sprites: {
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/13.png",
      back_female: null,
      back_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/13.png",
      back_shiny_female: null,
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
      front_female: null,
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/13.png",
      front_shiny_female: null
    },
    weight: 32,
    height: 3,
    stats: [
      {
        base_stat: 50,
        effort: 1,
        stat: { name: "speed", url: "https://pokeapi.co/api/v2/stat/6/" }
      },
      {
        base_stat: 20,
        effort: 0,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/"
        }
      },
      {
        base_stat: 20,
        effort: 0,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/"
        }
      },
      {
        base_stat: 30,
        effort: 0,
        stat: { name: "defense", url: "https://pokeapi.co/api/v2/stat/3/" }
      },
      {
        base_stat: 35,
        effort: 0,
        stat: { name: "attack", url: "https://pokeapi.co/api/v2/stat/2/" }
      },
      {
        base_stat: 40,
        effort: 0,
        stat: { name: "hp", url: "https://pokeapi.co/api/v2/stat/1/" }
      }
    ]
  },
  {
    id: 14,
    name: "kakuna",
    types: ["poison", "bug"],
    abilities: ["shed-skin"],
    sprites: {
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/14.png",
      back_female: null,
      back_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/14.png",
      back_shiny_female: null,
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
      front_female: null,
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/14.png",
      front_shiny_female: null
    },
    weight: 100,
    height: 6,
    stats: [
      {
        base_stat: 35,
        effort: 0,
        stat: { name: "speed", url: "https://pokeapi.co/api/v2/stat/6/" }
      },
      {
        base_stat: 25,
        effort: 0,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/"
        }
      },
      {
        base_stat: 25,
        effort: 0,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/"
        }
      },
      {
        base_stat: 50,
        effort: 2,
        stat: { name: "defense", url: "https://pokeapi.co/api/v2/stat/3/" }
      },
      {
        base_stat: 25,
        effort: 0,
        stat: { name: "attack", url: "https://pokeapi.co/api/v2/stat/2/" }
      },
      {
        base_stat: 45,
        effort: 0,
        stat: { name: "hp", url: "https://pokeapi.co/api/v2/stat/1/" }
      }
    ]
  },
  {
    id: 15,
    name: "beedrill",
    types: ["poison", "bug"],
    abilities: ["sniper", "swarm"],
    sprites: {
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/15.png",
      back_female: null,
      back_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/15.png",
      back_shiny_female: null,
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
      front_female: null,
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/15.png",
      front_shiny_female: null
    },
    weight: 295,
    height: 10,
    stats: [
      {
        base_stat: 75,
        effort: 0,
        stat: { name: "speed", url: "https://pokeapi.co/api/v2/stat/6/" }
      },
      {
        base_stat: 80,
        effort: 1,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/"
        }
      },
      {
        base_stat: 45,
        effort: 0,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/"
        }
      },
      {
        base_stat: 40,
        effort: 0,
        stat: { name: "defense", url: "https://pokeapi.co/api/v2/stat/3/" }
      },
      {
        base_stat: 90,
        effort: 2,
        stat: { name: "attack", url: "https://pokeapi.co/api/v2/stat/2/" }
      },
      {
        base_stat: 65,
        effort: 0,
        stat: { name: "hp", url: "https://pokeapi.co/api/v2/stat/1/" }
      }
    ]
  },
  {
    id: 16,
    name: "pidgey",
    types: ["flying", "normal"],
    abilities: ["big-pecks", "tangled-feet", "keen-eye"],
    sprites: {
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/16.png",
      back_female: null,
      back_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/16.png",
      back_shiny_female: null,
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
      front_female: null,
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/16.png",
      front_shiny_female: null
    },
    weight: 18,
    height: 3,
    stats: [
      {
        base_stat: 56,
        effort: 1,
        stat: { name: "speed", url: "https://pokeapi.co/api/v2/stat/6/" }
      },
      {
        base_stat: 35,
        effort: 0,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/"
        }
      },
      {
        base_stat: 35,
        effort: 0,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/"
        }
      },
      {
        base_stat: 40,
        effort: 0,
        stat: { name: "defense", url: "https://pokeapi.co/api/v2/stat/3/" }
      },
      {
        base_stat: 45,
        effort: 0,
        stat: { name: "attack", url: "https://pokeapi.co/api/v2/stat/2/" }
      },
      {
        base_stat: 40,
        effort: 0,
        stat: { name: "hp", url: "https://pokeapi.co/api/v2/stat/1/" }
      }
    ]
  },
  {
    id: 17,
    name: "pidgeotto",
    types: ["flying", "normal"],
    abilities: ["big-pecks", "tangled-feet", "keen-eye"],
    sprites: {
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/17.png",
      back_female: null,
      back_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/17.png",
      back_shiny_female: null,
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
      front_female: null,
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/17.png",
      front_shiny_female: null
    },
    weight: 300,
    height: 11,
    stats: [
      {
        base_stat: 71,
        effort: 2,
        stat: { name: "speed", url: "https://pokeapi.co/api/v2/stat/6/" }
      },
      {
        base_stat: 50,
        effort: 0,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/"
        }
      },
      {
        base_stat: 50,
        effort: 0,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/"
        }
      },
      {
        base_stat: 55,
        effort: 0,
        stat: { name: "defense", url: "https://pokeapi.co/api/v2/stat/3/" }
      },
      {
        base_stat: 60,
        effort: 0,
        stat: { name: "attack", url: "https://pokeapi.co/api/v2/stat/2/" }
      },
      {
        base_stat: 63,
        effort: 0,
        stat: { name: "hp", url: "https://pokeapi.co/api/v2/stat/1/" }
      }
    ]
  },
  {
    id: 18,
    name: "pidgeot",
    types: ["flying", "normal"],
    abilities: ["big-pecks", "tangled-feet", "keen-eye"],
    sprites: {
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/18.png",
      back_female: null,
      back_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/18.png",
      back_shiny_female: null,
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
      front_female: null,
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/18.png",
      front_shiny_female: null
    },
    weight: 395,
    height: 15,
    stats: [
      {
        base_stat: 101,
        effort: 3,
        stat: { name: "speed", url: "https://pokeapi.co/api/v2/stat/6/" }
      },
      {
        base_stat: 70,
        effort: 0,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/"
        }
      },
      {
        base_stat: 70,
        effort: 0,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/"
        }
      },
      {
        base_stat: 75,
        effort: 0,
        stat: { name: "defense", url: "https://pokeapi.co/api/v2/stat/3/" }
      },
      {
        base_stat: 80,
        effort: 0,
        stat: { name: "attack", url: "https://pokeapi.co/api/v2/stat/2/" }
      },
      {
        base_stat: 83,
        effort: 0,
        stat: { name: "hp", url: "https://pokeapi.co/api/v2/stat/1/" }
      }
    ]
  },
  {
    id: 19,
    name: "rattata",
    types: ["normal"],
    abilities: ["hustle", "guts", "run-away"],
    sprites: {
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/19.png",
      back_female:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/19.png",
      back_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/19.png",
      back_shiny_female:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/female/19.png",
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
      front_female:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/19.png",
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/19.png",
      front_shiny_female:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/19.png"
    },
    weight: 35,
    height: 3,
    stats: [
      {
        base_stat: 72,
        effort: 1,
        stat: { name: "speed", url: "https://pokeapi.co/api/v2/stat/6/" }
      },
      {
        base_stat: 35,
        effort: 0,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/"
        }
      },
      {
        base_stat: 25,
        effort: 0,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/"
        }
      },
      {
        base_stat: 35,
        effort: 0,
        stat: { name: "defense", url: "https://pokeapi.co/api/v2/stat/3/" }
      },
      {
        base_stat: 56,
        effort: 0,
        stat: { name: "attack", url: "https://pokeapi.co/api/v2/stat/2/" }
      },
      {
        base_stat: 30,
        effort: 0,
        stat: { name: "hp", url: "https://pokeapi.co/api/v2/stat/1/" }
      }
    ]
  },
  {
    id: 20,
    name: "raticate",
    types: ["normal"],
    abilities: ["hustle", "guts", "run-away"],
    sprites: {
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/20.png",
      back_female:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/20.png",
      back_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/20.png",
      back_shiny_female:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/female/20.png",
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
      front_female:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/20.png",
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/20.png",
      front_shiny_female:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/20.png"
    },
    weight: 185,
    height: 7,
    stats: [
      {
        base_stat: 97,
        effort: 2,
        stat: { name: "speed", url: "https://pokeapi.co/api/v2/stat/6/" }
      },
      {
        base_stat: 70,
        effort: 0,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/"
        }
      },
      {
        base_stat: 50,
        effort: 0,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/"
        }
      },
      {
        base_stat: 60,
        effort: 0,
        stat: { name: "defense", url: "https://pokeapi.co/api/v2/stat/3/" }
      },
      {
        base_stat: 81,
        effort: 0,
        stat: { name: "attack", url: "https://pokeapi.co/api/v2/stat/2/" }
      },
      {
        base_stat: 55,
        effort: 0,
        stat: { name: "hp", url: "https://pokeapi.co/api/v2/stat/1/" }
      }
    ]
  }
];
