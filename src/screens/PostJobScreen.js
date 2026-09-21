import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { styles } from '../styles/styles';
import { EDUCATIONS } from '../data/data';
import { useJobs } from '../context/JobsContext';
import AppButton from '../components/AppButton';
import Chip from '../components/Chip';

export default function PostJobScreen({ navigation }) {
  const { addJob } = useJobs();
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [selected, setSelected] = useState([]);
  const [error, setError] = useState('');

  const toggleEducation = (edu) => {
    setSelected((prev) =>
      prev.includes(edu) ? prev.filter((e) => e !== edu) : [...prev, edu]
    );
  };

  const handleSubmit = () => {
    if (!title.trim() || !company.trim()) {
      setError('Udfyld både stillingstitel og virksomhed.');
      return;
    }
    if (selected.length === 0) {
      setError('Vælg mindst én uddannelse, som stillingen er rettet mod.');
      return;
    }
    setError('');

    addJob({
      title: title.trim(),
      company: company.trim(),
      location: location.trim() || 'Ikke angivet',
      description: description.trim() || 'Ingen beskrivelse angivet.',
      educations: selected,
    });

    Alert.alert(
      'Stilling oprettet',
      'Din stilling vises nu for jobsøgende med de valgte uddannelser.',
      [{ text: 'OK', onPress: () => navigation.popToTop() }]
    );
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.label}>Stillingstitel</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={setTitle}
          placeholder="fx Junior Marketingkonsulent"
        />

        <Text style={styles.label}>Virksomhed</Text>
        <TextInput
          style={styles.input}
          value={company}
          onChangeText={setCompany}
          placeholder="Virksomhedens navn"
        />

        <Text style={styles.label}>Arbejdssted</Text>
        <TextInput
          style={styles.input}
          value={location}
          onChangeText={setLocation}
          placeholder="fx København"
        />

        <Text style={styles.label}>Beskrivelse</Text>
        <TextInput
          style={[styles.input, styles.inputMultiline]}
          value={description}
          onChangeText={setDescription}
          placeholder="Hvad går jobbet ud på?"
          multiline
        />

        <Text style={styles.label}>Hvilke uddannelser søger I?</Text>
        <Text style={styles.helper}>
          Kun jobsøgende med de valgte uddannelser vil se stillingen.
        </Text>
        <View style={styles.chipWrap}>
          {EDUCATIONS.map((edu) => (
            <Chip
              key={edu}
              label={edu}
              selected={selected.includes(edu)}
              onPress={() => toggleEducation(edu)}
            />
          ))}
        </View>

        {error !== '' && <Text style={styles.errorText}>{error}</Text>}

        <AppButton title="Opret stilling" onPress={handleSubmit} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
