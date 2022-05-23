import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

// Librarys
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

// Media
import pokeball_dark from '../../assets/pokeball-dark.png';

type Props = {
  actionLeft: () => void;
  actionRight: () => void;
  iconLeft: IconDefinition;
  iconRight: IconDefinition;
  iconColor?: string;
  iconSize?: number;
  aquaMark?: boolean;
  title?: string;
};

const Header: React.FC<Props> = (props: Props) => {
  const {
    actionLeft,
    actionRight,
    iconLeft,
    iconRight,
    iconColor,
    iconSize,
    title,
    aquaMark = false,
  } = props;

  const color = iconColor || '#000';
  const size = iconSize || 20;

  return (
    <View>
      <View style={style.header}>
        {aquaMark && <Image source={pokeball_dark} style={style.image} />}
        <Pressable style={style.iconButtons} onPress={actionLeft}>
          <FontAwesomeIcon icon={iconLeft} size={size} color={color} />
        </Pressable>
        <Pressable onPress={actionRight} style={style.iconButtons}>
          <FontAwesomeIcon icon={iconRight} size={size} color={color} />
        </Pressable>
      </View>
      {title && <Text style={style.title}>{title}</Text>}
    </View>
  );
};

const style = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: 40,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
  },
  iconButtons: {
    padding: 5,
  },
  title: {
    color: '#171616',
    fontWeight: 'bold',
    fontSize: 25,
    marginLeft: 20,
  },
  image: {
    width: 200,
    height: 200,
    opacity: 0.1,
    position: 'absolute',
    top: -87,
    right: -65,
  },
});

export default Header;
