import React, {useState, useEffect, useContext} from 'react';
import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import {SignInContext} from './App';
import axios from 'axios';
import styles from '../styles.js';

export default function SignOnScreen() {
  const {signedIn, setSignIn, setInfo} = useContext(SignInContext);
  const [username, setUsername] = useState('');
  const [pw, setPw] = useState('');
  const [siFail, setFail] = useState(false);

  const handleUserChange = text => {
    setUsername(text);
  };

  const handlePwChange = text => {
    setPw(text);
  };
  const validateSignOn = () => {
    axios
      .get(`http://192.168.0.25:3000/members/${username}`)
      .then(data => {
        setInfo(data.data);
        setSignIn(!signedIn);
      })
      .catch(err => {
        setFail(true);
        console.log('Error getting members:', err);
      });
  };

  return (
    <View style={styles.body}>
      <TextInput
        style={styles.input}
        defaultValue="username"
        onChangeText={handleUserChange}
      />
      <TextInput
        style={styles.input}
        defaultValue="password"
        onChangeText={handlePwChange}
      />
      <TouchableOpacity style={styles.signIn} onPress={validateSignOn}>
        <Text style={styles.header}>SIGN IN</Text>
      </TouchableOpacity>
      {siFail ? <Text style={{color: 'red'}}>*Incorrect username or password</Text> : <></>}
    </View>
  );
}
