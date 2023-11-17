import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { FaShoppingCart } from 'react-icons/fa';



const users = JSON.parse(localStorage.getItem("users"))
// ...........................logout ..............

const logOut = () => {
  localStorage.clear('userdata');
  toast.error('logout successful');
  window.location.href = '/login';
}

function NavBar() {


const cartItem = useSelector((state) => state.cart)

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

          {

            users?.user?.email === "rachitsahu24@gmail.com" ?
              <Link to="/order" className="text-white hover:text-gray-300">Order</Link>
              : ""
          }






          {

            users?.user?.email === "rachitsahu24@gmail.com" ?
              <Link to="/admin" className="text-white hover:text-gray-300">
                Admin</Link> : ""}

          {
            users ?

              <Link to="" className="text-white hover:text-gray-300" onClick={logOut}>
                LogOut
              </Link>

              : ""
          }











          <div className="relative">
            <FaShoppingCart className="h-8 w-8 text-blue-500" />

            {/* Notification badge */}
            <div className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center text-white">
              <span className="text-xs font-semibold">{cartItem.length
              }</span>
            </div>
          </div>
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