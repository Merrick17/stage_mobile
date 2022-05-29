import {StyleSheet, View, Dimensions, TouchableOpacity} from 'react-native';
import React from 'react';
import {Layout, Input, Button, Text} from '@ui-kitten/components';
import {useForm, Controller} from 'react-hook-form';
const RegisterScreen = ({navigation}) => {
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
            label="Prénom"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
        name="name"
      />
      {errors.name && (
        <Text status="danger" style={styles.errorStyle}>
          Prénom Obligatoire!.
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
            label="Nom"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
        name="lastName"
      />
      {errors.lastName && (
        <Text status="danger" style={styles.errorStyle}>
          Nom Obligatoire!.
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
            label="Numéro Téléphone"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
        name="phoneNumber"
      />
      {errors.phoneNumber && (
        <Text status="danger" style={styles.errorStyle}>
          Nom Obligatoire!.
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
        <Text> Déja Inscrit ? </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.pop();
          }}>
          <Text appearance={'hint'}>Cliquer Ici!</Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

export default RegisterScreen;

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
});
