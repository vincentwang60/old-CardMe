import React, { useState, useEffect }  from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {
  useFonts,
  Inter_300Light,
} from '@expo-google-fonts/inter';

export default function temp() {
  return (
    <View style={styles.container}>
      <Text style = {[styles.welcomeText]}>Temp screen</Text>
      <StatusBar
        barStyle = "light-content"
        backgroundColor = '#000'/>
    </View>
  );
}

//https://reactnative.dev/docs/style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#325F71',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 24,
    color: '#fff',
    fontFamily: 'Inter_300Light'
  }
});