import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    marginVertical: 2.5,
    width: '100%',
    justifyContent: 'space-around',
  },
  infoDetail: {
    position: 'absolute',
    bottom: -600,
  },
  flatList: {
    paddingTop: 40,
  },
});
