import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Jobs from './pages/Jobs'
import JobDetails from './pages/JobDetails'
import Companies from './pages/Companies'
import CompanyDetails from './pages/CompanyDetails'
import ResumeBuilder from './pages/ResumeBuilder'
import Skills from './pages/Skills'
import Roadmaps from './pages/Roadmaps'
import MockInterview from './pages/MockInterview'
import AdminPanel from './pages/AdminPanel'
import ProtectedRoute from './routes/ProtectedRoute'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="jobs/:id" element={<JobDetails />} />
          <Route path="companies" element={<Companies />} />
          <Route path="companies/:id" element={<CompanyDetails />} />
          <Route path="roadmaps" element={<Roadmaps />} />
          {/* Protected Routes */}
          <Route 
            path="dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="resume-builder" 
            element={
              <ProtectedRoute>
                <ResumeBuilder />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="skills" 
            element={
              <ProtectedRoute>
                <Skills />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="mock-interview" 
            element={
              <ProtectedRoute>
                <MockInterview />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="admin" 
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminPanel />
              </ProtectedRoute>
            } 
          />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
