"use client";

import { useState, useEffect } from "react";
import { Menu, X, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Courses", href: "#courses" },
    { name: "Alok Sir", href: "#aloksir" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-primary/95 shadow-lg backdrop-blur-md py-3 border-b border-white/10"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="flex items-center space-x-3 group">
            <div className="bg-accent/10 p-2 rounded-full border border-accent/20 group-hover:bg-accent/20 transition-all duration-300">
              <BookOpen className="h-6 w-6 text-accent" />
            </div>
            <div>
              <span className="font-montserrat font-black text-lg tracking-tight text-white block leading-none">
                SHREE RAM
              </span>
              <span className="font-inter font-bold text-xs text-accent tracking-widest uppercase block leading-none mt-1">
                CLASSES PATNA
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-inter font-medium text-sm text-gray-200 hover:text-accent transition-colors duration-200 relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-accent hover:bg-accent/90 text-primary font-inter font-bold text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              Book Demo Class
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-accent focus:outline-none p-1.5 rounded-lg border border-white/10"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-primary/95 border-l border-white/10 z-50 p-6 shadow-2xl flex flex-col justify-between backdrop-blur-md"
            >
              <div>
                <div className="flex justify-between items-center pb-6 border-b border-white/10">
                  <div className="flex items-center space-x-2">
                    <BookOpen className="h-5 w-5 text-accent" />
                    <span className="font-montserrat font-bold text-sm text-white">SHREE RAM CLASSES</span>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white hover:text-accent"
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="mt-8 flex flex-col space-y-5">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="font-inter font-semibold text-lg text-gray-200 hover:text-accent transition-colors duration-200 py-1"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-auto">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="w-full inline-flex items-center justify-center px-6 py-3 rounded-xl bg-accent hover:bg-accent/90 text-primary font-inter font-bold text-base shadow-md transition-all duration-200"
                >
                  Book Demo Class
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
