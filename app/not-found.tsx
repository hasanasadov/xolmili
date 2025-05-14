"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Sparkles, RefreshCcw } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh] bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <motion.h1
          className="text-7xl font-extrabold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-blue-400 to-indigo-400"
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
          Oops! Page not found.
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl mb-8 text-gray-300 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          The page you're looking for might have been removed or is temporarily
          unavailable.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex gap-4 justify-center"
        >
          <Button
            variant="default"
            className="rounded-2xl px-6 py-3 text-lg font-medium shadow-lg hover:shadow-blue-500/30 bg-blue-600 hover:bg-blue-700 transition"
            onClick={() => (window.location.href = "/")}
          >
            <Sparkles className="mr-2 h-5 w-5" /> Go Home
          </Button>
          <Button
            variant="outline"
            className="rounded-2xl px-6 py-3 text-lg font-medium border-blue-500 text-blue-300 hover:text-white hover:bg-blue-700 transition"
            onClick={() => window.location.reload()}
          >
            <RefreshCcw className="mr-2 h-5 w-5" /> Refresh
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
