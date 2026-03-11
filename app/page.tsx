"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ArrowRight, Sparkles, Shield, Clock, Package } from "lucide-react";

import {
  ScrollReveal,
  AnimatedText,
  BlurReveal,
  ParallaxScroll,
  StaggerContainer,
  StaggerItem,
  Counter,
  ScrollProgress,
  RevealLine,
  HoverLift,
  Floating,
  GradientBlob,
  ImageReveal,
  fadeInLeft,
  fadeInRight,
} from "@/components/shared/Animations";
import { PATHS, products } from "@/constants";

const STATS = [
  { value: 14, suffix: "+", label: "İllik Təcrübə" },
  { value: 500, suffix: "+", label: "Məmnun Müştəri" },
  { value: 1000, suffix: "+", label: "Məhsul Çeşidi" },
];

const FEATURES = [
  { 
    icon: Package, 
    title: "Geniş Çeşid", 
    desc: "1000+ fərqli maşın hissəsi və avadanlıq" 
  },
  { 
    icon: Shield, 
    title: "Keyfiyyət Zəmanəti", 
    desc: "Etibarlı dünya brendləri ilə tərəfdaşlıq" 
  },
  { 
    icon: Clock, 
    title: "Sürətli Xidmət", 
    desc: "24 saat ərzində cavab və çatdırılma" 
  },
];

export default function HomePage() {
  return (
    <div className="relative">
      <ScrollProgress />
      <HeroSection />
      <FeaturedProducts />
      <FeaturesSection />
      <StatsSection />
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
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background blobs */}
      <GradientBlob className="w-[600px] h-[600px] -top-40 -right-40" />
      <GradientBlob className="w-[400px] h-[400px] bottom-20 -left-20" />
      
      {/* Background image with parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <Image
          src="/giphy.gif"
          alt=""
          fill
          className="object-cover opacity-10"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </motion.div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-8 py-20">
        <motion.div style={{ opacity }}>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="badge mb-8">
              <Sparkles className="w-3.5 h-3.5" />
              2010-cu ildən sizinlə
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] text-foreground mb-6 max-w-4xl">
              <AnimatedText text="Xolmili'ə" delay={0.4} />
              <br />
              <span className="text-highlight">
                <AnimatedText text="Xoş Gəlmisiniz" delay={0.7} />
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed"
          >
            Azərbaycanın ən etibarlı maşın hissələri təchizatçısı. 
            14 illik təcrübə ilə sənayenizə dəstək.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link href={PATHS.CATALOGUE} className="btn-elite">
              Kataloqa bax
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href={PATHS.CONTACT} className="btn-elite-outline">
              Əlaqə saxla
            </Link>
          </motion.div>

          {/* Quick stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-border"
          >
            {STATS.map((stat, i) => (
              <div key={stat.label} className="text-left">
                <div className="text-3xl md:text-4xl font-bold text-foreground">
                  <Counter to={stat.value} suffix={stat.suffix} duration={2} />
                </div>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-xs uppercase tracking-widest text-muted-foreground">Kəşf et</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 rounded-full bg-highlight"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

function FeaturedProducts() {
  const featured = products.slice(0, 4);
  
  return (
    <section className="py-24 px-6 lg:px-8 bg-accent/30">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="badge badge-outline mb-4">Populyar Məhsullar</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Seçilmiş Məhsullar
            </h2>
          </div>
          <Link 
            href={PATHS.CATALOGUE} 
            className="text-sm font-medium text-highlight flex items-center gap-2 hover:gap-3 transition-all"
          >
            Hamısına bax
            <ArrowRight className="w-4 h-4" />
          </Link>
        </ScrollReveal>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
          {featured.map((product) => (
            <StaggerItem key={product.id}>
              <HoverLift>
                <Link href={`/catalogue/${product.id}`} className="block product-card group">
                  <div className="relative aspect-square bg-muted overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-6 transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      <span className="text-xs text-highlight font-medium">Ətraflı bax</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground group-hover:text-highlight transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                      {product.description.slice(0, 60)}...
                    </p>
                  </div>
                </Link>
              </HoverLift>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <ScrollReveal variants={fadeInLeft}>
            <div className="relative">
              <ImageReveal className="rounded-lg overflow-hidden">
                <div className="relative aspect-[4/3] bg-muted">
                  <Image
                    src="/products/zencir.png"
                    alt="Keyfiyyətli maşın hissələri"
                    fill
                    className="object-contain p-8"
                  />
                </div>
              </ImageReveal>
              {/* Floating badge */}
              <Floating distance={10}>
                <div className="absolute -bottom-6 -right-6 surface p-4 shadow-lg glow-soft">
                  <div className="text-2xl font-bold text-highlight">14+</div>
                  <div className="text-xs text-muted-foreground">İl Təcrübə</div>
                </div>
              </Floating>
            </div>
          </ScrollReveal>

          {/* Right: Content */}
          <ScrollReveal variants={fadeInRight} delay={0.2}>
            <span className="badge mb-6">Niyə Biz?</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 leading-tight">
              Sənayeniz üçün <span className="text-highlight">Etibarlı Tərəfdaş</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Xolmili olaraq, müştərilərimizə ən yüksək keyfiyyətli maşın hissələri 
              təqdim edirik. Təcrübəli komandamız sizə lazım olan hər şeyi tapacaq.
            </p>
            
            <div className="space-y-4">
              {FEATURES.map((feature, i) => (
                <motion.div 
                  key={feature.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="feature-card"
                >
                  <div className="flex items-start gap-4">
                    <div className="feature-icon">
                      <feature.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-foreground text-background">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block text-xs font-medium uppercase tracking-widest text-background/60 mb-4">
            Rəqəmlərimiz
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-background">
            Nəticələr Özü Danışır
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-3 gap-8">
          {STATS.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.15}>
              <div className="text-center p-8 rounded-lg border border-background/10 hover:border-background/30 transition-colors">
                <div className="text-5xl sm:text-6xl font-bold text-background mb-3">
                  <Counter to={stat.value} duration={2.5} suffix={stat.suffix} />
                </div>
                <RevealLine className="w-12 mx-auto mb-3 !bg-highlight" delay={0.3 + i * 0.15} />
                <p className="text-sm uppercase tracking-widest text-background/60">
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
    <section className="py-32 px-6 lg:px-8 relative overflow-hidden">
      <GradientBlob className="w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <BlurReveal>
          <span className="badge mb-6">Hazırsınız?</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Sifarişinizi <span className="text-highlight">İndi</span> Verin
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
            Xüsusi sifarişlər və ya əlavə məlumat üçün bizimlə əlaqə saxlayın.
            Peşəkar komandamız 24 saat ərzində cavab verəcək.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href={PATHS.ORDER} className="btn-elite">
              Sifariş ver
              <ArrowRight className="w-4 h-4" />
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
