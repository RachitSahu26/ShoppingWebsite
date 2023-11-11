import React from 'react'
import { Link } from 'react-router-dom'
// import myContext from '../../Contexts/Data/MyContext'
// import { BsFillMoonFill } from 'react-icons/bs';
// const contex=useContext(myContext)
// const {togglebtn,mode}=contex;

function NavBar() {
  return (



    <nav className="bg-gray-800 p-4 " >
    <div className="container mx-auto flex items-center justify-between">
      <div className="text-2xl text-white font-bold">Your Logo</div>
      <div>





      </div>
      <div className="hidden sm:flex space-x-4">
      <Link to="/" className="text-white hover:text-gray-300">Home</Link>

        <Link to="/allproduct" className="text-white hover:text-gray-300">All Product</Link>
        <Link to="/cart" className="text-white hover:text-gray-300">Cart</Link>
        <Link to="/order" className="text-white hover:text-gray-300">Order</Link>
        <Link to="/admin" className="text-white hover:text-gray-300">Admin</Link>
       
        <Link to="/sigup" className="text-white hover:text-gray-300">Login</Link>
        {/* <Link to="/product" className="text-white hover:text-gray-300"></Link> */}
       
      </div>
      <div className="sm:hidden">
        <button className="text-red">
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </div>
  </nav>
  )
}

export default NavBar