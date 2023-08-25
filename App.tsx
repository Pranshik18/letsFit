/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import AppNavigator from './app/navigators/AppNavigator';
import SplashScreen from 'react-native-splash-screen';

function App(): JSX.Element {
  useEffect(()=>{
    SplashScreen.hide();
  },[])
  return (
    <AppNavigator />
  );
}

export default App;
