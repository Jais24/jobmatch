import React from 'react';
import { View, Text, ScrollView, Alert } from 'react-native';
import { styles } from '../styles/styles';
import { useJobs } from '../context/JobsContext';
import AppButton from '../components/AppButton';

export default function JobDetailScreen({ route, navigation }) {
  const { jobId } = route.params;
  const { jobs } = useJobs();
  const job = jobs.find((j) => j.id === jobId);

  if (!job) {
    return (
      <View style={styles.container}>
        <Text style={styles.emptyText}>Stillingen blev ikke fundet.</Text>
      </View>
    );
  }

  const handleApply = () => {
    // Demo: der sendes ikke en rigtig ansøgning
    Alert.alert(
      'Ansøgning sendt',
      `Din interesse i "${job.title}" hos ${job.company} er registreret (demo).`,
      [{ text: 'OK', onPress: () => navigation.goBack() }]
    );
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
    >
      <Text style={styles.title}>{job.title}</Text>
      <Text style={styles.detailCompany}>{job.company}</Text>
      <Text style={styles.detailMeta}>{job.location}</Text>

      <Text style={styles.detailText}>{job.description}</Text>

      <Text style={styles.label}>Stillingen er rettet mod</Text>
      <View style={styles.chipWrap}>
        {job.educations.map((edu) => (
          <View key={edu} style={styles.chip}>
            <Text style={styles.chipText}>{edu}</Text>
          </View>
        ))}
      </View>

      <AppButton title="Send ansøgning" onPress={handleApply} />
      <AppButton title="Tilbage til listen" secondary onPress={() => navigation.goBack()} />
    </ScrollView>
  );
}
