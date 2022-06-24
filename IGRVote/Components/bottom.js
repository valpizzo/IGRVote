import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import styles from '../styles.js';
import {SignInContext} from './App';

export default function Bottom() {
  const {teamInfo} = useContext(SignInContext);
  return (
    <View style={styles.botBar}>
      <Text style={styles.footer}>{teamInfo}</Text>
    </View>
  );
}
