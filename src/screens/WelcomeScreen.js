import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from '../styles/styles';
import AppButton from '../components/AppButton';

export default function WelcomeScreen({ navigation }) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
    >
      <View style={styles.heroBox}>
        <Text style={styles.heroTitle}>JobMatch</Text>
        <Text style={styles.heroText}>
          Se kun de stillinger, der passer til din uddannelse. Virksomheder
          vælger præcis, hvilke uddannelser de søger.
        </Text>
      </View>

      <View style={styles.roleBox}>
        <Text style={styles.roleTitle}>Jeg søger job</Text>
        <Text style={styles.roleText}>
          Vælg din uddannelse og få vist relevante stillinger.
        </Text>
        <AppButton
          title="Find relevante job"
          onPress={() => navigation.navigate('JobList')}
        />
      </View>

      <View style={styles.roleBox}>
        <Text style={styles.roleTitle}>Jeg er virksomhed</Text>
        <Text style={styles.roleText}>
          Opret en stilling og vælg, hvilke uddannelser den er rettet mod.
        </Text>
        <AppButton
          title="Opret stilling"
          secondary
          onPress={() => navigation.navigate('PostJob')}
        />
      </View>
    </ScrollView>
  );
}
