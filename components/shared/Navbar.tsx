"use client";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { PATHS } from "@/constants";
import { ThemeToggle } from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky p-2 top-0 w-full z-50 dark:bg-white/10 bg-white/90 backdrop-blur-md border-b border-white/20">
      <div className="container mx-auto flex justify-between items-center h-14">
        <div
          className=" h-[calc(100%+8px)]  drop-shadow-[0_0_2px_#fff] cursor-pointer"
          onClick={() => (window.location.href = PATHS.HOME)}
        >
          <img className="dark:hidden h-full" src="/logo.png" alt="Logo" />
          <img
            className="hidden dark:block h-full"
            src="/logoWhite.png"
            alt="Logo"
          />
        </div>
        <div className="hidden lg:flex space-x-4">
          <Link href={PATHS.HOME}>
            <Button
              className={
                pathname === PATHS.HOME
                  ? "dark:!text-cyan-400 border border-[rgb(0,0,0,0.3)] dark:border-[rgb(255,255,255,0.1)]"
                  : ""
              }
              variant="link"
            >
              Home
            </Button>
          </Link>

          <Link href={PATHS.CATALOGUE}>
            <Button
              className={
                pathname === PATHS.CATALOGUE
                  ? "dark:!text-cyan-400 border border-[rgb(0,0,0,0.3)] dark:border-[rgb(255,255,255,0.1)]"
                  : ""
              }
              variant="link"
            >
              Catalogue
            </Button>
          </Link>

          <Link href={PATHS.ABOUT}>
            <Button
              className={
                pathname === PATHS.ABOUT
                  ? "dark:!text-cyan-400 border border-[rgb(0,0,0,0.3)] dark:border-[rgb(255,255,255,0.1)]"
                  : ""
              }
              variant="link"
            >
              About
            </Button>
          </Link>

          <Link href={PATHS.CONTACT}>
            <Button
              className={
                pathname === PATHS.CONTACT
                  ? "dark:!text-cyan-400 border border-[rgb(0,0,0,0.3)] dark:border-[rgb(255,255,255,0.1)]"
                  : ""
              }
              variant="link"
            >
              Contact
            </Button>
          </Link>
        </div>
        <div className="hidden lg:flex w-32 justify-end md:gap-4">
          <Link href={PATHS.ORDER}>
            <Button
              className={
                pathname === PATHS.ORDER
                  ? "dark:!text-cyan-400 border border-[rgb(0,0,0,0.3)] dark:border-[rgb(255,255,255,0.1)]"
                  : ""
              }
              variant="link"
            >
              Make an Order
            </Button>
          </Link>

          <Link href={PATHS.LOGIN}>
            <Button
              className={
                pathname != PATHS.LOGIN
                  ? " bg-white text-black hover:bg-white/70"
                  : "text-white"
              }
            >
              Login
            </Button>
          </Link>
          <ThemeToggle />
        </div>
        <div className="lg:hidden">
          <Button
            className="dark:text-white text-black "
            variant="ghost"
            onClick={() => setIsDialogOpen(true)}
          >
            <MenuIcon className="!w-8 !h-8" />
          </Button>
          <AnimatePresence>
            {isDialogOpen && (
              <motion.aside
                className="fixed top-0 right-0 z-50 h-fit w-screen bg-white dark:bg-black text-black dark:text-white shadow-lg p-6 flex flex-col gap-4"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "tween", duration: 0.5 }}
              >
                <button
                  onClick={() => setIsDialogOpen(false)}
                  className="self-end text-2xl font-bold"
                  aria-label="Close menu"
                >
                  ×
                </button>

                <Link href={PATHS.HOME} onClick={() => setIsDialogOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">
                    Home
                  </Button>
                </Link>

                <Link
                  href={PATHS.CATALOGUE}
                  onClick={() => setIsDialogOpen(false)}
                >
                  <Button variant="ghost" className="w-full justify-start">
                    Catalogue
                  </Button>
                </Link>

                <Link href={PATHS.ABOUT} onClick={() => setIsDialogOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">
                    About
                  </Button>
                </Link>

                <Link
                  href={PATHS.CONTACT}
                  onClick={() => setIsDialogOpen(false)}
                >
                  <Button variant="ghost" className="w-full justify-start">
                    Contact
                  </Button>
                </Link>

                <Link href={PATHS.ORDER} onClick={() => setIsDialogOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">
                    Make an Order
                  </Button>
                </Link>

                <Link href={PATHS.LOGIN} onClick={() => setIsDialogOpen(false)}>
                  <Button className="w-full justify-start">Login</Button>
                </Link>

                <div className="pt-4">
                  <ThemeToggle />
                </div>
              </motion.aside>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
