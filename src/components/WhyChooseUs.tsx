"use client";

import { motion } from "framer-motion";
import { 
  Tv, Users, FileText, CheckSquare, ClipboardList, Notebook, Pencil, Target 
} from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: Tv,
      title: "Digital Classrooms",
      description: "Interactive smartboards and visuals make visual learning highly engaging."
    },
    {
      icon: Users,
      title: "Expert Arts Faculty",
      description: "Guided directly by Alok Sir and specialized humanities mentors."
    },
    {
      icon: FileText,
      title: "Subject Wise Notes",
      description: "Handwritten summaries, maps, diagrams, and target board solutions."
    },
    {
      icon: CheckSquare,
      title: "Fully NCERT Coverage",
      description: "Premium education made accessible for BSEB & CBSE students."
    },
    {
      icon: ClipboardList,
      title: "Chapter Wise Tests",
      description: "Weekly tests graded on strict board marking patterns."
    },
    {
      icon: Notebook,
      title: "2009-current year Questions Bank",
        description: " A collection of over 20 years of previous year questions."
    },
    {
      icon: Pencil,
      title: "Model Paper Tests",
      description: "Timed mock papers with detailed solutions and marking schemes."
    },
    {
      icon: Target,
      title: "Free Prep for CUET",
      description: "CUET preparation integrated into the curriculum for competitive edge."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      }
    }
  };

  const cardVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring" as const, stiffness: 100, damping: 15 } }
  };

  return (
    <section className="py-10 md:py-16 bg-gray-50 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="font-inter font-bold text-xs text-secondary uppercase tracking-widest block mb-3">
            Why Shree Ram Classes
          </span>
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl text-primary mb-4 leading-tight">
            Designed for Academic Excellence &amp; Results
          </h2>
          <p className="font-inter font-medium text-base text-gray-500 leading-relaxed">
            Our study environment, methodology, and learning aids are specifically tailored to help Bihar Board and CBSE Humanities students secure top scores.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6"
        >
          {features.map((feature, idx) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -6, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
                className="bg-white border border-gray-150 p-3.5 md:p-6 rounded-xl md:rounded-2xl shadow-sm hover:border-accent/30 transition-all duration-300 flex flex-col items-start group text-left"
              >
                <div className="bg-primary/5 p-2 md:p-3 rounded-lg md:rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 mb-2.5 md:mb-5 border border-primary/10">
                  <IconComponent className="h-4.5 w-4.5 md:h-6 md:w-6" />
                </div>
                <h3 className="font-montserrat font-extrabold text-gray-800 text-xs sm:text-base md:text-lg leading-snug mb-1.5 md:mb-3">
                  {feature.title}
                </h3>
                <p className="font-inter font-medium text-[10px] sm:text-xs md:text-sm text-gray-500 leading-relaxed mt-auto">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
