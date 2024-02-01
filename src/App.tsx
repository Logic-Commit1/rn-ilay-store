import 'react-native-gesture-handler';

import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavContainer from './navigation/NavContainer';
import NetInfo from '@react-native-community/netinfo';
import FontLoader from './utils/fontLoader';

// Hooks

import useOffline from './hooks/useOffline';
import useCurrentUser from './hooks/useCurrentUser';

export default function App() {
  const { fetchCurrentUser } = useCurrentUser();
  const { isOffline, goOnline } = useOffline();

  useEffect(() => {
    if (isOffline) {
      NetInfo.fetch().then((state) => {
        if (state.isConnected) {
          fetchCurrentUser();
          goOnline();
        }
      });
    }
  }, [isOffline, goOnline, fetchCurrentUser]);

  /* useEffect(() => {
    console.log('apptsx. current user is: ');
    console.log(currentUser);
  }, [currentUser]); */

  return (
    <FontLoader>
      <NavContainer />
    </FontLoader>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
