import { pokemon } from '../pages/Pokedex/types';

export type MainRouteParamType = {
  Home: undefined;
  Pokedex: undefined;
  PokemonDetails: { item: pokemon };
};
