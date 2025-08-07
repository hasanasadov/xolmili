"use client";

import { Sparkles, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import React from "react";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh] text-black dark:text-white  p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <motion.h1
          className="text-7xl font-extrabold mb-6 "
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          404
        </motion.h1>
        <motion.h2
          className="text-2xl md:text-3xl font-semibold mb-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Oops! Səhifə tapılmadı.
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl mb-8  max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Axtardığınız səhifə ya silinib ya da müvəqqəti olaraq əlçatan deyil.
        </motion.p>

        <motion.div
          // initial={{ opacity: 0, y: 20 }}
          // animate={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.8, delay: 1 }}
          className="flex gap-4 justify-center "
        >
          <Button
            onClick={() => (window.location.href = "/")}
            className="!bg-blue-700 !text-white"
          >
            <Sparkles className="mr-2 h-5 w-5" /> Əsas səhifə
          </Button>
          <Button
            variant={"custom"}
            onClick={() => window.location.reload()}
            className="!bg-green-700 !text-white"
          >
            <RefreshCcw className="mr-2 h-5 w-5 " /> Yenilə
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
