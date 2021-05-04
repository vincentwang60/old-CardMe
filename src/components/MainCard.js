import React, { useState, useEffect }  from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import  AppLoading from 'expo-app-loading';
import {
  useFonts,
  Inter_300Light,
} from '@expo-google-fonts/inter';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_300Light,
  });
  if (!fontsLoaded){
    return <AppLoading />;
  }
  else{
    return (
      <View style={styles.container}>
        <Text style = {[styles.welcomeText]}>Your Main Card</Text>
        <StatusBar
          barStyle = "light-content"
          backgroundColor = '#000'/>
      </View>
      <View style={styles.container}>
        <Text style = {[styles.SubTitleText]}>Your Main Card</Text>
        <StatusBar
          barStyle = "light-content"
          backgroundColor = '#000'/>
      </View>
    );
  }
}

//https://reactnative.dev/docs/style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#98CBB4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 24,
    color: '#fff',
    fontFamily: 'Inter_300Light'
  },
  SubTitleText: {
    fontSize: 24,
    color: '#B5FED9',
    fontFamily: 'Inter_300Light'
  }
});