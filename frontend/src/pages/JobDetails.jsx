import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiMapPin, FiBriefcase, FiDollarSign, FiClock, FiBookmark, FiCheckCircle } from 'react-icons/fi';
import { JobContext } from '../context/JobContext';

const JobDetails = () => {
  const { id } = useParams();
  const { isJobSaved, saveJob, removeJob } = useContext(JobContext);
  
  // Mock data
  const job = {
    id: parseInt(id),
    title: 'Frontend Developer',
    company: 'Google',
    location: 'Mountain View, CA',
    type: 'Full-time',
    salary: '$120k - $150k',
    experience: 'Mid-Level',
    workModel: 'Hybrid',
    postedAt: '2 days ago',
    description: 'We are looking for a talented Frontend Developer to join our core product team. You will be responsible for building highly responsive, beautiful web applications using React and modern web technologies.',
    requirements: [
      '3+ years of experience with React.js',
      'Strong proficiency in JavaScript, including DOM manipulation',
      'Experience with common front-end development tools such as Babel, Webpack, NPM, etc.',
      'Familiarity with RESTful APIs',
      'Knowledge of modern authorization mechanisms, such as JSON Web Token'
    ],
    benefits: [
      'Competitive salary and equity',
      'Comprehensive health, dental, and vision coverage',
      'Flexible work hours and hybrid work options',
      'Professional development budget'
    ]
  };

  const saved = isJobSaved(job.id);

  const toggleSave = () => {
    if (saved) {
      removeJob(job.id);
    } else {
      saveJob(job);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Link to="/jobs" className="text-slate-500 hover:text-primary-600 mb-6 inline-block font-medium transition-colors">
        &larr; Back to Jobs
      </Link>
      
      <div className="card p-8 mb-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
          <div className="flex gap-4">
            <img 
              src={`https://ui-avatars.com/api/?name=${job.company}&background=random&size=80`} 
              alt={job.company} 
              className="w-20 h-20 rounded-xl shadow-sm object-cover"
            />
            <div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{job.title}</h1>
              <Link to={`/companies/1`} className="text-lg text-primary-600 dark:text-primary-400 hover:underline mb-2 block">
                {job.company}
              </Link>
              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <span className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">Posted {job.postedAt}</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-row md:flex-col gap-3">
            <button className="btn-primary flex-grow md:flex-grow-0 py-3 px-8 shadow-md">
              Apply Now
            </button>
            <button 
              onClick={toggleSave}
              className={`flex-grow md:flex-grow-0 py-3 px-8 rounded-lg border font-medium flex items-center justify-center gap-2 transition-colors
                ${saved 
                  ? 'border-primary-500 text-primary-600 bg-primary-50 dark:bg-primary-900/20' 
                  : 'border-slate-300 dark:border-dark-border text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
            >
              <FiBookmark className={saved ? 'fill-current' : ''} />
              {saved ? 'Saved' : 'Save Job'}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-y border-slate-100 dark:border-dark-border">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400 text-sm"><FiMapPin /> Location</div>
            <span className="font-medium text-slate-900 dark:text-white">{job.location} ({job.workModel})</span>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400 text-sm"><FiBriefcase /> Job Type</div>
            <span className="font-medium text-slate-900 dark:text-white">{job.type}</span>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400 text-sm"><FiDollarSign /> Salary</div>
            <span className="font-medium text-slate-900 dark:text-white">{job.salary}</span>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400 text-sm"><FiClock /> Experience</div>
            <span className="font-medium text-slate-900 dark:text-white">{job.experience}</span>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Job Description</h2>
          <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300">
            <p>{job.description}</p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Requirements</h2>
          <ul className="space-y-3">
            {job.requirements.map((req, index) => (
              <li key={index} className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                <FiCheckCircle className="text-emerald-500 mt-1 flex-shrink-0" />
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Benefits</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {job.benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-dark-border text-slate-600 dark:text-slate-300 text-sm">
                <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                {benefit}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default JobDetails;
