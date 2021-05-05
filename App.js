import React, { useState, useEffect }  from 'react';
import  AppLoading from 'expo-app-loading';
import {
  useFonts,
  Inter_300Light,
  Inter_600SemiBold,
} from '@expo-google-fonts/inter';
import { NavigationContainer } from '@react-navigation/native';
import { RootDrawerNavigator } from './src/navigator/rootDrawer.js';

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 50,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_300Light,
    Inter_600SemiBold,
  });
  if (!fontsLoaded){
    return <AppLoading />;
  }
  else{
    return (
      <NavigationContainer>
        <RootDrawerNavigator />
      </NavigationContainer>
    );
  }
}
