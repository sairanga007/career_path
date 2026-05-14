import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiCheckCircle, FiCircle } from 'react-icons/fi';
import axios from 'axios';

const Roadmaps = () => {
  const [roadmaps, setRoadmaps] = useState([]);
  const [activeRoadmap, setActiveRoadmap] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRoadmaps = async () => {
      try {
        const res = await axios.get('/api/roadmaps');
        setRoadmaps(res.data);
        if (res.data.length > 0) {
          setActiveRoadmap(res.data[0]);
        }
      } catch (error) {
        console.error("Error fetching roadmaps", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRoadmaps();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!activeRoadmap) {
    return (
      <div className="text-center py-20 text-slate-500">
        <p>No roadmaps available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Career Roadmaps</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-2 max-w-2xl mx-auto">
          Step-by-step guides and paths to learn different tools or technologies.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-64 flex-shrink-0">
          <div className="card overflow-hidden">
            <div className="p-4 bg-slate-50 dark:bg-slate-800 border-b border-slate-100 dark:border-dark-border">
              <h3 className="font-bold text-slate-900 dark:text-white">Role Based</h3>
            </div>
            <div className="divide-y divide-slate-100 dark:divide-dark-border">
              {roadmaps.map(rm => (
                <button 
                  key={rm.id}
                  onClick={() => setActiveRoadmap(rm)}
                  className={`w-full text-left p-4 transition-colors flex items-center justify-between ${activeRoadmap.id === rm.id ? 'bg-primary-50 dark:bg-primary-900/20 border-l-4 border-primary-500' : 'hover:bg-slate-50 dark:hover:bg-slate-800'}`}
                >
                  <span className={`font-medium ${activeRoadmap.id === rm.id ? 'text-primary-700 dark:text-primary-400' : 'text-slate-700 dark:text-slate-300'}`}>{rm.title}</span>
                  <FiChevronRight className={activeRoadmap.id === rm.id ? 'text-primary-500' : 'text-slate-400'} />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-grow">
          <div className="card p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 dark:bg-primary-900/10 rounded-bl-full"></div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 relative z-10">{activeRoadmap.title}</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 relative z-10">{activeRoadmap.description}</p>

            <div className="relative border-l-2 border-slate-200 dark:border-slate-700 ml-4 space-y-8">
              {activeRoadmap.steps.map((step, index) => (
                <div key={index} className="relative pl-8">
                  {/* Timeline node */}
                  <span className="absolute -left-[11px] top-1 bg-white dark:bg-dark-surface">
                    {step.status === 'completed' ? (
                      <FiCheckCircle className="text-emerald-500 bg-white dark:bg-dark-surface" size={20} />
                    ) : step.status === 'in-progress' ? (
                      <div className="w-5 h-5 rounded-full border-4 border-primary-500 bg-white dark:bg-dark-surface flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                      </div>
                    ) : (
                      <FiCircle className="text-slate-300 dark:text-slate-600 bg-white dark:bg-dark-surface" size={20} />
                    )}
                  </span>
                  
                  <div className={`p-4 rounded-lg border ${step.status === 'in-progress' ? 'border-primary-200 bg-primary-50 dark:border-primary-900/50 dark:bg-primary-900/10' : 'border-slate-100 bg-slate-50 dark:border-dark-border dark:bg-slate-800/50'}`}>
                    <h3 className="font-bold text-slate-900 dark:text-white">{step.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmaps;
