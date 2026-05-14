const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a company name'],
    unique: true
  },
  description: {
    type: String,
    required: [true, 'Please add a description']
  },
  industry: {
    type: String,
    required: true
  },
  website: {
    type: String,
    match: [
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
      'Please use a valid URL with HTTP or HTTPS'
    ]
  },
  headquarters: {
    type: String,
  },
  logo: {
    type: String,
    default: 'default-company-logo.png'
  },
  hiringProcess: {
    type: String
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Company', CompanySchema);
