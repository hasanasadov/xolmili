"use client";
import React from "react";
import { Button } from "../ui/button";
import RenderIf from "@/lib/RenderIf";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { PATHS } from "@/constants";
import { ThemeToggle } from "./ThemeToggle";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const pathname = usePathname();
  const { theme } = useTheme();

  return (
    <nav className="sticky p-2 top-0 w-full z-50 dark:bg-white/10 bg-white/90 backdrop-blur-md border-b border-white/20">
      <div className="container mx-auto flex justify-between items-center h-24">
        <div
          className="w-32 drop-shadow-[0_0_2px_#fff] cursor-pointer"
          onClick={() => (window.location.href = PATHS.HOME)}
        >
          {theme === "light" ? (
            <img src="/logo.png" alt="Logo" />
          ) : (
            <img src="/logoWhite.png" alt="Logo" />
          )}
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href={PATHS.HOME}>
            <Button
              className={
                pathname === PATHS.HOME ? "dark:!text-cyan-400 border" : ""
              }
              variant="link"
            >
              Home
            </Button>
          </Link>

          <Link href={PATHS.CATALOGUE}>
            <Button
              className={
                pathname === PATHS.CATALOGUE ? "dark:!text-cyan-400 border" : ""
              }
              variant="link"
            >
              Catalogue
            </Button>
          </Link>

          <Link href={PATHS.ABOUT}>
            <Button
              className={
                pathname === PATHS.ABOUT ? "dark:!text-cyan-400 border" : ""
              }
              variant="link"
            >
              About
            </Button>
          </Link>

          <Link href={PATHS.CONTACT}>
            <Button
              className={
                pathname === PATHS.CONTACT ? "dark:!text-cyan-400 border" : ""
              }
              variant="link"
            >
              Contact
            </Button>
          </Link>
        </div>
        <div className="hidden md:flex w-32 justify-end md:gap-4">
          <Link href={PATHS.ORDER}>
            <Button
              className={
                pathname === PATHS.ORDER ? "dark:!text-cyan-400 border" : ""
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
                    <Link href={PATHS.HOME}>
                      <Button
                        className="text-cyan-700"
                        variant="link"
                        onClick={() => setIsDialogOpen(false)}
                      >
                        Home
                      </Button>
                    </Link>
                    <Link href={PATHS.ABOUT}>
                      <Button
                        variant="link"
                        onClick={() => setIsDialogOpen(false)}
                      >
                        About
                      </Button>
                    </Link>
                    <Link href={PATHS.CATALOGUE}>
                      <Button
                        variant="link"
                        onClick={() => setIsDialogOpen(false)}
                      >
                        Catalogue
                      </Button>
                    </Link>
                    <Link href={PATHS.CONTACT}>
                      <Button
                        variant="link"
                        onClick={() => setIsDialogOpen(false)}
                      >
                        Contact
                      </Button>
                    </Link>
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
