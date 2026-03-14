"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-8 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <div className="space-y-4 text-gray-300">
          <p>
            I&apos;m a Full Stack Engineer with 4 years of experience in building enterprise-scale applications. 
            With a strong foundation in Software Engineering, I&apos;ve developed a deep understanding of software 
            architecture and system design principles.
          </p>
          <p>
            My technical repertoire spans modern web technologies and cloud solutions, with a focus on 
            building robust, scalable applications. I specialize in JavaScript ecosystems, cloud architecture, 
            and have a particular passion for implementing AI-driven solutions to enhance user experiences.
          </p>
        </div>
      </motion.div>
    </section>
  );
} 