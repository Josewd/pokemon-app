import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  card: {
    height: 220,
    width: 360,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  rowTitle: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bullet: {
    margin: 2,
    marginHorizontal: 2,
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
    top: 90,
    right: '36%',
    width: 160,
    height: 160,
    transform: [{ translateX: 50 }],
    zIndex: 9999999,
  },
  imageShadow: {
    position: 'absolute',
    bottom: 0,
    right: '28%',
    transform: [{ translateX: 50 }],
    width: 140,
    height: 140,
    zIndex: 0,
    opacity: 0.2,
  },
  name: {
    fontSize: 24,
    color: '#f8f8f8',
    margin: 10,
    fontWeight: 'bold',
  },
  id: {
    fontSize: 18,
    color: '#f8f8f8',
    margin: 10,
    fontWeight: 'bold',
  },
  infoDetail: {
    height: '120%',
    width: '100%',
    borderRadius: 30,
    backgroundColor: '#f8f8f8',
  },
  list: {
    width: '80%',
    flexDirection: 'row',
    marginHorizontal: '10%',
    marginTop: 30,
    justifyContent: 'space-between',
  },
  listItem: {
    color: '#363535',
  },
  bottomLine: {
    color: '#000',
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderColor: '#9769A7',
  },
});
