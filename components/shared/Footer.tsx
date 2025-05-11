"use client";

import { motion } from "framer-motion";
import { Mail, Instagram, Phone, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white px-6 py-16 overflow-hidden border-t border-zinc-800 shadow-[0_-10px_200px_#0ff5]">
      <div className="container mx-auto relative z-10">
        {/* Neon glow background effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 w-[600px] h-[600px] -translate-x-1/2 bg-purple-500 opacity-20 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-cyan-400 opacity-20 rounded-full blur-[120px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10  mx-auto grid grid-cols-1 md:grid-cols-3 gap-14"
        >
          {/* Company Info */}
          <div>
            <h2 className="text-3xl font-extrabold mb-4 text-cyan-400 drop-shadow-[0_0_10px_#0ff]">
              Kholmili Co.
            </h2>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Established in{" "}
              <span className="text-white font-medium">February 2010</span> by{" "}
              <span className="text-white font-medium">Alirza Aliyev</span>. We
              specialize in machine tool parts: couplings, pulleys, chains,
              gears, bearings, and more. We offer part sizing and custom orders
              at all sales points.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-5 text-purple-400 drop-shadow-[0_0_10px_#a855f7]">
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm text-zinc-300">
              <li className="flex items-center gap-3">
                <Mail className="text-cyan-400" size={18} /> xolmili@gmail.com
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-cyan-400" size={18} /> Tel: +994 70 504
                88 88
              </li>
              <li className="flex items-center gap-3">
                <Instagram className="text-cyan-400" size={18} />
                <a
                  href="https://instagram.com/xolmili_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-white"
                >
                  @xolmili_
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="text-cyan-400" size={18} /> Mon–Fri, 9 AM – 6
                PM
              </li>
            </ul>
          </div>

          {/* Call to Action */}
          <motion.div
            onClick={() => (window.location.href = "/contact")}
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 0.1,
            }}
            className="backdrop-blur-xl cursor-pointer bg-white/5 p-6 rounded-2xl border border-zinc-700 shadow-[0_0_40px_#0ff] hover:shadow-[0_0_60px_#0ff] transition duration-500"
          >
            <h3 className="text-lg font-semibold text-white mb-2">
              Let’s Talk
            </h3>
            <p className="text-sm text-zinc-300">
              For custom parts, sizing advice, or urgent orders — contact us
              now. We&apos;re here to help.
            </p>
          </motion.div>
        </motion.div>

        {/* Footer Bottom */}
        <div className="mt-12 text-center text-xs text-zinc-500 relative z-10">
          © {new Date().getFullYear()} Kholmili. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
