import { faArrowLeftLong, faBars } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SharedElement } from 'react-navigation-shared-element';

// Components
import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header';
import AnimatedCardRow from '../../components/AnimatedRow/AnimatedRow';

// Service
import { api } from '../../service/api';

// Style
import { style } from './style';

// Types
import { pokemon, Props } from './types';

const Pokedex: React.FC<Props> = ({ navigation }) => {
  const [pokemonsList, setPokemonsList] = useState<Array<pokemon[]>>([]);
  const [nextRequest, setNextRequest] = useState('/pokemon/?limit=50&offset=0');

  const requestPokemonsList = () => {
    api.get(nextRequest).then(res => {
      const { results } = res.data;
      setNextRequest(res.data.next);
      let countPair = 0;
      let pairItem: pokemon[] = [];
      results?.forEach((obj: { url: string }) => {
        const endpoint = obj.url.split('v2')[1];
        api.get(endpoint).then(response => {
          const item = response.data;
          const newPokemon: pokemon = {
            id: item.id,
            name: item.name,
            types: item.types,
            height: item.height,
            weight: item.weight,
            imageUrl: item.sprites.other['official-artwork'].front_default,
            stats: item.stats.map((stat: any) => {
              return {
                base_stat: stat.base_stat,
                effort: stat.effort,
                name: stat.stat.name,
              };
            }),
          };
          if (countPair === 0) {
            pairItem.push(newPokemon);
            countPair = countPair + 1;
          } else {
            pairItem.push(newPokemon);
            setPokemonsList(
              previuosList => (previuosList = [...previuosList, pairItem]),
            );
            countPair = 0;
            pairItem = [];
          }
        });
      });
    });
  };

  const renderItem = (item: pokemon[], idx: number) => {
    return (
      <AnimatedCardRow rowHeight={120} index={idx}>
        {item.map((poke: pokemon) => (
          <TouchableOpacity
            key={poke.name}
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate('PokemonDetails', { item: poke })
            }>
            <SharedElement id={`item.${poke.id}.card`}>
              <Card item={poke} />
            </SharedElement>
          </TouchableOpacity>
        ))}
      </AnimatedCardRow>
    );
  };

  useEffect(() => {
    requestPokemonsList();
  }, []);

  return (
    <SafeAreaView style={style.container}>
      <Header
        actionLeft={() => navigation.goBack()}
        actionRight={() => null}
        iconLeft={faArrowLeftLong}
        iconRight={faBars}
        iconColor="#000"
        title="Pokedex"
        aquaMark
      />
      {pokemonsList.length > 0 && (
        <FlatList
          style={style.flatList}
          data={pokemonsList}
          renderItem={({ item, index }) => renderItem(item, index)}
          keyExtractor={(item: pokemon[], idx) => item[0].id + idx.toString()}
          onEndReached={() => requestPokemonsList()}
          ListFooterComponent={
            <ActivityIndicator color={'blue'} style={{ marginVertical: 50 }} />
          }
        />
      )}
    </SafeAreaView>
  );
};

export default Pokedex;
