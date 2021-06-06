import React, { useCallback, useEffect, useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { GiftedChat, IMessage } from 'react-native-gifted-chat';
import { ChatScreen } from './src/screens/ChatScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function App() {
  return <ChatScreen />;
}
