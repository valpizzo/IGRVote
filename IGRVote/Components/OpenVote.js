import React, {useContext} from 'react';
import {Text, View, ScrollView} from 'react-native';
import styles from '../styles';
import {OpenVotesContext} from './body';
import VoteButtons from './VoteButtons';
export default function Body() {
  const {ballot} = useContext(OpenVotesContext);
  return (
    <View style={styles.openVote}>
      <ScrollView>
        <Text style={styles.aTitle}>{ballot.Applicant}</Text>
        <Text style={styles.ballotInfo}>{ballot.Info}</Text>
      </ScrollView>
      <VoteButtons />
    </View>
  );
}
