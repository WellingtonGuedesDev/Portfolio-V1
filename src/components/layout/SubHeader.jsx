// src/components/layout/SubHeader.jsx
import React from 'react';

function SubHeader() {
  return (
    <div className="bg-black text-white py-2.5">
      <div className="container mx-auto px-6">
        <div className="flex justify-center md:justify-between items-center">
          <div className="hidden md:block text-sm font-medium">
            Brindes que marcam. Presentes que conectam.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-gray-300 transition-colors duration-200">creativeartgraficarapida@gmail.com</a>
            <span>|</span>
            <a href="#" className="hover:text-gray-300 transition-colors duration-200">11 96249-2213</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubHeader;