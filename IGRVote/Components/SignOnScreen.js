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
      .get('http://192.168.0.25:3000/members')
      .then(data => {
        for (var i = 0; i < data.data.length; i++) {
          if (
            data.data[i].username === username &&
            data.data[i].password === pw
          ) {
            setInfo(data.data[i].name);
            setSignIn(!signedIn);
            return;
          }
        }
        setFail(true);
      })
      .catch(err => {
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
