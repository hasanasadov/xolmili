"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, User, Mail, MessageSquare, CheckCircle, Loader2, ArrowRight } from "lucide-react";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FloatingOrbs } from "@/components/shared/ParticleBackground";
import { ScrollReveal, HoverScale, fadeInLeft, fadeInRight } from "@/components/shared/Animations";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function OrderPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
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
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setLoading(false);
    setSuccess(true);
    setFormData({ name: "", email: "", message: "" });

    // Reset success after 5 seconds
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <div className="relative min-h-screen overflow-hidden py-12 px-4">
      <FloatingOrbs />

      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left side - Info */}
          <ScrollReveal variants={fadeInLeft}>
            <InfoSection />
          </ScrollReveal>

          {/* Right side - Form */}
          <ScrollReveal variants={fadeInRight} delay={0.2}>
            <FormSection
              formData={formData}
              errors={errors}
              loading={loading}
              success={success}
              onChange={handleChange}
              onSubmit={handleSubmit}
            />
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}

function InfoSection() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-foreground/80 mb-6">
          <Send className="w-4 h-4 text-primary" />
          <span>Sifariş formu</span>
        </span>

        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Fikirlərinizi Bizimlə{" "}
          <span className="text-gradient">Bölüşün</span>
        </h1>

        <p className="text-lg text-muted-foreground">
          Sifariş vermək və ya suallarınızı bildirmək üçün formu doldurun.
          Peşəkar komandamız ən qısa zamanda sizinlə əlaqə saxlayacaq.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="space-y-4"
      >
        <FeatureItem
          icon={CheckCircle}
          title="Sürətli Cavab"
          description="24 saat ərzində cavab qarantiyası"
        />
        <FeatureItem
          icon={CheckCircle}
          title="Peşəkar Dəstək"
          description="Təcrübəli komanda ilə məsləhət"
        />
        <FeatureItem
          icon={CheckCircle}
          title="Xüsusi Sifarişlər"
          description="İstənilən ölçü və növ üçün sifariş"
        />
      </motion.div>
    </div>
  );
}

interface FeatureItemProps {
  icon: typeof CheckCircle;
  title: string;
  description: string;
}

function FeatureItem({ icon: Icon, title, description }: FeatureItemProps) {
  return (
    <motion.div
      className="flex items-start gap-4 group"
      whileHover={{ x: 5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <div>
        <h3 className="font-semibold group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </motion.div>
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
    <motion.div
      className="glass p-8 md:p-10"
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3 }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-bold mb-8 text-center"
      >
        Sifarişinizi <span className="text-gradient">Göndərin</span>
      </motion.h2>

      <form onSubmit={onSubmit} className="space-y-6">
        <FormField
          icon={User}
          name="name"
          type="text"
          placeholder="Tam Adınız"
          value={formData.name}
          error={errors.name}
          onChange={onChange}
          delay={0.1}
        />

        <FormField
          icon={Mail}
          name="email"
          type="email"
          placeholder="Email Ünvanınız"
          value={formData.email}
          error={errors.email}
          onChange={onChange}
          delay={0.2}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="relative">
            <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-muted-foreground" />
            <Textarea
              name="message"
              placeholder="Sifarişiniz haqqında yazın... (Nömrənizi də əlavə edin)"
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <HoverScale>
            <Button
              type="submit"
              size="lg"
              className="w-full group btn-shine bg-primary text-primary-foreground"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Göndərilir...
                </>
              ) : (
                <>
                  Mesajı Göndər
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </Button>
          </HoverScale>
        </motion.div>

        <AnimatePresence>
          {success && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20"
            >
              <CheckCircle className="w-5 h-5 text-green-500" />
              <div>
                <p className="font-medium text-green-500">Mesajınız uğurla göndərildi!</p>
                <p className="text-sm text-muted-foreground">
                  Tezliklə sizinlə əlaqə saxlayacağıq.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </motion.div>
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
  delay: number;
}

function FormField({ icon: Icon, name, type, placeholder, value, error, onChange, delay }: FormFieldProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
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
