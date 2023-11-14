import React, { useContext, useState } from 'react';
import myContext from '../../Contexts/Data/MyContext';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import { auth } from '../../FireBase/FirBase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');






  const context = useContext(myContext);
  const { loading, setLoading } = context;
   const navigate= useNavigate();


  const handleLogin = (e) => {
    e.preventDefault();
    // Implement your login logic here
  };



  const Login = async () => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password)
      localStorage.setItem('user', JSON.stringify(result));
      toast.success("Signup Succesfully");
    navigate('/')
    } catch (error) {
      console.log(error)

    }
  }
  return (
    <div className="flex h-screen bg-gray-200">
      <div className="m-auto p-6 bg-white rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold text-center">Login</h2>
        <form className="mt-6" onSubmit={handleLogin}>
          <div className="mb-4">
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
            Log In
          </button>

        </form>
      </div>
    </div>
  );
};

export default Login;
