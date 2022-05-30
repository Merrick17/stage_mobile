import {
  StyleSheet,
  Text,
  Dimensions,
  FlatList,
  View,
  ScrollView,
} from 'react-native';
import React, {useEffect} from 'react';
import {Layout} from '@ui-kitten/components';
import NavBar from '../components/NavBar';
import {useDispatch, useSelector} from 'react-redux';
import {getAllPariticipationsByUser} from '../redux/actions/participation.actions';
import ParticipationComp from '../components/ParticipationComp';
import UserInfoComp from '../components/UserInfoComp';
import {getAllSubscriptionsApi} from '../redux/actions/subscriptions.actions';
import FormationSub from '../components/FormationSub';

const ProfileScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {token, userInfo} = useSelector(state => state.auth);
  const {list} = useSelector(state => state.participation);
  const subState = useSelector(state => state.subscriptions);
  useEffect(() => {
    dispatch(getAllPariticipationsByUser(userInfo._id, token));
    dispatch(getAllSubscriptionsApi(userInfo._id, token));
  }, []);
  return (
    <Layout style={styles.container}>
      <NavBar title="Mon Profil" navigation={navigation} />
      <UserInfoComp userInfo={userInfo} />
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.labelStyle}>Participation (Stage/Offre)</Text>
        </View>
        <FlatList
          data={list}
          renderItem={({item}) => <ParticipationComp item={item} />}
        />
        <View style={styles.header}>
          <Text style={styles.labelStyle}>Participation (Formation)</Text>
        </View>
        <FlatList
          data={subState.list}
          renderItem={({item}) => <FormationSub item={item} />}
        />
      </ScrollView>
    </Layout>
  );
};

export default ProfileScreen;

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
  },
  header: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderColor: 'rgba(32, 32, 32, 0.2)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
    marginVertical: 20,
    backgroundColor: '#5eacff',
  },
});
