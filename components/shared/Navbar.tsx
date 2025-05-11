"use client";
import React from "react";
import { Button } from "../ui/button";
import RenderIf from "@/lib/RenderIf";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky p-2 top-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="container mx-auto flex justify-between items-center h-24">
        <div
          className="w-32 drop-shadow-[0_0_2px_#fff]"
          onClick={() => (window.location.href = "/")}
        >
          <img src="/logoWhite.png" alt="Logo" />
        </div>
        <div className="hidden md:flex space-x-4">
          <Button
            className={pathname === "/" ? "text-cyan-400" : "text-white"}
            variant="link"
          >
            <Link href="/">Home</Link>
          </Button>

          <Button
            className={pathname === "/about" ? "text-cyan-400" : "text-white"}
            variant="link"
          >
            <a href="/about">About</a>
          </Button>

          <Button
            className={pathname === "/price" ? "text-cyan-400" : "text-white"}
            variant="link"
          >
            <a href="/price">Price Offers</a>
          </Button>

          <Button
            className={pathname === "/contact" ? "text-cyan-400" : "text-white"}
            variant="link"
          >
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
            className="text-white "
            variant="ghost"
            onClick={() => setIsDialogOpen(true)}
          >
            <MenuIcon className="!w-8 !h-8" />
          </Button>

          <RenderIf condition={isDialogOpen}>
            <div
              onClick={() => setIsDialogOpen(false)}
              className="fixed top-0 right-0 h-screen w-screen bg-black/50 z-50 "
            >
              <div className="z-[99999999] px-20 py-12 rounded-2xl absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2   bg-white  shadow-lg transition-transform transform duration-300 ease-in-out">
                <div className="flex flex-col items-center justify-between gap-16 h-full">
                  <div className="text-4xl font-bold text-center">Menu</div>
                  <div className="flex flex-col space-y-6 mt-4 items-center !text-3xl">
                    <Button
                      className="text-cyan-700"
                      variant="link"
                      onClick={() => setIsDialogOpen(false)}
                    >
                      <Link href="/">Home</Link>
                    </Button>
                    <Button
                      variant="link"
                      onClick={() => setIsDialogOpen(false)}
                    >
                      <a href="/about">About</a>
                    </Button>
                    <Button
                      variant="link"
                      onClick={() => setIsDialogOpen(false)}
                    >
                      <a href="/price">Price Offers</a>
                    </Button>
                    <Button
                      variant="link"
                      onClick={() => setIsDialogOpen(false)}
                    >
                      <a href="/contact">Contact</a>
                    </Button>
                  </div>
                  <div>
                    <Button
                      variant={"default"}
                      onClick={() => setIsDialogOpen(false)}
                    >
                      Close
                    </Button>
                  </div>
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
