import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Button, TextInput, Title } from 'react-native-paper';
import { auth } from '../../firebase';

type Props = {};

export const SignUpScreen: React.FC<Props> = (props) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('Register Success');
      })
      .catch((error: { message: any }) => {
        console.error(error.message);
      });
  };

  return (
    <SafeAreaView style={styles.flex}>
      <View style={[styles.flex, styles.paddingLarge]}>
        <Title style={styles.marginBottom}>新規登録</Title>
        <TextInput
          label='Email'
          value={email}
          onChangeText={setEmail}
          autoCapitalize='none'
          keyboardType='email-address'
          style={styles.marginBottom}
        />
        <TextInput
          label='Password'
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.marginBottom}
        />
        <Button
          mode='contained'
          style={[styles.paddingSm, styles.marginBottom]}
          onPress={signUp}
        >
          新規登録
        </Button>
        <Button
          style={[styles.paddingSm, styles.marginBottom]}
          onPress={() => {
            navigation.navigate('Login');
          }}
        >
          既存アカウントでログインする
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex: { flex: 1 },
  paddingLarge: { padding: 24 },
  marginBottom: { marginBottom: 16 },
  paddingSm: { padding: 8 },
});
