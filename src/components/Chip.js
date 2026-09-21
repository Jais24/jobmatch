import React from 'react';
import { Pressable, Text } from 'react-native';
import { styles } from '../styles/styles';

// Valgbar "pille" – bruges til at vælge uddannelse.
export default function Chip({ label, selected, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.chip, selected && styles.chipSelected]}
    >
      <Text style={[styles.chipText, selected && styles.chipTextSelected]}>
        {label}
      </Text>
    </Pressable>
  );
}
