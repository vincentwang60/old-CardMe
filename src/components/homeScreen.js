import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {styles.welcomeText}>Making another asdfadf to test things!</Text>
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
    //fontFamily: arial,
    color: '#fff'
  }
});
