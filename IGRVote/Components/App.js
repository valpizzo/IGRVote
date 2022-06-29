import {Text, View} from 'react-native';
import React, {useState} from 'react';
import Nav from './nav';
import Bottom from './bottom';
import Body from './body';
import SignOnScreen from './SignOnScreen';
import styles from '../styles';
import {openvotesData} from '../data/test_data';

export const SignInContext = React.createContext();

export default function App() {
  const [signedIn, setSignIn] = useState(true);
  const [teamInfo, setInfo] = useState('Admin');
  const [form, setForm] = useState(false);
  const [openVotes, setOpenVotes] = useState(openvotesData);

  return (
    <View style={styles.container}>
      <SignInContext.Provider
        value={{
          signedIn,
          setSignIn,
          teamInfo,
          setInfo,
          form,
          setForm,
          openVotes,
          setOpenVotes,
        }}>
        <Nav />
        {!signedIn ? <SignOnScreen /> : <Body />}
        <Bottom />
      </SignInContext.Provider>
    </View>
  );
}
