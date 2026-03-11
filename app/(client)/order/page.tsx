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
  Building2,
  Package,
  ArrowRight,
  Hash,
} from "lucide-react";

import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
  BlurReveal,
  RevealMask,
  Counter,
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

const PROCESS = [
  { step: "01", title: "Formu doldurun",      detail: "Aşağıdakı formu eksiksiz doldurun" },
  { step: "02", title: "Təsdiq alın",           detail: "24 saat ərzində cavab veririk" },
  { step: "03", title: "Razılaşın",             detail: "Şərtlər müzakirə edilir" },
  { step: "04", title: "Çatdırılma",            detail: "Sürətli çatdırılma" },
];

const HIGHLIGHTS = [
  { value: 24, suffix: "s", label: "Cavab müddəti" },
  { value: 500, suffix: "+", label: "Müştəri" },
  { value: 100, suffix: "%", label: "Məmnuniyyət" },
];

const INITIAL_FORM: FormData = {
  name: "", email: "", phone: "", company: "",
  product: "", quantity: "", message: "",
};

export default function OrderPage() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!form.name.trim())    e.name = "Ad tələb olunur";
    if (!form.email.trim())   e.email = "Email tələb olunur";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Düzgün email daxil edin";
    if (!form.phone.trim())   e.phone = "Telefon tələb olunur";
    if (!form.message.trim()) e.message = "Mesaj tələb olunur";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((p) => ({ ...p, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 2000));
    setLoading(false);
    setSuccess(true);
    setForm(INITIAL_FORM);
    setTimeout(() => setSuccess(false), 6000);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <PageHeader />

      {/* Highlights bar */}
      <HighlightsBar />

      {/* Process */}
      <ProcessSection />

      {/* Main: form + info side by side */}
      <div className="py-16 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <OrderForm
              form={form}
              errors={errors}
              loading={loading}
              success={success}
              onChange={handleChange}
              onSubmit={handleSubmit}
            />
          </div>

          {/* Side info */}
          <div className="lg:col-span-1">
            <SideInfo />
          </div>
        </div>
      </div>
    </div>
  );
}

// ===== PAGE HEADER =====
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
            Sifariş sistemi
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight mb-4">
            Sifariş Ver
          </h1>
          <p className="text-sm text-muted-foreground max-w-lg leading-relaxed">
            Formu doldurun, peşəkar komandamız ən qısa zamanda sizinlə əlaqə saxlayacaq.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

