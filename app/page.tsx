import React from "react";

const HomePage = () => {
  return (
    <div>
      <div className="absolute top-0 right-0 w-[100vw] z-[-1]">
        <div className="relative w-full h-screen">
          <img
            className="w-full h-full object-cover animate-pulse"
            src="/giphy.gif"
            alt="Background Animation"
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.7)_100%)] pointer-events-none" />
        </div>
      </div>

      <div className="relative z-10">
        <div className="flex flex-col items-center justify-center h-[80vh] text-white text-center">
          <h1 className="text-6xl font-extrabold mb-6 animate-fade-in">
            Welcome to Xolmili
          </h1>
          <p className="text-xl mb-8 max-w-2xl animate-slide-up">
            Pioneering the future of iron-making technology with cutting-edge
            innovations and location-based solutions. At Xolmili, we forge
            excellence and sustainability into every product.
          </p>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-600 hover:to-cyan-500 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105 animate-bounce">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
