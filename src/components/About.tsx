"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, BookOpen, GraduationCap, MapPin } from "lucide-react";

export default function About() {
  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  const graphicVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Graphic/Illustration */}
          <motion.div
            variants={graphicVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 relative flex justify-center"
          >
            {/* Decorative background glow */}
            <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-xl transform rotate-3 scale-95 z-0" />
            
            <div className="relative w-full max-w-[400px] aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-primary/20 z-10 bg-primary/10 flex items-center justify-center">
              <Image
                src="/office.jpg"
                alt="Shree Ram Classes classroom environment and office"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 400px"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent pointer-events-none" />

              <div className="absolute -bottom-6 -right-6 bg-accent border border-accent/20 px-6 py-4 rounded-xl shadow-lg text-center hidden sm:block z-20">
                <span className="block font-montserrat font-black text-2xl text-primary">#1</span>
                <span className="block font-inter font-bold text-xs text-primary/80 uppercase tracking-widest">Arts Choice in Patna</span>
              </div>
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
            <span className="font-inter font-bold text-xs text-secondary uppercase tracking-widest block mb-3">
              About Shree Ram Classes
            </span>
            <h2 className="font-montserrat font-black text-3xl sm:text-4xl text-primary mb-6 leading-tight">
              Transforming Arts &amp; Humanities Education in Patna
            </h2>
            <p className="font-inter font-medium text-base text-gray-600 leading-relaxed mb-6">
              Founded with the vision of transforming Arts education in Bihar, Shree Ram Classes has become a trusted destination for Class 11 and 12 Humanities students.
            </p>
            <p className="font-inter font-medium text-base text-gray-600 leading-relaxed mb-8">
              Through structured notes, digital learning systems, regular assessments, and mentorship from Alok Sir, students gain the confidence to excel academically and beyond. We focus on bridging the gap between textbook knowledge and board exam patterns, laying a strong foundation for future career paths and competitive exams.
            </p>

            {/* Micro details grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="bg-primary/10 p-2 rounded-lg text-primary mt-1">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-montserrat font-bold text-gray-800 text-sm">Targeted Curriculum</h4>
                  <p className="font-inter text-xs text-gray-500 mt-1">Syllabus-aligned structured notes and test series designed specifically for Bihar Board &amp; CBSE.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-primary/10 p-2 rounded-lg text-primary mt-1">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-montserrat font-bold text-gray-800 text-sm">Personal Mentorship</h4>
                  <p className="font-inter text-xs text-gray-500 mt-1">Direct feedback from Alok Sir on board answer-writing techniques and future career paths.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-primary/10 p-2 rounded-lg text-primary mt-1">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-montserrat font-bold text-gray-800 text-sm">Rich Mock Tests</h4>
                  <p className="font-inter text-xs text-gray-500 mt-1">Frequent evaluation reports, doubt-solving classes, and strategic revision cycles.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-primary/10 p-2 rounded-lg text-primary mt-1">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-montserrat font-bold text-gray-800 text-sm">Central Location</h4>
                  <p className="font-inter text-xs text-gray-500 mt-1">Located in Mahendru, Ashok Rajpath, highly accessible for students in Patna.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
