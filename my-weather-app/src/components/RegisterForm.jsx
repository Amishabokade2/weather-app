import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";

const RegisterForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Prepare the data to be sent to the API
    const userData = {
      firstName,
      lastName,
      emailId: email,
      password,
    };

    try {
      // Send a POST request to the API
      const response = await fetch("http://localhost:8080/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        // Navigate to login page after successful registration
        navigate("/login");
      } else {
        // Handle errors here
        const errorData = await response.json();
        console.error("Failed to register:", errorData);
        alert(`Registration failed: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert(`An error occurred: ${error.message}`);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 font-custom">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-96 border border-gray-200"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Register</h2>
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-gray-700 font-semibold mb-2">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            placeholder="Enter your first name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-gray-700 font-semibold mb-2">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            placeholder="Enter your last name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300">Register</button>
        <p className="mt-4 text-center text-gray-600">
          Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Sign In</Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
