import {StyleSheet, Text, Dimensions} from 'react-native';
import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {NavigationContainer} from '@react-navigation/native';
import MainStackNav from './navigation/MainNav';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {Provider} from 'react-redux';
import store from './redux/store';
import {ToastProvider} from 'react-native-toast-notifications';
const App = () => {
  return (
    <Provider store={store}>
      <ToastProvider>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva.light}>
          <NavigationContainer>
            <MainStackNav />
          </NavigationContainer>
        </ApplicationProvider>
      </ToastProvider>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
});
