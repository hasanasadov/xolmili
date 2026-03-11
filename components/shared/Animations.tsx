"use client";

import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useSpring,
  type Variants,
} from "framer-motion";
import { useRef, type ReactNode, useEffect, useState } from "react";

// ===== VARIANTS =====

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export const blurUp: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export const rotateIn: Variants = {
  hidden: { opacity: 0, rotate: -5, scale: 0.95 },
  visible: { opacity: 1, rotate: 0, scale: 1 },
};

// Backward compat aliases
export const fadeInUp = fadeUp;
export const fadeInDown = fadeDown;

// ===== TRANSITION =====
const EASE = [0.22, 1, 0.36, 1] as const;
const BASE_TRANSITION = { duration: 0.8, ease: EASE };

// ===== SCROLL REVEAL =====
interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  duration?: number;
  once?: boolean;
}

export function ScrollReveal({
  children,
  className = "",
  variants = fadeUp,
  delay = 0,
  duration = 0.8,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ ...BASE_TRANSITION, duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ===== BLUR REVEAL =====
export function BlurReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={blurUp}
      transition={{ duration: 1, ease: EASE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ===== REVEAL MASK =====
export function RevealMask({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "110%" }}
        animate={isInView ? { y: 0 } : {}}
        transition={{ duration: 0.9, ease: EASE }}
      >
        {children}
      </motion.div>
    </div>
  );
}

// ===== PARALLAX SCROLL =====
interface ParallaxScrollProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  direction?: "up" | "down";
}

export function ParallaxScroll({
  children,
  className = "",
  speed = 0.3,
  direction = "up",
}: ParallaxScrollProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const multiplier = direction === "up" ? -1 : 1;
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`${80 * speed * multiplier}px`, `${-80 * speed * multiplier}px`]
  );
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <motion.div ref={ref} style={{ y: smoothY }} className={className}>
      {children}
    </motion.div>
  );
}

// ===== SCALE ON SCROLL =====
export function ScaleOnScroll({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <motion.div ref={ref} style={{ scale, opacity }} className={className}>
      {children}
    </motion.div>
  );
}

// ===== STAGGER CONTAINER =====
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
}: StaggerContainerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: staggerDelay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ===== STAGGER ITEM =====
export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ===== ANIMATED TEXT (word-by-word) =====
interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  highlight?: string;
}

export function AnimatedText({ text, className = "", delay = 0, highlight }: AnimatedTextProps) {
  const words = text.split(" ");
  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: { staggerChildren: 0.08, delayChildren: delay },
        },
      }}
      className={className}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 25, rotateX: -45 },
            visible: { opacity: 1, y: 0, rotateX: 0 },
          }}
          transition={{ duration: 0.6, ease: EASE }}
          className={`inline-block mr-[0.3em] ${highlight && word.includes(highlight) ? "text-highlight" : ""}`}
          style={{ transformOrigin: "center bottom" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

// ===== ANIMATED LETTERS =====
export function AnimatedLetters({ text, className = "", delay = 0 }: { text: string; className?: string; delay?: number }) {
  const letters = text.split("");
  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: { staggerChildren: 0.03, delayChildren: delay },
        },
      }}
      className={className}
    >
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.4, ease: EASE }}
          className="inline-block"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  );
}

// ===== HOVER SCALE (instant, no delay) =====
interface HoverScaleProps {
  children: ReactNode;
  className?: string;
  scale?: number;
}

