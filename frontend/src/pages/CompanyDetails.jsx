import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiMapPin, FiGlobe, FiUsers, FiBriefcase } from 'react-icons/fi';
import axios from 'axios';

const CompanyDetails = () => {
  const { id } = useParams();
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const res = await axios.get(`/api/companies/${id}`);
        setCompany(res.data);
      } catch (error) {
        console.error("Error fetching company details", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCompany();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!company) {
    return (
      <div className="text-center py-20 text-slate-500">
        <p>Company not found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="card p-8 mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-50 dark:bg-primary-900/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start">
          <img 
            src={`https://ui-avatars.com/api/?name=${company.name}&background=random&size=128`} 
            alt={company.name} 
            className="w-24 h-24 rounded-xl shadow-sm object-cover"
          />
          <div className="flex-grow">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
              <div>
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{company.name}</h1>
                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-1">
                    <FiMapPin /> <span>{company.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FiBriefcase /> <span>{company.industry}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FiUsers /> <span>{company.employees} Employees</span>
                  </div>
                </div>
              </div>
              <a href={company.website} target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center gap-2">
                <FiGlobe /> Visit Website
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <section className="card p-8">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">About {company.name}</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              {company.description}
            </p>
          </section>

          <section className="card p-8">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Hiring Process</h2>
            <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg border border-slate-100 dark:border-dark-border">
              <p className="text-slate-600 dark:text-slate-300">
                {company.hiringProcess}
              </p>
            </div>
          </section>
        </div>

        <div className="lg:col-span-1 space-y-8">
          <section className="card p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">Open Roles</h2>
              <span className="bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300 py-1 px-3 rounded-full text-xs font-bold">
                {company.openJobsList ? company.openJobsList.length : 0}
              </span>
            </div>
            
            <div className="space-y-4">
              {company.openJobsList && company.openJobsList.map(job => (
                <div key={job.id} className="p-4 border border-slate-100 dark:border-dark-border rounded-lg hover:border-primary-500 transition-colors">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-1">{job.title}</h3>
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                    <span>{job.location} • {job.type}</span>
                    <Link to={`/jobs/${job.id}`} className="text-primary-600 dark:text-primary-400 font-medium hover:underline">View &rarr;</Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
