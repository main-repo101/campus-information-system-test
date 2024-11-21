import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Engineering Campus System</h1>
        <p className="text-lg mb-6">
          Discover the realms of Computer and Geodetic Engineering. Empowering innovation and precision.
        </p>
        <div className="flex gap-4 lg:flex-row flex-col">
          <a href={`#computer-engineering-section`} className="bg-white cursor-pointer text-blue-500 px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition">
            Learn About Computer Engineering
          </a>
          <a href={`#geodetic-engineering-section`} className="bg-white cursor-pointer text-purple-500 px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition">
            Learn About Geodetic Engineering
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
