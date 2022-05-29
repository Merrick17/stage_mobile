import {StyleSheet, FlatList, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import {Layout} from '@ui-kitten/components';
import NavBar from '../components/NavBar';
import {useDispatch, useSelector} from 'react-redux';
import {getAllFormationsApi} from '../redux/actions/formation.action';
import FormationComp from '../components/FormationComp';
const FormationScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {token} = useSelector(state => state.auth);
  const {list} = useSelector(state => state.formations);
  useEffect(() => {
    dispatch(getAllFormationsApi(token));
  }, []);
  return (
    <Layout style={styles.container}>
      <NavBar title="Formations" navigation={navigation} />
      <FlatList
        data={list}
        renderItem={({item}) => <FormationComp item={item} />}
      />
    </Layout>
  );
};

export default FormationScreen;

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
