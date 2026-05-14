import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for token in localStorage on mount
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      const res = await axios.get(`/api/users?email=${email}`);
      const users = res.data;
      
      let userData;
      if (users.length > 0) {
        // If user exists in db.json, use their real data
        userData = { ...users[0], token: 'mock-jwt-token' };
      } else {
        // Allow anyone to log in by creating a temporary mock profile
        userData = { 
          id: Date.now(), 
          name: email.split('@')[0] || 'Guest User', 
          email: email, 
          role: 'student', 
          token: 'mock-jwt-token' 
        };
      }
      
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      return { success: true };
    } catch (error) {
      return { success: false, message: error.message || 'Login failed' };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
