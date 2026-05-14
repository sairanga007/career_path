import React, { useState, useEffect } from 'react';
import { FiTarget, FiMapPin, FiVideo, FiExternalLink } from 'react-icons/fi';

const Skills = () => {
  const [location, setLocation] = useState(null);
  const [loadingLoc, setLoadingLoc] = useState(false);

  // Mock skills
  const skills = [
    { id: 1, name: 'HTML/CSS', level: 90, status: 'Strong' },
    { id: 2, name: 'JavaScript', level: 75, status: 'Good' },
    { id: 3, name: 'React.js', level: 40, status: 'Needs Improvement' },
    { id: 4, name: 'Node.js', level: 30, status: 'Needs Improvement' },
  ];

  const weakSkills = skills.filter(s => s.level < 50);

  const requestLocation = () => {
    setLoadingLoc(true);
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Mock reverse geocoding
          setTimeout(() => {
            setLocation('Hyderabad, India');
            setLoadingLoc(false);
          }, 1000);
        },
        (error) => {
          console.error(error);
          setLoadingLoc(false);
          alert('Could not get location. Please enable location services.');
        }
      );
    } else {
      setLoadingLoc(false);
      alert('Geolocation is not supported by your browser.');
    }
  };

  const recommendedTutorials = [
    { id: 1, title: 'React Mastery Course 2026', link: 'https://www.youtube.com/results?search_query=React+Mastery+Course+2026' },
    { id: 2, title: 'Python Django for Beginners', link: 'https://www.youtube.com/results?search_query=Python+Django+tutorial' },
    { id: 3, title: 'Advanced SQL Data Management', link: 'https://www.youtube.com/results?search_query=Advanced+SQL+Data+Management' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Skill Tracker</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-2">Track your progress and get intelligent suggestions.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Skill Progress */}
        <div className="lg:col-span-2">
          <div className="card p-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Current Skills</h2>
            <div className="space-y-6">
              {skills.map(skill => (
                <div key={skill.id}>
                  <div className="flex justify-between items-end mb-2">
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">{skill.name}</h3>
                      <span className={`text-xs font-medium ${skill.level < 50 ? 'text-amber-500' : 'text-emerald-500'}`}>
                        {skill.status}
                      </span>
                    </div>
                    <span className="text-slate-600 dark:text-slate-400 font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
                    <div 
                      className={`h-2.5 rounded-full ${skill.level < 50 ? 'bg-amber-500' : 'bg-emerald-500'}`} 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Intelligent Suggestions */}
        <div className="lg:col-span-1">
          <div className="card p-6 bg-gradient-to-br from-indigo-50 to-white dark:from-slate-800 dark:to-dark-surface border-indigo-100 dark:border-slate-700">
            <div className="flex items-center gap-2 mb-4 text-indigo-600 dark:text-indigo-400">
              <FiTarget size={24} />
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Smart Suggestions</h2>
            </div>
            
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
              We noticed you need improvement in <span className="font-bold">{weakSkills.map(s => s.name).join(', ')}</span>.
            </p>

            {!location ? (
              <div className="text-center p-4 border border-dashed border-indigo-200 dark:border-indigo-900/50 rounded-lg">
                <FiMapPin className="mx-auto text-indigo-400 mb-2" size={24} />
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">Allow location access to find nearby coaching centers.</p>
                <button 
                  onClick={requestLocation}
                  disabled={loadingLoc}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors w-full"
                >
                  {loadingLoc ? 'Locating...' : 'Enable Location'}
                </button>
              </div>
            ) : (
              <div className="space-y-4 fade-in">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Nearby Centers</span>
                  <span className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">📍 {location}</span>
                </div>
                
                {/* Mock nearby centers */}
                <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-100 dark:border-slate-700 shadow-sm">
                  <h4 className="font-semibold text-slate-900 dark:text-white text-sm">TechPro Academy</h4>
                  <p className="text-xs text-slate-500 mb-2">2.4 km away • Offline Tech Bootcamps</p>
                  <a href={`https://www.google.com/search?q=coding+institutes+in+${encodeURIComponent(location)}`} target="_blank" rel="noopener noreferrer" className="text-xs text-indigo-600 flex items-center gap-1 hover:underline">
                    <FiExternalLink /> View institutes near you
                  </a>
                </div>

                <div className="mt-6">
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-3">Top Video Tutorials</span>
                  
                  {recommendedTutorials.map(tutorial => (
                    <a href={tutorial.link} target="_blank" rel="noopener noreferrer" key={tutorial.id} className="flex items-center gap-3 p-2 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-lg transition-colors group mb-2">
                      <div className="w-8 h-8 rounded bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <FiVideo />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-slate-900 dark:text-white">{tutorial.title}</h4>
                        <p className="text-xs text-slate-500">Free YouTube Course</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
