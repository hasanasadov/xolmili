"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Phone, Instagram, Clock, MapPin, ArrowUpRight, MessageCircle, Send } from "lucide-react";

import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
  BlurReveal,
  GradientBlob,
  HoverLift,
} from "@/components/shared/Animations";

const CONTACT_ITEMS = [
  {
    icon: Phone,
    label: "Telefon",
    value: "+994 70 504 88 88",
    href: "tel:+994705048888",
    external: false,
    color: "bg-green-500/10 text-green-600 dark:text-green-400",
  },
  {
    icon: Mail,
    label: "Email",
    value: "xolmili@gmail.com",
    href: "mailto:xolmili@gmail.com",
    external: false,
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@xolmili_",
    href: "https://www.instagram.com/xolmili_/",
    external: true,
    color: "bg-pink-500/10 text-pink-600 dark:text-pink-400",
  },
  {
    icon: Clock,
    label: "İş Saatları",
    value: "B.e – Cümə, 9:00 – 18:00",
    href: "",
    external: false,
    color: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
  },
  {
    icon: MapPin,
    label: "Ünvan",
    value: "Bakı, 8-ci km bazarı",
    href: "https://www.google.com/maps?ll=40.403927,49.94927",
    external: true,
    color: "bg-red-500/10 text-red-600 dark:text-red-400",
  },
];

const QUICK_CHANNELS = [
  { 
    label: "WhatsApp ilə yazın",   
    sub: "Sürətli cavab alın", 
    href: "https://wa.me/994705048888", 
    icon: MessageCircle,
    color: "bg-green-500",
  },
  { 
    label: "Email göndərin",        
    sub: "xolmili@gmail.com",  
    href: "mailto:xolmili@gmail.com",  
    icon: Send,
    color: "bg-blue-500",
  },
  { 
    label: "Zəng edin",             
    sub: "+994 70 504 88 88",  
    href: "tel:+994705048888",          
    icon: Phone,
    color: "bg-highlight",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <PageHeader />
      <ContactGrid />
      <MapSection />
      <ChannelsSection />
    </div>
  );
}

function PageHeader() {
  return (
    <div className="relative py-24 px-6 lg:px-8 overflow-hidden">
      <GradientBlob className="w-[400px] h-[400px] -top-20 -left-20" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="badge mb-6">Əlaqə</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6">
            Bizimlə <span className="text-highlight">Əlaqə</span> Saxlayın
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
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
    <section className="py-16 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <StaggerContainer
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.08}
        >
          {CONTACT_ITEMS.map((item) => (
            <StaggerItem key={item.label}>
              <HoverLift>
                <ContactCard {...item} />
              </HoverLift>
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
  color: string;
}

function ContactCard({ icon: Icon, label, value, href, external, color }: ContactCardProps) {
  const inner = (
    <div className="surface p-6 h-full group hover:border-highlight transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${color}`}>
          <Icon className="w-5 h-5" />
        </div>
        {href && (
          <ArrowUpRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-highlight transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        )}
      </div>
      <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{label}</p>
      <p className="text-base font-semibold text-foreground">{value}</p>
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="block"
      >
        {inner}
      </Link>
    );
  }
  return inner;
}

function MapSection() {
  return (
    <section className="py-16 px-6 lg:px-8 bg-accent/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          <ScrollReveal className="lg:col-span-1">
            <span className="badge mb-4">Ünvan</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Məkanımız
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Bakı şəhərində, 8-ci km bazarında yerləşirik. 
              Hər gün müştərilərimizi salamlamaq üçün hazırıq.
            </p>
            <div className="surface-highlight p-4">
              <p className="text-sm font-medium text-foreground">8-ci km bazarı, Bakı</p>
              <p className="text-xs text-muted-foreground mt-1">Azərbaycan</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="lg:col-span-2">
            <div className="surface overflow-hidden h-80 lg:h-full">
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
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function ChannelsSection() {
  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <BlurReveal>
          <div className="text-center mb-12">
            <span className="badge mb-4">Birbaşa Əlaqə</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Ən Sürətli Yol
            </h2>
          </div>
        </BlurReveal>

        <StaggerContainer className="grid sm:grid-cols-3 gap-6" staggerDelay={0.1}>
          {QUICK_CHANNELS.map((ch) => (
            <StaggerItem key={ch.label}>
              <HoverLift lift={-10}>
                <Link
                  href={ch.href}
                  target={ch.href.startsWith("http") ? "_blank" : undefined}
                  rel={ch.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block surface p-6 text-center group hover:border-highlight transition-all"
                >
                  <div className={`w-14 h-14 rounded-full ${ch.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <ch.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{ch.label}</h3>
                  <p className="text-sm text-muted-foreground">{ch.sub}</p>
                </Link>
              </HoverLift>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
