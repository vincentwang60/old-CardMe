import React, { useState, useEffect }  from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import {
  useFonts,
  Inter_300Light,
} from '@expo-google-fonts/inter';

import Amplify, { Auth } from "aws-amplify"
import AWSConfig from '../../aws-exports'
Amplify.configure(AWSConfig)


export default function temp( {navigation} ) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  function signUp(gUsername, gPassword, gEmail)  {
    Auth.signUp({
      username: gUsername,
      password: gPassword,
      attributes: {
        email: gEmail
      }
    })
    .then(()=>console.log('success!'))
    .catch(err=> console.log('error!',err))
    navigation.navigate('Log In Screen')
  }
  return (
    <View style={styles.container}>
      <TextInput
        label="Username"
        placeholder="Set Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
        style={styles.welcomeText}
      />
      <TextInput
        label="Password"
        placeholder="Set Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={styles.welcomeText}
      />
      <TextInput
        label="Email"
        placeholder="Set Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.welcomeText}
      />
    <TouchableOpacity onPress={() => signUp(username, password, email)}>
         <Text style = {[styles.buttonText]}>
             Sign Up
         </Text>
      </TouchableOpacity >
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
  },
  buttonText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: '#AACCDA',
    fontSize: 20,
    color: 'black',
    fontFamily: 'Inter_600SemiBold',
  }
});
