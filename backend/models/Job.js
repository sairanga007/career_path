const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a job title']
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
    required: true
  },
  description: {
    type: String,
    required: [true, 'Please add a description']
  },
  type: {
    type: String,
    enum: ['Full-time', 'Part-time', 'Internship', 'Contract'],
    required: true
  },
  location: {
    type: String,
    required: true
  },
  workModel: {
    type: String,
    enum: ['On-site', 'Remote', 'Hybrid'],
    default: 'On-site'
  },
  salaryRange: {
    type: String,
  },
  skillsRequired: {
    type: [String],
    required: true
  },
  experienceLevel: {
    type: String,
    enum: ['Fresher', 'Junior', 'Mid-Level', 'Senior'],
    default: 'Fresher'
  },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Job', JobSchema);
