import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {createRef, useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import AuthFlow from './AuthFlow';
import AppFlow from './AppFlow';
// import {AppProvider} from '../context/AppContext';

const navigationRef = createRef(navigationRef);
const AllStack = createStackNavigator();

const App = () => {
  return (
    // <Provider store={store}>
    // <PersistGate loading={null} persistor={persistor}>
    // <AppProvider>
    <NavigationContainer ref={navigationRef}>
      <StatusBar barStyle={'dark-content'} />
      <AllStack.Navigator screenOptions={{headerShown: false}}>
        <AllStack.Screen name="Auth" component={AuthFlow} />
        <AllStack.Screen name="App" component={AppFlow} />
      </AllStack.Navigator>
      {/* <FlashMessage position="top" /> */}
    </NavigationContainer>
    // </AppProvider>

    // </PersistGate>
    // </Provider>
  );
};
export {App, navigationRef};

const styles = StyleSheet.create({});
