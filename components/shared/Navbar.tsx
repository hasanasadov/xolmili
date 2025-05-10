"use client";
import React from "react";
import { Button } from "../ui/button";
import RenderIf from "@/lib/RenderIf";

const Navbar = () => {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  return (
    <nav className="sticky p-2 top-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="container mx-auto flex justify-between items-center h-24">
        <div className="w-32" onClick={() => (window.location.href = "/")}>
          <img src="/logoWhite.png" alt="Logo" />
        </div>
        <div className="hidden md:flex space-x-4">
          <Button className="text-white" variant="link">
            <a href="/">Home</a>
          </Button>
          <Button className="text-white" variant="ghost">
            <a href="/about">About</a>
          </Button>
          <Button className="text-white" variant="ghost">
            <a href="/price">Price Offers</a>
          </Button>
          <Button className="text-white" variant="ghost">
            <a href="/contact">Contact</a>
          </Button>
        </div>
        <div className="hidden md:flex w-32 justify-end">
          <Button className="bg-white text-black hover:bg-gray-200">
            Login
          </Button>
        </div>
        <div className="md:hidden">
          <Button
            className="text-white"
            variant="ghost"
            onClick={() => setIsDialogOpen(true)}
          >
            Menu
          </Button>

          <RenderIf condition={isDialogOpen}>
            <div className="fixed top-[50vh] inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white p-4 rounded-lg w-3/4 max-w-md">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-bold">Menu</h2>
                  <button
                    className="text-black"
                    onClick={() => setIsDialogOpen(false)}
                  >
                    Close
                  </button>
                </div>
                <div className="flex flex-col space-y-2">
                  <a href="/" className="text-black hover:underline">
                    Home
                  </a>
                  <a href="/about" className="text-black hover:underline">
                    About
                  </a>
                  <a href="/price" className="text-black hover:underline">
                    Price Offers
                  </a>
                  <a href="/contact" className="text-black hover:underline">
                    Contact
                  </a>
                  <Button
                    className="bg-black text-white hover:bg-gray-800 mt-4"
                    onClick={() => setIsDialogOpen(false)}
                  >
                    Login
                  </Button>
                </div>
              </div>
            </div>
          </RenderIf>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
