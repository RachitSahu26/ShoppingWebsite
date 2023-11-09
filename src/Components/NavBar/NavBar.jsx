import React from 'react'
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
        <a href="#" className="text-white hover:text-gray-300">All Product</a>
        <a href="#" className="text-white hover:text-gray-300">Cart</a>
        <a href="#" className="text-white hover:text-gray-300">Order</a>
        <a href="#" className="text-white hover:text-gray-300">Contact</a>
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