import React, { useEffect, useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';

// Librarys
import { SharedElement } from 'react-navigation-shared-element';
import { faHeart, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { faHeart as heart } from '@fortawesome/free-regular-svg-icons';

// Media
import pokeball from '../../assets/pokeball.png';

// Style
import { colorTypes } from '../../styles/theme';
import { style } from './style';

// Types
import { pokemon } from '../Pokedex/types';

// Components
import AnimatedImage from '../../components/AnimatedRow/AnimatedImage';
import AnimatedCardRow from '../../components/AnimatedRow/AnimatedRow';
import Header from '../../components/Header/Header';
import About from './Tabs/About/About';

const PokemonDetails = ({ navigation, route }: any) => {
  const [isSaved, setIsSaved] = useState(false);
  const [selectIndex, setSelectIndex] = useState(0);
  const { item } = route?.params;
  const listItems = ['About', 'Base Stats', 'Evolution', 'Moves'];
  const color = colorTypes[item.types[0].type.name];

  const handleSelectItem = (idx: number) => {
    setSelectIndex(idx);
  };

  return (
    <View style={[style.container, color]}>
      <Header
        actionLeft={() => navigation.goBack()}
        actionRight={() => setIsSaved(!isSaved)}
        iconLeft={faArrowLeftLong}
        iconRight={isSaved ? faHeart : heart}
        iconColor="#fff"
      />
      <SharedElement style={style.image} id={`image.${item.id}`}>
        <Image style={style.image} source={{ uri: item.imageUrl }} />
      </SharedElement>
      <SharedElement id={`item.${item.id}.card`}>
        <View style={[style.card, color]}>
          <SharedElement id={`title.${item.id}`}>
            <View style={style.rowTitle}>
              <Text style={style.name}>{item.name}</Text>
              <Text style={style.id}>#0{item.id}</Text>
            </View>
          </SharedElement>
          <View style={style.row}>
            {item.types.map((type: any) => (
              <SharedElement key={type.slot} id={`bullets.${item.id}`}>
                <View style={style.bullet}>
                  <Text style={style.type}>{type.type.name}</Text>
                </View>
              </SharedElement>
            ))}
          </View>
          <AnimatedImage style={style.imageShadow} source={pokeball} />
        </View>
      </SharedElement>
      <AnimatedCardRow index={0} rowHeight={270}>
        <View style={style.infoDetail}>
          <View style={style.list}>
            {listItems.map((text, idx) => {
              if (idx === selectIndex) {
                return (
                  <Text
                    key={item + idx}
                    style={[style.listItem, style.bottomLine]}>
                    {text}
                  </Text>
                );
              } else {
                return (
                  <Pressable
                    key={item + idx}
                    onPress={() => handleSelectItem(idx)}>
                    <Text style={style.listItem}>{text}</Text>
                  </Pressable>
                );
              }
            })}
          </View>
          <About item={item} />
        </View>
      </AnimatedCardRow>
    </View>
  );
};

PokemonDetails.sharedElements = (route: { params: { item: pokemon } }) => {
  const { item } = route?.params;
  return [
    {
      id: `item.${item.id}.card`,
      animation: 'fade-in',
      resize: 'clip',
    },
    {
      id: `bullets.${item.id}`,
      animation: 'fade-in',
      resize: 'clip',
    },
    {
      id: `title.${item.id}`,
      animation: 'fade-in',
      resize: 'clip',
    },
    {
      id: `image.${item.id}`,
      animation: 'fade-in',
      resize: 'clip',
    },
  ];
};

export default PokemonDetails;
