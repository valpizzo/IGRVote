import React, {useContext} from 'react';
import {Text, View, ImageBackground} from 'react-native';
import styles from '../styles.js';
import {SignInContext} from './App';

export default function Nav() {
  const {signedIn} = useContext(SignInContext);
  return (
    <View style={styles.navBar}>
      <Text style={styles.header}>IGRVote</Text>
      <ImageBackground
        style={styles.logoBox}
        source={
          signedIn
            ? require('../data/bfrfcLogo.png')
            : require('../data/loggedOut.png')
        }
      />
    </View>
  );
}
