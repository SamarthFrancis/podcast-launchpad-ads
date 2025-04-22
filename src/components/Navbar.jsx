
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="font-jakarta font-bold text-xl text-[#4F46E5]">
          PodcastLaunchpad
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="font-manrope text-[#111827] hover:text-[#4F46E5] transition-colors">
            Features
          </Link>
          <Link to="/" className="font-manrope text-[#111827] hover:text-[#4F46E5] transition-colors">
            Pricing
          </Link>
          <Link to="/" className="font-manrope text-[#111827] hover:text-[#4F46E5] transition-colors">
            Resources
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/" className="font-manrope font-medium text-[#111827] hover:text-[#4F46E5] transition-colors">
            Log in
          </Link>
          <Link 
            to="/" 
            className="bg-[#4F46E5] hover:bg-[#4F46E5]/90 text-white font-medium px-4 py-2 rounded-lg transition-colors"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
