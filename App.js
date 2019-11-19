/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { SafeAreaView } from 'react-native';
import { useScreens } from 'react-native-screens';
import { Provider } from 'react-redux';
import AppNavigator from './js/AppNavigator';
import store from './js/store';

useScreens();

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <AppNavigator />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
