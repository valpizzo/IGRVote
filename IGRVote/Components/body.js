import React, {useState, useEffect, useContext} from 'react';
import {Text, View, ScrollView} from 'react-native';
import styles from '../styles.js';
import OpenVote from './OpenVote';
import Form from './Form';
import {SignInContext} from './App';
import axios from 'axios';

export const OpenVotesContext = React.createContext();

export default function Body() {
  const {form, setForm, openVotes, setOpenVotes} = useContext(SignInContext);

  useEffect(() => {
    axios
      .get('http://192.168.0.25:3000/votes')
      .then(data => {
        setOpenVotes(data.data);
      })
      .catch(err => {
        console.log('Error getting open votes:', err);
      });
  }, [setOpenVotes]);

  return (
    <View style={styles.body}>
      {form ? <Form /> : <></>}
      <Text style={{fontSize: 30, fontWeight: 'bold', color: 'white'}}>OPEN VOTES</Text>
      <ScrollView style={styles.scrollVote}>
        {openVotes.map(ballot => (
          <OpenVotesContext.Provider key={ballot.id} value={{ballot}}>
            <OpenVote key={ballot.id} />
          </OpenVotesContext.Provider>
        ))}
      </ScrollView>
    </View>
  );
}
