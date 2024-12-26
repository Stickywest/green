import React from 'react';
import { FaLeaf, FaHandHoldingHeart, FaGlobe } from 'react-icons/fa'; // Example icons, you can replace with others

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-extrabold text-green-600 text-center mb-6">
        About Green Leaders Initiative
      </h1>
      
      <div className="text-center mb-12">
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          The Green Leaders Initiative is committed to finding sustainable solutions for our planet's
          environmental challenges. We aim to raise awareness and encourage action to combat climate
          change through community engagement and partnerships with local and international organizations.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {/* Mission Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <FaLeaf className="text-4xl text-green-600 mb-4 mx-auto" />
          <h2 className="text-2xl font-semibold text-green-600 mb-2">Our Mission</h2>
          <p className="text-gray-700">
            Our mission is to educate, organize, and inspire individuals to take an active role in
            combating climate change. We aim to create sustainable practices and build resilient communities.
          </p>
        </div>

        {/* Vision Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <FaGlobe className="text-4xl text-green-600 mb-4 mx-auto" />
          <h2 className="text-2xl font-semibold text-green-600 mb-2">Our Vision</h2>
          <p className="text-gray-700">
            We envision a world where individuals and communities collaborate to safeguard the environment,
            ensuring a green, thriving planet for generations to come.
          </p>
        </div>

        {/* Goals Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <FaHandHoldingHeart className="text-4xl text-green-600 mb-4 mx-auto" />
          <h2 className="text-2xl font-semibold text-green-600 mb-2">Our Goals</h2>
          <p className="text-gray-700">
            Our goals include fostering environmental awareness, advocating for green policies, and supporting
            community-driven sustainability projects. We strive to empower individuals to lead positive change.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Join Our Efforts</h3>
        <p className="text-lg text-gray-700 mb-6">
          Be part of our mission to create a sustainable future. Whether you're an individual, organization, or community,
          there's always a way for you to make a difference.
        </p>
        <a
          href="/get-involved"
          className="px-8 py-3 bg-green-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-green-700 transition-all duration-300"
        >
          Get Involved
        </a>
      </div>
    </div>
  );
};

export default AboutPage;
