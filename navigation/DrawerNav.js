import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import OffreScreen from '../views/OffreScreen';
import StageScreen from '../views/StageScreen';
import FormationScreen from '../views/FormationScreen';
import ProfileScreen from '../views/ProfileScreen';
const Drawer = createDrawerNavigator();
const DrawerNav = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Emploi"
      screenOptions={{
        headerShown: false,
        unmountOnBlur: true,
        drawerStyle: {
          backgroundColor: '#222B45',
          width: 240,
        },
        drawerLabelStyle: {
          color: '#FFF',
        },
      }}>
      <Drawer.Screen name="Emploi" component={OffreScreen} />
      <Drawer.Screen name="Stages" component={StageScreen} />
      <Drawer.Screen name="Formation" component={FormationScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNav;

const styles = StyleSheet.create({});
