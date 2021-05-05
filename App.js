import React, { useState, useEffect }  from 'react';
import  AppLoading from 'expo-app-loading';
import {
  useFonts,
  Inter_300Light,
  Inter_600SemiBold,
} from '@expo-google-fonts/inter';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import homeScreen from './src/components/homeScreen';
import temp from './src/components/temp';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      mode="modal"
      screenOptions={{
        animationEnabled: false,
        headerStyle: {
          backgroundColor: '#040F0F',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontFamily: 'Inter_600SemiBold',
        },
      }}
    >
      <Stack.Screen name="Home Screen" component={homeScreen} />
      <Stack.Screen name="Temp Screen" component={temp} />
    </Stack.Navigator>
  );
}
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
        <MyStack />
      </NavigationContainer>
    );
  }
}
