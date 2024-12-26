import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Logo from '../assets/logo.jpeg'; // Replace with the path to your logo image
import Akiliedge from '../assets/logo1.png';
const Footer: React.FC = () => {
  return (
    <footer className="bg-green-600 text-white py-8 mt-8">
      <div className="container mx-auto text-center md:text-left flex flex-col md:flex-row justify-between items-center">
        {/* First Section: Logo and Quick Links */}
        <div className="w-full sm:w-1/4 mb-6 sm:mb-0 flex flex-col items-center md:items-start">
          <img src={Logo} alt="Green Leaders Initiative Logo" className="w-32 mx-auto mb-4" />
          <p className="text-lg">Green Leaders Initiative</p>
        </div>

        <div className="w-full sm:w-1/4 mb-6 sm:mb-0 flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="text-green-300 hover:text-white">Home</a></li>
            <li><a href="/about" className="text-green-300 hover:text-white">About Us</a></li>
            <li><a href="/contact" className="text-green-300 hover:text-white">Contact Us</a></li>
            <li><a href="/join" className="text-green-300 hover:text-white">Join Us</a></li>
          </ul>
        </div>

        <div className="w-full sm:w-1/4 mb-6 sm:mb-0 flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-6 justify-center md:justify-start text-2xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="w-full sm:w-1/4 mb-6 sm:mb-0 flex flex-col items-center md:items-start">
          {/* Contact Information */}
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <div className="mt-4">
            <p>Email: <a href="mailto:greenleadersinitiative.ke@gmail.com" className="text-green-300 hover:text-white">greenleadersinitiative.ke@gmail.com</a></p>
            <p>Phone: <a href="tel:+254718178963" className="text-green-300 hover:text-white">+254718178963</a>, <a href="tel:+254707204923" className="text-green-300 hover:text-white">+254707204923</a></p>
          </div>
        </div>
      </div>

      {/* Second Section: Powered By */}
      <div className="text-sm mt-4 text-center">
        <p className="text-green-300">Powered By</p>
        <div className="flex justify-center">
          <img src={Akiliedge} alt="Powered By Green Leaders" className="w-16 h-auto" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
