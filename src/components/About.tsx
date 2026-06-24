"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, BookOpen, GraduationCap, MapPin } from "lucide-react";

export default function About() {
  const textVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
  };

  const graphicVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  return (
    <section id="about" className="py-10 sm:py-14 lg:py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">

          {/* Left Column - Graphic/Illustration */}
          <motion.div
            variants={graphicVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-[280px] sm:max-w-[400px] aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-primary/15 z-10 bg-primary/10">
              <Image
                src="/ranker-1.jpeg"
                alt="Shree Ram Classes classroom environment and office"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 280px, 400px"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent pointer-events-none" />

            </div>
              <div className="absolute bottom-3 right-3 sm:-bottom-5 sm:-right-5 bg-accent border border-accent/20 px-4 py-2.5 sm:px-2 sm:py-2 rounded-xl shadow-lg text-center z-20">
                <span className="block font-montserrat font-black text-lg sm:text-2xl text-primary">#1</span>
                <span className="block font-inter font-bold text-xxs sm:text-xs text-primary/80 uppercase tracking-widest">Arts in Patna</span>
              </div>
          </motion.div>

          {/* Right Column - Narrative Content */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7"
          >
            <span className="font-inter font-bold text-xxs sm:text-xs text-secondary uppercase tracking-widest block mb-2">
              About Shree Ram Classes
            </span>
            <h2 className="font-montserrat font-black text-xl sm:text-3xl lg:text-4xl text-primary mb-3 sm:mb-5 leading-tight">
              Transforming Arts Education in Patna
            </h2>
            <p className="font-inter font-medium text-sm text-gray-600 leading-relaxed mb-4 sm:mb-6">
              Founded to transform Arts education in Bihar, Shree Ram Classes is the trusted destination for Class 11 &amp; 12 Humanities students. Through structured notes, digital learning, regular assessments, and direct mentorship from Alok Sir, students excel academically and beyond.
            </p>

            {/* Micro details grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-5">
              <div className="flex items-start space-x-2.5">
                <div className="bg-primary/10 p-1.5 sm:p-2 rounded-lg text-primary mt-0.5 flex-shrink-0">
                  <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <h4 className="font-montserrat font-bold text-gray-800 text-xs sm:text-sm">Targeted Curriculum</h4>
                  <p className="font-inter text-xxs sm:text-xs text-gray-500 mt-0.5">11th &amp; 12th Arts Curriculum + CUET</p>
                </div>
              </div>
              <div className="flex items-start space-x-2.5">
                <div className="bg-primary/10 p-1.5 sm:p-2 rounded-lg text-primary mt-0.5 flex-shrink-0">
                  <Award className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <h4 className="font-montserrat font-bold text-gray-800 text-xs sm:text-sm">Personal Mentorship</h4>
                  <p className="font-inter text-xxs sm:text-xs text-gray-500 mt-0.5">Direct feedback from Alok Sir.</p>
                </div>
              </div>
              <div className="flex items-start space-x-2.5">
                <div className="bg-primary/10 p-1.5 sm:p-2 rounded-lg text-primary mt-0.5 flex-shrink-0">
                  <BookOpen className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <h4 className="font-montserrat font-bold text-gray-800 text-xs sm:text-sm">Chapter Wise Tests</h4>
                  <p className="font-inter text-xxs sm:text-xs text-gray-500 mt-0.5">Weekly evaluations &amp; revision cycles.</p>
                </div>
              </div>
              <div className="flex items-start space-x-2.5">
                <div className="bg-primary/10 p-1.5 sm:p-2 rounded-lg text-primary mt-0.5 flex-shrink-0">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <h4 className="font-montserrat font-bold text-gray-800 text-xs sm:text-sm">Central Location</h4>
                  <p className="font-inter text-xxs sm:text-xs text-gray-500 mt-0.5">Mahendru Post office, Ashok Rajpath, Patna-6 .</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
