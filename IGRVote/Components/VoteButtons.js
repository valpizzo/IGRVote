import React, {useState, useContext} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from '../styles';
import {OpenVotesContext} from './body';
import {SignInContext} from './App';
import axios from 'axios';

export default function VoteButtons() {
  const {ballot} = useContext(OpenVotesContext);
  const {teamInfo} = useContext(SignInContext);
  const [voteCast, setVoteCast] = useState(false);

  const vote = option => {
    setVoteCast(!voteCast);
    ballot[option] = ballot[option] + 1;
    axios
      .post('http://192.168.0.25:3000/castvote', {
        id: ballot.id,
        option: option,
        newCount: ballot[option],
      })
      .then(data => {
        console.log('Vote cast for', ballot.Applicant);
      })
      .catch(err => {
        console.log('Error casting vote:', err);
      });
  };

  return (
    <View style={styles.buttonBox}>
      <TouchableOpacity
        style={styles.voteYes}
        onPress={() => {
          vote('Yes');
        }}
        disabled={voteCast || teamInfo === 'Admin'}>
        <Text key="yes">Yes ({ballot.Yes})</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.voteNo}
        onPress={() => {
          vote('No');
        }}
        disabled={voteCast || teamInfo === 'Admin'}>
        <Text key="no">No ({ballot.No})</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.voteAb}
        onPress={() => {
          vote('Abstain');
        }}
        disabled={voteCast || teamInfo === 'Admin'}>
        <Text key="abs">Abstain ({ballot.Abstain})</Text>
      </TouchableOpacity>
    </View>
  );
}
