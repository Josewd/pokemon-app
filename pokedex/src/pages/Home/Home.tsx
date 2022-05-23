import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

// Types
import { Props } from './types';

const Home: React.FC<Props> = ({ navigation }: Props) => {
  return (
    <View style={style.container}>
      <Pressable onPress={() => navigation.navigate('Pokedex')}>
        <Text style={style.text}>Pokedex</Text>
      </Pressable>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: { color: 'black' },
});

export default Home;
