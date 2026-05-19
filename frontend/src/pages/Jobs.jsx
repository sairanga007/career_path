import React, { useState, useEffect } from 'react';
import JobCard from '../components/JobCard';
import { FiSearch, FiFilter } from 'react-icons/fi';
import axios from 'axios';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 3;

  useEffect(() => {
    const fetchJobsAndCompanies = async () => {
      try {
        const [jobsRes, companiesRes] = await Promise.all([
          axios.get('/api/jobs'),
          axios.get('/api/companies')
        ]);
        
        const companiesMap = companiesRes.data.reduce((acc, company) => {
          acc[company.id] = company.name;
          return acc;
        }, {});

        const formattedJobs = jobsRes.data.map(job => ({
          ...job,
          company: companiesMap[job.companyId] || 'Unknown Company'
        }));
        setJobs(formattedJobs);
      } catch (error) {
        console.error("Error fetching jobs", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobsAndCompanies();
  }, []);

  // Reset to first page when search or filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, filterType]);

  // Simple filter logic
  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'All' || job.type === filterType;
    return matchesSearch && matchesType;
  });

  // Pagination logic
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Find Your Dream Job</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-2">Browse {jobs.length}+ jobs from top companies.</p>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-grow">
          <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
          <input 
            type="text" 
            placeholder="Search by job title or company..." 
            className="input-field pl-12"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="relative w-full md:w-64">
          <FiFilter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
          <select 
            className="input-field pl-12 appearance-none"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="All">All Types</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
            <option value="Internship">Internship</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        {/* Job Listings */}
        <div className="w-full">
          <div className="mb-4 text-sm text-slate-500 dark:text-slate-400">
            Showing {filteredJobs.length} results
          </div>
          
          <div className="space-y-4">
            {currentJobs.length > 0 ? (
              currentJobs.map(job => (
                <JobCard key={job.id} job={job} />
              ))
            ) : (
              <div className="text-center py-12 card bg-slate-50 dark:bg-slate-800">
                <p className="text-slate-500 dark:text-slate-400">No jobs found matching your criteria.</p>
              </div>
            )}
          </div>
          
          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-8 flex justify-center">
              <div className="flex gap-2">
                <button 
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 border rounded-md transition-colors ${currentPage === 1 ? 'border-slate-100 text-slate-300 dark:border-slate-800 dark:text-slate-600 cursor-not-allowed' : 'border-slate-200 dark:border-dark-border text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
                >
                  Previous
                </button>
                
                {[...Array(totalPages)].map((_, index) => (
                  <button 
                    key={index + 1}
                    onClick={() => handlePageChange(index + 1)}
                    className={`px-4 py-2 rounded-md ${currentPage === index + 1 ? 'bg-primary-600 text-white' : 'border border-slate-200 dark:border-dark-border text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
                  >
                    {index + 1}
                  </button>
                ))}

                <button 
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 border rounded-md transition-colors ${currentPage === totalPages ? 'border-slate-100 text-slate-300 dark:border-slate-800 dark:text-slate-600 cursor-not-allowed' : 'border-slate-200 dark:border-dark-border text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
        </>
      )}
    </div>
  );
};

export default Jobs;
