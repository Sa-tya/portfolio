"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-16 pt-20 md:pt-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Satya Prakash
            </span>
          </h1>
          <h2 className="text-lg sm:text-2xl text-gray-300 mb-6">
            Full Stack Engineer, AI Enthusiast and Aspiring AI Engineer
          </h2>
          <p className="text-gray-400 mb-8">
            Crafting scalable solutions and transforming complex challenges into elegant, user-centric applications.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-3 rounded-full font-semibold cursor-pointer"
          >
            Get in Touch
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-[400px] w-full mt-8 lg:mt-0"
        >
          <Image
            src="/satya.jpg"
            layout="fill"
            objectFit="cover"
            alt="Hero Image"
            className="rounded-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl" />
        </motion.div>
      </div>
    </section>
  );
} 