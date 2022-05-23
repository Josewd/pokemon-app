import React, { useEffect } from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flex: 1,
    marginVertical: 2.5,
    width: '100%',
    justifyContent: 'space-around',
  },
});

type Prop = {
  rowHeight: number;
  index: number;
  children: React.ReactNode;
};
const AnimatedCardRow = ({ index, children, rowHeight }: Prop) => {
  const value = index === 0 ? 800 : rowHeight * index * 8;
  const offset = useSharedValue(value);

  useEffect(() => {
    setTimeout(() => {
      offset.value = 5;
    }, 1);
    return () => {
      offset.value = index === 0 ? 800 : rowHeight * index * 8;
    };
  }, [index, offset, rowHeight]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withSpring(offset.value, {
            mass: 1,
            damping: 20,
          }),
        },
      ],
    };
  });
  return (
    <Animated.View style={[style.row, animatedStyle]}>{children}</Animated.View>
  );
};

export default AnimatedCardRow;
