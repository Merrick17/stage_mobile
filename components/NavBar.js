import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Icon, Text, Divider} from '@ui-kitten/components';

const NavBar = ({title = '', navigation}) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerContent}>
        <TouchableOpacity
          style={styles.btnStyle}
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Icon name={'menu-outline'} fill="#000" style={styles.iconStyle} />
        </TouchableOpacity>

        <Text style={styles.titleStyle}>{title}</Text>
        <TouchableOpacity
          style={styles.btnStyle}
          onPress={() => {
            navigation.replace('login');
          }}>
          <Icon name={'log-out-outline'} fill="#000" style={styles.iconStyle} />
        </TouchableOpacity>
      </View>
      <Divider />
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  headerContent: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    height: 60,
  },
  header: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-start',

    height: 60,
    borderColor: 'rgba(32, 32, 32, 0.2)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
    marginVertical: 8,
  },
  iconStyle: {
    // color: '#FFF',
    height: 24,
    width: 24,
  },
  titleStyle: {
    fontSize: 17,
  },
  btnStyle: {
    justifyContent: 'center',
    alignItems: 'center',

    width: 50,
  },
});
