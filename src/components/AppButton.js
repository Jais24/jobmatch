import React from 'react';
import { Pressable, Text } from 'react-native';
import { styles } from '../styles/styles';

// Genbrugelig knap. "secondary" giver en knap med kun kant.
export default function AppButton({ title, onPress, secondary = false }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        secondary && styles.buttonSecondary,
        pressed && styles.buttonPressed,
      ]}
    >
      <Text style={[styles.buttonText, secondary && styles.buttonTextSecondary]}>
        {title}
      </Text>
    </Pressable>
  );
}