// ===== HIGHLIGHTS BAR =====
function HighlightsBar() {
  return (
    <div className="border-b border-border bg-accent/20 py-8 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-3 gap-6">
          {HIGHLIGHTS.map((h, i) => (
            <ScrollReveal key={h.label} delay={i * 0.1}>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-foreground mb-0.5">
                  <Counter to={h.value} duration={2} suffix={h.suffix} />
                </div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{h.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}

// ===== PROCESS =====
function ProcessSection() {
  return (
    <section className="py-16 px-6 lg:px-8 border-b border-border">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="mb-10">
          <h2 className="text-xl font-bold text-foreground">Sifariş Prosesi</h2>
        </ScrollReveal>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border" staggerDelay={0.1}>
          {PROCESS.map((p) => (
            <StaggerItem key={p.step}>
              <div className="bg-background p-6 h-full">
                <p className="text-3xl font-bold text-muted-foreground/20 mb-4">{p.step}</p>
                <h3 className="text-sm font-semibold text-foreground mb-1">{p.title}</h3>
                <p className="text-xs text-muted-foreground">{p.detail}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

// ===== ORDER FORM =====
interface OrderFormProps {
  form: FormData;
  errors: FormErrors;
  loading: boolean;
  success: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

function OrderForm({ form, errors, loading, success, onChange, onSubmit }: OrderFormProps) {
  return (
    <ScrollReveal>
      <div className="border border-border p-8 sm:p-10">
        <h2 className="text-xl font-bold text-foreground mb-8">Sifariş Formu</h2>

        <form onSubmit={onSubmit} className="space-y-8" noValidate>
          {/* Row 1 */}
          <div className="grid sm:grid-cols-2 gap-6">
            <Field
              icon={User}
              name="name"
              type="text"
              label="Ad Soyad"
              required
              value={form.name}
              error={errors.name}
              onChange={onChange}
            />
            <Field
              icon={Mail}
              name="email"
              type="email"
              label="Email"
              required
              value={form.email}
              error={errors.email}
              onChange={onChange}
            />
          </div>

          {/* Row 2 */}
          <div className="grid sm:grid-cols-2 gap-6">
            <Field
              icon={Phone}
              name="phone"
              type="tel"
              label="Telefon"
              required
              value={form.phone}
              error={errors.phone}
              onChange={onChange}
            />
            <Field
              icon={Building2}
              name="company"
              type="text"
              label="Şirkət (opsional)"
              value={form.company}
              onChange={onChange}
            />
          </div>

          {/* Row 3 */}
          <div className="grid sm:grid-cols-2 gap-6">
            <Field
              icon={Package}
              name="product"
              type="text"
              label="Məhsul adı (opsional)"
              value={form.product}
              onChange={onChange}
            />
            <Field
              icon={Hash}
              name="quantity"
              type="text"
              label="Miqdar (opsional)"
              value={form.quantity}
              onChange={onChange}
            />
          </div>

          {/* Message */}
          <TextareaField
            icon={MessageSquare}
            name="message"
            label="Mesaj"
            required
            value={form.message}
            error={errors.message}
            onChange={onChange}
          />

          {/* Submit */}
          <div>
            <button
              type="submit"
              disabled={loading}
              className="btn-elite w-full sm:w-auto justify-center sm:min-w-48 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Göndərilir...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Sifarişi Göndər
                </>
              )}
            </button>
          </div>

          {/* Success */}
          <AnimatePresence>
            {success && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.97 }}
                className="flex items-center gap-4 p-5 border border-border bg-accent/40"
              >
                <CheckCircle className="w-5 h-5 text-foreground shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">Sifarişiniz göndərildi</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    24 saat ərzində sizinlə əlaqə saxlayacağıq.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </div>
    </ScrollReveal>
  );
}

// ===== FIELD =====
interface FieldProps {
  icon: React.ElementType;
  name: string;
  type: string;
  label: string;
  required?: boolean;
  value: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Field({ icon: Icon, name, type, label, required, value, error, onChange }: FieldProps) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
        {label}{required && <span className="ml-0.5 text-foreground">*</span>}
      </label>
      <div className="relative">
        <Icon className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          className={`input-elite pl-6 ${error ? "error" : ""}`}
        />
      </div>
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-xs text-destructive mt-1"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

// ===== TEXTAREA FIELD =====
interface TextareaFieldProps {
  icon: React.ElementType;
  name: string;
  label: string;
  required?: boolean;
  value: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

function TextareaField({ icon: Icon, name, label, required, value, error, onChange }: TextareaFieldProps) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
        {label}{required && <span className="ml-0.5 text-foreground">*</span>}
      </label>
      <div className="relative">
        <Icon className="absolute left-0 top-4 w-4 h-4 text-muted-foreground" />
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          rows={4}
          className={`input-elite pl-6 resize-none ${error ? "error" : ""}`}
        />
      </div>
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-xs text-destructive mt-1"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

// ===== SIDE INFO =====
function SideInfo() {
  return (
    <ScrollReveal className="sticky top-20">
      <div className="border border-border p-6 space-y-8">
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            Nə üçün Xolmili?
          </h3>
          {[
            "14+ il sektordakı təcrübə",
            "Geniş məhsul çeşidi — 1000+ məhsul",
            "Fabriklərin etibarlı seçimi",
            "Azərbaycanın hər yerinə çatdırılma",
            "Xüsusi ölçü hesablamaları",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3 py-2.5 border-b border-border/50 last:border-0">
              <div className="w-1 h-1 rounded-full bg-foreground mt-1.5 shrink-0" />
              <p className="text-sm text-muted-foreground">{item}</p>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            Birbaşa Əlaqə
          </h3>
          <div className="space-y-3">
            <Link
              href="tel:+994705048888"
              className="flex items-center justify-between group hover:text-foreground transition-colors"
            >
              <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                +994 70 504 88 88
              </p>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground/50 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="mailto:xolmili@gmail.com"
              className="flex items-center justify-between group hover:text-foreground transition-colors"
            >
              <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                xolmili@gmail.com
              </p>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground/50 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
