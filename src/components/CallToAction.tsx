import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction: React.FC = () => {
  return (
    <section className="bg-green-600 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold">Take Action Today</h2>
        <p className="mt-4 text-lg">
          Join the Green Leaders Initiative and become a part of the green revolution.
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <Link
            to="/join"
            className="px-8 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100"
          >
            Become a Member
          </Link>
          <Link
            to="/donate"
            className="px-8 py-3 bg-yellow-400 text-green-900 font-semibold rounded-lg hover:bg-yellow-500"
          >
            Donate Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
