import {StyleSheet, View, Image, Dimensions} from 'react-native';
import React from 'react';
import {Layout, Button, Card, Text} from '@ui-kitten/components';
import {BASE_URL} from '../utils/apiHelpers';

import {useState} from 'react';
const FormationComp = ({item}) => {
  return (
    <>
      <Card
        style={styles.card}
        status="info"
        header={() => {
          return (
            <View style={{padding: 10}}>
              <Text category="h6">{item && item.title}</Text>
              <Text category="s1">
                Ajouter par: {item && item.addedBy && item.addedBy.nom}
              </Text>
            </View>
          );
        }}
        footer={() => {
          return (
            <View style={styles.footerContainer}>
              <Button style={styles.footerControl} size="small">
                S'inscrire
              </Button>
            </View>
          );
        }}>
        <View>
          <Image
            source={{uri: `${BASE_URL}/${item.image}`}}
            style={styles.image}
          />
          <Text>{item && item.desc}</Text>
        </View>
      </Card>
    </>
  );
};

export default FormationComp;

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    marginVertical: 20,
    width: Dimensions.get('screen').width * 0.9,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10,
  },
  footerControl: {
    marginHorizontal: 2,
    width: '50%',
  },
  btnStyle: {
    width: '100%',
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
    marginVertical: 10,
  },
});
