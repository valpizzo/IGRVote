import React, {useState, useContext} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from '../styles.js';
import {SignInContext} from './App';

export default function AddBallot() {
  const {teamInfo, form, setForm} = useContext(SignInContext);

  const addBallot = () => {
    setForm(!form);
  };

  return (
    <View>
      <TouchableOpacity style={styles.addBallot} onPress={addBallot}>
        <Text style={styles.addBalText}>{form ? 'CANCEL' : 'ADD'} BALLOT</Text>
      </TouchableOpacity>
    </View>
  );
}
