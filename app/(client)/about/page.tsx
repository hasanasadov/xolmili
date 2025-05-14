"use client";

import RGBButton from "@/components/shared/RGButton";
import { PATHS } from "@/constants";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-[90vh] bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 py-16">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto text-center"
        >
          <h1 className="md:text-5xl text-3xl text-start md:text-center font-extrabold mb-4 tracking-wide">
            About <span className="text-cyan-400">Us</span>
          </h1>
          <p className="text-gray-300 md:text-lg text-start md:text-center ">
            The foundation of the &ldquo;Kholmili&ldquo; company was laid in
            February 2010 by Alirza Aliyev. Currently, our sales points offer
            large-scale sales and orders of any type of machine tool parts, as
            well as size calculations for machine tools. Thus, in our stores, we
            offer sales and orders of any type of couplings, coupling rubbers,
            pulleys, pulley belts, chains, chain locks and half-locks, stars,
            gears, pulleys, cable channels, bearings, pistons and many other
            machine tool parts.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 mt-16 ">
          {/* About Card */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="backdrop-blur-lg bg-white/10 rounded-2xl md:p-8 p-4 shadow-xl border border-white/10"
          >
            <h2 className="md:text-3xl text-lg font-semibold mb-4 text-cyan-300">
              Why Choose Us?
            </h2>
            <p className="text-gray-300">
              The main advantages of the &ldquo;Kholmili&ldquo; company are its
              wide product range, experienced sales specialists, and most
              importantly, its partners. Thus, the choice of most factories in
              Azerbaijan is precisely the products of the &ldquo;Kholmili&ldquo;
              company.
            </p>
          </motion.div>

          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="backdrop-blur-lg bg-white/10 rounded-2xl md:p-8 p-4 shadow-xl border border-white/10"
          >
            <h2 className="md:text-3xl text-lg font-semibold mb-4 text-cyan-300">
              Make an Order
            </h2>
            <div className="flex flex-col gap-4 items-center">
              <div>
                <p className="text-gray-300">
                  Looking for high-quality machine tool parts? Place your order
                  today and let our expert team assist you with the right
                  components and size calculations tailored to your needs. Fast
                  service, reliable products, and professional support—all in
                  one place.
                </p>
              </div>
              <div
                className="w-fit"
                onClick={() => {
                  window.location.href = PATHS.ORDER;
                }}
              >
                <RGBButton>Make an Order</RGBButton>
              </div>
            </div>
          </motion.div>
        </div>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="backdrop-blur-lg bg-white/10 rounded-2xl p-4 md:p-8 shadow-xl border border-white/10 mt-10"
          >
            <h2 className="text-3xl font-semibold mb-4 text-cyan-300">
              Our Location
            </h2>
            <p className="text-gray-300 mb-4">Baku, Azerbaijan - 1000</p>
            <div className="rounded-xl overflow-hidden h-64 border border-white/10">
              <iframe
                title="Company Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.0709786946516!2d49.946691315409535!3d40.40392707936583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40306306a6ccbde1%3A0x47fa46d4558f3fee!2s8-CI%20KM%20BAZARI%20LITSEY!5e0!3m2!1sen!2s!4v1715326254000!5m2!1sen!2s"
                width="100%"
                height="100%"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
      </div>
    </div>
  );
}
