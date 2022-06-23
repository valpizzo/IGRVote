import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import styles from '../styles.js';
import OpenVote from './OpenVote';
import {openvotesData} from '../data/test_data';
import axios from 'axios';

export const OpenVotesContext = React.createContext();

export default function Body() {
  const [openVotes, setOpenVotes] = useState(openvotesData);

  useEffect(() => {
    axios
      .get('http://192.168.3.160:3000/votes')
      .then(data => {
        setOpenVotes(data.data);
      })
      .catch(err => {
        console.log('Error getting open votes:', err);
      });
  }, []);

  return (
    <View style={styles.body}>
      <Text style={{fontSize: 30, fontWeight: 'bold', color: 'white'}}>OPEN VOTES</Text>
      {openVotes.map(ballot => (
        <OpenVotesContext.Provider value={{ballot}}>
          <OpenVote key={ballot.Applicant} />
        </OpenVotesContext.Provider>
      ))}
    </View>
  );
}
