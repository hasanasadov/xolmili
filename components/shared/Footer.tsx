"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, Instagram, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";

import { PATHS } from "@/constants";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./Animations";

const NAV_LINKS = [
  { label: "Əsas",       href: PATHS.HOME },
  { label: "Kataloq",    href: PATHS.CATALOGUE },
  { label: "Haqqımızda", href: PATHS.ABOUT },
  { label: "Əlaqə",      href: PATHS.CONTACT },
  { label: "Sifariş",    href: PATHS.ORDER },
];

const CONTACT_ITEMS = [
  { icon: Phone,     label: "+994 70 504 88 88", href: "tel:+994705048888" },
  { icon: Mail,      label: "xolmili@gmail.com",  href: "mailto:xolmili@gmail.com" },
  { icon: Instagram, label: "@xolmili_",           href: "https://www.instagram.com/xolmili_/" },
  { icon: Clock,     label: "B.e – Cümə, 9:00 – 18:00", href: "" },
  { icon: MapPin,    label: "Bakı, Azərbaycan",   href: "https://www.google.com/maps?ll=40.403927,49.94927" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <ScrollReveal className="lg:col-span-1">
            <Link href={PATHS.HOME} className="inline-block mb-5">
              <div className="relative h-7 w-20">
                <Image src="/logo.png"      alt="Xolmili" fill className="object-contain dark:hidden" />
                <Image src="/logoWhite.png" alt="Xolmili" fill className="object-contain hidden dark:block" />
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Əsası Fevral 2010-cu ildə Alirza Əliyev tərəfindən qoyulmuşdur.
              Azərbaycanda maşın alətləri hissələrinin satışında lider şirkət.
            </p>
          </ScrollReveal>

          {/* Navigation */}
          <ScrollReveal delay={0.1}>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-5 text-muted-foreground">
              Naviqasiya
            </h3>
            <StaggerContainer className="flex flex-col gap-2.5" staggerDelay={0.05}>
              {NAV_LINKS.map((link) => (
                <StaggerItem key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </ScrollReveal>

          {/* Contact */}
          <ScrollReveal delay={0.2} className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-5 text-muted-foreground">
              Əlaqə
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {CONTACT_ITEMS.map((item) => {
                const content = (
                  <div className="flex items-center gap-3 group">
                    <item.icon className="w-4 h-4 text-muted-foreground shrink-0 group-hover:text-foreground transition-colors" />
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {item.label}
                    </span>
                  </div>
                );
                return item.href ? (
                  <Link
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {content}
                  </Link>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom */}
        <div className="divider mt-12 mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            {new Date().getFullYear()} Xolmili. Bütün hüquqlar qorunur.
          </p>
          <div className="flex items-center gap-5">
            {["Məxfilik", "Şərtlər"].map((t) => (
              <motion.span
                key={t}
                className="text-xs text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
              >
                {t}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
