# IntellCareer Platform

IntellCareer is a modern full-stack ReactJS web application built for Career Growth, Skill Development, and Job Opportunities. It is designed for students, freshers, developers, and job seekers.

## 🚀 Features

*   **Job Portal:** Search, filter, and save jobs and internships.
*   **Company Directory:** Explore top companies, their hiring processes, and open roles.
*   **Resume Builder:** Create professional resumes with a live A4 styled preview.
*   **Skill Tracker:** Track your skills and get **Location-Based Smart Suggestions** for nearby coaching and YouTube tutorials.
*   **Career Roadmaps:** Step-by-step guides to mastering technologies.
*   **Intelligent Notifications:** Real-time mock alerts for new job postings at favorited companies.
*   **Role-based Dashboard:** Personalized views for students and recruiters.

## 🛠️ Tech Stack

*   **Frontend:** ReactJS (Vite), React Router v6, Tailwind CSS, Context API.
*   **Backend:** Node.js, Express.js.
*   **Database:** MongoDB, Mongoose.
*   **Auth:** JWT Token Authentication.

## 📋 Prerequisites

Before you begin, ensure you have installed:
*   [Node.js](https://nodejs.org/) (LTS version)
*   [MongoDB](https://www.mongodb.com/try/download/community) (Running locally or an Atlas URI)

## ⚙️ Setup Instructions

### 1. Backend Setup

1. Open your terminal and navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure Environment Variables:
   The backend relies on a `.env` file located in the `backend/` root. It should look like this:
   ```env
   PORT=5000
   NODE_ENV=development
   MONGO_URI=mongodb://127.0.0.1:27017/intellcareer
   JWT_SECRET=supersecretjwttokenforintellcareer
   ```
4. Seed the Database with dummy data:
   ```bash
   npm run seed
   ```
5. Start the backend server:
   ```bash
   npm run dev
   ```

### 2. Frontend Setup

1. Open a new terminal and navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to the URL provided by Vite (usually `http://localhost:5173`).

## 💡 Usage

*   **Mock Login**: Since the frontend currently uses mock data in the `AuthContext`, you can click "Sign In" with any dummy email/password to access the dashboard. 
*   **Skill Improvement**: Navigate to the "Skill Tracker" and click "Enable Location" to see the simulated location-based coaching suggestions.

## 📝 License
This project is built for academic and portfolio showcase purposes.
