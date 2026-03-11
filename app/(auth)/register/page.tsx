"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useFormik } from "formik";
import { User2, Mail, Lock, Loader2, ArrowRight, Eye, EyeOff, Info } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";

import { handleRegister } from "@/services/auth";
import { AuthValueTypesRegister } from "@/types";
import { Button } from "@/components/ui/button";
import { HoverScale } from "@/components/shared/Animations";

export default function RegisterPage() {
  const router = useRouter();
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: "",
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      rePassword: "",
      is_organizer: false,
    },
    validateOnBlur: true,
    validateOnChange: false,
    validate: (values: AuthValueTypesRegister) => {
      const errors = {} as AuthValueTypesRegister;
      if (!values.username) errors.username = "İstifadəçi adı tələb olunur";
      if (!values.first_name) errors.first_name = "Ad tələb olunur";
      if (!values.last_name) errors.last_name = "Soyad tələb olunur";
      if (!values.email) errors.email = "Email tələb olunur";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        errors.email = "Düzgün email daxil edin";
      }
      if (!values.password) errors.password = "Şifrə tələb olunur";
      else if (values.password.length < 6) {
        errors.password = "Şifrə minimum 6 simvol olmalıdır";
      }
      if (values.password !== values.rePassword) {
        errors.rePassword = "Şifrələr uyğun deyil";
      }
      return errors;
    },
    onSubmit: async (values) => {
      setLoading(true);
      setErrorMessages([]);

      try {
        const response = await handleRegister(values);
        setLoading(false);

        if (!response?.success) {
          setErrorMessages([response?.detail || "Qeydiyyat uğursuz oldu"]);
          return;
        }

        toast.success("Uğurla qeydiyyatdan keçdiniz");
        formik.resetForm();
        router.push("/login");
      } catch {
        setLoading(false);
        setErrorMessages(["Xəta baş verdi. Yenidən cəhd edin."]);
        toast.error("Qeydiyyat uğursuz oldu");
      }
    },
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full p-8 max-h-[85vh] overflow-y-auto"
    >
      {/* Header */}
      <div className="mb-6">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl font-bold mb-2"
        >
          Qeydiyyat
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground"
        >
          Yeni hesab yaradın
        </motion.p>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3 }}
          className="h-1 w-12 bg-gradient-to-r from-primary to-secondary rounded-full mt-4 origin-left"
        />
      </div>

      {/* Form */}
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        {/* Username Field */}
        <FormField
          icon={User2}
          name="username"
          type="text"
          placeholder="Istifadeci adi"
          value={formik.values.username}
          error={formik.touched.username && formik.errors.username ? formik.errors.username : undefined}
          onChange={formik.handleChange}
          onBlur={() => formik.setFieldTouched("username", true)}
          delay={0.1}
        />

        {/* Name Fields Row */}
        <div className="grid grid-cols-2 gap-3">
          <FormField
            icon={User2}
            name="first_name"
            type="text"
            placeholder="Ad"
            value={formik.values.first_name}
            error={formik.touched.first_name && formik.errors.first_name ? formik.errors.first_name : undefined}
            onChange={formik.handleChange}
            onBlur={() => formik.setFieldTouched("first_name", true)}
            delay={0.15}
          />
          <FormField
            icon={User2}
            name="last_name"
            type="text"
            placeholder="Soyad"
            value={formik.values.last_name}
            error={formik.touched.last_name && formik.errors.last_name ? formik.errors.last_name : undefined}
            onChange={formik.handleChange}
            onBlur={() => formik.setFieldTouched("last_name", true)}
            delay={0.2}
          />
        </div>

        {/* Email Field */}
        <FormField
          icon={Mail}
          name="email"
          type="email"
          placeholder="Email unvani"
          value={formik.values.email}
          error={formik.touched.email && formik.errors.email ? formik.errors.email : undefined}
          onChange={formik.handleChange}
          onBlur={() => formik.setFieldTouched("email", true)}
          delay={0.25}
        />

        {/* Password Field */}
        <PasswordField
          name="password"
          placeholder="Sifre"
          value={formik.values.password}
          error={formik.touched.password && formik.errors.password ? formik.errors.password : undefined}
          onChange={formik.handleChange}
          onBlur={() => formik.setFieldTouched("password", true)}
          showPassword={showPassword}
          togglePassword={() => setShowPassword(!showPassword)}
          delay={0.3}
        />

        {/* Confirm Password Field */}
        <PasswordField
          name="rePassword"
          placeholder="Sifreni tesdiqle"
          value={formik.values.rePassword}
          error={formik.touched.rePassword && formik.errors.rePassword ? formik.errors.rePassword : undefined}
          onChange={formik.handleChange}
          onBlur={() => formik.setFieldTouched("rePassword", true)}
          showPassword={showConfirmPassword}
          togglePassword={() => setShowConfirmPassword(!showConfirmPassword)}
          delay={0.35}
        />

        {/* Organizer Checkbox */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center gap-3 p-4 rounded-xl bg-background/50 border border-border"
        >
          <input
            type="checkbox"
            name="is_organizer"
            id="is_organizer"
            checked={formik.values.is_organizer}
            onChange={formik.handleChange}
            className="w-5 h-5 rounded border-border accent-primary cursor-pointer"
          />
          <label htmlFor="is_organizer" className="flex-1 cursor-pointer">
            <span className="font-medium">Mən təşkilatçıyam</span>
          </label>
          <div className="relative group">
            <Info className="w-4 h-4 text-muted-foreground cursor-help" />
            <div className="absolute bottom-full right-0 mb-2 p-3 rounded-lg bg-popover border border-border shadow-lg w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
              <p className="text-xs text-muted-foreground">
                Təşkilatçılar saytda tədbirlər yarada bilər.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Error Messages */}
        <AnimatePresence>
          {errorMessages.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="p-3 rounded-xl bg-destructive/10 border border-destructive/20"
            >
              {errorMessages.map((error, index) => (
                <p key={index} className="text-destructive text-sm">
                  {error}
                </p>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Submit Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
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
                  Qeydiyyat...
                </>
              ) : (
                <>
                  Qeydiyyatdan keç
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </Button>
          </HoverScale>
        </motion.div>
      </form>

      {/* Login Link */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center mt-6"
      >
        <p className="text-muted-foreground">
          Hesabınız var?{" "}
          <Link href="/login" className="text-primary hover:underline font-medium">
            Daxil olun
          </Link>
        </p>
      </motion.div>
    </motion.div>
  );
}

interface FormFieldProps {
  icon: typeof User2;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  delay: number;
}

function FormField({ icon: Icon, name, type, placeholder, value, error, onChange, onBlur, delay }: FormFieldProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      <div className="relative group">
        <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={`
            w-full h-12 pl-12 pr-4 rounded-xl bg-background/50 border
            transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20
            ${error
              ? "border-destructive focus:border-destructive"
              : "border-border focus:border-primary"
            }
          `}
        />
      </div>
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="text-destructive text-sm mt-1"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

interface PasswordFieldProps {
  name: string;
  placeholder: string;
  value: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  showPassword: boolean;
  togglePassword: () => void;
  delay: number;
}

function PasswordField({
  name,
  placeholder,
  value,
  error,
  onChange,
  onBlur,
  showPassword,
  togglePassword,
  delay,
}: PasswordFieldProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      <div className="relative group">
        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
        <input
          name={name}
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={`
            w-full h-12 pl-12 pr-12 rounded-xl bg-background/50 border
            transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20
            ${error
              ? "border-destructive focus:border-destructive"
              : "border-border focus:border-primary"
            }
          `}
        />
        <button
          type="button"
          onClick={togglePassword}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
        >
          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
        </button>
      </div>
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="text-destructive text-sm mt-1"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
