import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import styles from '../styles';
import {OpenVotesContext} from './body';
export default function Body() {
  const {ballot} = useContext(OpenVotesContext);
  return (
    <View style={styles.openVote}>
      <Text style={styles.aTitle}>{ballot.team}</Text>
      <Text>{ballot.info}</Text>
    </View>
  );
}
