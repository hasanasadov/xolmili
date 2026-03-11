"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ChevronRight, Sparkles } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { ThemeToggle } from "./ThemeToggle";
import { Button } from "../ui/button";
import { PATHS } from "@/constants";

const NAV_LINKS = [
  { href: PATHS.HOME, label: "Əsas" },
  { href: PATHS.CATALOGUE, label: "Kataloq" },
  { href: PATHS.ABOUT, label: "Haqqımızda" },
  { href: PATHS.CONTACT, label: "Əlaqə" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-500
          ${isScrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg"
            : "bg-transparent"
          }
        `}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <DesktopNav pathname={pathname} />

            {/* Desktop Actions */}
            <DesktopActions pathname={pathname} />

            {/* Mobile Menu Button */}
            <MobileMenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
          </div>
        </div>

        {/* Animated border on scroll */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ 
            scaleX: isScrolled ? 1 : 0, 
            opacity: isScrolled ? 1 : 0 
          }}
          transition={{ duration: 0.5 }}
        />
      </motion.nav>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isOpen} pathname={pathname} onClose={() => setIsOpen(false)} />

      {/* Spacer */}
      <div className="h-16 md:h-20" />
    </>
  );
}

function Logo() {
  return (
    <Link href={PATHS.HOME} className="relative group">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative h-10 w-24"
      >
        <Image
          src="/logo.png"
          alt="Xolmili Logo"
          fill
          className="object-contain dark:hidden"
          priority
        />
        <Image
          src="/logoWhite.png"
          alt="Xolmili Logo"
          fill
          className="object-contain hidden dark:block"
          priority
        />
      </motion.div>
      {/* Hover glow effect */}
      <motion.div 
        className="absolute inset-0 bg-primary/20 blur-xl -z-10"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </Link>
  );
}

interface DesktopNavProps {
  pathname: string;
}

function DesktopNav({ pathname }: DesktopNavProps) {
  return (
    <div className="hidden lg:flex items-center gap-1 glass px-2 py-1.5">
      {NAV_LINKS.map((link) => (
        <NavLink key={link.href} href={link.href} isActive={pathname === link.href}>
          {link.label}
        </NavLink>
      ))}
    </div>
  );
}

interface NavLinkProps {
  href: string;
  isActive: boolean;
  children: React.ReactNode;
}

function NavLink({ href, isActive, children }: NavLinkProps) {
  return (
    <Link href={href}>
      <motion.div
        className={`
          relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300
          ${isActive
            ? "text-primary"
            : "text-foreground/70 hover:text-foreground"
          }
        `}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
        {/* Active indicator */}
        {isActive && (
          <motion.div
            layoutId="activeNav"
            className="absolute inset-0 bg-primary/10 rounded-xl -z-10"
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        )}
        {/* Hover underline */}
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"
          initial={{ width: 0 }}
          whileHover={{ width: "60%" }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </Link>
  );
}

interface DesktopActionsProps {
  pathname: string;
}

function DesktopActions({ pathname }: DesktopActionsProps) {
  const isOrderPage = pathname === PATHS.ORDER;

  return (
    <div className="hidden lg:flex items-center gap-3">
      <Link href={PATHS.ORDER}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            size="sm"
            className={`
              relative overflow-hidden group
              ${isOrderPage 
                ? "bg-primary text-primary-foreground" 
                : "bg-primary/90 text-primary-foreground hover:bg-primary"
              }
            `}
          >
            <span className="relative z-10 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Sifariş ver
            </span>
            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
          </Button>
        </motion.div>
      </Link>
      <div className="ml-1">
        <ThemeToggle />
      </div>
    </div>
  );
}

interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

function MobileMenuButton({ isOpen, onClick }: MobileMenuButtonProps) {
  return (
    <motion.button
      className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl glass"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.div
            key="close"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
          >
            <X className="w-5 h-5" />
          </motion.div>
        ) : (
          <motion.div
            key="menu"
            initial={{ opacity: 0, rotate: 90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: -90 }}
            transition={{ duration: 0.2 }}
          >
            <Menu className="w-5 h-5" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

interface MobileMenuProps {
  isOpen: boolean;
  pathname: string;
  onClose: () => void;
}

function MobileMenu({ isOpen, pathname, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-md z-40 lg:hidden"
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-background/95 backdrop-blur-xl z-50 lg:hidden border-l border-border/50"
          >
            <div className="flex flex-col h-full p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-lg font-semibold"
                >
                  Menu
                </motion.span>
                <motion.button
                  onClick={onClose}
                  className="w-10 h-10 flex items-center justify-center rounded-xl glass"
                  whileHover={{ scale: 1.05, rotate: 90 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 space-y-2">
                {NAV_LINKS.map((link, index) => (
                  <MobileNavLink
                    key={link.href}
                    href={link.href}
                    isActive={pathname === link.href}
                    onClick={onClose}
                    index={index}
                  >
                    {link.label}
                  </MobileNavLink>
                ))}

                <motion.div 
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ delay: 0.3 }}
                  className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-6" 
                />

                <MobileNavLink
                  href={PATHS.ORDER}
                  isActive={pathname === PATHS.ORDER}
                  onClick={onClose}
                  index={NAV_LINKS.length}
                  highlight
                >
                  Sifariş ver
                </MobileNavLink>
              </div>

              {/* Footer */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-6 border-t border-border/50"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Tema</span>
                  <ThemeToggle />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

interface MobileNavLinkProps {
  href: string;
  isActive: boolean;
  onClick: () => void;
  index: number;
  children: React.ReactNode;
  highlight?: boolean;
}

function MobileNavLink({ href, isActive, onClick, index, children, highlight }: MobileNavLinkProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
    >
      <Link href={href} onClick={onClick}>
        <motion.div
          className={`
            flex items-center justify-between p-4 rounded-xl transition-all duration-300
            ${isActive
              ? "bg-primary/10 text-primary"
              : highlight
                ? "bg-primary/5 hover:bg-primary/10"
                : "hover:bg-muted"
            }
          `}
          whileHover={{ x: 8, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className={`font-medium ${highlight ? "flex items-center gap-2" : ""}`}>
            {highlight && <Sparkles className="w-4 h-4 text-primary" />}
            {children}
          </span>
          <motion.div
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
          >
            <ChevronRight className={`w-4 h-4 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
          </motion.div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
