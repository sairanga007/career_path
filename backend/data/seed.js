const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('../models/User');
const Job = require('../models/Job');
const Company = require('../models/Company');

dotenv.config({ path: '../.env' });

const companies = [
  {
    name: 'Google',
    description: 'Organize the world\'s information and make it universally accessible and useful.',
    industry: 'Technology',
    website: 'https://careers.google.com',
    location: 'Mountain View, CA',
    hiringProcess: 'Phone Screen -> Technical Interviews -> System Design -> Behavioral -> Offer'
  },
  {
    name: 'Microsoft',
    description: 'Empower every person and every organization on the planet to achieve more.',
    industry: 'Technology',
    website: 'https://careers.microsoft.com',
    location: 'Redmond, WA',
    hiringProcess: 'Online Assessment -> Technical Phone Screen -> Loop Interviews -> Offer'
  }
];

const jobs = [
  {
    title: 'Frontend Developer',
    description: 'Build modern user interfaces using React and Tailwind CSS.',
    type: 'Full-time',
    location: 'Mountain View, CA',
    workModel: 'Hybrid',
    salaryRange: '$120k - $160k',
    skillsRequired: ['React', 'JavaScript', 'CSS', 'Tailwind'],
    experienceLevel: 'Mid-Level'
  },
  {
    title: 'Backend Engineer',
    description: 'Design and implement scalable backend APIs using Node.js and Express.',
    type: 'Full-time',
    location: 'Remote',
    workModel: 'Remote',
    salaryRange: '$130k - $170k',
    skillsRequired: ['Node.js', 'Express', 'MongoDB'],
    experienceLevel: 'Senior'
  }
];

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/intellcareer', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected for Seeding');

    await User.deleteMany();
    await Job.deleteMany();
    await Company.deleteMany();

    // Create Admin User
    const adminUser = await User.create({
      name: 'Admin User',
      email: 'admin@intellcareer.com',
      password: 'password123',
      role: 'admin'
    });

    // Create Companies
    const createdCompanies = await Company.insertMany(companies);

    // Add company refs and user ref to jobs
    const jobsWithRefs = jobs.map((job, index) => ({
      ...job,
      company: createdCompanies[index % createdCompanies.length]._id,
      postedBy: adminUser._id
    }));

    await Job.insertMany(jobsWithRefs);

    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`Error with data import: ${error}`);
    process.exit(1);
  }
};

seedData();
