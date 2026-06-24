"use client";

import { useState, useEffect } from "react";
import { Menu, X, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
    { name: "Admission", href: "/#admission" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMobileMenuOpen(false);
    
    // If it's a hash link and we are on the homepage
    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          isScrolled || pathname !== "/"
            ? "bg-primary/95 shadow-md backdrop-blur-md py-2 border-b border-white/10"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2.5 group">
            <div className="white/70 rounded-full border border-accent/20 group-hover:bg-accent/20 transition-all duration-205">
              <img src="logo.png" alt="Shree Ram Classes Logo" className="h-12 w-12 object-contain" />
            </div>
            <div>
              <span className="font-montserrat font-black text-base tracking-tight text-white block leading-none">
                SHREE RAM CLASSES PATNA
              </span>
              <span className="font-inter font-bold text-[10px] text-accent tracking-widest uppercase block leading-none mt-0.5">
                
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href.startsWith("/#") && pathname === "/");
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`font-inter font-bold text-xs uppercase tracking-wider transition-colors duration-150 relative py-1.5 ${
                    isActive ? "text-accent" : "text-gray-200 hover:text-accent"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:block">
            <Link
              href="/#admission"
              onClick={(e) => handleNavClick(e, "/#admission")}
              className="inline-flex items-center justify-center px-4.5 py-2 rounded-xl bg-accent hover:bg-accent/90 text-primary font-inter font-extrabold text-xs shadow-md transition-all duration-150"
            >
              Admission Inquiry
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-accent focus:outline-none w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 active:scale-95 transition-transform"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
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
              transition={{ type: "tween", duration: 0.2, ease: "easeOut" }}
              className="fixed top-0 right-0 bottom-0 w-72 max-w-[80vw] bg-[#07253a]/98 border-l border-white/10 z-50 p-4 shadow-xl flex flex-col justify-between backdrop-blur-lg"
            >
              <div>
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <div className="flex items-center space-x-2">
                    <BookOpen className="h-4.5 w-4.5 text-accent" />
                    <span className="font-montserrat font-bold text-xs text-white uppercase tracking-wider">SHREE RAM CLASSES</span>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white hover:text-accent w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 bg-white/5"
                    aria-label="Close menu"
                  >
                    <X className="h-4.5 w-4.5" />
                  </button>
                </div>

                <div className="mt-4 flex flex-col space-y-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="font-inter font-bold text-sm text-gray-200 hover:text-accent transition-colors duration-150 py-2.5 px-3 rounded-lg bg-white/5 border border-white/5 block"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-4 border-t border-white/10">
                <Link
                  href="/#admission"
                  onClick={(e) => handleNavClick(e, "/#admission")}
                  className="w-full inline-flex items-center justify-center h-11 rounded-xl bg-accent hover:bg-accent/90 text-primary font-inter font-extrabold text-xs shadow-md transition-all"
                >
                  Admission Inquiry
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
