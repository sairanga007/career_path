import React, { useState } from 'react';
import { FiPlus, FiTrash2, FiDownload, FiSave } from 'react-icons/fi';

const ResumeBuilder = () => {
  const [personalInfo, setPersonalInfo] = useState({
    name: '', email: '', phone: '', location: '', linkedin: '', summary: ''
  });

  const [experience, setExperience] = useState([
    { id: 1, title: '', company: '', startDate: '', endDate: '', description: '' }
  ]);

  const [education, setEducation] = useState([
    { id: 1, degree: '', institution: '', year: '', gpa: '' }
  ]);

  const handlePersonalInfoChange = (e) => {
    setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value });
  };

  const handleExpChange = (id, field, value) => {
    setExperience(experience.map(exp => exp.id === id ? { ...exp, [field]: value } : exp));
  };

  const addExperience = () => {
    setExperience([...experience, { id: Date.now(), title: '', company: '', startDate: '', endDate: '', description: '' }]);
  };

  const removeExperience = (id) => {
    setExperience(experience.filter(exp => exp.id !== id));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Resume Builder</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2">Create a professional resume in minutes.</p>
        </div>
        <div className="flex gap-4">
          <button className="btn-secondary flex items-center gap-2">
            <FiSave /> Save Draft
          </button>
          <button className="btn-primary flex items-center gap-2">
            <FiDownload /> Download PDF
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Editor Form */}
        <div className="space-y-6 max-h-[80vh] overflow-y-auto pr-4 custom-scrollbar">
          
          <section className="card p-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Personal Information</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Full Name</label>
                <input type="text" name="name" value={personalInfo.name} onChange={handlePersonalInfoChange} className="input-field" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
                <input type="email" name="email" value={personalInfo.email} onChange={handlePersonalInfoChange} className="input-field" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Phone</label>
                <input type="tel" name="phone" value={personalInfo.phone} onChange={handlePersonalInfoChange} className="input-field" placeholder="+1 234 567 890" />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Professional Summary</label>
                <textarea name="summary" value={personalInfo.summary} onChange={handlePersonalInfoChange} rows="3" className="input-field" placeholder="Brief overview of your career..."></textarea>
              </div>
            </div>
          </section>

          <section className="card p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Experience</h2>
              <button onClick={addExperience} className="text-sm text-primary-600 dark:text-primary-400 flex items-center gap-1 hover:underline">
                <FiPlus /> Add Role
              </button>
            </div>
            
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div key={exp.id} className="p-4 border border-slate-200 dark:border-dark-border rounded-lg relative">
                  {experience.length > 1 && (
                    <button onClick={() => removeExperience(exp.id)} className="absolute top-4 right-4 text-slate-400 hover:text-red-500">
                      <FiTrash2 />
                    </button>
                  )}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2 sm:col-span-1">
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Job Title</label>
                      <input type="text" value={exp.title} onChange={(e) => handleExpChange(exp.id, 'title', e.target.value)} className="input-field" placeholder="Software Engineer" />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Company</label>
                      <input type="text" value={exp.company} onChange={(e) => handleExpChange(exp.id, 'company', e.target.value)} className="input-field" placeholder="Google" />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Description</label>
                      <textarea value={exp.description} onChange={(e) => handleExpChange(exp.id, 'description', e.target.value)} rows="3" className="input-field" placeholder="Developed frontend features..."></textarea>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Live Preview (A4 styled box) */}
        <div className="hidden lg:block sticky top-24">
          <div className="bg-white border border-slate-200 shadow-xl rounded-sm w-full aspect-[1/1.414] p-8 overflow-y-auto">
            <h1 className="text-3xl font-serif text-slate-900 text-center mb-2">{personalInfo.name || 'Your Name'}</h1>
            <div className="text-center text-sm text-slate-600 mb-6 flex justify-center gap-4">
              <span>{personalInfo.email || 'email@example.com'}</span>
              <span>{personalInfo.phone || '(123) 456-7890'}</span>
            </div>
            
            {personalInfo.summary && (
              <div className="mb-6">
                <p className="text-sm text-slate-800 leading-relaxed">{personalInfo.summary}</p>
              </div>
            )}

            <div className="mb-6">
              <h2 className="text-lg font-bold text-slate-900 uppercase border-b border-slate-300 mb-3 pb-1">Experience</h2>
              <div className="space-y-4">
                {experience.map(exp => (
                  <div key={exp.id}>
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="font-bold text-slate-800">{exp.title || 'Job Title'}</h3>
                      <span className="text-sm font-medium text-slate-600">{exp.company || 'Company'}</span>
                    </div>
                    <p className="text-sm text-slate-700">{exp.description || 'Describe your achievements and responsibilities...'}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ResumeBuilder;
