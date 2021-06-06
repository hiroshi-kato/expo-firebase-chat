import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { ChatScreen } from '../screens/ChatScreen';

type Props = {};

const Stack = createStackNavigator();

export const MainStack: React.FC<Props> = (props) => {
  return (
    <Stack.Navigator initialRouteName='Chat'>
      <Stack.Screen name='Chat' component={ChatScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
});
