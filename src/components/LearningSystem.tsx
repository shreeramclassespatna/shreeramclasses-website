"use client";

import { motion } from "framer-motion";
import { Tv, FileText, CheckSquare, MessageCircle, Star, GraduationCap } from "lucide-react";

export default function LearningSystem() {
  const steps = [
    {
      icon: Tv,
      title: "Classroom Learning",
      description: "Smartboard visual classes where Alok Sir explains topics using maps, infographics, and real-life political analogies."
    },
    {
      icon: FileText,
      title: "Premium Handout Notes",
      description: "Receive handcrafted notes tailored for Bihar Board exam syllabus patterns, including maps and definitions."
    },
    {
      icon: CheckSquare,
      title: "Weekly Practice Tests",
      description: "Rigorous testing under exact exam hall conditions, followed by granular evaluation and grading feedback."
    },
    {
      icon: MessageCircle,
      title: "Doubt Resolution classes",
      description: "Daily open doubt-solving slots where students clear concepts directly with teachers and mentors."
    },
    {
      icon: Star,
      title: "Board Exam Strategy",
      description: "Learn bullet-writing structures, timing blueprints, and previous years' question (PYQ) patterns."
    },
    {
      icon: GraduationCap,
      title: "Excellent Board Results",
      description: "Step into the board exam with absolute confidence and emerge as one of Patna's top scorers."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 15 } }
  };

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative lines and glows */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-inter font-bold text-xs text-secondary uppercase tracking-widest block mb-3">
            Our Method
          </span>
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl text-primary mb-4 leading-tight">
            The Shree Ram Learning System
          </h2>
          <p className="font-inter font-medium text-base text-gray-500 leading-relaxed">
            Our 6-step academic cycle is engineered to guide students systematically from fundamental syllabus concepts to ultimate board exam success.
          </p>
        </div>

        {/* Timeline wrapper */}
        <div className="relative">
          {/* Vertical Connection Line on Desktop/Tablet */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-1 bg-gradient-to-b from-primary via-accent to-success/50 hidden lg:block" />
          
          {/* Timeline Steps */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12 lg:space-y-0 relative"
          >
            {steps.map((step, idx) => {
              const IconComponent = step.icon;
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={idx}
                  variants={stepVariants}
                  className={`flex flex-col lg:flex-row items-center justify-between relative ${
                    isEven ? "" : "lg:flex-row-reverse"
                  } lg:mb-12`}
                >
                  {/* Text card */}
                  <div className={`w-full lg:w-[45%] ${isEven ? "lg:text-right" : "lg:text-left"}`}>
                    <div className={`bg-white border border-gray-150 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 relative ${
                      isEven ? "hover:border-r-accent" : "hover:border-l-accent"
                    } border-2 border-transparent`}>
                      <div className={`inline-flex items-center justify-center p-2.5 rounded-xl bg-primary/5 text-primary mb-4 ${
                        isEven ? "lg:ml-auto" : "lg:mr-auto"
                      }`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <h3 className="font-montserrat font-black text-lg text-primary mb-3">
                        {step.title}
                      </h3>
                      <p className="font-inter font-medium text-sm text-gray-500 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Dot Indicator */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center">
                    <div className="h-10 w-10 rounded-full bg-primary border-4 border-white shadow-md flex items-center justify-center font-montserrat font-black text-xs text-accent">
                      {idx + 1}
                    </div>
                  </div>

                  {/* Spacer for non-active side */}
                  <div className="hidden lg:block w-[45%]" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
