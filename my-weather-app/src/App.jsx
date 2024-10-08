import React from 'react'
import MainWeatherApp from './components/MainWeatherApp'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Home from './components/Home';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={!isAuthenticated ? <LoginForm onLogin={handleLogin} /> : <Navigate to="/home" />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/home" element={isAuthenticated ? <MainWeatherApp/> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App
