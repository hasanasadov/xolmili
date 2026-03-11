"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Award, Users, Target, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FloatingOrbs } from "@/components/shared/ParticleBackground";
import {
  ScrollReveal,
  HoverScale,
  BlurReveal,
  fadeInLeft,
  fadeInRight,
} from "@/components/shared/Animations";
import { PATHS } from "@/constants";

const HIGHLIGHTS = [
  {
    icon: Award,
    title: "14+ İl Təcrübə",
    description: "2010-cu ildən fəaliyyət göstəririk",
  },
  {
    icon: Users,
    title: "Peşəkar Komanda",
    description: "Təcrübəli satış mütəxəssisləri",
  },
  {
    icon: Target,
    title: "Geniş Çeşid",
    description: "Bütün növ ehtiyat hissələri",
  },
];

const TIMELINE = [
  { year: "2010", event: "Şirkətin qurulması" },
  { year: "2015", event: "İlk böyük tərəfdaşlıq" },
  { year: "2020", event: "Online satış platforması" },
  { year: "2024", event: "500+ məmnun müştəri" },
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <FloatingOrbs />

      {/* Hero Section */}
      <HeroSection />

      {/* Story Section */}
      <StorySection />

      {/* Highlights Section */}
      <HighlightsSection />

      {/* Timeline Section */}
      <TimelineSection />

      {/* Location Section */}
      <LocationSection />

      {/* CTA Section */}
      <CTASection />
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
            className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-foreground/80 mb-6"
          >
            Haqqımızda
          </motion.span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            Bizim{" "}
            <span className="text-gradient">Haqqımızda</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            &ldquo;Xolmili&rdquo; şirkətinin əsası Fevral 2010-cu ildə Alirza Əliyev
            tərəfindən qoyulub. Azərbaycanda maşın alətləri hissələrinin satışında
            lider şirkət olaraq fəaliyyət göstəririk.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function StorySection() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal variants={fadeInLeft}>
            <div className="glass p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Bizim <span className="text-gradient">Hekayəmiz</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  The foundation of the &ldquo;Xolmili&rdquo; company was laid in
                  February 2010 by Alirza Aliyev. Currently, our sales points offer
                  large-scale sales and orders of any type of machine tool parts,
                  as well as size calculations for machine tools.
                </p>
                <p>
                  In our stores, we offer sales and orders of any type of couplings,
                  coupling rubbers, pulleys, pulley belts, chains, chain locks and
                  half-locks, stars, gears, pulleys, cable channels, bearings,
                  pistons and many other machine tool parts.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variants={fadeInRight} delay={0.2}>
            <div className="glass p-8 md:p-10 h-full">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Niyə <span className="text-gradient">Biz?</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  The main advantages of the &ldquo;Xolmili&rdquo; company are its
                  wide product range, experienced sales specialists, and most
                  importantly, its partners.
                </p>
                <p>
                  Thus, the choice of most factories in Azerbaijan is precisely the
                  products of the &ldquo;Xolmili&rdquo; company.
                </p>
              </div>
              <HoverScale className="mt-6">
                <Link href={PATHS.ORDER}>
                  <Button className="group btn-shine bg-primary text-primary-foreground">
                    Sifariş Ver
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </HoverScale>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function HighlightsSection() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Bizim <span className="text-gradient">Üstünlüklərimiz</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {HIGHLIGHTS.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.1}>
              <HoverScale>
                <motion.div
                  className="glass p-8 text-center h-full card-hover group"
                  whileHover={{ y: -5 }}
                >
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <item.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              </HoverScale>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineSection() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Bizim <span className="text-gradient">Yolumuz</span>
          </h2>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary -translate-x-1/2" />

            {TIMELINE.map((item, index) => (
              <ScrollReveal
                key={item.year}
                delay={index * 0.15}
                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
              >
                <motion.div
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
                    <BlurReveal>
                      <div className="glass p-6 inline-block">
                        <span className="text-3xl font-bold text-gradient">{item.year}</span>
                        <p className="text-muted-foreground mt-2">{item.event}</p>
                      </div>
                    </BlurReveal>
                  </div>

                  {/* Center dot */}
                  <motion.div
                    className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 300, delay: index * 0.15 }}
                  />

                  <div className="w-1/2" />
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LocationSection() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="glass p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">
                Bizim <span className="text-gradient">Məkanımız</span>
              </h2>
            </div>

            <p className="text-muted-foreground mb-6">Bakı, Azərbaycan - 1000</p>

            <motion.div
              className="rounded-2xl overflow-hidden h-80 border border-border/50"
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
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <ScrollReveal>
          <motion.div
            className="glass p-10 md:p-14 text-center relative overflow-hidden"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated background */}
            <motion.div
              className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-primary/10 blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Bizimlə Əlaqə Saxlayın
              </h2>
              <p className="text-muted-foreground max-w-lg mx-auto mb-8">
                Suallarınız və ya sifarişləriniz üçün bizimlə əlaqə saxlayın.
                Peşəkar komandamız sizə kömək etməyə hazırdır.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <HoverScale>
                  <Link href={PATHS.CONTACT}>
                    <Button size="lg" className="btn-shine bg-primary text-primary-foreground group">
                      Əlaqə
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </HoverScale>
                <HoverScale>
                  <Link href={PATHS.ORDER}>
                    <Button size="lg" variant="outline" className="glass-button">
                      Sifariş Ver
                    </Button>
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
