"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Instagram, Clock, MapPin, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { PATHS } from "@/constants";
import { ScrollReveal, HoverScale } from "./Animations";

const CONTACT_ITEMS = [
  {
    icon: Mail,
    label: "xolmili@gmail.com",
    href: "mailto:xolmili@gmail.com",
  },
  {
    icon: Phone,
    label: "+994 70 504 88 88",
    href: "tel:+994705048888",
  },
  {
    icon: Instagram,
    label: "@xolmili_",
    href: "https://instagram.com/xolmili_",
  },
  {
    icon: Clock,
    label: "B.e - Cume, 9:00 - 18:00",
    href: "",
  },
];

const NAV_LINKS = [
  { label: "Əsas", href: PATHS.HOME },
  { label: "Kataloq", href: PATHS.CATALOGUE },
  { label: "Haqqımızda", href: PATHS.ABOUT },
  { label: "Əlaqə", href: PATHS.CONTACT },
  { label: "Sifariş", href: PATHS.ORDER },
];

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-8 overflow-hidden border-t border-border/50">
      {/* Background Effects */}
      <BackgroundEffects />

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand Section */}
          <ScrollReveal>
            <BrandSection />
          </ScrollReveal>

          {/* Navigation Links */}
          <ScrollReveal delay={0.1}>
            <NavigationSection />
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal delay={0.2}>
            <ContactSection />
          </ScrollReveal>

          {/* CTA Card */}
          <ScrollReveal delay={0.3}>
            <CTACard />
          </ScrollReveal>
        </div>

        {/* Bottom Bar */}
        <BottomBar />
      </div>
    </footer>
  );
}

function BackgroundEffects() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <motion.div
        className="absolute -top-40 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-20 right-1/4 w-80 h-80 rounded-full bg-secondary/10 blur-[100px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
      />
    </div>
  );
}

function BrandSection() {
  return (
    <div className="lg:col-span-1">
      <Link href={PATHS.HOME} className="inline-block mb-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative h-12 w-32"
        >
          <Image
            src="/logo.png"
            alt="Xolmili Logo"
            fill
            className="object-contain dark:hidden"
          />
          <Image
            src="/logoWhite.png"
            alt="Xolmili Logo"
            fill
            className="object-contain hidden dark:block"
          />
        </motion.div>
      </Link>

      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
        Əsası qoyulub{" "}
        <span className="text-foreground font-medium">Fevral 2010</span>{" "}
        <span className="text-foreground font-medium">Alirza Aliyev</span>{" "}
        tərəfindən. Azərbaycanda maşın alətləri hissələrinin satışında lider şirkət.
      </p>

      <div className="flex items-center gap-3">
        <SocialLink href="https://instagram.com/xolmili_" icon={Instagram} />
        <SocialLink href="https://wa.me/994705048888" icon={Phone} />
        <SocialLink href="mailto:xolmili@gmail.com" icon={Mail} />
      </div>
    </div>
  );
}

interface SocialLinkProps {
  href: string;
  icon: typeof Instagram;
}

function SocialLink({ href, icon: Icon }: SocialLinkProps) {
  return (
    <HoverScale>
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-xl glass flex items-center justify-center group"
      >
        <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
      </Link>
    </HoverScale>
  );
}

function NavigationSection() {
  return (
    <div>
      <h3 className="font-semibold mb-6">Naviqasiya</h3>
      <ul className="space-y-3">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>
              <motion.span
                className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group"
                whileHover={{ x: 5 }}
              >
                {link.label}
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactSection() {
  return (
    <div>
      <h3 className="font-semibold mb-6">Əlaqə</h3>
      <ul className="space-y-4">
        {CONTACT_ITEMS.map((item) => {
          const content = (
            <motion.div
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              whileHover={{ x: 5 }}
            >
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-4 h-4 text-primary" />
              </div>
              <span className="text-sm">{item.label}</span>
            </motion.div>
          );

          return (
            <li key={item.label}>
              {item.href ? (
                <Link
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {content}
                </Link>
              ) : (
                content
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function CTACard() {
  return (
    <Link href={PATHS.CONTACT}>
      <motion.div
        className="glass p-6 cursor-pointer group h-full"
        whileHover={{ scale: 1.02, y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-start gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <MapPin className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold group-hover:text-primary transition-colors">
              Əlaqədə Olaq
            </h3>
            <p className="text-sm text-muted-foreground">
              Bakı, Azərbaycan
            </p>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-4">
          Xüsusi sifarişlər və ya əlavə məlumat üçün bizimlə əlaqə saxlayın.
        </p>

        <motion.div
          className="flex items-center gap-1 text-primary text-sm font-medium"
          whileHover={{ x: 5 }}
        >
          Əlaqə saxla
          <ArrowUpRight className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </Link>
  );
}

function BottomBar() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="pt-8 border-t border-border/50"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          {new Date().getFullYear()} Xolmili. Bütün hüquqlar qorunur.
        </p>

        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <motion.span whileHover={{ color: "var(--primary)" }} className="cursor-pointer">
            Məxfilik Siyasəti
          </motion.span>
          <motion.span whileHover={{ color: "var(--primary)" }} className="cursor-pointer">
            İstifadə Şərtləri
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
}
