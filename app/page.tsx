"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import {
  ScrollReveal,
  AnimatedText,
  BlurReveal,
  ParallaxScroll,
  StaggerContainer,
  StaggerItem,
  Counter,
  ScrollProgress,
  RevealMask,
} from "@/components/shared/Animations";
import { PATHS } from "@/constants";

const STATS = [
  { value: 14, suffix: "+", label: "İllik Təcrübə" },
  { value: 500, suffix: "+", label: "Məmnun Müştəri" },
  { value: 1000, suffix: "+", label: "Məhsul" },
];

const FEATURES = [
  { title: "Geniş Çeşid", desc: "1000+ məhsul növü" },
  { title: "Keyfiyyət", desc: "Etibarlı tərəfdaşlar" },
  { title: "24/7 Dəstək", desc: "Sürətli xidmət" },
];

export default function HomePage() {
  return (
    <div className="relative">
      <ScrollProgress />
      <HeroSection />
      <div className="divider" />
      <FeaturesSection />
      <div className="divider" />
      <StatsSection />
      <div className="divider" />
      <CTASection />
    </div>
  );
}

function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background image */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <Image
          src="/giphy.gif"
          alt=""
          fill
          className="object-cover opacity-20 dark:opacity-10"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      </motion.div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div style={{ opacity }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="inline-block text-xs font-medium uppercase tracking-widest text-muted-foreground border border-border px-3 py-1 mb-10">
              2010-cu ildən sizinlə
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.1] text-foreground mb-6 max-w-3xl">
              <AnimatedText text="Xolmili'ə" className="block" delay={0.5} />
              <AnimatedText text="Xoş Gəlmisiniz" className="block mt-2" delay={0.8} />
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="text-base md:text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed"
          >
            Azərbaycanın ən etibarlı maşın hissələri təchizatçısı.
            İstədiyiniz məhsul və daha çoxu üçün bizimlə əlaqə saxlayın.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link href={PATHS.CATALOGUE} className="btn-elite">
              Kataloqa bax
            </Link>
            <Link href={PATHS.CONTACT} className="btn-elite-outline">
              Əlaqə saxla
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-muted-foreground">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-muted-foreground/30"
        />
      </motion.div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="mb-16">
          <span className="inline-block text-xs font-medium uppercase tracking-widest text-muted-foreground mb-4">
            Üstünlüklər
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight max-w-2xl">
            Niyə <span className="text-highlight">Xolmili</span>?
          </h2>
        </ScrollReveal>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.12}>
          {FEATURES.map((f, i) => (
            <StaggerItem key={i}>
              <ParallaxScroll speed={0.05 * (i + 1)}>
                <div className="surface p-8 h-full hover:border-foreground transition-colors duration-300">
                  <div className="text-5xl font-bold text-muted-foreground/20 mb-4">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </ParallaxScroll>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-accent/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-12">
          {STATS.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.15}>
              <div className="text-center">
                <div className="stat-number mb-2">
                  <Counter to={stat.value} duration={2.5} suffix={stat.suffix} />
                </div>
                <p className="text-sm uppercase tracking-widest text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-32 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <BlurReveal>
          <RevealMask>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Sifarişinizi İndi Verin
            </h2>
          </RevealMask>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
            Xüsusi sifarişlər və ya əlavə məlumat üçün bizimlə əlaqə saxlayın.
            Peşəkar komandamız sizə kömək etməyə hazırdır.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href={PATHS.ORDER} className="btn-elite">
              Sifariş ver
            </Link>
            <Link href={PATHS.CATALOGUE} className="btn-elite-outline">
              Kataloqa bax
            </Link>
          </div>
        </BlurReveal>
      </div>
    </section>
  );
}
