"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const navItems = ["About", "Skills", "Experience", "Education", "Projects", "Blog", "Contact"];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold"
          >
            SP
          </motion.div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ y: -2 }}
                className="text-gray-300 hover:text-white"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pt-4 pb-2"
          >
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-gray-300 hover:text-white"
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
} 