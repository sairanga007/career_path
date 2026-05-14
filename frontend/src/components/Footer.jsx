import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-dark-surface border-t border-slate-200 dark:border-dark-border py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-bold text-xl">
                I
              </div>
              <span className="font-bold text-xl tracking-tight dark:text-white">
                Intell<span className="text-primary-500">Career</span>
              </span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 max-w-sm">
              Your professional platform for career growth, skill development, and finding the best opportunities in the industry.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/jobs" className="text-slate-500 hover:text-primary-500 dark:text-slate-400 dark:hover:text-primary-400 transition-colors">Jobs</Link></li>
              <li><Link to="/internships" className="text-slate-500 hover:text-primary-500 dark:text-slate-400 dark:hover:text-primary-400 transition-colors">Internships</Link></li>
              <li><Link to="/companies" className="text-slate-500 hover:text-primary-500 dark:text-slate-400 dark:hover:text-primary-400 transition-colors">Companies</Link></li>
              <li><Link to="/roadmaps" className="text-slate-500 hover:text-primary-500 dark:text-slate-400 dark:hover:text-primary-400 transition-colors">Career Roadmaps</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/resume-builder" className="text-slate-500 hover:text-primary-500 dark:text-slate-400 dark:hover:text-primary-400 transition-colors">Resume Builder</Link></li>
              <li><Link to="/mock-interview" className="text-slate-500 hover:text-primary-500 dark:text-slate-400 dark:hover:text-primary-400 transition-colors">Mock Interview Prep</Link></li>
              <li><Link to="/skills" className="text-slate-500 hover:text-primary-500 dark:text-slate-400 dark:hover:text-primary-400 transition-colors">Skill Tracker</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-200 dark:border-dark-border mt-8 pt-8 text-center text-slate-500 dark:text-slate-400">
          <p>&copy; {new Date().getFullYear()} IntellCareer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
