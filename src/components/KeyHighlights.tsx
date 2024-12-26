import React from 'react';

const KeyHighlights: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-600">
          Why Join Us?
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-2xl font-semibold text-green-600">Environmental Advocacy</h3>
            <p className="mt-4 text-gray-700">
              Join hands with us to fight climate change and protect our planet for future generations.
            </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-2xl font-semibold text-green-600">Community Empowerment</h3>
            <p className="mt-4 text-gray-700">
              Help empower communities by creating sustainable initiatives and fostering growth.
            </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-2xl font-semibold text-green-600">Global Partnerships</h3>
            <p className="mt-4 text-gray-700">
              Be part of a global network working towards achieving sustainable development goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyHighlights;
