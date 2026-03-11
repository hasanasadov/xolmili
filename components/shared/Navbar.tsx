"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { ThemeToggle } from "./ThemeToggle";
import { PATHS } from "@/constants";

const NAV_LINKS = [
  { href: PATHS.HOME, label: "Əsas" },
  { href: PATHS.CATALOGUE, label: "Kataloq" },
  { href: PATHS.ABOUT, label: "Haqqımızda" },
  { href: PATHS.CONTACT, label: "Əlaqə" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href={PATHS.HOME} className="relative h-8 w-20 shrink-0">
              <Image src="/logo.png"      alt="Xolmili" fill className="object-contain dark:hidden" priority />
              <Image src="/logoWhite.png" alt="Xolmili" fill className="object-contain hidden dark:block" priority />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
              {NAV_LINKS.map((link) => (
                <NavLink key={link.href} href={link.href} active={pathname === link.href}>
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Desktop actions */}
            <div className="hidden lg:flex items-center gap-5">
              <ThemeToggle />
              <Link href={PATHS.ORDER} className="btn-elite text-xs">
                Sifariş ver
              </Link>
            </div>

            {/* Mobile toggle */}
            <div className="flex lg:hidden items-center gap-3">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-9 h-9 flex items-center justify-center border border-border hover:bg-accent transition-colors"
                aria-label={isOpen ? "Menyu bağla" : "Menyu aç"}
              >
                {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-background border-l border-border z-50 lg:hidden"
            >
              <div className="flex flex-col h-full px-6 py-6">
                <div className="flex justify-end mb-10">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-9 h-9 flex items-center justify-center border border-border hover:bg-accent transition-colors"
                    aria-label="Menyu bağla"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <nav className="flex flex-col gap-1 flex-1" aria-label="Mobile navigation">
                  {NAV_LINKS.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06, duration: 0.3 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`block py-3 text-sm font-medium border-b border-border/50 transition-colors hover:text-foreground/60 ${
                          pathname === link.href ? "text-foreground" : "text-muted-foreground"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: NAV_LINKS.length * 0.06, duration: 0.3 }}
                    className="mt-6"
                  >
                    <Link
                      href={PATHS.ORDER}
                      onClick={() => setIsOpen(false)}
                      className="btn-elite w-full justify-center"
                    >
                      Sifariş ver
                    </Link>
                  </motion.div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer */}
      <div className="h-16" />
    </>
  );
}

interface NavLinkProps {
  href: string;
  active: boolean;
  children: React.ReactNode;
}

function NavLink({ href, active, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`relative text-sm font-medium link-underline transition-colors duration-200 ${
        active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
      }`}
    >
      {children}
      {active && (
        <motion.span
          layoutId="nav-active"
          className="absolute -bottom-px left-0 right-0 h-px bg-foreground"
          transition={{ type: "spring", stiffness: 400, damping: 35 }}
        />
      )}
    </Link>
  );
}
