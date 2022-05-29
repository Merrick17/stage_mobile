import {StyleSheet, FlatList, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import {Layout} from '@ui-kitten/components';
import NavBar from '../components/NavBar';
import OffreCom from '../components/OffreCom';
import {useDispatch, useSelector} from 'react-redux';
import {getAllOffersByTypeApi} from '../redux/actions/offer.actions';

const OffreScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {token} = useSelector(state => state.auth);
  const {list} = useSelector(state => state.offer);
  useEffect(() => {
    dispatch(getAllOffersByTypeApi('OFFRE', token));
  }, []);
  return (
    <Layout style={styles.container}>
      <NavBar title="Offre d'emploi " navigation={navigation} />
      <FlatList data={list} renderItem={({item}) => <OffreCom item={item} />} />
    </Layout>
  );
};

export default OffreScreen;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
  inputStyle: {
    marginVertical: 10,
  },
  btnStyle: {
    width: '90%',
    marginTop: 10,
  },
  labelStyle: {
    fontSize: 17,
    color: '#FFF',
    marginVertical: 20,
  },
});
