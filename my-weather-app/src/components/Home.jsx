import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-3xl font-bold">Welcome to the Home Page!</h1>
      <button
        onClick={handleLogout}
        className="mt-6 bg-red-500 text-white p-2 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default Home;
