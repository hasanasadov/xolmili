"use client";

import { Mail, Instagram, Phone, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { PATHS } from "@/constants";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative dark:bg-black text-black bg-white px-6 pt-12 pb-8 overflow-hidden border-t border-zinc-800 dark:shadow-[0_20px_40px_#fff]  shadow-[0_20px_40px_#000]">
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
              <h2 className="text-3xl font-extrabold mb-4 dark:text-white text-cyan-600 drop-shadow-[0_0_0.5px_#0ff]">
                Xolmili Co.
              </h2>
            </Link>
            <p className="text-sm dark:text-zinc-300 text-black leading-relaxed">
              Əsası qoyulub{" "}
              <span className="dark:text-white font-medium">Fevral 2010</span>{" "}
              <span className="dark:text-white font-medium">Alirza Aliyev</span>{" "}
              tərəfindən . Ölkədə yegənə və rəqibi olmayan avtomatlaşdırılma
              üçün istənilən növ ehtiyat hissəsini əla növ hazırlanması bizim
              əsas və ən önəmli məqsədimiz və işimizdir.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <Link href={PATHS.CONTACT}>
              <h3 className="text-xl font-semibold mb-5 dark:text-cyan-100 text-cyan-600 drop-shadow-[0_0_0.5px_#0ff]">
                Bizimlə Əlaqə
              </h3>
            </Link>
            <div className="space-y-4 text-sm dark:text-zinc-300">
              <Link
                href={"mailto:xolmili@gmail.com"}
                className="cursor-pointer dark:hover:text-cyan-400 hover:text-cyan-600 duration-300 flex items-center gap-3 w-fit"
              >
                <Mail className="text-secondary" size={18} />{" "}
                xolmili@gmail.com
              </Link>
              <Link
                href={"tel:+994705048888"}
                className="cursor-pointer dark:hover:text-cyan-400 hover:text-cyan-600  duration-300 flex items-center gap-3 w-fit"
              >
                <Phone className="text-secondary" size={18} />{" "}
                Tel: +994 70 504 88 88
              </Link>
              <Link
                className="cursor-pointer dark:hover:text-cyan-400 hover:text-cyan-600 duration-300 flex items-center gap-3 w-fit"
                href={"https://wa.me/994705048888"}
              >
                <Phone className="text-secondary" size={18} />{" "}
                Whatsapp: +994 70 504 88 88
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={"https://instagram.com/xolmili_"}
                className="cursor-pointer dark:hover:text-cyan-400 hover:text-cyan-600 duration-300 flex items-center gap-3 w-fit"
              >
                <Instagram
                  className="text-secondary"
                  size={18}
                />
                @xolmili_
              </Link>
              <Link
                href={
                  "https://www.google.com/maps?ll=40.403927,49.94927&z=15&t=m&hl=en&gl=US&mapclient=embed&cid=6128762944405328348"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer dark:hover:text-cyan-400 hover:text-cyan-600 duration-300 flex items-center gap-3 w-fit"
              >
                <Clock className="text-secondary" size={18} />{" "}
                B.e - Cümə, 9:00 - 18:00
              </Link>
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            onClick={() => (window.location.href = PATHS.CONTACT)}
            className="backdrop-blur-xl glass  cursor-pointer bg-white/5 p-6 rounded-2xl border border-zinc-700 dark:shadow-[0_0_5px_#fff] !shadow-[0_0_5px_#999] dark:hover:!shadow-[0_0_10px_#fff] hover:!shadow-[0_0_10px_#999] transition duration-200"
          >
            <h3 className="text-lg font-semibold dark:text-white mb-2">
              Əlaqədə olaq
            </h3>
            <p className="text-sm dark:text-zinc-300">
              Xüsusi sifarişlər və ya əlavə məlumat üçün əlaqədə olaq.
              Suallarınızı cavablardırmağa hər zaman hazırıq. Offline və ya
              online.
            </p>
          </motion.div>
        </motion.div>

        {/* Footer Bottom */}
        <div className="mt-12 text-center text-xs text-zinc-500 relative z-10">
          © {new Date().getFullYear()} Kholmili. Bütün hüquqlar qorunur.
        </div>
      </div>
    </footer>
  );
}
