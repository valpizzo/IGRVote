import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import styles from '../styles.js';
import {SignInContext} from './App';
import AddBallot from './AddBallot';

export default function Bottom() {
  const {teamInfo} = useContext(SignInContext);
  return (
    <View style={styles.botBar}>
      {teamInfo === 'Admin' ? <AddBallot /> : <></>}
      <Text style={styles.footer}>{teamInfo}</Text>
      {teamInfo === 'Admin' ? <Text></Text> : <></>}
    </View>
  );
}
