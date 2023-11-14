import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import myContext from '../../Contexts/Data/MyContext';
import { toast } from 'react-toastify';
import { auth, fireDB } from '../../FireBase/FirBase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
// import { Timestamp, addDoc, collection } from 'firebase/firestore';
const Signup = () => {
  const [name, setName] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  // ..................................using loading through context method........./

  const context = useContext(myContext);
  const { loading, setLoading } = context;

  const handleSignup = (e) => {
    e.preventDefault();
    // Implement your signup logic here
  };



  // ......................signup function..........


  const signin = async () => {

    if (name === "" || email === "" || password === "") {
      return toast.error("all fields are required")
    }



    try {


      const users = await createUserWithEmailAndPassword(auth, email, password);
      console.log(users);


            // console.log(users)

            const user = {
              name: name,
              uid: users.user.uid,
              email: users.user.email,
              time : Timestamp.now()
          }
          const userRef = collection(fireDB, "users")
          await addDoc(userRef, user);
          toast.success("Signup Succesfully")
          setName("");
          setEmail("");
          setPassword("");


    
    
    
    
    }






    catch (error) {
      console.log(error);
    }
    // console.log(name,email,password)
  }

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
              value={name}
              onChange={(e) => setName(e.target.value)}
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
            onClick={signin}
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
