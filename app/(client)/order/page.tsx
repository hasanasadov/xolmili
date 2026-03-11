"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  Send, 
  User, 
  Mail, 
  Phone,
  MessageSquare, 
  CheckCircle, 
  Loader2, 
  ArrowRight,
  Building2,
  Package,
  Clock,
  Shield,
  Sparkles,
  MapPin,
  FileText,
  ChevronRight
} from "lucide-react";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FloatingOrbs, GradientMesh } from "@/components/shared/ParticleBackground";
import { 
  ScrollReveal, 
  HoverScale, 
  BlurReveal,
  StaggerContainer,
  StaggerItem,
  TiltCard,
  Magnetic,
  Counter,
  fadeInLeft, 
  fadeInRight,
  scaleIn 
} from "@/components/shared/Animations";
import { PATHS } from "@/constants";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  product: string;
  quantity: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const ORDER_BENEFITS = [
  {
    icon: Clock,
    title: "Sürətli Cavab",
    description: "24 saat ərzində cavab qarantiyası",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Shield,
    title: "Keyfiyyət Zəmanəti",
    description: "Bütün məhsullara zəmanət verilir",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Package,
    title: "Xüsusi Sifarişlər",
    description: "İstənilən ölçü və növ üçün sifariş",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: MapPin,
    title: "Ölkə Daxili Çatdırılma",
    description: "Azərbaycanın hər yerinə çatdırılma",
    color: "from-amber-500 to-orange-500",
  },
];

const PROCESS_STEPS = [
  { step: 1, title: "Sifariş Göndərin", description: "Formu doldurun" },
  { step: 2, title: "Təsdiq Alın", description: "24 saat ərzində" },
  { step: 3, title: "Ödəniş Edin", description: "Rahat ödəniş üsulları" },
  { step: 4, title: "Çatdırılma", description: "Sürətli çatdırılma" },
];

