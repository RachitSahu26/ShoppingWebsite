import React from 'react';

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="border-4 border-gray-200 h-16 w-16 border-t-4 border-b-4 rounded-full animate-spin"></div>
      <p className="mt-4 text-gray-600">Loading...</p>
    </div>
  );
};

export default Loader;
