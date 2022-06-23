import React, {useState, useContext} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from '../styles';
import {OpenVotesContext} from './body';

export default function VoteButtons() {
  const {ballot} = useContext(OpenVotesContext);
  const [voteCast, setVoteCast] = useState(false);
  return (
    <View style={styles.buttonBox}>
      <TouchableOpacity
        style={styles.voteYes}
        onPress={() => {
          setVoteCast(!voteCast);
          console.log(voteCast);
        }}
        disabled={voteCast}>
        <Text key="yes">Yes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.voteNo}>
        <Text key="no">No</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.voteAb}>
        <Text key="ab">Abstain</Text>
      </TouchableOpacity>
    </View>
  );
}
