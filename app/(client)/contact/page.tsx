"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Mail,
  Phone,
  Instagram,
  Clock,
  MapPin,
  MessageCircle,
  Send,
} from "lucide-react";

import { FloatingOrbs } from "@/components/shared/ParticleBackground";
import {
  ScrollReveal,
  HoverScale,
  fadeInLeft,
  fadeInRight,
} from "@/components/shared/Animations";

const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email",
    value: "xolmili@gmail.com",
    link: "mailto:xolmili@gmail.com",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "+994 70 504 88 88",
    link: "tel:+994705048888",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: MessageCircle,
    label: "Whatsapp",
    value: "+994 70 504 88 88",
    link: "https://wa.me/994705048888",
    color: "from-green-400 to-green-600",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@xolmili_",
    link: "https://www.instagram.com/xolmili_/",
    color: "from-pink-500 to-purple-500",
  },
  {
    icon: Clock,
    label: "Is Saatlari",
    value: "B.e - Cume, 9:00 - 18:00",
    link: "",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: MapPin,
    label: "Unvan",
    value: "Baki, Azerbaycan",
    link: "https://www.google.com/maps?ll=40.403927,49.94927",
    color: "from-red-500 to-rose-500",
  },
];

export default function ContactPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <FloatingOrbs />

      {/* Hero Section */}
      <HeroSection />

      {/* Contact Cards Section */}
      <ContactCardsSection />

      {/* Map Section */}
      <MapSection />

      {/* Quick Contact Section */}
      <QuickContactSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-foreground/80 mb-6"
          >
            <Send className="w-4 h-4 text-primary" />
            <span>Bizimlə əlaqə</span>
          </motion.span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            Bizimlə{" "}
            <span className="text-gradient">Əlaqə</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here at Xolmili, we value your feedback and inquiries. Whether you
            have questions about our products, need assistance with an order, or
            want to share your experience with us, we are here to help.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ContactCardsSection() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CONTACT_INFO.map((item, index) => (
            <ScrollReveal
              key={item.label}
              delay={index * 0.1}
              variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
            >
              <HoverScale>
                <ContactCard {...item} />
              </HoverScale>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

interface ContactCardProps {
  icon: typeof Mail;
  label: string;
  value: string;
  link: string;
  color: string;
}

function ContactCard({ icon: Icon, label, value, link, color }: ContactCardProps) {
  const content = (
    <motion.div
      className="glass p-6 h-full group cursor-pointer relative overflow-hidden"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Gradient hover effect */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
      />

      <div className="relative z-10 flex items-start gap-4">
        <motion.div
          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shrink-0`}
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          <Icon className="w-6 h-6 text-white" />
        </motion.div>

        <div>
          <p className="text-sm text-muted-foreground mb-1">{label}</p>
          <p className="font-semibold group-hover:text-primary transition-colors">
            {value}
          </p>
        </div>
      </div>

      {/* Animated border on hover */}
      <motion.div
        className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${color}`}
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );

  if (link) {
    return (
      <Link href={link} target="_blank" rel="noopener noreferrer">
        {content}
      </Link>
    );
  }

  return content;
}

function MapSection() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="glass p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <MapPin className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">
                  Bizim <span className="text-gradient">Məkanımız</span>
                </h2>
                <p className="text-muted-foreground">Bakı, Azərbaycan - 1000</p>
              </div>
            </div>

            <motion.div
              className="rounded-2xl overflow-hidden h-80 border border-border/50 relative group"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <iframe
                title="Company Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.0709786946516!2d49.946691315409535!3d40.40392707936583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40306306a6ccbde1%3A0x47fa46d4558f3fee!2s8-CI%20KM%20BAZARI%20LITSEY!5e0!3m2!1sen!2s!4v1715326254000!5m2!1sen!2s"
                width="100%"
                height="100%"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale group-hover:grayscale-0 transition-all duration-500"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none opacity-50 group-hover:opacity-0 transition-opacity duration-300" />
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function QuickContactSection() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <ScrollReveal>
          <motion.div
            className="glass p-10 md:p-14 relative overflow-hidden"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated background elements */}
            <motion.div
              className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, 90, 0],
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-gradient-to-br from-secondary/20 to-primary/20 blur-3xl"
              animate={{
                scale: [1.3, 1, 1.3],
                rotate: [90, 0, 90],
              }}
              transition={{ duration: 8, repeat: Infinity, delay: 1 }}
            />

            <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Sualınız Var?
                </h2>
                <p className="text-muted-foreground mb-6">
                  İstənilən növ bizimlə əlaqəli suallar verməyə çəkinməyin.
                  Komandamız sizə kömək etməyə həmişə hazırdır.
                </p>
                <p className="text-sm text-muted-foreground">
                  Cavab müddəti: 24 saat ərzində
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <HoverScale>
                  <Link href="https://wa.me/994705048888" target="_blank">
                    <motion.div
                      className="glass p-4 flex items-center gap-4 cursor-pointer group"
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                        <MessageCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold group-hover:text-primary transition-colors">
                          WhatsApp ilə yazın
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Sürətli cavab alın
                        </p>
                      </div>
                    </motion.div>
                  </Link>
                </HoverScale>

                <HoverScale>
                  <Link href="mailto:xolmili@gmail.com">
                    <motion.div
                      className="glass p-4 flex items-center gap-4 cursor-pointer group"
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold group-hover:text-primary transition-colors">
                          Email göndərin
                        </p>
                        <p className="text-sm text-muted-foreground">
                          xolmili@gmail.com
                        </p>
                      </div>
                    </motion.div>
                  </Link>
                </HoverScale>

                <HoverScale>
                  <Link href="tel:+994705048888">
                    <motion.div
                      className="glass p-4 flex items-center gap-4 cursor-pointer group"
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold group-hover:text-primary transition-colors">
                          Zəng edin
                        </p>
                        <p className="text-sm text-muted-foreground">
                          +994 70 504 88 88
                        </p>
                      </div>
                    </motion.div>
                  </Link>
                </HoverScale>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
