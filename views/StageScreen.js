import {StyleSheet, FlatList, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import {Layout} from '@ui-kitten/components';
import NavBar from '../components/NavBar';
import StageComp from '../components/StageComp';
import {useSelector, useDispatch} from 'react-redux';
import {getAllOffersByTypeApi} from '../redux/actions/offer.actions';
const StageScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {token} = useSelector(state => state.auth);
  const {list} = useSelector(state => state.offer);
  useEffect(() => {
    dispatch(getAllOffersByTypeApi('STAGE', token));
  }, []);
  return (
    <Layout style={styles.container}>
      <NavBar title="Offre de stage" navigation={navigation} />
      <FlatList
        data={list}
        renderItem={({item}) => <StageComp item={item} />}
      />
    </Layout>
  );
};

export default StageScreen;

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
