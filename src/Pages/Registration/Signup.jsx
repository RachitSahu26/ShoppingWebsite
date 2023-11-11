import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    // Implement your signup logic here
  };

  return (
    <div className="flex h-screen bg-gray-200">
      <div className="m-auto p-6 bg-white rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold text-center">Sign Up</h2>
        <form className="mt-6" onSubmit={handleSignup}>
         
         
          <div className="mb-4">
          
          
          
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
           
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
              type="text"
              id="name"
              placeholder="Your Name"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          
          
          
          
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
              type="email"
              id="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>


          <div className="mb-6">




            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
              type="password"
              id="password"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            className="w-full bg-blue-500 text-white font-semibold p-2 rounded-md hover:bg-blue-600"
            type="submit"
          >
            Sign Up
          </button>
          <h1 className='p-3 '><Link to="/login">Login</Link></h1>
        </form>
      </div>
    </div>
  );
};

export default Signup;
