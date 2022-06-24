import {Text, View} from 'react-native';
import React, {useState} from 'react';
import Nav from './nav';
import Bottom from './bottom';
import Body from './body';
import SignOnScreen from './SignOnScreen';
import styles from '../styles';

export const SignInContext = React.createContext();

export default function App() {
  const [signedIn, setSignIn] = useState(true);
  const [teamInfo, setInfo] = useState('');

  return (
    <View style={styles.container}>
      <SignInContext.Provider value={{signedIn, setSignIn, teamInfo, setInfo}}>
        <Nav />
        {!signedIn ? <SignOnScreen /> : <Body />}
        <Bottom />
      </SignInContext.Provider>
    </View>
  );
}
