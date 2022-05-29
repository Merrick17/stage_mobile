import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import LoginScreen from '../views/LoginScreen';
import RegisterScreen from '../views/RegisterScreen';
import DrawerNav from './DrawerNav';
const Stack = createNativeStackNavigator();

const MainStackNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="register" component={RegisterScreen} />
      <Stack.Screen name="main" component={DrawerNav} />
    </Stack.Navigator>
  );
};

export default MainStackNav;
