"use client";

import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import { PhoneInput } from "react-international-phone";
// import emailjs from "@emailjs/browser";

import "react-international-phone/style.css";

export default function OrderForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    // phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handlePhoneChange = (phone: string) => {
  //   setFormData({ ...formData, phone });
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // console.log("Sending email with data:", formData);
      // const result = await emailjs.send(
      //   "service_a0yz9xm",
      //   "template_anaadwj",
      //   {
      //     name: formData.name,
      //     email: formData.email,
      //     message: formData.message,
      //     // phone: formData.phone,
      //   },
      //   "I0mZHHSvqjLQdwU2D"
      // );

      // console.log(result.text);
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Sending failed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="md:min-h-[90vh]  bg-gradient-to-br dark:from-black from-white dark:via-gray-900 via-gray-200 dark:to-black to-white dark:text-white text-black px-6 py-16 flex items-center justify-evenly md:flex-row flex-col gap-10"
    >
      <div className="h-full flex items-start text-3xl">
        Fikirlərinizi bizimlə rahatlıqla bölüşə bilərsiniz
      </div>
      <div className="md:h-8/12 glass lg:w-1/3 w-full h-full backdrop-blur-xl cursor-pointer dark:bg-white/5 md:p-6 p-4 rounded-md border border-zinc-700 transition duration-100 ease-in-out">
        <motion.h1
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold mb-8 text-center tracking-wide dark:text-neutral-100 text-primary"
        >
          Sifarişin nə olduğunu yazın
        </motion.h1>

        <form onSubmit={handleSubmit} className="space-y-6 ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Input
              name="name"
              placeholder="Tam Ad"
              value={formData.name}
              onChange={handleChange}
              required
              className="dark:bg-neutral-900 dark:text-white border border-neutral-700 focus:ring-1 focus:ring-white rounded-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Input
              name="email"
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="dark:bg-neutral-900 dark:text-white border border-neutral-700 focus:ring-1 focus:ring-white rounded-lg"
            />
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <PhoneInput
              defaultCountry="az"
              value={formData.phone}
              onChange={handlePhoneChange}
              className="!bg-transparent !dark:text-white"
              inputClassName="!bg-transparent  !text-black dark:!text-white border border-neutral-900 w-full rounded-lg px-4 py-2 focus:ring-1 focus:ring-white"
              placeholder="Phone Number"
              required
            />
          </motion.div> */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Textarea
              name="message"
              placeholder="Mən çarxlar sifariş etmək istəyirəm ... (Nömrənizi əlavə edin) "
              value={formData.message}
              onChange={handleChange}
              required
              className="dark:bg-neutral-900 min-h-32 dark:text-white border border-neutral-700 focus:ring-1 focus:ring-white rounded-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Button
              type="submit"
              className="w-full cursor-pointer bg-white text-black hover:bg-neutral-200 transition-colors duration-200 rounded-xl text-base py-2 font-medium"
              disabled={loading}
            >
              {loading ? "Göndərilir..." : "Mesajı göndər"}
            </Button>
          </motion.div>

          {success && (
            <motion.p
              className="text-green-400 text-center text-sm mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Your message has been sent successfully! We&#39;ll get back to you
              soon.
            </motion.p>
          )}
        </form>
      </div>
    </motion.div>
  );
}
