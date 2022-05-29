import {StyleSheet, Dimensions, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Layout, Input, Button, Text} from '@ui-kitten/components';
import {useForm, Controller} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import {loginUserApi} from '../redux/actions/auth.actions';
const LoginScreen = ({navigation}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const dispatch = useDispatch();
  const onSubmit = data => {
    dispatch(loginUserApi(data, navigation));
  };
  return (
    <Layout style={styles.container}>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            style={styles.inputStyle}
            label="Email"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
        name="email"
      />
      {errors.email && (
        <Text status="danger" style={styles.errorStyle}>
          Email Obligatoire!.
        </Text>
      )}
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            style={styles.inputStyle}
            label="Mot de passe"
            value={value}
            secureTextEntry={true}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
        name="password"
      />
      {errors.password && (
        <Text status="danger" style={styles.errorStyle}>
          Mot de passe Obligatoire.
        </Text>
      )}
      <Button
        style={styles.btnStyle}
        status="primary"
        onPress={handleSubmit(onSubmit)}>
        {' '}
        Se Connecter
      </Button>
      <View
        style={{
          width: '100%',
          justifyContent: 'flex-start',
          alignItems: 'center',
          flexDirection: 'row',
          marginTop: 20,
        }}>
        <Text> Pas encore Inscrit ? </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('register');
          }}>
          <Text appearance={'hint'}>Cliquer Ici!</Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    flex: 1,
    justifyContent: 'center',
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
  errorStyle: {
    alignSelf: 'flex-start',
  },
});
