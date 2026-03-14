"use client";
// import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Blog from "@/components/Blog";
import Experience from "@/components/Experience";
import Education from "../components/Education";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Blog />
      <Contact />
    </main>
  );
}
