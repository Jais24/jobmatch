import React, { createContext, useContext, useState } from 'react';
import { INITIAL_JOBS } from '../data/data';

const JobsContext = createContext(null);

// Holder styr på alle stillinger og den jobsøgendes valgte uddannelse,
// så alle screens kan bruge samme data.
export function JobsProvider({ children }) {
  const [jobs, setJobs] = useState(INITIAL_JOBS);
  const [education, setEducation] = useState(null);

  const addJob = (job) => {
    setJobs((prev) => [{ ...job, id: String(Date.now()) }, ...prev]);
  };

  return (
    <JobsContext.Provider value={{ jobs, addJob, education, setEducation }}>
      {children}
    </JobsContext.Provider>
  );
}

export function useJobs() {
  return useContext(JobsContext);
}
