"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle, ShieldCheck, Trophy, Sparkles, BookOpen } from "lucide-react";

export default function MeetAlokSir() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring" as const, stiffness: 100, damping: 15 } },
  };

  const achievements = [
    { text: "5+ Years of Dedicated Humanities Mentorship" },
    { text: "Guided 1,000+ Students in Board Prep & Careers" },
    { text: "Pioneer of Smartboard Visual Arts Learning in Patna" },
    { text: "Highest Ratio of 90%+ Board Scorers in Mahendru" }
  ];

  return (
    <section id="aloksir" className="py-24 bg-gradient-to-br from-primary via-[#0A2E46] to-secondary text-white relative overflow-hidden">
      {/* Decorative spotlight glows */}
      <div className="absolute -top-40 left-1/3 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center relative"
          >
            {/* Spotlight Border */}
            <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-xl transform rotate-3 scale-95" />

            <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-2xl overflow-hidden border-2 border-accent/40 shadow-2xl z-10 bg-primary/80">
              <Image
                src="/aloksir.jpg"
                alt="Alok Sir portrait at Shree Ram Classes"
                fill
                priority
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 380px"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2E46]/90 via-transparent to-transparent pointer-events-none" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-5 left-5 right-5 bg-primary/90 backdrop-blur-sm border border-accent/30 px-4 py-3 rounded-xl flex items-center space-x-3 shadow-md">
                <Trophy className="h-5 w-5 text-accent flex-shrink-0" />
                <div>
                  <span className="block font-montserrat font-extrabold text-white text-sm">Alok Sir</span>
                  <span className="block font-inter text-xs text-accent uppercase font-bold tracking-widest">Founder &amp; Head Mentor</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-accent/15 border border-accent/40 text-accent px-4 py-1.5 rounded-full w-fit mb-6">
              <Sparkles className="h-4 w-4" />
              <span className="font-inter font-bold text-xs uppercase tracking-wider">Meet Your Educator</span>
            </motion.div>

            <motion.h2 
              variants={itemVariants}
              className="font-montserrat font-black text-3xl sm:text-4xl leading-tight mb-6"
            >
              The Mentor Trusted by Hundreds of Arts Students Across Patna
            </motion.h2>

            <motion.p 
              variants={itemVariants}
              className="font-inter font-medium text-base text-gray-300 leading-relaxed mb-6"
            >
              Arts education has long been neglected as a side subject, but at Shree Ram Classes, we treat Humanities as a pathway to premier career choices. Under my guidance, students learn to write analytical answers, build maps, visualize historical dates, and connect economics with global events.
            </motion.p>

            {/* Blockquote Quote */}
            <motion.blockquote 
              variants={itemVariants}
              className="border-l-4 border-accent pl-5 my-6 italic text-gray-200 font-inter font-medium text-base bg-white/5 py-4 pr-4 rounded-r-xl border-y border-r border-white/5"
            >
              &ldquo;Humanities is not just about memorization; it is about critical thinking. My goal is to change the way Bihar views Arts education, one topper at a time.&rdquo;
              <span className="block font-montserrat font-bold text-accent text-sm not-italic mt-3 tracking-wide">— Alok Sir</span>
            </motion.blockquote>

            {/* Core credentials */}
            <motion.div 
              variants={itemVariants}
              className="space-y-3.5 mt-4"
            >
              {achievements.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <ShieldCheck className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="font-inter font-semibold text-sm text-gray-200">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
