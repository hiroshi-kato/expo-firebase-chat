import React, { useCallback, useEffect, useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { GiftedChat, IMessage } from 'react-native-gifted-chat';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export const ChatScreen = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'react native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((prevMessages) => GiftedChat.append(prevMessages, messages));
  }, []);

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={messages}
        placeholder='メッセージを入力してください…'
        onSend={onSend}
        user={{
          _id: 1,
          name: 'me',
          avatar: 'https://placeimg.com/140/140/any',
        }}
      />
      {Platform.OS === 'android' && <KeyboardAvoidingView behavior='padding' />}
    </View>
  );
};
