import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

let x;
x = 1

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Making another change to test asdfthings!</Text>
      <TextInput onKeyPress={ nativeEvent: { key: 'Enter' } }>
      </TextInput>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: string(x),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
