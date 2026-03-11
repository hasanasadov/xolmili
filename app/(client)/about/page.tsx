"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import {
  ScrollReveal,
  BlurReveal,
  RevealMask,
  StaggerContainer,
  StaggerItem,
  Counter,
  fadeInLeft,
  fadeInRight,
} from "@/components/shared/Animations";
import { PATHS } from "@/constants";

const TIMELINE = [
  { year: "2010", event: "Şirkətin qurulması", detail: "Alirza Əliyev tərəfindən əsası qoyuldu" },
  { year: "2015", event: "Böyük tərəfdaşlıq",  detail: "Azərbaycandakı fabriklərlə əməkdaşlıq" },
  { year: "2020", event: "Genişlənmə",          detail: "Geniş çeşid və yeni xidmətlər" },
  { year: "2024", event: "500+ müştəri",         detail: "Məmnun müştəri sayı davam edir" },
];

const STATS = [
  { value: 14, suffix: "+", label: "İl Təcrübə" },
  { value: 500, suffix: "+", label: "Müştəri" },
  { value: 1000, suffix: "+", label: "Məhsul Növü" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <PageHeader />

      {/* Story */}
      <StorySection />

      {/* Stats */}
      <StatsSection />

      {/* Timeline */}
      <TimelineSection />

      {/* Location */}
      <LocationSection />

      {/* CTA */}
      <CTASection />
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
            Şirkət
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight max-w-2xl">
            Haqqımızda
          </h1>
        </motion.div>
      </div>
    </div>
  );
}

function StorySection() {
  return (
    <section className="py-20 px-6 lg:px-8 border-b border-border">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-start">
        <ScrollReveal variants={fadeInLeft}>
          <span className="inline-block text-xs font-medium uppercase tracking-widest text-muted-foreground mb-5">
            Tariximiz
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 leading-snug">
            Bizim Hekayəmiz
          </h2>
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
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
        </ScrollReveal>

        <ScrollReveal variants={fadeInRight} delay={0.15}>
          <span className="inline-block text-xs font-medium uppercase tracking-widest text-muted-foreground mb-5">
            Üstünlüklər
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 leading-snug">
            Niyə Biz?
          </h2>
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              &ldquo;Xolmili&rdquo; şirkətinin əsas üstünlükləri geniş məhsul çeşidi,
              təcrübəli satış mütəxəssisləri və ən vacib olanı isə tərəfdaşlarıdır.
            </p>
            <p>
              Belə ki, Azərbaycandakı əksər fabriklərin seçimi məhz &ldquo;Xolmili&rdquo;
              şirkətinin məhsullarıdır.
            </p>
          </div>
          <div className="mt-8">
            <Link href={PATHS.ORDER} className="btn-elite">
              Sifariş ver
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="py-16 px-6 lg:px-8 border-b border-border bg-accent/20">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-8">
        {STATS.map((stat, i) => (
          <ScrollReveal key={stat.label} delay={i * 0.12}>
            <div className="text-center">
              <div className="stat-number mb-1">
                <Counter to={stat.value} duration={2.2} suffix={stat.suffix} />
              </div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                {stat.label}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

function TimelineSection() {
  return (
    <section className="py-20 px-6 lg:px-8 border-b border-border">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal className="mb-12">
          <span className="inline-block text-xs font-medium uppercase tracking-widest text-muted-foreground mb-4">
            Tarixçə
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Bizim Yolumuz</h2>
        </ScrollReveal>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-3.5 top-0 bottom-0 w-px bg-border" />

          <StaggerContainer className="space-y-8" staggerDelay={0.15}>
            {TIMELINE.map((item) => (
              <StaggerItem key={item.year}>
                <div className="flex gap-6 items-start">
                  <div className="relative z-10 mt-1">
                    <div className="timeline-dot" />
                  </div>
                  <div className="flex-1 pb-2">
                    <div className="flex items-baseline gap-3 mb-1">
                      <span className="text-sm font-bold text-foreground">{item.year}</span>
                      <span className="text-sm text-muted-foreground">{item.event}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{item.detail}</p>
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
    <section className="py-20 px-6 lg:px-8 border-b border-border">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="mb-8">
          <span className="inline-block text-xs font-medium uppercase tracking-widest text-muted-foreground mb-4">
            Ünvan
          </span>
          <h2 className="text-2xl font-bold text-foreground">Məkanımız</h2>
          <p className="text-sm text-muted-foreground mt-1">Bakı, Azərbaycan — 1000</p>
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

function CTASection() {
  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <BlurReveal>
          <RevealMask>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-5">
              Bizimlə Əlaqə Saxlayın
            </h2>
          </RevealMask>
          <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
            Suallarınız və ya sifarişləriniz üçün peşəkar komandamız sizə kömək etməyə hazırdır.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href={PATHS.CONTACT} className="btn-elite">
              Əlaqə
              <ArrowRight className="w-3.5 h-3.5" />
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
