"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Cog, Shield, Clock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FloatingOrbs } from "@/components/shared/ParticleBackground";
import {
  ScrollReveal,
  AnimatedText,
  Floating,
  HoverScale,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
} from "@/components/shared/Animations";
import { PATHS } from "@/constants";

const FEATURES = [
  {
    icon: Cog,
    title: "Keyfiyyətli Hissələr",
    description: "Yüksək keyfiyyətli maşın alətləri hissələri və ölçü hesablamaları.",
  },
  {
    icon: Shield,
    title: "Etibarlı Xidmət",
    description: "Azərbaycanda fabriklərin ilk seçimi olan etibarlı tərəfdaş.",
  },
  {
    icon: Clock,
    title: "Sürətli Çatdırılma",
    description: "Peşəkar komandamız ilə sürətli xidmət və dəstək.",
  },
];

const STATS = [
  { value: "14+", label: "İllik Təcrübə" },
  { value: "500+", label: "Məmnun Müştəri" },
  { value: "1000+", label: "Məhsul Növü" },
  { value: "24/7", label: "Dəstək" },
];

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <FloatingOrbs />

      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Stats Section */}
      <StatsSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/giphy.gif"
          alt="Background"
          fill
          className="object-cover opacity-40 dark:opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-foreground/80">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>2010-cu ildən sizinlə</span>
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-balance"
        >
          <AnimatedText
            text="Xolmili'ə Xoş Gəlmisiniz"
            className="text-gradient-animated"
            delay={0.4}
          />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty"
        >
          Şirkətin rəsmi online vebsaytı - istədiyiniz məhsul və daha çoxu üçün
          Azərbaycanın ən etibarlı maşın hissələri təchizatçısı.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Floating duration={3} distance={5}>
            <HoverScale>
              <Link href={PATHS.CATALOGUE}>
                <Button size="lg" className="group btn-shine text-primary-foreground bg-primary hover:bg-primary/90">
                  Kataloqa Bax
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </HoverScale>
          </Floating>

          <HoverScale>
            <Link href={PATHS.CONTACT}>
              <Button size="lg" variant="outline" className="glass-button">
                Əlaqə Saxla
              </Button>
            </Link>
          </HoverScale>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-foreground/20 flex justify-center pt-2"
          >
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5], y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Niyə <span className="text-gradient">Xolmili?</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            14 illik təcrübə ilə sizə ən yaxşı xidməti təqdim edirik
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <ScrollReveal
              key={feature.title}
              variants={index === 0 ? fadeInLeft : index === 2 ? fadeInRight : fadeInUp}
              delay={index * 0.1}
            >
              <HoverScale>
                <div className="glass p-8 h-full card-hover group">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </HoverScale>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 glass"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, delay: index * 0.1 }}
                  className="text-4xl md:text-5xl font-bold text-gradient mb-2"
                >
                  {stat.value}
                </motion.div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="relative glass p-12 md:p-16 text-center overflow-hidden">
            {/* Animated background elements */}
            <motion.div
              className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/10 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-secondary/10 blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Sifarişinizi İndi Verin
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Xüsusi sifarişlər və ya əlavə məlumat üçün bizimlə əlaqə saxlayın.
                Peşəkar komandamız sizə kömək etməyə hazırdır.
              </p>
              <HoverScale>
                <Link href={PATHS.ORDER}>
                  <Button size="lg" className="btn-shine text-primary-foreground bg-primary hover:bg-primary/90 group">
                    Sifariş Ver
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </HoverScale>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
