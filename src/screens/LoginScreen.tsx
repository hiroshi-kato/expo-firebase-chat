import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Button, Title, TextInput } from 'react-native-paper';

type Props = {};

export const LoginScreen: React.FC<Props> = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <SafeAreaView style={styles.flex}>
      <View style={[styles.flex, styles.paddingLarge]}>
        <Title style={styles.marginBottom}>ログイン</Title>
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
          autoCapitalize='none'
          secureTextEntry
          style={styles.marginBottom}
        />
        <Button
          style={[styles.paddingSm, styles.marginBottom]}
          onPress={() => {}} //TODO: 仮の値を入れている
        >
          ログイン
        </Button>
        <Button
          style={[styles.paddingSm, styles.marginBottom]}
          onPress={() => {}} //TODO: 仮の値を入れている
        >
          アカウントを作成する
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
