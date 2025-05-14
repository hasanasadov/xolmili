"use client";

import { PATHS } from "@/constants";
import { motion } from "framer-motion";
import { Mail, Instagram, Phone, Clock } from "lucide-react";
import Link from "next/link";

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
            <Link href={PATHS.HOME}>
              <h2 className="text-3xl font-extrabold mb-4 text-cyan-400 drop-shadow-[0_0_10px_#0ff]">
                Kholmili Co.
              </h2>
            </Link>
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
            <Link href={PATHS.CONTACT}>
              <h3 className="text-xl font-semibold mb-5 text-purple-400 drop-shadow-[0_0_10px_#a855f7]">
                Contact Us
              </h3>
            </Link>
            <div className="space-y-4 text-sm text-zinc-300">
              <Link
                href={"mailto:xolmili@gmail.com"}
                className="cursor-pointer hover:text-cyan-300 duration-300 flex items-center gap-3 w-fit"
              >
                <Mail className="text-cyan-400" size={18} /> xolmili@gmail.com
              </Link>
              <Link
                href={"tel:+994705048888"}
                className="cursor-pointer hover:text-cyan-300 duration-300 flex items-center gap-3 w-fit"
              >
                <Phone className="text-cyan-400" size={18} /> Tel: +994 70 504
                88 88
              </Link>
              <Link
                className="cursor-pointer hover:text-cyan-300 duration-300 flex items-center gap-3 w-fit"
                href={"https://wa.me/994705048888"}
              >
                <Phone className="text-cyan-400" size={18} /> Whatsapp: +994 70
                504 88 88
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={"https://instagram.com/xolmili_"}
                className="cursor-pointer hover:text-cyan-300 duration-300 flex items-center gap-3 w-fit"
              >
                <Instagram className="text-cyan-400" size={18} />
                @xolmili_
              </Link>
              <Link
                href={
                  "https://www.google.com/maps?ll=40.403927,49.94927&z=15&t=m&hl=en&gl=US&mapclient=embed&cid=6128762944405328348"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:text-cyan-300 duration-300 flex items-center gap-3 w-fit"
              >
                <Clock className="text-cyan-400" size={18} /> Mon–Fri, 9 AM – 6
                PM
              </Link>
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            onClick={() => (window.location.href = PATHS.CONTACT)}
            className="backdrop-blur-xl cursor-pointer bg-white/5 p-6 rounded-2xl border border-zinc-700 shadow-[0_0_40px_#0ff] hover:shadow-[0_0_60px_#0ff] transition duration-200"
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
