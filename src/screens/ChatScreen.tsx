import { useNavigation } from '@react-navigation/core';
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { GiftedChat, IMessage } from 'react-native-gifted-chat';
import { Button } from 'react-native-paper';

import { auth, db } from '../../firebase';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export const ChatScreen = () => {
  const navigation = useNavigation();

  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        console.log('Sign out success');
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button onPress={signOut}>ログアウト</Button>,
    });
  }, []);

  const [messages, setMessages] = useState<IMessage[]>([]);

  useLayoutEffect(() => {
    const unsubscribe = db
      .collection('chats')
      .orderBy('createdAt', 'desc')
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({
            _id: doc.data()._id,
            createdAt: doc.data().createdAt.toDate(),
            text: doc.data().text,
            user: doc.data().user,
          }))
        );
      });
    return unsubscribe;
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((prevMessages) => GiftedChat.append(prevMessages, messages));
    const { _id, createdAt, text, user } = messages[0];
    db.collection('chats').add({
      _id,
      createdAt,
      text,
      user,
    });
  }, []);

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={messages}
        placeholder='メッセージを入力してください…'
        onSend={onSend}
        user={{
          _id: auth?.currentUser?.email ?? 'Guest',
          name: auth?.currentUser?.email ?? 'Guest',
        }}
      />
      {Platform.OS === 'android' && <KeyboardAvoidingView behavior='padding' />}
    </View>
  );
};
