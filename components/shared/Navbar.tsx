"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MenuIcon, XIcon } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { PATHS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky transition duration-500 p-2 top-0 w-full z-50 dark:bg-white/10 bg-white/90 backdrop-blur-md border-b border-white/20">
      <div className="container mx-auto flex justify-between items-center h-14">
        <div
          className=" h-[calc(100%+8px)]  drop-shadow-[0_0_2px_#fff] cursor-pointer"
          onClick={() => (window.location.href = PATHS.HOME)}
        >
          <Image
            className="dark:hidden h-full"
            src="/logo.png"
            alt="Logo"
            width={100}
            height={"100"}
          />
          <Image
            className="dark:block h-full hidden"
            src="/logoWhite.png"
            alt="Logo"
            width={100}
            height={"100"}
          />
        </div>
        <div className="hidden lg:flex space-x-4">
          <Link href={PATHS.HOME}>
            <Button
              className={pathname === PATHS.HOME ? "glass-button  " : ""}
              variant="ghost"
            >
              Əsas
            </Button>
          </Link>

          <Link href={PATHS.CATALOGUE}>
            <Button
              className={pathname === PATHS.CATALOGUE ? "glass-button  " : ""}
              variant="ghost"
            >
              Kataloq
            </Button>
          </Link>

          <Link href={PATHS.ABOUT}>
            <Button
              className={pathname === PATHS.ABOUT ? "glass-button  " : ""}
              variant="ghost"
            >
              Haqqımızda
            </Button>
          </Link>

          <Link href={PATHS.CONTACT}>
            <Button
              className={pathname === PATHS.CONTACT ? "glass-button  " : ""}
              variant="ghost"
            >
              Əlaqə
            </Button>
          </Link>
        </div>
        <div className="hidden lg:flex w-32 justify-end md:gap-4">
          <Link href={PATHS.ORDER}>
            <Button
              className={pathname === PATHS.ORDER ? "glass-button  " : ""}
              variant="ghost"
            >
              Sifariş ver
            </Button>
          </Link>

          <Link href={PATHS.LOGIN}>
            <Button
              variant="ghost"
              className={pathname === PATHS.LOGIN ? "glass-button  " : ""}
            >
              Daxil ol
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
                <Button
                  onClick={() => setIsDialogOpen(false)}
                  className="self-end text-2xl font-bold"
                  aria-label="Close menu"
                >
                  <XIcon />
                </Button>

                <Link href={PATHS.HOME} onClick={() => setIsDialogOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">
                    Əsas
                  </Button>
                </Link>

                <Link
                  href={PATHS.CATALOGUE}
                  onClick={() => setIsDialogOpen(false)}
                >
                  <Button variant="ghost" className="w-full justify-start">
                    Kataloq
                  </Button>
                </Link>

                <Link href={PATHS.ABOUT} onClick={() => setIsDialogOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">
                    Haqqımızda
                  </Button>
                </Link>

                <Link
                  href={PATHS.CONTACT}
                  onClick={() => setIsDialogOpen(false)}
                >
                  <Button variant="ghost" className="w-full justify-start">
                    Əlaqə
                  </Button>
                </Link>

                <Link href={PATHS.ORDER} onClick={() => setIsDialogOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">
                    Sifariş ver
                  </Button>
                </Link>

                <div className="flex !w-full justify-evenly mt-20">
                  <Link
                    href={PATHS.LOGIN}
                    onClick={() => setIsDialogOpen(false)}
                  >
                    <Button className="!w-full">Daxil ol</Button>
                  </Link>

                  <div>
                    <ThemeToggle />
                  </div>
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
