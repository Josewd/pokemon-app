import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Types
import { MainRouteParamType } from './types';

// Pages
import Home from '../pages/Home/Home';
import Pokedex from '../pages/Pokedex/Pokedex';
import PokemonDetails from '../pages/PokemonDetails/PokemonDetails';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

const Stack = createSharedElementStackNavigator<MainRouteParamType>();

const Routes: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{header: () => null}} initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Pokedex" component={Pokedex} />
      <Stack.Screen name="PokemonDetails" component={PokemonDetails} />
    </Stack.Navigator>
  );
};

export default Routes;
