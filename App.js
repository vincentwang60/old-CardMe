import React, { useState, useEffect }  from 'react';
import  AppLoading from 'expo-app-loading';
import {
  useFonts,
  Inter_300Light,
} from '@expo-google-fonts/inter';
import Navigator from './src/navigator/homeStack';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_300Light,
  });
  if (!fontsLoaded){
    return <AppLoading />;
  }
  else{
    return (
      <Navigator />
    );
  }
}
