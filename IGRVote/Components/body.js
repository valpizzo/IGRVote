import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import styles from '../styles.js';
import OpenVote from './OpenVote';
import {openvotesData} from '../data/test_data';

export const OpenVotesContext = React.createContext();

export default function Body() {
  const [openVotes, setOpenVotes] = useState(openvotesData);

  return (
    <View style={styles.body}>
      <Text>OPEN VOTES!</Text>
      {openVotes.map(ballot => (
        <OpenVotesContext.Provider value={{ballot}}>
          <OpenVote key={ballot.team} />
        </OpenVotesContext.Provider>
      ))}
    </View>
  );
}