export default function OrderPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    product: "",
    quantity: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Ad tələb olunur";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email tələb olunur";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Düzgün email daxil edin";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Telefon nömrəsi tələb olunur";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Mesaj tələb olunur";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setLoading(false);
    setSuccess(true);
    setFormData({ name: "", email: "", phone: "", company: "", product: "", quantity: "", message: "" });

    // Reset success after 5 seconds
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <GradientMesh />
      <FloatingOrbs />

      {/* Hero Section */}
      <HeroSection />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Process Section */}
      <ProcessSection />

      {/* Form Section */}
      <FormSection
        formData={formData}
        errors={errors}
        loading={loading}
        success={success}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />

      {/* Contact Info Section */}
      <ContactInfoSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative py-24 md:py-32 px-4 overflow-hidden">
      <div className="container mx-auto text-center">
        <BlurReveal>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4 text-primary" />
              </motion.div>
              <span>Sifariş Sistemi</span>
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6">
            Sifarişinizi{" "}
            <span className="text-gradient">Asanlıqla</span>{" "}
            Verin
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Formu doldurun, peşəkar komandamız ən qısa zamanda sizinlə əlaqə saxlayacaq.
            Xüsusi sifarişlər və topdan alışlar üçün əlverişli şərtlər.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-8"
          >
            {[
              { value: 24, suffix: "s", label: "Cavab Müddəti" },
              { value: 500, suffix: "+", label: "Müştəri" },
              { value: 100, suffix: "%", label: "Məmnuniyyət" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient">
                  <Counter to={stat.value} suffix={stat.suffix} duration={2} />
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </BlurReveal>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-4" staggerDelay={0.1}>
          {ORDER_BENEFITS.map((benefit) => (
            <StaggerItem key={benefit.title}>
              <TiltCard>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="glass p-6 h-full group cursor-pointer"
                >
                  <motion.div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <benefit.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </motion.div>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Sifariş <span className="text-gradient">Prosesi</span>
          </h2>
          <p className="text-muted-foreground">Sadə və sürətli sifariş prosesi</p>
        </ScrollReveal>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
          {PROCESS_STEPS.map((item, index) => (
            <ScrollReveal key={item.step} delay={index * 0.1}>
              <div className="flex items-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center text-center px-6"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, delay: index * 0.15 }}
                    className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-3 text-xl font-bold text-primary"
                  >
                    {item.step}
                  </motion.div>
                  <h4 className="font-semibold mb-1">{item.title}</h4>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </motion.div>
                
                {index < PROCESS_STEPS.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.2 }}
                    className="hidden md:block"
                  >
                    <ChevronRight className="w-6 h-6 text-muted-foreground/30" />
                  </motion.div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

interface FormSectionProps {
  formData: FormData;
  errors: FormErrors;
  loading: boolean;
  success: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

function FormSection({ formData, errors, loading, success, onChange, onSubmit }: FormSectionProps) {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <ScrollReveal variants={scaleIn}>
          <motion.div
            className="glass p-8 md:p-12"
            whileHover={{ scale: 1.005 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center mb-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center"
              >
                <FileText className="w-8 h-8 text-primary" />
              </motion.div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Sifariş <span className="text-gradient">Formu</span>
              </h2>
              <p className="text-muted-foreground">Bütün sahələri doldurun</p>
            </div>

            <form onSubmit={onSubmit} className="space-y-6">
              {/* Personal Info Row */}
              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  icon={User}
                  name="name"
                  type="text"
                  placeholder="Tam Adınız *"
                  value={formData.name}
                  error={errors.name}
                  onChange={onChange}
                />
                <FormField
                  icon={Mail}
                  name="email"
                  type="email"
                  placeholder="Email Ünvanınız *"
                  value={formData.email}
                  error={errors.email}
                  onChange={onChange}
                />
              </div>

              {/* Contact Row */}
              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  icon={Phone}
                  name="phone"
                  type="tel"
                  placeholder="Telefon Nömrəniz *"
                  value={formData.phone}
                  error={errors.phone}
                  onChange={onChange}
                />
                <FormField
                  icon={Building2}
                  name="company"
                  type="text"
                  placeholder="Şirkət Adı (opsional)"
                  value={formData.company}
                  onChange={onChange}
                />
              </div>

              {/* Order Details Row */}
              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  icon={Package}
                  name="product"
                  type="text"
                  placeholder="Məhsul Adı (opsional)"
                  value={formData.product}
                  onChange={onChange}
                />
                <FormField
                  icon={FileText}
                  name="quantity"
                  type="text"
                  placeholder="Miqdar (opsional)"
                  value={formData.quantity}
                  onChange={onChange}
                />
              </div>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="relative group">
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                  <Textarea
                    name="message"
                    placeholder="Sifarişiniz haqqında ətraflı yazın... *"
                    value={formData.message}
                    onChange={onChange}
                    className={`min-h-32 pl-12 glass-border resize-none transition-all duration-300 ${
                      errors.message ? "border-destructive focus:border-destructive" : "focus:border-primary"
                    }`}
                  />
                </div>
                <AnimatePresence>
                  {errors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="text-destructive text-sm mt-2"
                    >
                      {errors.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Magnetic strength={0.1}>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-14 group btn-shine bg-primary text-primary-foreground text-lg"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Göndərilir...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Sifarişi Göndər
                        <motion.div
                          className="ml-2"
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ArrowRight className="w-5 h-5" />
                        </motion.div>
                      </>
                    )}
                  </Button>
                </Magnetic>
              </motion.div>

              {/* Success Message */}
              <AnimatePresence>
                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    className="flex items-center gap-4 p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center"
                    >
                      <CheckCircle className="w-6 h-6 text-emerald-500" />
                    </motion.div>
                    <div>
                      <p className="font-semibold text-emerald-600 dark:text-emerald-400">Sifarişiniz uğurla göndərildi!</p>
                      <p className="text-sm text-muted-foreground">
                        24 saat ərzində sizinlə əlaqə saxlayacağıq.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}

interface FormFieldProps {
  icon: typeof User;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function FormField({ icon: Icon, name, type, placeholder, value, error, onChange }: FormFieldProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="relative group">
        <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
        <Input
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`pl-12 h-12 glass-border transition-all duration-300 ${
            error ? "border-destructive focus:border-destructive" : "focus:border-primary"
          }`}
        />
      </div>
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="text-destructive text-sm mt-2"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function ContactInfoSection() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <ScrollReveal variants={fadeInLeft}>
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Əlavə <span className="text-gradient">Suallarınız</span> Var?
              </h3>
              <p className="text-muted-foreground mb-6">
                Bizimlə birbaşa əlaqə saxlayın. Komandamız sizə kömək etməyə hazırdır.
              </p>
              
              <div className="space-y-4">
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 glass rounded-xl"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Telefon</p>
                    <p className="font-semibold">+994 50 123 45 67</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 glass rounded-xl"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-semibold">info@xolmili.az</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variants={fadeInRight}>
            <div className="glass p-8 text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center"
              >
                <Sparkles className="w-8 h-8 text-primary" />
              </motion.div>
              <h4 className="text-xl font-bold mb-2">Kataloqa Baxın</h4>
              <p className="text-muted-foreground mb-6">
                1000+ məhsulumuzla tanış olun
              </p>
              <HoverScale>
                <Link href={PATHS.CATALOGUE}>
                  <Button variant="outline" className="glass-button">
                    Kataloqa Keç
                    <ArrowRight className="w-4 h-4 ml-2" />
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
