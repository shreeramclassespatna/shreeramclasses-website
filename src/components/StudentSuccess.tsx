"use client";

import { motion } from "framer-motion";
import { Trophy, Star, CheckCircle, Award } from "lucide-react";

export default function StudentSuccess() {
  const toppers = [
    {
      name: "Rahul Kumar",
      score: "482 / 500",
      percentage: "96.4%",
      rank: "State Rank 4",
      year: "Class 12 Arts (BSEB 2025)",
      subjects: "History (98), Geography (97), Pol Sci (96)",
      message: "Alok Sir's handwritten notes and board strategy were key to my success."
    },
    {
      name: "Priya Kumari",
      score: "478 / 500",
      percentage: "95.6%",
      rank: "District Rank 2",
      year: "Class 12 Arts (BSEB 2025)",
      subjects: "Geography (99), History (95), Economics (96)",
      message: "The smartboard maps and daily answer evaluations helped me boost my confidence."
    },
    {
      name: "Amit Kumar Singh",
      score: "475 / 500",
      percentage: "95.0%",
      rank: "Top Performer",
      year: "Class 12 Arts (BSEB 2025)",
      subjects: "Pol Sci (98), History (94), Geography (95)",
      message: "Writing practice under exam-hall settings is the reason I got 95%."
    },
    {
      name: "Sneha Kumari",
      score: "472 / 500",
      percentage: "94.4%",
      rank: "Top Performer",
      year: "Class 12 Arts (BSEB 2025)",
      subjects: "History (96), Geography (95), Sociology (94)",
      message: "Alok Sir resolved all my doubts and was always there as a mentor."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: "spring" as const, stiffness: 80, damping: 12 } }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-inter font-bold text-xs text-secondary uppercase tracking-widest block mb-3">
            Toppers &amp; Scorers
          </span>
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl text-primary mb-4 leading-tight">
            Celebrating Bihar Board Excellence
          </h2>
          <p className="font-inter font-medium text-base text-gray-500 leading-relaxed">
            Our results speak for our dedication. Meet some of our top achievers from Mahendru, Patna, who learned directly from Alok Sir.
          </p>
        </div>

        {/* Toppers list */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {toppers.map((topper, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="bg-gray-50 border border-gray-150 rounded-2xl p-6 relative overflow-hidden shadow-sm flex flex-col justify-between"
            >
              {/* Topper highlight banner */}
              <div className="absolute top-0 right-0 bg-accent text-primary font-montserrat font-black text-xs px-4 py-1.5 rounded-bl-xl shadow-sm">
                {topper.percentage}
              </div>

              <div>
                {/* Topper Rank */}
                <div className="flex items-center space-x-2 text-secondary mb-4">
                  <Trophy className="h-[18px] w-[18px] text-accent" />
                  <span className="font-montserrat font-extrabold text-xs uppercase tracking-wider">
                    {topper.rank}
                  </span>
                </div>

                <h3 className="font-montserrat font-black text-lg text-primary mb-1">
                  {topper.name}
                </h3>
                <span className="block font-inter text-xs text-gray-400 font-bold mb-4">
                  {topper.year}
                </span>

                {/* Score panel */}
                <div className="bg-white border border-gray-200/80 rounded-xl p-3.5 mb-5 flex items-center justify-between shadow-inner">
                  <span className="font-inter font-semibold text-xs text-gray-500">Board Score</span>
                  <span className="font-montserrat font-black text-sm text-primary">{topper.score}</span>
                </div>

                <p className="font-inter font-semibold text-xs text-gray-600 leading-relaxed mb-6 italic">
                  &ldquo;{topper.message}&rdquo;
                </p>
              </div>

              <div className="border-t border-gray-200 pt-4 mt-auto">
                <span className="block font-montserrat font-bold text-gray-700 text-xxs uppercase tracking-widest mb-2">
                  Marks Breakdown
                </span>
                <span className="font-inter font-bold text-xs text-secondary block">
                  {topper.subjects}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer motivation */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-primary/5 border border-primary/10 text-primary px-5 py-3 rounded-full text-sm font-inter font-semibold">
            <Award className="h-5 w-5 text-accent" />
            <span>Over 84% of our students secured 1st Division in BSEB Board exams in 2025!</span>
          </div>
        </div>

      </div>
    </section>
  );
}
