import React from 'react'

function Footer() {
  return (
 <footer className="bg-gray-900 text-white p-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <p className="text-center">
            Your Footer Content Here
          </p>
          <div className="mt-2">
            <a
              href="#"
              className="text-gray-300 hover:text-gray-500 px-2"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-gray-500 px-2"
            >
              Contact
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-gray-500 px-2"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


















