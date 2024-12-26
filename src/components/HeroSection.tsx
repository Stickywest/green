import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero.jpeg'; // Replace with your image path
import image2 from '../assets/p2.jpeg'; // Replace with another image path
import image3 from '../assets/p3.jpeg'; // Replace with another image path

const HeroSection: React.FC = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [isZooming, setIsZooming] = useState(false); // State to control zoom-in effect
  const images = [heroImage, image2, image3]; // Array of images
  const textContent = [
    {
      heading: 'Welcome to Green Leaders Initiative',
      subheading: 'Advocating for environmental solutions and empowering communities for a sustainable future.',
    },
    {
      heading: 'Join Our Mission',
      subheading: 'Together, we can make a lasting impact on the environment and communities.',
    },
    {
      heading: 'Protect Nature',
      subheading: 'Be part of the solution to protect and preserve our planet for future generations.',
    },
  ]; // Text content corresponding to each image

  // Change the image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsZooming(true); // Start the zoom effect before changing the image
      setTimeout(() => {
        setActiveImage((prev) => (prev + 1) % images.length); // Change image
        setIsZooming(false); // Stop zoom effect after the transition
      }, 1000); // Wait for 1 second for zoom-in effect to finish
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen bg-green-100 overflow-hidden">
      {/* Background Image with Zoom Transition */}
      <div className="absolute inset-0">
        <img
          src={images[activeImage]} // Dynamic image based on state
          alt="Green Leaders Initiative"
          loading="lazy"
          className={`w-full h-full object-cover transition-all duration-1000 ease-in-out transform ${
            isZooming ? 'scale-110 opacity-0' : 'scale-100 opacity-100'
          }`} // Zoom and fade effect
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold opacity-100 animate-fade-in">
          {textContent[activeImage].heading}
        </h1>
        <p className="mt-4 text-lg md:text-2xl font-medium opacity-100 animate-fade-in delay-2s">
          {textContent[activeImage].subheading}
        </p>

        {/* Raised Get Involved Button */}
        <div className="absolute bottom-24 z-20">
          <Link
            to="/get-involved"
            className="px-8 py-3 bg-green-600 text-lg font-semibold rounded-lg shadow-lg hover:bg-green-700 animate-fade-in delay-4s transform translate-y-8 transition-all duration-300 ease-in-out"
          >
            Get Involved
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
