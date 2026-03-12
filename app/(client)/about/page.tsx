"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Users, Target, Zap } from "lucide-react";

import {
  ScrollReveal,
  BlurReveal,
  StaggerContainer,
  StaggerItem,
  Counter,
  RevealLine,
  fadeInLeft,
  fadeInRight,
  GradientBlob,
  ImageReveal,
} from "@/components/shared/Animations";
import { PATHS } from "@/constants";

const TIMELINE = [
  { year: "2010", event: "Şirkətin qurulması", detail: "Alirza Əliyev tərəfindən əsası qoyuldu" },
  { year: "2015", event: "Böyük tərəfdaşlıq", detail: "Azərbaycandakı fabriklərlə əməkdaşlıq" },
  { year: "2020", event: "Genişlənmə", detail: "Geniş çeşid və yeni xidmətlər" },
  { year: "2024", event: "500+ müştəri", detail: "Məmnun müştəri sayı davam edir" },
];

const STATS = [
  { value: 14, suffix: "+", label: "İl Təcrübə" },
  { value: 500, suffix: "+", label: "Müştəri" },
  { value: 1000, suffix: "+", label: "Məhsul Növü" },
];

const VALUES = [
  { icon: Award, title: "Keyfiyyət", desc: "Ən yüksək keyfiyyət standartları" },
  { icon: Users, title: "Müştəri Məmnuniyyəti", desc: "Hər zaman müştəri öncelikli" },
  { icon: Target, title: "Dəqiqlik", desc: "Vaxtında və düzgün çatdırılma" },
  { icon: Zap, title: "Sürət", desc: "24 saat cavab verməyə hazırıq" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <PageHeader />
      <StorySection />
      <StatsSection />
      <ValuesSection />
      <TimelineSection />
      <LocationSection />
      <CTASection />
    </div>
  );
}

function PageHeader() {
  return (
    <div className="relative py-24 px-6 lg:px-8 overflow-hidden">
      <GradientBlob className="w-[400px] h-[400px] -top-20 -right-20" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="badge mb-6">Şirkət Haqqında</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight max-w-3xl">
            Sənayenizə <span className="text-highlight">Güc</span> Verən Tərəfdaş
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mt-6 leading-relaxed">
            2010-cu ildən bəri Azərbaycanın aparıcı maşın hissələri təchizatçısı olaraq 
            müştərilərimizə xidmət göstəririk.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

function StorySection() {
  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <ScrollReveal variants={fadeInLeft}>
          <ImageReveal className="rounded-lg overflow-hidden">
            <div className="relative aspect-[4/3] bg-muted">
              <Image
                src="/products/podsipnik.png"
                alt="Xolmili Tarixi"
                fill
                className="object-contain p-8"
              />
            </div>
          </ImageReveal>
        </ScrollReveal>

        <ScrollReveal variants={fadeInRight} delay={0.2}>
          <span className="badge mb-6">Tariximiz</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 leading-tight">
            Bizim <span className="text-highlight">Hekayəmiz</span>
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              &ldquo;Xolmili&rdquo; şirkətinin əsası Fevral 2010-cu ildə Alirza Əliyev
              tərəfindən qoyulub. Satış nöqtələrimizdə hər növ maşın alətləri hissələrinin
              satışı, sifarişi, həmçinin dəzgahlar üçün ölçü hesablamaları aparılır.
            </p>
            <p>
              Mağazalarımızda hər növ mufta, mufta rezinləri, qasnaqlar, kəmər,
              zəncir, ulduzlar, dişli çarxlar, kabel kanalları, podşipnik, porşen
              və daha çox maşın hissəsinin satışı aparılır.
            </p>
          </div>
          <div className="mt-8">
            <Link href={PATHS.CONTACT} className="btn-elite">
              Bizimlə Əlaqə
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="py-20 px-6 lg:px-8 bg-accent/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-8">
          {STATS.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="text-center p-8 surface hover:border-highlight transition-colors">
                <div className="stat-number mb-2">
                  <Counter to={stat.value} duration={2.5} suffix={stat.suffix} />
                </div>
                <RevealLine className="w-12 mx-auto mb-3" delay={0.3 + i * 0.1} />
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

function ValuesSection() {
  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <span className="badge mb-4">Dəyərlərimiz</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Niyə <span className="text-highlight">Xolmili</span>?
          </h2>
        </ScrollReveal>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
          {VALUES.map((value) => (
            <StaggerItem key={value.title}>
              <div className="feature-card text-center h-full">
                <div className="feature-icon mx-auto">
                  <value.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function TimelineSection() {
  return (
    <section className="py-20 px-6 lg:px-8 bg-foreground text-background">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block text-xs font-medium uppercase tracking-widest text-background/60 mb-4">
            Tarixçə
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-background">Bizim Yolumuz</h2>
        </ScrollReveal>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-background/20" />

          <StaggerContainer className="space-y-12" staggerDelay={0.15}>
            {TIMELINE.map((item, i) => (
              <StaggerItem key={item.year}>
                <div className={`flex items-start gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className={`hidden md:block flex-1 ${i % 2 === 0 ? "text-right" : "text-left"}`}>
                    <span className="text-3xl font-bold text-highlight">{item.year}</span>
                  </div>
                  
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-highlight border-4 border-background flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-background" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <span className="md:hidden text-2xl font-bold text-highlight block mb-2">{item.year}</span>
                    <h3 className="text-lg font-semibold text-background mb-1">{item.event}</h3>
                    <p className="text-sm text-background/60">{item.detail}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}

function LocationSection() {
  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <span className="badge mb-6">Ünvan</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Məkanımız
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Bakı şəhərində, 8-ci km bazarında yerləşirik. 
              Ziyarətinizi gözləyirik.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-highlight-soft flex items-center justify-center">
                  <span className="text-highlight font-bold text-sm">01</span>
                </div>
                <p className="text-foreground">Bakı, Azərbaycan — 8-ci km bazarı</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-highlight-soft flex items-center justify-center">
                  <span className="text-highlight font-bold text-sm">02</span>
                </div>
                <p className="text-foreground">Bazar ertəsi - Cümə: 9:00 - 18:00</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="surface overflow-hidden h-80">
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

function CTASection() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-accent/30 relative overflow-hidden">
      <GradientBlob className="w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <BlurReveal>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Bizimlə <span className="text-highlight">Əlaqə</span> Saxlayın
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Suallarınız və ya sifarişləriniz üçün peşəkar komandamız sizə kömək etməyə hazırdır.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href={PATHS.CONTACT} className="btn-elite">
              Əlaqə
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href={PATHS.ORDER} className="btn-elite-outline">
              Sifariş ver
            </Link>
          </div>
        </BlurReveal>
      </div>
    </section>
  );
}
