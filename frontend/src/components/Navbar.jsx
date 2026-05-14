import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContext';
import { FiSun, FiMoon, FiUser, FiLogOut } from 'react-icons/fi';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="fixed w-full z-50 glass-card rounded-none border-t-0 border-x-0 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-bold text-xl">
                I
              </div>
              <span className="font-bold text-xl tracking-tight dark:text-white">
                Intell<span className="text-primary-500">Career</span>
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/jobs" className="text-slate-600 hover:text-primary-500 dark:text-slate-300 dark:hover:text-primary-400 font-medium transition-colors">Jobs</Link>
            <Link to="/companies" className="text-slate-600 hover:text-primary-500 dark:text-slate-300 dark:hover:text-primary-400 font-medium transition-colors">Companies</Link>
            <Link to="/roadmaps" className="text-slate-600 hover:text-primary-500 dark:text-slate-300 dark:hover:text-primary-400 font-medium transition-colors">Roadmaps</Link>
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
              aria-label="Toggle Dark Mode"
            >
              {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>

            {user ? (
              <div className="flex items-center gap-4">
                <Link to="/dashboard" className="hidden sm:flex items-center gap-2 text-slate-700 dark:text-slate-200 hover:text-primary-500 transition-colors">
                  <FiUser />
                  <span className="font-medium">{user.name}</span>
                </Link>
                <button onClick={handleLogout} className="btn-secondary flex items-center gap-2">
                  <FiLogOut />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link to="/login" className="hidden sm:block text-slate-600 hover:text-primary-500 dark:text-slate-300 dark:hover:text-primary-400 font-medium transition-colors">
                  Login
                </Link>
                <Link to="/register" className="btn-primary">
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
