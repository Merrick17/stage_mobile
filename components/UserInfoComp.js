import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Toggle} from '@ui-kitten/components';
const UserInfoComp = ({userInfo}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {userInfo && userInfo.firstName} {userInfo && userInfo.lastName}
      </Text>
      <Toggle checked={userInfo.isActive} onChange={val => {}}>
        {userInfo.isActive ? 'Active' : 'Desactiver'}
      </Toggle>
    </View>
  );
};

export default UserInfoComp;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 70,
    borderRadius: 10,
    borderColor: 'rgba(32, 32, 32, 0.2)',
    borderWidth: 1,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    flexDirection: 'row',
  },
  label: {
    fontSize: 17,
  },
});
