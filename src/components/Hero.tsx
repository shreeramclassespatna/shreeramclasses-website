"use client";

import Image from "next/image";
import { Phone, Users, ShieldCheck, GraduationCap, Calendar,Star } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring" as const, stiffness: 100, damping: 15 } },
  };

  const imageVariants = {
    hidden: { scale: 0.98, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  const handleScrollToAdmission = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const admissionSection = document.getElementById("admission");
    if (admissionSection) {
      admissionSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-primary via-secondary to-primary-hover pt-24 pb-6 md:pt-32 md:pb-12 flex items-center overflow-hidden min-h-[60vh] md:min-h-[85vh]">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/hero_section_bg.jpeg"
          alt="Shree Ram Classes Patna Background"
          fill
          priority
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/75 via-secondary/65 to-primary-hover/75" />
      </div>

      {/* Decorative background glows */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] pointer-events-none z-10" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-accent/15 rounded-full blur-[100px] pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">

          {/* Left Text Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Accent Topper */}
            <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/30 text-accent px-2.5 py-1 rounded-full w-fit mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              <span className="font-inter font-bold text-[10px] uppercase tracking-wider">Admissions Open</span>
            </motion.div>

            {/* Main Headline (Max 2 lines) */}
            <motion.h1
              variants={itemVariants}
              className="font-montserrat font-black text-2xl sm:text-4xl lg:text-5xl text-white leading-tight tracking-tight mb-3"
            >
              Best ARTS choaching <span className="text-accent underline decoration-accent/30 underline-offset-4 sm:underline-offset-6">in Patna</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="font-inter font-medium text-sm sm:text-base text-gray-200 leading-relaxed mb-5 max-w-xl"
            >
              Join ARTS students learning directly from Alok Sir.we offer Smart classroom visual setups,cover NCERT books and result oriented teaching & mentoring.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-row items-center gap-3 mb-5 md:mb-6 w-full max-w-md"
            >
              <a
                href="#admission"
                onClick={handleScrollToAdmission}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center px-5 h-11 rounded-xl bg-accent hover:bg-accent/90 text-primary font-inter font-extrabold text-xs sm:text-sm shadow-md hover:-translate-y-0.5 transition-all duration-150 text-center"
              >
                Admission Inquiry
              </a>
              <a
                href="tel:+917779977725"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center px-5 h-11 rounded-xl bg-white/10 hover:bg-white/15 text-white font-inter font-bold text-xs sm:text-sm border border-white/20 hover:border-white/40 transition-all duration-150 text-center"
              >
                <Phone className="h-3.5 w-3.5 mr-1.5 text-accent flex-shrink-0" />
                Call Helpline
              </a>
            </motion.div>

            {/* Trust Badges grid using verified info */}
{/* Trust Badges grid using verified info */}
<motion.div
  variants={itemVariants}
  className="grid grid-cols-2 gap-3 border-t border-white/10 pt-4 max-w-xl"
>
  <div className="flex items-center space-x-2">
    <div className="bg-accent/10 p-1.5 rounded-lg flex-shrink-0 text-accent">
      <GraduationCap className="h-4 w-4" />
    </div>
    <div>
      <span className="block font-montserrat font-bold text-xs sm:text-sm text-white">
        1st Division Guaranteed
      </span>
      <span className="block font-inter text-[10px] text-gray-400">
        Our primary academic mission
      </span>
    </div>
  </div>

  <div className="flex items-center space-x-2">
    <div className="bg-accent/10 p-1.5 rounded-lg flex-shrink-0 text-accent">
      <Calendar className="h-4 w-4" />
    </div>
    <div>
      <span className="block font-montserrat font-bold text-xs sm:text-sm text-white">
        Established in 2021
      </span>
      <span className="block font-inter text-[10px] text-gray-400">
        Led by Alok Kumar Singh
      </span>
    </div>
  </div>

  {/* Full Width Rating Box */}
  <div className="col-span-2">
    <div className="w-full rounded-xl border border-yellow-500/20 bg-yellow-500/10 backdrop-blur-sm px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="bg-yellow-500/20 p-2 rounded-lg text-yellow-400">
          <Star className="h-5 w-5 fill-current" />
        </div>

        <div>
          <span className="block font-montserrat font-bold text-sm text-white">
            4.9/5 Student Rating
          </span>
          <span className="block font-inter text-xs text-gray-300">
            Based on 500+ Student Reviews
          </span>
        </div>
      </div>

      <div className="flex items-center gap-1 text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" />
        ))}
      </div>
    </div>
  </div>
</motion.div>
          </motion.div>

          {/* Right Image Column */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 hidden sm:flex justify-center relative"
          >
            {/* Background glow circle */}
            <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-xl transform rotate-3 scale-95 z-0" />

            <div className="relative w-full max-w-[380px] aspect-square rounded-2xl overflow-hidden shadow-xl border-2 border-white/10 z-10 bg-primary/40 flex items-center justify-center">
              <Image
                src="/classes-ongoing-2.jpeg"
                alt="Alok Sir teaching Arts class at Shree Ram Classes Patna"
                fill
                priority
                className="object-cover transition-transform duration-500 hover:scale-103"
                sizes="(max-width: 768px) 100vw, 380px"
              />
              {/* Overlay with subtle visual glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent pointer-events-none" />

              {/* Overlapping interactive badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-3 left-3 right-3 bg-primary/95 backdrop-blur-sm border border-white/10 p-2.5 rounded-xl flex items-center space-x-2.5 shadow-md"
              >
                <div className="bg-accent text-primary font-black rounded-lg text-[9px] px-2 py-1 uppercase font-montserrat tracking-wider">
                  Live Class
                </div>
                <div className="text-left">
                  <span className="font-montserrat font-bold text-white text-xs block">Smartboard visual setups</span>
                  <span className="font-inter text-[10px] text-gray-300">Active classroom environment</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
