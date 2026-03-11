"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useFormik } from "formik";
import { User2, Lock, Loader2, ArrowRight, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";

import { handleLogin } from "@/services/auth";
import { AuthValueTypesLogin } from "@/types";
import { Button } from "@/components/ui/button";
import { HoverScale } from "@/components/shared/Animations";

export default function LoginPage() {
  const router = useRouter();
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate: (values: AuthValueTypesLogin) => {
      const errors = {} as AuthValueTypesLogin;
      if (!values.username) errors.username = "İstifadəçi adı tələb olunur";
      if (!values.password) errors.password = "Şifrə tələb olunur";
      return errors;
    },
    onSubmit: async (values: AuthValueTypesLogin) => {
      setLoading(true);
      setErrorMessages([]);
      try {
        const formData = new FormData();
        formData.append("username", values.username);
        formData.append("password", values.password);

        const res = await handleLogin(formData);
        setLoading(false);

        if (!res.success) {
          setErrorMessages([res.message]);
          toast.error("Giriş uğursuz oldu");
          return;
        }

        localStorage.setItem("access_token", res.accessToken);
        formik.resetForm();
        toast.success("Uğurla daxil oldunuz");
        setTimeout(() => router.push("/"), 500);
      } catch {
        setLoading(false);
        setErrorMessages(["Xəta baş verdi. Yenidən cəhd edin."]);
      }
    },
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full p-8"
    >
      {/* Header */}
      <div className="mb-8">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl font-bold mb-2"
        >
          Xoş Gəlmisiniz
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground"
        >
          Hesabınıza daxil olun
        </motion.p>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3 }}
          className="h-1 w-12 bg-gradient-to-r from-primary to-secondary rounded-full mt-4 origin-left"
        />
      </div>

      {/* Form */}
      <form onSubmit={formik.handleSubmit} className="space-y-5">
        {/* Username Field */}
        <FormField
          icon={User2}
          name="username"
          type="text"
          placeholder="İstifadəçi adı"
          value={formik.values.username}
          error={formik.touched.username && formik.errors.username ? formik.errors.username : undefined}
          onChange={formik.handleChange}
          onBlur={() => formik.setFieldTouched("username", true)}
          delay={0.1}
        />

        {/* Password Field */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="relative group">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Şifrə"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={() => formik.setFieldTouched("password", true)}
              className={`
                w-full h-12 pl-12 pr-12 rounded-xl bg-background/50 border
                transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20
                ${formik.touched.password && formik.errors.password
                  ? "border-destructive focus:border-destructive"
                  : "border-border focus:border-primary"
                }
              `}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
          <AnimatePresence>
            {formik.touched.password && formik.errors.password && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="text-destructive text-sm mt-2"
              >
                {formik.errors.password}
              </motion.p>
            )}
          </AnimatePresence>
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

        {/* Forgot Password Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-right"
        >
          <Link
            href="/forgotPassword"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Şifrəni unutdunuz?
          </Link>
        </motion.div>

        {/* Submit Button */}
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
                  Daxil olunur...
                </>
              ) : (
                <>
                  Daxil ol
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </Button>
          </HoverScale>
        </motion.div>
      </form>

      {/* Register Link */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center mt-8"
      >
        <p className="text-muted-foreground">
          Hesabınız yoxdur?{" "}
          <Link href="/register" className="text-primary hover:underline font-medium">
            Qeydiyyatdan keçin
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
            className="text-destructive text-sm mt-2"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
