import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainRouteParamType } from '../../routes/types';

export type Props = NativeStackScreenProps<
  MainRouteParamType,
  'PokemonDetails'
>;
