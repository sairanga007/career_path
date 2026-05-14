import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { FiBriefcase, FiBookmark, FiAward } from 'react-icons/fi';

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Dashboard</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">Welcome back, {user?.name}!</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="card p-6 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center">
            <FiBriefcase size={24} />
          </div>
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Applied Jobs</p>
            <p className="text-2xl font-bold text-slate-900 dark:text-white">12</p>
          </div>
        </div>

        <div className="card p-6 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center">
            <FiBookmark size={24} />
          </div>
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Saved Jobs</p>
            <p className="text-2xl font-bold text-slate-900 dark:text-white">5</p>
          </div>
        </div>

        <div className="card p-6 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
            <FiAward size={24} />
          </div>
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Skill Level</p>
            <p className="text-2xl font-bold text-slate-900 dark:text-white">Intermediate</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Applications */}
        <div className="lg:col-span-2">
          <div className="card p-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Recent Applications</h2>
            <div className="space-y-4">
              {/* Mock Application Item */}
              <div className="flex items-center justify-between p-4 border border-slate-100 dark:border-dark-border rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-bold">
                    G
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">Frontend Developer</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Google • Applied 2 days ago</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                  In Review
                </span>
              </div>
              
              {/* Mock Application Item 2 */}
              <div className="flex items-center justify-between p-4 border border-slate-100 dark:border-dark-border rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-bold">
                    M
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">React Engineer</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Microsoft • Applied 1 week ago</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">
                  Interviewing
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Skill Suggestions (The Unique Feature Placeholder) */}
        <div className="lg:col-span-1">
          <div className="card p-6 bg-gradient-to-br from-primary-50 to-white dark:from-slate-800 dark:to-dark-surface border-primary-100 dark:border-slate-700">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Skill Improvement</h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
              We noticed you could improve your <span className="font-semibold text-primary-600 dark:text-primary-400">React.js</span> skills to match your target role.
            </p>
            
            <div className="space-y-4">
              <div className="p-3 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">Nearby Coaching</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">Based on your location (Hyderabad)</p>
                <a href="https://www.google.com/maps/search/React.js+coaching+institutes+in+Hyderabad" target="_blank" rel="noopener noreferrer" className="text-sm text-primary-600 hover:underline">View institutes near you &rarr;</a>
              </div>
              
              <div className="p-3 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">Top Video Tutorials</h4>
                <a href="https://www.youtube.com/results?search_query=React.js+full+course" target="_blank" rel="noopener noreferrer" className="text-sm text-red-600 hover:underline flex items-center gap-1">
                  <span className="inline-block w-4 h-4 bg-red-600 rounded-sm flex-shrink-0"></span>
                  React Mastery Course 2026
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
