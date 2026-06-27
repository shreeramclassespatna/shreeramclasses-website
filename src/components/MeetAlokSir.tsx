"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Trophy, Sparkles, BookOpen } from "lucide-react";

export default function MeetAlokSir() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring" as const, stiffness: 100, damping: 15 } },
  };

  const credentials = [
    { text: "6 Years of Professional Humanities Mentorship" },
    { text: "1st Division Guaranteed Mission for Every Student" },
    { text: "Expertise in Political Science, History, Geography & Economics" },
    { text: "Pioneered smartboard answer visualization in Patna" }
  ];

  return (
    <section id="aloksir" className="py-12 md:py-16 bg-gradient-to-br from-primary via-[#0A2E46] to-secondary text-white relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute -top-32 left-1/3 w-80 h-80 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-64 h-64 bg-primary/20 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column - Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center relative"
          >
            {/* Spotlight Border */}
            <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-lg transform rotate-3 scale-95" />

            <div className="relative w-full max-w-[320px] aspect-[4/5] rounded-2xl overflow-hidden border-2 border-accent/40 shadow-xl z-10 bg-primary/80">
              <Image
                src="/aloksir.jpeg"
                alt="Alok Kumar Singh, Director of Shree Ram Classes"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 320px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2E46]/90 via-transparent to-transparent pointer-events-none" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-primary/95 backdrop-blur-sm border border-accent/20 px-3 py-2.5 rounded-xl flex items-center space-x-2.5 shadow-md">
                <Trophy className="h-4.5 w-4.5 text-accent flex-shrink-0" />
                <div>
                  <span className="block font-montserrat font-extrabold text-white text-xs">Alok Kumar Singh </span>
                  <span className="block font-montserrat text-white text-xs">(6+ Years of Experience)</span>
                  <span className="block font-inter text-[10px] text-accent uppercase font-bold tracking-widest">Director &amp; Head Mentor</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center space-x-1.5 bg-accent/15 border border-accent/40 text-accent px-3 py-1 rounded-full w-fit mb-3">
              <Sparkles className="h-3.5 w-3.5" />
              <span className="font-inter font-bold text-[10px] uppercase tracking-wider">Meet Our Director</span>
            </motion.div>

            <motion.h2 
              variants={itemVariants}
              className="font-montserrat font-black text-2xl sm:text-3xl leading-tight mb-3"
            >
              Learn from Alok Kumar Singh 
            </motion.h2>

            <motion.p 
              variants={itemVariants}
              className="font-inter font-medium text-sm text-gray-300 leading-relaxed mb-4"
            >
              With 6 years of expertise, Alok Kumar Singh has been coaching Humanities students in Patna. Under his direct mentorship, students learn critical answer-writing structures, physical mapping techniques, and visual date timelines to secure top ranks.
            </motion.p>

            {/* Blockquote Quote */}
            <motion.blockquote 
              variants={itemVariants}
              className="border-l-4 border-accent pl-4 my-3 italic text-gray-200 font-inter font-medium text-sm bg-white/5 py-3 pr-3 rounded-r-xl border-y border-r border-white/5"
            >
              &ldquo; Success is our tradition.&rdquo;
              <span className="block font-montserrat font-bold text-accent text-xs not-italic mt-2 tracking-wide">— Alok Kumar Singh</span>
            </motion.blockquote>

            {/* Core credentials */}
            <motion.div 
              variants={itemVariants}
              className="space-y-2 mt-2"
            >
              {credentials.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2.5">
                  <ShieldCheck className="h-4.5 w-4.5 text-accent flex-shrink-0" />
                  <span className="font-inter font-semibold text-xs text-gray-200">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
