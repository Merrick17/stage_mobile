import {StyleSheet, View, Image, Dimensions} from 'react-native';
import React from 'react';
import {Layout, Button, Card, Text} from '@ui-kitten/components';
import {BASE_URL} from '../utils/apiHelpers';

import {useState} from 'react';
import {useToast} from 'react-native-toast-notifications';
import {useDispatch, useSelector} from 'react-redux';
import {addFormationParticipationApi} from '../redux/actions/formation.action';
const FormationSub = ({item}) => {
  const toast = useToast();
  const dispatch = useDispatch();
  const {token, userInfo} = useSelector(state => state.auth);
  const displayStatus = status => {
    switch (status) {
      case 'EN_COURS':
        return 'En cours';
      case 'CONFIRMED':
        return 'Confirmer';
      case 'REFUSED':
        return 'Refuser';
      default:
        return 'En Cours';
    }
  };
  return (
    <>
      <Card
        style={styles.card}
        status="info"
        header={() => {
          return (
            <View style={{padding: 10}}>
              <Text category="h6">
                {item && item.course && item.course.title}
              </Text>
              <Text category="s1">ETAT: {displayStatus(item.confirmed)}</Text>
            </View>
          );
        }}
        footer={() => {
          return (
            <View style={styles.footerContainer}>
              <Button
                style={styles.footerControl}
                size="small"
                status={'danger'}
                onPress={() => {
                  dispatch(
                    addFormationParticipationApi(
                      {
                        sendedBy: userInfo._id,
                        course: item._id,
                      },
                      token,
                      toast,
                    ),
                  );
                }}>
                Annuler
              </Button>
            </View>
          );
        }}>
        <View>
          <Image
            source={{uri: `${BASE_URL}/${item.course.image}`}}
            style={styles.image}
          />
          <Text>{item && item.course.desc}</Text>
        </View>
      </Card>
    </>
  );
};

export default FormationSub;

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
    width: '100%',
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
