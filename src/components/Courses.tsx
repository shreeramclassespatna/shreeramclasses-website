"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Check, Award, ArrowRight, BookMarked, Layers } from "lucide-react";

export default function Courses() {
  const [activeTab, setActiveTab] = useState<"class11" | "class12">("class12");

  const class11Courses = [
    {
      title: "History Mastery",
      subjects: ["Ancient Civilizations", "Medieval Indian History", "World Empires", "Early Societies"],
      tag: "Foundation",
      description: "Building strong conceptual frameworks of historical timelines and civilizations to secure basic conceptual clarity."
    },
    {
      title: "Geography & Map Work",
      subjects: ["Physical Geography", "Indian Geography", "Map Drawing & Analysis", "Climatic Studies"],
      tag: "Visual Classrooms",
      description: "Visual exploration of physical geography with practical smartboard map-marking sessions."
    },
    {
      title: "Political Science Basics",
      subjects: ["Indian Constitution at Work", "Political Theory", "Democratic Institutions", "Rights & Duties"],
      tag: "Concept Heavy",
      description: "Detailed dissection of the Indian constitution, institutions, and core political theory."
    },
    {
      title: "Introductory Economics & Sociology",
      subjects: ["Development Economics", "Indian Society Structure", "Social Institutions", "Statistical Methods"],
      tag: "Exam Focused",
      description: "Fundamental principles of economics and structured study of society dynamics in India."
    }
  ];

  const class12Courses = [
    {
      title: "History Board Prep",
      subjects: ["Themes in Indian History I, II, III", "Nationalist Movements", "Archaeological Findings", "Complete Map Work"],
      tag: "Most Popular",
      description: "Intense, result-oriented coverage of the entire history syllabus with mock answer writing exercises."
    },
    {
      title: "Political Science & Global Politics",
      subjects: ["Contemporary World Politics", "Politics in India Since Independence", "Foreign Policy Analysis", "PYQ Dissections"],
      tag: "Board Special",
      description: "Dissecting Indian politics since independence and contemporary international events for board exam success."
    },
    {
      title: "Human Geography Mastery",
      subjects: ["Fundamentals of Human Geography", "People and Economy (India)", "Spatial Mapping Practice", "Model Test Solving"],
      tag: "Scoring Booster",
      description: "Maxing out board scores through perfect visual map drawings and geographic terminologies."
    },
    {
      title: "Macroeconomics & Society Studies",
      subjects: ["National Income Accounting", "Money and Banking", "Social Change & Development", "Government Budgets"],
      tag: "Analytical Focus",
      description: "Mastering complex economic equations and structural aspects of development in Indian society."
    }
  ];

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="courses" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-inter font-bold text-xs text-secondary uppercase tracking-widest block mb-3">
            Our Offerings
          </span>
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl text-primary mb-4 leading-tight">
            Premium Arts Courses for High Scorers
          </h2>
          <p className="font-inter font-medium text-base text-gray-500 leading-relaxed">
            Every course includes handwritten notes, visual smartboard classes, daily worksheets, test series, and strategy reviews with Alok Sir.
          </p>

          {/* Tab buttons */}
          <div className="mt-10 inline-flex items-center bg-gray-100 p-1.5 rounded-full border border-gray-250">
            <button
              onClick={() => setActiveTab("class11")}
              className={`relative px-6 py-2.5 rounded-full font-montserrat font-extrabold text-sm transition-all duration-300 ${
                activeTab === "class11" ? "text-white" : "text-gray-500 hover:text-gray-800"
              }`}
            >
              {activeTab === "class11" && (
                <motion.span
                  layoutId="active-tab"
                  className="absolute inset-0 bg-primary rounded-full z-0"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">Class 11 Arts</span>
            </button>
            <button
              onClick={() => setActiveTab("class12")}
              className={`relative px-6 py-2.5 rounded-full font-montserrat font-extrabold text-sm transition-all duration-300 ${
                activeTab === "class12" ? "text-white" : "text-gray-500 hover:text-gray-800"
              }`}
            >
              {activeTab === "class12" && (
                <motion.span
                  layoutId="active-tab"
                  className="absolute inset-0 bg-primary rounded-full z-0"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">Class 12 Arts (Boards)</span>
            </button>
          </div>
        </div>

        {/* Tab Content Panels */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {(activeTab === "class11" ? class11Courses : class12Courses).map((course, idx) => (
              <div
                key={idx}
                className="bg-gray-50 border border-gray-150 p-8 rounded-2xl shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-5">
                    <div className="inline-flex items-center space-x-2 text-primary bg-primary/5 px-3 py-1 rounded-lg border border-primary/10">
                      <BookMarked className="h-[18px] w-[18px] text-primary" />
                      <span className="font-montserrat font-bold text-xs uppercase tracking-wider">Course Modules</span>
                    </div>
                    <span className="bg-accent/10 text-accent font-inter font-bold text-xs px-3 py-1 rounded-full border border-accent/20">
                      {course.tag}
                    </span>
                  </div>

                  <h3 className="font-montserrat font-black text-xl text-primary mb-3">
                    {course.title}
                  </h3>
                  <p className="font-inter font-medium text-sm text-gray-500 leading-relaxed mb-6">
                    {course.description}
                  </p>

                  <div className="border-t border-gray-200/60 pt-6 mb-8">
                    <h4 className="font-montserrat font-bold text-gray-700 text-xs uppercase tracking-wider mb-4 flex items-center">
                      <Layers className="h-4 w-4 text-accent mr-1.5" />
                      Key Core Syllabus Topics
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {course.subjects.map((sub, sIdx) => (
                        <li key={sIdx} className="flex items-center space-x-2.5">
                          <div className="h-[18px] w-[18px] rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 flex-shrink-0">
                            <Check className="h-3 w-3" />
                          </div>
                          <span className="font-inter font-semibold text-xs text-gray-600">{sub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a
                  href="#contact"
                  onClick={handleScrollToContact}
                  className="inline-flex items-center text-sm font-montserrat font-extrabold text-secondary hover:text-accent group transition-all duration-300 w-fit"
                >
                  Enroll in course
                  <ArrowRight className="h-4 w-4 ml-1.5 transform group-hover:translate-x-1.5 transition-transform" />
                </a>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
