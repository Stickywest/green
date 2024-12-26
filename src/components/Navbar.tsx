import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpeg'; // Import your logo here

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-4 px-6" style={{ backgroundColor: '#006529' }}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Green Leaders Initiative Logo" className="h-10 w-10" />
          <span className="text-white text-lg font-semibold">
            Green Leaders Initiative
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-white">
          <Link to="/" className="hover:text-green-300">Home</Link>
          <Link to="/about" className="hover:text-green-300">About</Link>
          <Link to="/projects" className="hover:text-green-300">Projects</Link>
          <Link to="/contact" className="hover:text-green-300">Contact</Link>
          <Link to="/join" className="hover:text-green-300">Join</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="absolute top-0 right-0 w-1/2 h-full text-white shadow-lg z-50"
          style={{ backgroundColor: '#006529' }}
        >
          <div className="flex flex-col space-y-4 p-6">
            <Link
              to="/"
              className="hover:bg-green-600 px-4 py-2 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:bg-green-600 px-4 py-2 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/projects"
              className="hover:bg-green-600 px-4 py-2 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="hover:bg-green-600 px-4 py-2 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/join"
              className="hover:bg-green-600 px-4 py-2 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Join
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
