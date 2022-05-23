import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  medium: {
    height: 120,
  },
  small: {
    height: 65,
  },
  long: {
    width: 340,
  },
  short: {
    width: 160,
  },
  card: {
    borderRadius: 15,
    position: 'relative',
    overflow: 'hidden',
  },
  bullet: {
    margin: 2,
    marginHorizontal: 10,
    backgroundColor: '#ffffff6a',
    width: 60,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  type: {
    fontWeight: 'bold',
    color: 'white',
    opacity: 0.8,
    marginBottom: 2,
  },
  image: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 80,
    height: 80,
    zIndex: 2,
  },
  imageShadow: {
    position: 'absolute',
    bottom: -6,
    right: -6,
    width: 80,
    height: 80,
    zIndex: 1,
    opacity: 0.3,
  },
  name: {
    fontSize: 18,
    color: '#f8f8f8',
    margin: 10,
    fontWeight: 'bold',
  },
});
