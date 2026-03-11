"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ArrowRight, Sparkles, Cog, Shield, Clock, Star, Award, Users, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FloatingOrbs, GradientMesh } from "@/components/shared/ParticleBackground";
import {
  ScrollReveal,
  AnimatedText,
  Floating,
  FloatingMultiAxis,
  HoverScale,
  ParallaxScroll,
  ScaleOnScroll,
  StaggerContainer,
  StaggerItem,
  TiltCard,
  BlurReveal,
  Counter,
  ScrollProgress,
  Magnetic,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "@/components/shared/Animations";
import { PATHS } from "@/constants";

const FEATURES = [
  {
    icon: Cog,
    title: "Keyfiyyətli Hissələr",
    description: "Yüksək keyfiyyətli maşın alətləri hissələri və ölçü hesablamaları ilə işinizi asanlaşdırın.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Shield,
    title: "Etibarlı Tərəfdaş",
    description: "Azərbaycanda fabriklərin ilk seçimi olan etibarlı və peşəkar tərəfdaş.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Clock,
    title: "Sürətli Çatdırılma",
    description: "Peşəkar komandamız ilə sürətli xidmət və 24/7 dəstək.",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: Zap,
    title: "İnnovativ Həllər",
    description: "Ən son texnologiyalar və innovativ yanaşmalar ilə sizə xidmət edirik.",
    gradient: "from-amber-500 to-orange-500",
  },
];

const STATS = [
  { value: 14, suffix: "+", label: "İllik Təcrübə", icon: Award },
  { value: 500, suffix: "+", label: "Məmnun Müştəri", icon: Users },
  { value: 1000, suffix: "+", label: "Məhsul Növü", icon: Cog },
  { value: 24, suffix: "/7", label: "Dəstək", icon: Clock },
];

const TESTIMONIALS = [
  {
    name: "Rəşad Məmmədov",
    role: "Fabrik Direktoru",
    content: "Xolmili ilə əməkdaşlıq bizim üçün böyük uğur oldu. Keyfiyyətli məhsullar və sürətli xidmət.",
    rating: 5,
  },
  {
    name: "Aynur Həsənova",
    role: "Satınalma Meneceri",
    content: "Peşəkar komanda və etibarlı tərəfdaş. Hər zaman tövsiyə edərik.",
    rating: 5,
  },
  {
    name: "Elvin Quliyev",
    role: "Texniki Direktor",
    content: "14 illik təcrübə özünü göstərir. Ən yaxşı qiymət və keyfiyyət nisbəti.",
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <ScrollProgress />
      <GradientMesh />
      <FloatingOrbs />

      {/* Hero Section */}
      <HeroSection />

      {/* Marquee Section */}
      <MarqueeSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
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

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <section ref={ref} className="relative min-h-[100vh] flex items-center justify-center px-4 overflow-hidden">
      {/* Animated Background */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <Image
          src="/giphy.gif"
          alt="Background"
          fill
          className="object-cover opacity-30 dark:opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
      </motion.div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingMultiAxis>
          <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/10 blur-xl" />
        </FloatingMultiAxis>
        <FloatingMultiAxis>
          <div className="absolute top-40 right-20 w-32 h-32 rounded-full bg-secondary/10 blur-2xl" />
        </FloatingMultiAxis>
        <FloatingMultiAxis>
          <div className="absolute bottom-40 left-1/4 w-24 h-24 rounded-full bg-primary/5 blur-xl" />
        </FloatingMultiAxis>
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 container mx-auto text-center"
        style={{ opacity, scale }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-8"
        >
          <Magnetic>
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass text-sm font-medium">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4 text-primary" />
              </motion.div>
              <span className="text-foreground">2010-cu ildən sizinlə</span>
            </span>
          </Magnetic>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 text-balance leading-tight">
            <AnimatedText
              text="Xolmili'ə"
              className="text-gradient-animated block"
              delay={0.4}
            />
            <AnimatedText
              text="Xoş Gəlmisiniz"
              className="text-foreground block mt-2"
              delay={0.8}
            />
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 text-pretty leading-relaxed"
        >
          Azərbaycanın ən etibarlı maşın hissələri təchizatçısı. 
          İstədiyiniz məhsul və daha çoxu üçün bizimlə əlaqə saxlayın.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-wrap items-center justify-center gap-5"
        >
          <Floating duration={4} distance={6}>
            <Magnetic strength={0.2}>
              <Link href={PATHS.CATALOGUE}>
                <Button size="lg" className="group btn-shine text-primary-foreground bg-primary hover:bg-primary/90 h-14 px-8 text-base">
                  Kataloqa Bax
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </Button>
              </Link>
            </Magnetic>
          </Floating>

          <Magnetic strength={0.2}>
            <Link href={PATHS.CONTACT}>
              <Button size="lg" variant="outline" className="glass-button h-14 px-8 text-base">
                Əlaqə Saxla
              </Button>
            </Link>
          </Magnetic>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-7 h-12 rounded-full border-2 border-foreground/20 flex justify-center pt-2"
          >
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3], y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-2 h-2 rounded-full bg-primary"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function MarqueeSection() {
  const items = ["Keyfiyyət", "Etibarlılıq", "Sürət", "İnnovasiya", "Peşəkarlıq", "Dəstək"];

  return (
    <div className="relative py-8 overflow-hidden border-y border-border/30">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex gap-8 whitespace-nowrap"
      >
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            className="text-2xl md:text-3xl font-bold text-foreground/10 flex items-center gap-4"
          >
            {item}
            <Star className="w-4 h-4 text-primary/30" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}

function FeaturesSection() {
  return (
    <section className="py-32 px-4 relative">
      <div className="container mx-auto">
        <BlurReveal className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full glass text-sm font-medium mb-6"
          >
            Üstünlüklərimiz
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Niyə <span className="text-gradient">Xolmili?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            14 illik təcrübə ilə sizə ən yaxşı xidməti təqdim edirik
          </p>
        </BlurReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.15}>
          {FEATURES.map((feature, index) => (
            <StaggerItem key={feature.title}>
              <ParallaxScroll speed={0.1 * (index + 1)}>
                <TiltCard>
                  <div className="glass p-8 h-full group cursor-pointer">
                    <motion.div 
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </TiltCard>
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
    <section className="py-32 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto relative">
        <ScaleOnScroll>
          <div className="glass p-12 md:p-16">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
              {STATS.map((stat, index) => (
                <ScrollReveal key={stat.label} delay={index * 0.1} variants={scaleIn}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center group"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 200, delay: index * 0.1 }}
                      className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                    >
                      <stat.icon className="w-8 h-8 text-primary" />
                    </motion.div>
                    <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-2">
                      <Counter to={stat.value} duration={2.5} suffix={stat.suffix} />
                    </div>
                    <p className="text-muted-foreground font-medium text-lg">{stat.label}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScaleOnScroll>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      <div className="container mx-auto">
        <BlurReveal className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full glass text-sm font-medium mb-6"
          >
            Müştəri Rəyləri
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Müştərilərimiz <span className="text-gradient">Nə Deyir?</span>
          </h2>
        </BlurReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <ScrollReveal
              key={testimonial.name}
              variants={index === 0 ? fadeInLeft : index === 2 ? fadeInRight : fadeInUp}
              delay={index * 0.15}
            >
              <HoverScale>
                <div className="glass p-8 h-full">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i }}
                      >
                        <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-foreground/80 mb-6 leading-relaxed italic">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </HoverScale>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-32 px-4">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="relative glass p-12 md:p-20 text-center overflow-hidden">
            {/* Animated background elements */}
            <motion.div
              className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2],
                x: [0, 50, 0],
                y: [0, -30, 0],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-secondary/10 blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.4, 0.2],
                x: [0, -30, 0],
                y: [0, 50, 0],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />

            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200 }}
                className="w-20 h-20 mx-auto mb-8 rounded-3xl bg-primary/10 flex items-center justify-center"
              >
                <Sparkles className="w-10 h-10 text-primary" />
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Sifarişinizi <span className="text-gradient">İndi</span> Verin
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
                Xüsusi sifarişlər və ya əlavə məlumat üçün bizimlə əlaqə saxlayın.
                Peşəkar komandamız sizə kömək etməyə hazırdır.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Magnetic strength={0.2}>
                  <Link href={PATHS.ORDER}>
                    <Button size="lg" className="btn-shine text-primary-foreground bg-primary hover:bg-primary/90 h-14 px-8 group">
                      <Sparkles className="w-5 h-5 mr-2" />
                      Sifariş Ver
                      <motion.div
                        className="ml-2"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </Button>
                  </Link>
                </Magnetic>

                <Magnetic strength={0.2}>
                  <Link href={PATHS.CATALOGUE}>
                    <Button size="lg" variant="outline" className="glass-button h-14 px-8">
                      Kataloqa Bax
                    </Button>
                  </Link>
                </Magnetic>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
