import React, { useState } from 'react';
import { FiUsers, FiBriefcase, FiAperture, FiTrash2, FiEdit2 } from 'react-icons/fi';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('jobs');

  // Mock data for admin
  const mockJobs = [
    { id: 1, title: 'Frontend Developer', company: 'Google', status: 'Active', applications: 45 },
    { id: 2, title: 'Backend Engineer', company: 'Microsoft', status: 'Closed', applications: 120 },
  ];

  const mockUsers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'student', joinedAt: '2023-01-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@microsoft.com', role: 'recruiter', joinedAt: '2023-02-20' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Admin Dashboard</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">Manage platform content and users.</p>
      </div>

      {/* Admin Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="card p-6 flex items-center gap-4 border-l-4 border-blue-500">
          <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center">
            <FiBriefcase size={24} />
          </div>
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Total Jobs</p>
            <p className="text-2xl font-bold text-slate-900 dark:text-white">254</p>
          </div>
        </div>
        <div className="card p-6 flex items-center gap-4 border-l-4 border-purple-500">
          <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center">
            <FiUsers size={24} />
          </div>
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Total Users</p>
            <p className="text-2xl font-bold text-slate-900 dark:text-white">1,240</p>
          </div>
        </div>
        <div className="card p-6 flex items-center gap-4 border-l-4 border-emerald-500">
          <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
            <FiAperture size={24} />
          </div>
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Companies</p>
            <p className="text-2xl font-bold text-slate-900 dark:text-white">45</p>
          </div>
        </div>
      </div>

      <div className="card overflow-hidden">
        <div className="border-b border-slate-200 dark:border-dark-border px-6 py-4 flex gap-6">
          <button 
            onClick={() => setActiveTab('jobs')}
            className={`font-medium pb-4 -mb-4 ${activeTab === 'jobs' ? 'text-primary-600 dark:text-primary-400 border-b-2 border-primary-600 dark:border-primary-400' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'}`}
          >
            Manage Jobs
          </button>
          <button 
            onClick={() => setActiveTab('users')}
            className={`font-medium pb-4 -mb-4 ${activeTab === 'users' ? 'text-primary-600 dark:text-primary-400 border-b-2 border-primary-600 dark:border-primary-400' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'}`}
          >
            Manage Users
          </button>
        </div>

        <div className="p-6">
          {activeTab === 'jobs' && (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-dark-border text-sm text-slate-500 dark:text-slate-400">
                    <th className="pb-3 font-medium">Job Title</th>
                    <th className="pb-3 font-medium">Company</th>
                    <th className="pb-3 font-medium">Status</th>
                    <th className="pb-3 font-medium">Applications</th>
                    <th className="pb-3 font-medium text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {mockJobs.map(job => (
                    <tr key={job.id} className="border-b border-slate-100 dark:border-dark-border/50 hover:bg-slate-50 dark:hover:bg-slate-800/30">
                      <td className="py-4 font-medium text-slate-900 dark:text-white">{job.title}</td>
                      <td className="py-4 text-slate-600 dark:text-slate-300">{job.company}</td>
                      <td className="py-4">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${job.status === 'Active' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300' : 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300'}`}>
                          {job.status}
                        </span>
                      </td>
                      <td className="py-4 text-slate-600 dark:text-slate-300">{job.applications}</td>
                      <td className="py-4 text-right">
                        <button className="text-slate-400 hover:text-blue-500 mr-3"><FiEdit2 /></button>
                        <button className="text-slate-400 hover:text-red-500"><FiTrash2 /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'users' && (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-dark-border text-sm text-slate-500 dark:text-slate-400">
                    <th className="pb-3 font-medium">Name</th>
                    <th className="pb-3 font-medium">Email</th>
                    <th className="pb-3 font-medium">Role</th>
                    <th className="pb-3 font-medium">Joined</th>
                    <th className="pb-3 font-medium text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {mockUsers.map(user => (
                    <tr key={user.id} className="border-b border-slate-100 dark:border-dark-border/50 hover:bg-slate-50 dark:hover:bg-slate-800/30">
                      <td className="py-4 font-medium text-slate-900 dark:text-white">{user.name}</td>
                      <td className="py-4 text-slate-600 dark:text-slate-300">{user.email}</td>
                      <td className="py-4 capitalize text-slate-600 dark:text-slate-300">{user.role}</td>
                      <td className="py-4 text-slate-600 dark:text-slate-300">{user.joinedAt}</td>
                      <td className="py-4 text-right">
                        <button className="text-slate-400 hover:text-blue-500 mr-3"><FiEdit2 /></button>
                        <button className="text-slate-400 hover:text-red-500"><FiTrash2 /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
