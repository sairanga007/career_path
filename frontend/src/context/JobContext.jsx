import React, { createContext, useState, useEffect } from 'react';

export const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [savedJobs, setSavedJobs] = useState([]);

  // Load saved jobs from localStorage on initial render
  useEffect(() => {
    const localSaved = localStorage.getItem('savedJobs');
    if (localSaved) {
      setSavedJobs(JSON.parse(localSaved));
    }
  }, []);

  // Save to localStorage whenever savedJobs changes
  useEffect(() => {
    localStorage.setItem('savedJobs', JSON.stringify(savedJobs));
  }, [savedJobs]);

  const saveJob = (job) => {
    if (!savedJobs.find(j => j.id === job.id)) {
      setSavedJobs([...savedJobs, job]);
    }
  };

  const removeJob = (jobId) => {
    setSavedJobs(savedJobs.filter(job => job.id !== jobId));
  };

  const isJobSaved = (jobId) => {
    return savedJobs.some(job => job.id === jobId);
  };

  return (
    <JobContext.Provider value={{ savedJobs, saveJob, removeJob, isJobSaved }}>
      {children}
    </JobContext.Provider>
  );
};
