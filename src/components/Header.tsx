import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Header styling uses the new color consistently
  const headerBgClass = 'bg-white';
  const headerTextColorClass = 'text-[#191c5d]';
  const mobileMenuBgClass = 'bg-[#191c5d]'; // Updated to namma text color

  return (
    <header className={`w-full ${headerBgClass} shadow-md z-50`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Left side - Logo (always visible) */}
          <div className="flex-1">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Namma Loo Logo" className="h-8 sm:h-10 md:h-12" />
            </Link>
          </div>

          {/* Right side - Navigation */}
          <div className="flex items-center">
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-6 xl:space-x-8">
              <Link 
                to="/" 
                className={`${headerTextColorClass} hover:text-[#1aaf9b] transition-colors text-sm xl:text-base font-medium px-2 py-1 rounded-md hover:bg-blue-50`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`${headerTextColorClass} hover:text-[#1aaf9b] transition-colors text-sm xl:text-base font-medium px-2 py-1 rounded-md hover:bg-blue-50`}
              >
                About Us
              </Link>
              <Link 
                to="/app-guide" 
                className={`${headerTextColorClass} hover:text-[#1aaf9b] transition-colors text-sm xl:text-base font-medium px-2 py-1 rounded-md hover:bg-blue-50`}
              >
                App Guide
              </Link>
              <Link 
                to="/contact" 
                className={`${headerTextColorClass} hover:text-[#1aaf9b] transition-colors text-sm xl:text-base font-medium px-2 py-1 rounded-md hover:bg-blue-50`}
              >
                Contact
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden focus:outline-none ${headerTextColorClass} ml-2 sm:ml-4 p-2 rounded-md hover:bg-blue-50 transition-colors`}
              onClick={toggleMenu}
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <FaTimes size={20} className="sm:w-6 sm:h-6" /> : <FaBars size={20} className="sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Improved overlay */}
        <div 
          className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ease-in-out ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={toggleMenu}
          />
          
          {/* Menu Panel */}
          <div className={`absolute top-0 right-0 w-64 sm:w-80 h-full ${headerBgClass} shadow-2xl transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
                <Link to="/" className="flex items-center" onClick={toggleMenu}>
                  <img src={logo} alt="Namma Loo Logo" className="h-8 sm:h-10" />
                </Link>
                <button
                  onClick={toggleMenu}
                  className="p-2 rounded-md hover:bg-gray-100 transition-colors"
                  aria-label="Close menu"
                >
                  <FaTimes size={20} className="text-[#191c5d]" />
                </button>
              </div>
              
              {/* Navigation Links */}
              <nav className="flex-1 px-4 sm:px-6 py-4">
                <div className="space-y-2">
                  <Link 
                    to="/" 
                    className={`block px-4 py-3 rounded-lg ${headerTextColorClass} hover:text-[#1aaf9b] hover:bg-blue-50 transition-all text-base font-medium`}
                    onClick={toggleMenu}
                  >
                    Home
                  </Link>
                  <Link 
                    to="/about" 
                    className={`block px-4 py-3 rounded-lg ${headerTextColorClass} hover:text-[#1aaf9b] hover:bg-blue-50 transition-all text-base font-medium`}
                    onClick={toggleMenu}
                  >
                    About Us
                  </Link>
                  <Link 
                    to="/app-guide" 
                    className={`block px-4 py-3 rounded-lg ${headerTextColorClass} hover:text-[#1aaf9b] hover:bg-blue-50 transition-all text-base font-medium`}
                    onClick={toggleMenu}
                  >
                    App Guide
                  </Link>
                  <Link 
                    to="/contact" 
                    className={`block px-4 py-3 rounded-lg ${headerTextColorClass} hover:text-[#1aaf9b] hover:bg-blue-50 transition-all text-base font-medium`}
                    onClick={toggleMenu}
                  >
                    Contact Us
                  </Link>
                </div>
              </nav>
              
              {/* Footer */}
              <div className="p-4 sm:p-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 text-center">
                  © 2024 NammaLoo. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
