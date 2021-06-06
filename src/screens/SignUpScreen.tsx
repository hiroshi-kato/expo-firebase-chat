import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Button, TextInput, Title } from 'react-native-paper';

type Props = {};

export const SignUpScreen: React.FC<Props> = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
          onPress={() => {}} // TODO:仮の値を入れている
        >
          新規登録
        </Button>
        <Button
          style={[styles.paddingSm, styles.marginBottom]}
          onPress={() => {}} // TODO:仮の値を入れている
        >
          既存アカウントでログインする
        </Button>
      </View>
      <Text>SignUpScreen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex: { flex: 1 },
  paddingLarge: { padding: 24 },
  marginBottom: { marginBottom: 16 },
  paddingSm: { padding: 8 },
});
