import React from 'react';
import { Image, Text, View } from 'react-native';

// Types
import { pokemon } from '../../pages/Pokedex/types';

// Media
import pokeball from '../../assets/pokeball.png';

// Styles
import { colorTypes } from '../../styles/theme';
import { style } from './style';
import { SharedElement } from 'react-navigation-shared-element';

type Props = {
  item: pokemon;
  height?: string;
  width?: string;
};

const Card: React.FC<Props> = (props: Props) => {
  const { item, height = 'medium', width = 'short' } = props;
  const color = colorTypes[item.types[0].type.name];
  return (
    <View style={[style.card, color, style[height], style[width]]}>
      <SharedElement id={`title.${item.id}`}>
        <Text style={style.name}>{item.name}</Text>
      </SharedElement>
      {item.types.map(type => (
        <SharedElement key={type.slot} id={`bullets.${item.id}`}>
          <View style={style.bullet}>
            <Text style={style.type}>{type.type.name}</Text>
          </View>
        </SharedElement>
      ))}
      <SharedElement style={style.image} id={`image.${item.id}`}>
        <Image style={style.image} source={{ uri: item.imageUrl }} />
      </SharedElement>
      <Image style={style.imageShadow} source={pokeball} />
    </View>
  );
};

export default Card;
