import { Link } from 'react-router-dom';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <img src="/img/mjv1_r1s3_141015.jpg" alt="logo" className="h-8 w-auto" />
            <span className="ml-3 text-xl font-bold text-gray-800">CarConnect</span>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="flex space-x-6">
              {['Home', 'About Us', 'Contact', 'Listing'].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase().replace(' ', '-')}`}
                  className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out"></span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;