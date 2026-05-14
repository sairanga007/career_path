const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load env vars
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes (to be added)
app.use('/api/auth', require('./routes/authRoutes'));
// app.use('/api/jobs', require('./routes/jobRoutes'));
// app.use('/api/companies', require('./routes/companyRoutes'));

app.get('/', (req, res) => {
  res.send('IntellCareer API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
