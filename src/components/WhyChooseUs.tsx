"use client";

import { motion } from "framer-motion";
import { 
  Tv, Users, FileText, IndianRupee, ClipboardList, Compass, HelpCircle, Target 
} from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: Tv,
      title: "Digital Classroom Learning",
      description: "Interactive smartboard displays and digital visual aids make learning history, geography, and polity highly engaging."
    },
    {
      icon: Users,
      title: "Expert Arts Faculty",
      description: "Guided entirely by Alok Sir and expert academic assistants who understand the depth of humanities education."
    },
    {
      icon: FileText,
      title: "Exam Focused Notes",
      description: "Get handcrafted chapter summaries, concise diagrams, definitions, and model board questions."
    },
    {
      icon: IndianRupee,
      title: "Affordable Fees",
      description: "Premium coaching quality made accessible for all Bihar Board and CBSE Humanities students."
    },
    {
      icon: ClipboardList,
      title: "Regular Tests & feedback",
      description: "Weekly mock tests with board pattern marking system to tracks strengths and weaknesses."
    },
    {
      icon: Compass,
      title: "Personal Mentorship",
      description: "One-on-one sessions with Alok Sir to resolve study blocks and keep motivational levels high."
    },
    {
      icon: HelpCircle,
      title: "Daily Doubt Sessions",
      description: "Dedicated daily support hours where students can get their subject doubts resolved instantly."
    },
    {
      icon: Target,
      title: "Board Exam Strategy",
      description: "Proven writing tactics, time management formulas, and previous years' question (PYQ) dissection."
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
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, idx) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -6, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
                className="bg-white border border-gray-150 p-6 rounded-2xl shadow-sm hover:border-accent/30 transition-all duration-300 flex flex-col items-start group"
              >
                <div className="bg-primary/5 p-3 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 mb-5 border border-primary/10">
                  <IconComponent className="h-6 w-6" />
                </div>
                <h3 className="font-montserrat font-extrabold text-gray-800 text-lg leading-snug mb-3">
                  {feature.title}
                </h3>
                <p className="font-inter font-medium text-sm text-gray-500 leading-relaxed mt-auto">
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
