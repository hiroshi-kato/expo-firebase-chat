import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useLayoutEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { MainStack } from './src/navigations/MainStack';
import { AuthStack } from './src/navigations/AuthStack';
import { auth } from './firebase';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useLayoutEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });
    return unsubscribe;
  }, []);

  return (
    <>
      <NavigationContainer>
        {loggedIn ? <MainStack /> : <AuthStack />}
      </NavigationContainer>
      <StatusBar style='auto'></StatusBar>
    </>
  );
}
