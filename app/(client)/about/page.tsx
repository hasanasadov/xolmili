"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h1 className="text-5xl font-extrabold mb-4 tracking-wide">
          About <span className="text-cyan-400">Us</span>
        </h1>
        <p className="text-gray-300 text-lg">
          We are a futuristic company reimagining technology, connection, and
          location-based solutions.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 mt-16 max-w-6xl mx-auto">
        {/* About Card */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="backdrop-blur-lg bg-white/10 rounded-2xl p-8 shadow-xl border border-white/10"
        >
          <h2 className="text-3xl font-semibold mb-4 text-cyan-300">
            Our Vision
          </h2>
          <p className="text-gray-300">
            We aim to create intelligent ecosystems where technology adapts to
            you. From digital experiences to smart logistics, were ahead of
            time.
          </p>
        </motion.div>

        {/* Location Card */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="backdrop-blur-lg bg-white/10 rounded-2xl p-8 shadow-xl border border-white/10"
        >
          <h2 className="text-3xl font-semibold mb-4 text-cyan-300">
            Our Location
          </h2>
          <p className="text-gray-300 mb-4">
            Based in the heart of innovation – our HQ blends digital and
            physical presence in a smart environment.
          </p>
          <div className="rounded-xl overflow-hidden h-64 border border-white/10">
            <iframe
              title="Company Location"
              src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
