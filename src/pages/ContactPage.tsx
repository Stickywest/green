import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; // Import necessary icons
import ContactImage from '../assets/images.png';

const ContactPage: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Main Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side (Vector Image) - Hidden on small screens */}
        <div className="flex justify-center md:block hidden">
          <img
            src={ContactImage} // Replace with your vector image URL
            alt="Contact Illustration"
            className="w-full max-w-md h-auto"
          />
        </div>

        {/* Right Side (Contact Information and Form) */}
        <div>
          {/* Title */}
          <h1 className="text-4xl font-bold text-green-600 text-center mb-6">Contact Us</h1>

          {/* Contact Information */}
          <div className="flex flex-wrap justify-center items-start space-x-12 mb-8">
            <ul className="space-y-4 text-lg w-full sm:w-auto">
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-blue-500 text-xl" />
                <a href="mailto:greenleadersinitiative.ke@gmail.com" className="text-blue-500 hover:text-blue-700">
                  greenleadersinitiative.ke@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhoneAlt className="text-green-600 text-xl" />
                <a href="tel:+254718178963" className="text-green-600 hover:text-green-700">
                  +254718178963
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhoneAlt className="text-green-600 text-xl" />
                <a href="tel:+254707204923" className="text-green-600 hover:text-green-700">
                  +254707204923
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhoneAlt className="text-green-600 text-xl" />
                <a href="tel:+254799105399" className="text-green-600 hover:text-green-700">
                  +254799105399
                </a>
              </li>
            </ul>

            {/* Social Media Icons */}
            <div className="space-y-4 w-full sm:w-auto mt-6 sm:mt-0">
              <p className="text-lg">Follow Us:</p>
              <div className="flex space-x-6 text-2xl text-gray-600">
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
          </div>

          {/* Message Form */}
          <div className="bg-white p-8 rounded-lg shadow-md max-w-lg mx-auto">
            <h2 className="text-2xl font-semibold text-green-600 mb-4">Leave Us a Message</h2>
            <form action="#" method="POST" className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-lg">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="youremail@example.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Write your message here"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div className="mt-4 text-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
