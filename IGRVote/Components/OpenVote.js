import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import styles from '../styles';
import {OpenVotesContext} from './body';
import VoteButtons from './VoteButtons';
export default function Body() {
  const {ballot} = useContext(OpenVotesContext);
  return (
    <View style={styles.openVote}>
      <Text style={styles.aTitle}>{ballot.Applicant}</Text>
      <Text>{ballot.Info}</Text>
      <VoteButtons />
    </View>
  );
}
