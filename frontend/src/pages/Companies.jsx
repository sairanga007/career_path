import React, { useState, useEffect } from 'react';
import { FiSearch, FiMapPin, FiStar } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Companies = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const res = await axios.get('/api/companies');
        setCompanies(res.data);
      } catch (error) {
        console.error("Error fetching companies", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCompanies();
  }, []);

  const filteredCompanies = companies.filter(company => 
    company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    company.industry.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Discover Top Companies</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Find the best workplace for you. Explore company reviews, salaries, interviews, and open jobs.
        </p>
        
        <div className="relative max-w-2xl mx-auto mt-8">
          <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
          <input 
            type="text" 
            placeholder="Search for companies or industries..." 
            className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-300 dark:border-dark-border shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all dark:bg-slate-800 dark:text-white text-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCompanies.map(company => (
          <Link to={`/companies/${company.id}`} key={company.id} className="block group">
            <div className="card p-6 h-full flex flex-col hover:-translate-y-1 transition-transform duration-300 dark:hover:border-primary-500">
              <div className="flex items-start gap-4 mb-4">
                <img 
                  src={`https://ui-avatars.com/api/?name=${company.name}&background=random&size=64`} 
                  alt={company.name} 
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {company.name}
                  </h3>
                  <div className="flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400 mt-1">
                    <FiStar className="text-yellow-400 fill-current" size={14} />
                    <span className="font-medium text-slate-700 dark:text-slate-300">{company.rating}</span>
                    <span className="mx-1">•</span>
                    <span>{company.industry}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow line-clamp-2">
                {company.description}
              </p>
              
              <div className="pt-4 border-t border-slate-100 dark:border-dark-border flex justify-between items-center mt-auto">
                <div className="flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
                  <FiMapPin size={14} />
                  <span>{company.location}</span>
                </div>
                <span className="text-sm font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 px-3 py-1 rounded-full">
                  {company.openJobs} Jobs
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      {filteredCompanies.length === 0 && (
        <div className="text-center py-12">
          <p className="text-slate-500 dark:text-slate-400 text-lg">No companies found matching "{searchTerm}"</p>
        </div>
      )}
        </>
      )}
    </div>
  );
};

export default Companies;
