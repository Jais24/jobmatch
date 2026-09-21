import React from 'react';
import { View, Text, FlatList, ScrollView, Pressable } from 'react-native';
import { styles } from '../styles/styles';
import { EDUCATIONS } from '../data/data';
import { useJobs } from '../context/JobsContext';
import Chip from '../components/Chip';

export default function JobListScreen({ navigation }) {
  const { jobs, education, setEducation } = useJobs();

  // Kun stillinger, hvor virksomheden har valgt den jobsøgendes uddannelse
  const visibleJobs = education
    ? jobs.filter((job) => job.educations.includes(education))
    : [];

  const renderJob = ({ item }) => (
    <Pressable
      style={styles.card}
      onPress={() => navigation.navigate('JobDetail', { jobId: item.id })}
    >
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardCompany}>{item.company}</Text>
      <Text style={styles.cardMeta}>{item.location}</Text>
    </Pressable>
  );

  const renderEmpty = () => (
    <View style={styles.emptyBox}>
      <Text style={styles.emptyText}>
        {education
          ? 'Der er ingen stillinger til din uddannelse endnu. Kom tilbage senere.'
          : 'Vælg din uddannelse ovenfor for at se relevante stillinger.'}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Din uddannelse</Text>
      <View style={styles.chipRow}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {EDUCATIONS.map((edu) => (
            <Chip
              key={edu}
              label={edu}
              selected={education === edu}
              onPress={() => setEducation(edu)}
            />
          ))}
        </ScrollView>
      </View>

      {education && (
        <Text style={styles.resultInfo}>
          {visibleJobs.length} af {jobs.length} stillinger matcher din
          uddannelse
        </Text>
      )}

      <FlatList
        data={visibleJobs}
        keyExtractor={(item) => item.id}
        renderItem={renderJob}
        ListEmptyComponent={renderEmpty}
      />
    </View>
  );
}
