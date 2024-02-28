import React from 'react';
import {StyleSheet, Text, TouchableOpacity, useColorScheme} from 'react-native';

export default function NewsCard() {
  const isDarkMode = useColorScheme() === 'dark';

  const styles = StyleSheet.create({
    container: {
      backgroundColor: isDarkMode ? 'red' : 'gray',
      width: 240,
      height: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <TouchableOpacity style={styles.container} onPress={() => {}}>
      <Text>Press Me</Text>
    </TouchableOpacity>
  );
}
