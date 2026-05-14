import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiBriefcase, FiTrendingUp } from 'react-icons/fi';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-slate-50 dark:bg-dark-bg">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 leading-tight">
              Launch Your Career with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">IntellCareer</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-10">
              Discover opportunities, master new skills, and connect with top companies. Your professional journey starts here.
            </p>
            
            <div className="bg-white dark:bg-dark-surface p-2 rounded-2xl shadow-lg border border-slate-200 dark:border-dark-border max-w-2xl mx-auto flex flex-col sm:flex-row gap-2">
              <div className="relative flex-grow">
                <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                <input 
                  type="text" 
                  placeholder="Job title, keywords, or company" 
                  className="w-full pl-12 pr-4 py-3 bg-transparent outline-none dark:text-white"
                />
              </div>
              <button className="btn-primary py-3 px-8 text-lg w-full sm:w-auto">
                Search Jobs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 dark:text-white">Why Choose IntellCareer?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6">
                <FiBriefcase size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 dark:text-white">Top Opportunities</h3>
              <p className="text-slate-500 dark:text-slate-400">
                Access thousands of job and internship listings from leading tech companies and startups.
              </p>
            </div>

            <div className="card p-8 text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400 rounded-2xl flex items-center justify-center mb-6">
                <FiTrendingUp size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 dark:text-white">Skill Development</h3>
              <p className="text-slate-500 dark:text-slate-400">
                Identify skill gaps, get personalized learning recommendations, and track your progress.
              </p>
            </div>

            <div className="card p-8 text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 dark:text-white">Smart Match</h3>
              <p className="text-slate-500 dark:text-slate-400">
                Our algorithm matches your profile with the perfect roles and notifies you instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
