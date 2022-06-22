import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import styles from '../styles.js';

export default function Nav() {
  return (
    <View style={styles.navBar}>
      <Text style={styles.header}>IGRVote</Text>
      <ImageBackground
        style={styles.logoBox}
        source={ require('../data/bfrfcLogo.png')}
      />
    </View>
  );
}