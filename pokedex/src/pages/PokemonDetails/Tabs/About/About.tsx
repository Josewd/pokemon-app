// Core
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Service
import { api } from '../../../../service/api';

// Types
import { pokemon } from '../../../Pokedex/types';

type aboutProps = { item: pokemon };
type about = {
  description: string;
  height: number;
  weight: number;
  habitat: string;
  eggGroups: [{ name: string; url: string }];
};
const About: React.FC<aboutProps> = ({ item }) => {
  const [aboutInfo, setAboutInfo] = useState({} as about);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    let newAbout: about = {
      description: '',
      eggGroups: [{ name: '', url: '' }],
      habitat: '',
      weight: 0,
      height: 0,
    };
    api
      .get(`pokemon-species/${item.id}`)
      .then(res => {
        console.log(res.data);
        newAbout.description = res.data.flavor_text_entries
          .filter((flavor: any) => {
            if (flavor.language.name === 'en') {
              return flavor.flavor_text;
            }
          })[0].flavor_text.split('\n').join(' ');
        newAbout.eggGroups = res.data.egg_groups;
        newAbout.habitat = res.data.habitat.name;
        newAbout.height = item.height / 10;
        newAbout.weight = item.weight / 10;
      })
      .finally(() => {
        setAboutInfo(newAbout);
        setIsLoading(false);
      });
  }, [item]);
  return (
    <View>
      {!isLoading && (
        <>
          <Text style={style.description}>{aboutInfo.description}</Text>
          <View style={style.card}>
            <View style={style.section}>
              <Text style={style.label}>Height</Text>
              <Text style={style.text}>
                {aboutInfo.height}
                {aboutInfo.height >= 1 ? ' m' : ' cm'}
              </Text>
            </View>
            <View style={style.section}>
              <Text style={style.label}>Weight</Text>
              <Text style={style.text}>{aboutInfo.weight} Kilos</Text>
            </View>
          </View>
          <Text style={style.title}>Breeding</Text>
          <View style={style.sectionLine}>
            <Text style={style.label}>Habitat: </Text>
            <Text style={style.text}>{aboutInfo.habitat}</Text>
          </View>
          <View style={style.sectionLine}>
            <Text style={style.label}>Egg Groups: </Text>
            <Text style={style.text}>
              {aboutInfo.eggGroups?.map((egg, idx, arr) => {
                if (idx === arr.length - 1) {
                  return (
                    <React.Fragment key={egg.name}> {egg.name}</React.Fragment>
                  );
                } else {
                  return (
                    <React.Fragment key={egg.name}>{egg.name},</React.Fragment>
                  );
                }
              })}
            </Text>
          </View>
        </>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  container: {},
  card: {
    elevation: 4,
    height: 80,
    width: '90%',
    borderRadius: 5,
    backgroundColor: '#fff',
    marginHorizontal: '5%',
    marginVertical: 20,
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
  },
  section: {
    flex: 1,
    margin: 20,
    height: '50%',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  sectionLine: {
    flexDirection: 'row',
    marginHorizontal: 20,
    height: 30,
    alignItems: 'flex-start',
  },
  description: {
    fontSize: 14,
    color: '#000',
    marginHorizontal: 20,
    marginTop: 40,
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#706e6e85',
  },
  text: {
    marginLeft: 10,
    fontWeight: 'bold',
    color: '#000000',
  },
  title: {
    marginLeft: 20,
    marginVertical: 15,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
  },
});

export default About;
