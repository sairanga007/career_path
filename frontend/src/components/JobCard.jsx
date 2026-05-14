import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiMapPin, FiDollarSign, FiClock, FiBookmark } from 'react-icons/fi';
import { JobContext } from '../context/JobContext';

const JobCard = ({ job }) => {
  const { isJobSaved, saveJob, removeJob } = useContext(JobContext);
  const saved = isJobSaved(job.id);

  const toggleSave = (e) => {
    e.preventDefault();
    if (saved) {
      removeJob(job.id);
    } else {
      saveJob(job);
    }
  };

  return (
    <Link to={`/jobs/${job.id}`} className="block group">
      <div className="card p-6 hover:shadow-md transition-shadow dark:hover:border-primary-500">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-4">
            <img
              src={job.companyLogo || `https://ui-avatars.com/api/?name=${job.company}&background=random`}
              alt={job.company}
              className="w-12 h-12 rounded object-cover"
            />
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {job.title}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">{job.company}</p>
            </div>
          </div>
          <button
            onClick={toggleSave}
            className={`p-2 rounded-full transition-colors ${saved ? 'text-primary-600 bg-primary-50 dark:bg-primary-900/30' : 'text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
          >
            <FiBookmark className={saved ? "fill-current" : ""} size={20} />
          </button>
        </div>

        <div className="flex flex-wrap gap-3 mb-4 text-sm text-slate-600 dark:text-slate-300">
          <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
            <FiMapPin size={14} />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
            <FiClock size={14} />
            <span>{job.type}</span>
          </div>
          {job.salary && (
            <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
              <FiDollarSign size={14} />
              <span>{job.salary}</span>
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {job.skills.map((skill, index) => (
            <span key={index} className="text-xs font-medium px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-4 pt-4 border-t border-slate-100 dark:border-dark-border flex justify-between items-center text-sm">
          <span className="text-slate-500 dark:text-slate-400">{job.postedAt}</span>
          <span className="text-primary-600 dark:text-primary-400 font-medium group-hover:underline">View Details &rarr;</span>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
