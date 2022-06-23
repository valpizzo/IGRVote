import React, {useState, useEffect, useContext} from 'react';
import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import {SignInContext} from './App';
import styles from '../styles.js';

export default function SignOnScreen() {
  const {signedIn, setSignIn} = useContext(SignInContext);

  const validateSignOn = () => {
    console.log('signing oxn');
    setSignIn(!signedIn);
  };

  return (
    <View style={styles.body}>
      <TextInput style={styles.input} defaultValue="username" />
      <TextInput style={styles.input} defaultValue="password" />
      <TouchableOpacity style={styles.signIn} onPress={validateSignOn}>
        <Text style={styles.header}>SIGN IN</Text>
      </TouchableOpacity>
    </View>
  );
}
