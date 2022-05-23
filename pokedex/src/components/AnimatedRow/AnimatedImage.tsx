import React, { useEffect } from 'react';
import { ImageSourcePropType, ImageStyle } from 'react-native';
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

// import { Container } from './styles';
type Props = {
  style: ImageStyle;
  source: ImageSourcePropType;
};
const AnimatedImage: React.FC<Props> = (props: Props) => {
  // Animation
  const animation = useSharedValue(0);
  const rotation = useDerivedValue(() => {
    return interpolate(animation.value, [0, 360], [0, 360]);
  });

  const animataionStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: rotation.value + 'deg',
        },
      ],
    };
  });

  useEffect(() => {
    animation.value = withRepeat(
      withTiming(360, { duration: 5000, easing: Easing.linear }),
      -1,
    );
  }, [animation]);
  return (
    <Animated.Image
      style={[props.style, animataionStyle]}
      source={props.source}
    />
  );
};

export default AnimatedImage;