export function HoverScale({
  children,
  className = "",
  scale = 1.02,
}: HoverScaleProps) {
  return (
    <motion.div
      whileHover={{ scale }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "tween", duration: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ===== HOVER LIFT =====
export function HoverLift({
  children,
  className = "",
  lift = -8,
}: {
  children: ReactNode;
  className?: string;
  lift?: number;
}) {
  return (
    <motion.div
      whileHover={{ y: lift }}
      transition={{ type: "tween", duration: 0.25 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ===== FLOATING (subtle Y oscillation) =====
export function Floating({
  children,
  className = "",
  duration = 5,
  distance = 12,
}: {
  children: ReactNode;
  className?: string;
  duration?: number;
  distance?: number;
}) {
  return (
    <motion.div
      animate={{ y: [-distance / 2, distance / 2, -distance / 2] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ===== FLOATING ROTATE =====
export function FloatingRotate({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      animate={{ 
        y: [-8, 8, -8], 
        rotate: [-2, 2, -2],
      }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ===== COUNTER =====
interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
  className?: string;
  suffix?: string;
  prefix?: string;
}

export function Counter({
  from = 0,
  to,
  duration = 2.5,
  className = "",
  suffix = "",
  prefix = "",
}: CounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!isInView) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(from + (to - from) * eased));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, from, to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  );
}

// ===== SCROLL PROGRESS BAR =====
export function ScrollProgress({ className = "" }: { className?: string }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 h-0.5 bg-highlight origin-left z-[200] ${className}`}
      style={{ scaleX }}
    />
  );
}

// ===== MAGNETIC (lightweight) =====
export function Magnetic({
  children,
  className = "",
  strength = 0.3,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({
      x: (e.clientX - rect.left - rect.width / 2) * strength,
      y: (e.clientY - rect.top - rect.height / 2) * strength,
    });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={pos}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ===== TILT CARD =====
export function TiltCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "tween", duration: 0.25 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ===== PAGE TRANSITION =====
export function PageTransition({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ===== TYPEWRITER =====
export function Typewriter({
  text,
  className = "",
  speed = 40,
}: {
  text: string;
  className?: string;
  speed?: number;
}) {
  const [display, setDisplay] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let i = 0;
    const id = setInterval(() => {
      if (i < text.length) {
        setDisplay(text.slice(0, i + 1));
        i++;
      } else clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [isInView, text, speed]);

  return (
    <span ref={ref} className={className}>
      {display}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity }}
        className="inline-block w-0.5 h-[1em] bg-highlight ml-0.5 align-middle"
      />
    </span>
  );
}

// ===== SHIMMER BOX =====
export function ShimmerBox({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {children}
      <motion.div
        className="absolute inset-0 -translate-x-full"
        animate={{ translateX: ["100%", "-100%"] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
        style={{
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
        }}
      />
    </div>
  );
}

// ===== REVEAL LINE =====
export function RevealLine({ className = "", delay = 0 }: { className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <motion.div
      ref={ref}
      initial={{ scaleX: 0 }}
      animate={isInView ? { scaleX: 1 } : {}}
      transition={{ duration: 0.8, ease: EASE, delay }}
      className={`h-0.5 bg-highlight origin-left ${className}`}
    />
  );
}

// ===== GRADIENT BLOB =====
export function GradientBlob({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl opacity-30 ${className}`}
      animate={{
        scale: [1, 1.2, 1],
        x: [0, 30, 0],
        y: [0, -20, 0],
      }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      style={{
        background: "radial-gradient(circle, var(--highlight) 0%, transparent 70%)",
      }}
    />
  );
}

// ===== IMAGE REVEAL =====
export function ImageReveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={isInView ? { clipPath: "inset(0 0% 0 0)" } : {}}
        transition={{ duration: 1, ease: EASE }}
      >
        {children}
      </motion.div>
      <motion.div
        className="absolute inset-0 bg-highlight"
        initial={{ x: "0%" }}
        animate={isInView ? { x: "100%" } : {}}
        transition={{ duration: 0.8, ease: EASE }}
      />
    </div>
  );
}

// ===== SPLIT TEXT REVEAL =====
export function SplitTextReveal({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const lines = text.split("\n");
  
  return (
    <div ref={ref} className={className}>
      {lines.map((line, i) => (
        <div key={i} className="overflow-hidden">
          <motion.div
            initial={{ y: "100%" }}
            animate={isInView ? { y: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE, delay: i * 0.1 }}
          >
            {line}
          </motion.div>
        </div>
      ))}
    </div>
  );
}
