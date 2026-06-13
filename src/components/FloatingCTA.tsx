"use client";

import { MessageSquare, Phone, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingCTA() {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Desktop Floating Actions (Bottom-Right) */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:flex flex-col space-y-3">
        {/* WhatsApp Button */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://wa.me/917779977725?text=Hello%20Alok%20Sir%2C%20I%20am%20interested%20in%20joining%20Shree%20Ram%20Classes.%20Please%20provide%20admission%20details."
          target="_blank"
          rel="noopener noreferrer"
          className="h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow border border-white/10 group relative"
          aria-label="WhatsApp Admission Inquiry"
        >
          <MessageSquare className="h-6 w-6 fill-white text-[#25D366]" />
          <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-primary/95 text-white font-inter font-bold text-xs px-3 py-1.5 rounded-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
            WhatsApp Admissions
          </span>
        </motion.a>

        {/* Call Button */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="tel:+917779977725"
          className="h-14 w-14 rounded-full bg-accent hover:bg-accent/90 text-primary flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow border border-white/10 group relative"
          aria-label="Call Admissions Helpline"
        >
          <Phone className="h-6 w-6" />
          <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-primary/95 text-white font-inter font-bold text-xs px-3 py-1.5 rounded-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
            Call Admissions
          </span>
        </motion.a>
      </div>

      {/* Mobile Sticky Footer Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-primary/95 backdrop-blur-md border-t border-white/10 shadow-2xl py-2.5 px-4 flex items-center justify-between gap-3">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/917779977725?text=Hello%20Alok%20Sir%2C%20I%20am%20interested%20in%20joining%20Shree%20Ram%20Classes.%20Please%20provide%20admission%20details."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center py-3.5 px-2 rounded-xl bg-[#25D366] text-white font-inter font-bold text-xs uppercase tracking-wider shadow-sm active:scale-98 transition-all"
        >
          <MessageSquare className="h-4 w-4 mr-1.5 fill-white text-[#25D366]" />
          WhatsApp
        </a>

        {/* Call Button */}
        <a
          href="tel:+917779977725"
          className="flex-1 inline-flex items-center justify-center py-3.5 px-2 rounded-xl bg-white/10 text-white font-inter font-bold text-xs uppercase tracking-wider border border-white/20 active:scale-98 transition-all"
        >
          <Phone className="h-4 w-4 mr-1.5 text-accent" />
          Call Support
        </a>

        {/* Book Demo Button */}
        <a
          href="#contact"
          onClick={handleScrollToContact}
          className="flex-1 inline-flex items-center justify-center py-3.5 px-2 rounded-xl bg-accent text-primary font-inter font-extrabold text-xs uppercase tracking-wider shadow-sm active:scale-98 transition-all"
        >
          <Calendar className="h-4 w-4 mr-1.5" />
          Book Trial
        </a>
      </div>
    </>
  );
}
