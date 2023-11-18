// Modal.js
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can access form data using e.target.elements
    onClose(); // Close the modal after form submission
  };


// .............................................buy now funtionality...........
 
const [fullName,setFullName] =useState('')
const [fullAddress,setFullAddress]=useState('')
const [pin,setPin]=useState('')
const [mobile,setMobile]=useState('')
// const [fullName]


const buyNow= async()=>{

// .............validation..............
if(fullName==="" ||fullAddress==="" ||pin==="" ||mobile===""  ){
return toast.error("all Fields are required")










// ............................address Info............
const addressInfo = {
  name,
  address,
  pincode,
  phoneNumber,
  date: new Date().toLocaleString(
    "en-US",
    {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }
  )
}


// ...................code provided by razor pay.............. 









}
  }


  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
          &#8203;
        </span>

        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
              Enter Shipping Information
            </h3>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
                  Enter Full Name
                </label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  className="border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                  required
                />
              </div>
              <div>
                <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900">
                  Enter Full Address
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  className="border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                  required
                />
              </div>
              <div>
                <label htmlFor="pincode" className="block mb-2 text-sm font-medium text-gray-900">
                  Enter Pincode
                </label>
                <input
                  type="text"
                  name="pincode"
                  id="pincode"
                  className="border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                  required
                />
              </div>
              <div>
                <label htmlFor="mobileNumber" className="block mb-2 text-sm font-medium text-gray-900">
                  Enter Mobile Number
                </label>
                <input
                  type="text"
                  name="mobileNumber"
                  id="mobileNumber"
                  className="border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                  required
                />
              </div>
             
            </form>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              onClick={buyNow}
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-violet-600 text-base font-medium text-white hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
