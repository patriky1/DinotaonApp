import React from 'react';

import {  Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default function Notification() {
  return (
    <View style={styles.container}>
      <Text>NOTIFICATION</Text>
      
    </View>
  );
}

