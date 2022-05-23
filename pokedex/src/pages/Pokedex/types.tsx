// Core
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainRouteParamType } from '../../routes/types';

export type pokemonType = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

export type pokemon = {
  name: string;
  id: number;
  imageUrl: string;
  height: number;
  weight: number;
  types: pokemonType[];
  stats: [
    {
      base_stat: number;
      effort: number;
      name: string;
    },
  ];
};

export type result = {
  name: string;
  url: string;
};

export type Props = NativeStackScreenProps<MainRouteParamType, 'Pokedex'>;
