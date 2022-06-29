import React, {useState, useContext} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import styles from '../styles.js';
import {SignInContext} from './App';
import AddBallot from './AddBallot';
import axios from 'axios';

export default function Bottom() {
  const {teamInfo, form, setForm, setOpenVotes} = useContext(SignInContext);
  const [newBallot, setNewBallot] = useState({
    Applicant: '',
    Info: '',
  });

  const handleTeamChange = text => {
    setNewBallot(prev => {
      prev.Applicant = text;
      return prev;
    });
  };

  const handleBioChange = text => {
    setNewBallot(prev => {
      prev.Info = text;
      return prev;
    });
  };

  const finalizeBallot = () => {
    axios
      .post('http://192.168.0.25:3000/addballot', newBallot)
      .then(data => {
        console.log('New ballot created for', newBallot.Applicant);
      })
      .catch(err => {
        console.log('Error creating ballot:', err);
      });
    setForm(!form);
  };

  return (
    <View style={styles.form}>
      <View style={styles.navBar}>
        <Text style={styles.footer}>CREATE NEW BALLOT</Text>
      </View>
      <View style={styles.body}>
        <Text>Team Name</Text>
        <TextInput style={styles.input} onChangeText={handleTeamChange} />
        <Text>Team Bio</Text>
        <TextInput style={styles.bioInput} onChangeText={handleBioChange} />
        <TouchableOpacity style={styles.submit} onPress={finalizeBallot}>
          <Text style={styles.addBalText}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
