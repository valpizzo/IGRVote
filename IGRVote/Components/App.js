import {Text, View} from 'react-native';
import React from 'react';
import Nav from './nav';
import Bottom from './bottom';
import Body from './body';
import styles from '../styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Nav />
      <Body />
      <Bottom />
    </View>
  );
}
