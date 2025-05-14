"use client";

import RGBButton from "@/components/shared/RGButton";
import React from "react";

const HomePage = () => {
  return (
    <div className="p-4">
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
          <h1 className="text-6xl font-extrabold mb-6 animate-fade-in-down">
            Welcome to Xolmili
          </h1>
          <p className="text-xl mb-8 max-w-2xl animate-fade-in-up delay-200">
            There&ldquo;s more to a great car than just clever engineering. It
            has to be sturdy, reliable, and make your life a little easier.
          </p>
          <div className="animate-fade-in-up delay-500">
            <RGBButton onClick={() => (window.location.href = "/catalogue")}>
              Get Started
            </RGBButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
