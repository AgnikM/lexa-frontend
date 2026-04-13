import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import DashboardPage from './pages/DashboardPage';
import HistoryPage from './pages/HistoryPage';
import AboutPage from './pages/AboutPage';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes with Layout */}
        <Route element={<Layout isLoggedIn={isLoggedIn} username={username} onLogout={handleLogout} />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Route>

        {/* Auth Routes without standard layout */}
        <Route path="/login" element={
          isLoggedIn ? <Navigate to="/dashboard" /> : <LoginPage />
        } />
        <Route path="/register" element={
          isLoggedIn ? <Navigate to="/dashboard" /> : <RegisterPage />
        } />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />

        {/* Catch all - redirect to home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
