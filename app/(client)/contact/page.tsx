"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Phone, Instagram, Clock, MapPin, ArrowUpRight } from "lucide-react";

import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
  BlurReveal,
  RevealMask,
} from "@/components/shared/Animations";

const CONTACT_ITEMS = [
  {
    icon: Phone,
    label: "Telefon",
    value: "+994 70 504 88 88",
    href: "tel:+994705048888",
    external: false,
  },
  {
    icon: Mail,
    label: "Email",
    value: "xolmili@gmail.com",
    href: "mailto:xolmili@gmail.com",
    external: false,
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@xolmili_",
    href: "https://www.instagram.com/xolmili_/",
    external: true,
  },
  {
    icon: Clock,
    label: "İş Saatları",
    value: "B.e – Cümə, 9:00 – 18:00",
    href: "",
    external: false,
  },
  {
    icon: MapPin,
    label: "Ünvan",
    value: "Bakı, Azərbaycan",
    href: "https://www.google.com/maps?ll=40.403927,49.94927",
    external: true,
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <PageHeader />

      {/* Contact info grid */}
      <ContactGrid />

      {/* Map */}
      <MapSection />

      {/* Quick channels */}
      <ChannelsSection />
    </div>
  );
}

function PageHeader() {
  return (
    <div className="border-b border-border py-16 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-xs font-medium uppercase tracking-widest text-muted-foreground mb-4">
            İletişim
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight mb-4">
            Bizimlə Əlaqə
          </h1>
          <p className="text-sm text-muted-foreground max-w-lg leading-relaxed">
            Suallarınız, sifarişləriniz və ya istənilən məsələ üçün bizimlə
            aşağıdakı kanallardan əlaqə saxlayın.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

function ContactGrid() {
  return (
    <section className="py-16 px-6 lg:px-8 border-b border-border">
      <div className="max-w-6xl mx-auto">
        <StaggerContainer
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border"
          staggerDelay={0.08}
        >
          {CONTACT_ITEMS.map((item) => (
            <StaggerItem key={item.label}>
              <ContactCard {...item} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

interface ContactCardProps {
  icon: React.ElementType;
  label: string;
  value: string;
  href: string;
  external: boolean;
}

function ContactCard({ icon: Icon, label, value, href, external }: ContactCardProps) {
  const inner = (
    <div className="bg-background p-8 group cursor-pointer transition-colors hover:bg-accent/40 h-full">
      <div className="flex items-start justify-between mb-4">
        <div className="w-10 h-10 border border-border flex items-center justify-center shrink-0">
          <Icon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
        </div>
        {href && (
          <ArrowUpRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        )}
      </div>
      <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{label}</p>
      <p className="text-sm font-medium text-foreground">{value}</p>
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {inner}
      </Link>
    );
  }
  return inner;
}

function MapSection() {
  return (
    <section className="py-16 px-6 lg:px-8 border-b border-border">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="mb-8">
          <h2 className="text-xl font-bold text-foreground mb-1">Məkanımız</h2>
          <p className="text-sm text-muted-foreground">Bakı, Azərbaycan — 8-ci km bazarı</p>
        </ScrollReveal>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-border overflow-hidden h-72"
        >
          <iframe
            title="Xolmili Məkanı"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.0709786946516!2d49.946691315409535!3d40.40392707936583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40306306a6ccbde1%3A0x47fa46d4558f3fee!2s8-CI%20KM%20BAZARI%20LITSEY!5e0!3m2!1sen!2s!4v1715326254000!5m2!1sen!2s"
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale hover:grayscale-0 transition-all duration-500"
          />
        </motion.div>
      </div>
    </section>
  );
}

function ChannelsSection() {
  const channels = [
    { label: "WhatsApp ilə yazın",   sub: "Sürətli cavab alın", href: "https://wa.me/994705048888", icon: Phone },
    { label: "Email göndərin",        sub: "xolmili@gmail.com",  href: "mailto:xolmili@gmail.com",  icon: Mail },
    { label: "Zəng edin",             sub: "+994 70 504 88 88",  href: "tel:+994705048888",          icon: Phone },
  ];

  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <BlurReveal>
          <RevealMask>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-10">
              Birbaşa Əlaqə
            </h2>
          </RevealMask>
        </BlurReveal>

        <StaggerContainer className="space-y-px bg-border" staggerDelay={0.1}>
          {channels.map((ch) => (
            <StaggerItem key={ch.label}>
              <Link
                href={ch.href}
                target={ch.href.startsWith("http") ? "_blank" : undefined}
                rel={ch.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center justify-between bg-background p-6 group hover:bg-accent/40 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-border flex items-center justify-center shrink-0">
                    <ch.icon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{ch.label}</p>
                    <p className="text-xs text-muted-foreground">{ch.sub}</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
