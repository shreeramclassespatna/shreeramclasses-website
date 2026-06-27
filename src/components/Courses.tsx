"use client";

import { motion } from "framer-motion";
import { Clock, Calendar, Check, BookOpen, CreditCard, ChevronRight } from "lucide-react";

export default function Courses() {
  const courses = [
    {
      title: "11th Arts Foundation",
      duration: "1 Years Course",
      fees: {
        total: "₹5000 Total",
        monthly: "₹500 Monthly",
      },
      badge: "Foundation Batch",
      features: [
        "History",
        "Geography",
        "Political Science",
        "Economics",
        "Sociology",
        "Psychology",
        "Home Science",
        "Hindi (Book + Grammar)",
        "English (Book + Grammar + spoken)",
        "Urdu",
        "CUET Preparation (Integrated)",
        "Grammar & Writing Skills",
        "Weekly worksheets & tests",
        "Handwritten notes & diagrams"
      ],
      color: "border-primary/20 hover:border-primary",
      bgAccent: "bg-primary/5 text-primary",
    },
    {
      title: "12th Arts Board Special",
      duration: "1 Years Course",
      
      fees: {
        total: "₹7000 Total",
        monthly: "₹600 Monthly",
      },
      badge: "Board Exam Focused",
      features: [
     "History",
        "Geography",
        "Political Science",
        "Economics",
        "Sociology",
        "Psychology",
        "Home Science",
        "Hindi (Book + Grammar)",
        "English (Book + Grammar + spoken)",
        "Urdu",
        "CUET Preparation (Integrated)",
        "Weekly worksheets & tests",
        "Handwritten notes & diagrams"

      ],
      color: "border-accent/40 hover:border-accent shadow-md",
      bgAccent: "bg-accent/10 text-accent border border-accent/20",
    },
    {
      title: "CUET Preparation (Integrated)",
      duration: "",

      fees: {
        total: "Integrated with Boards (Free)",
        monthly: "Free with Board Course",
      },
      badge: "University Entrance",
      features: [
       "Language Paper",
       "Domain Subjects",
       "General Test",

      ],
      color: "border-secondary/20 hover:border-secondary",
      bgAccent: "bg-secondary/5 text-secondary",
    }
  ];

  const handleScrollToAdmission = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const admissionSection = document.getElementById("admission");
    if (admissionSection) {
      admissionSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="courses" className="py-12 md:py-16 bg-white relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-accent/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="font-inter font-bold text-xs text-secondary uppercase tracking-widest block mb-2">
            Our Courses
          </span>
          <h2 className="font-montserrat font-black text-2xl sm:text-3xl text-primary mb-3 leading-tight">
            Premium Arts &amp; CUET Coaching
          </h2>
          <p className="font-inter font-medium text-sm text-gray-500 leading-relaxed max-w-xl mx-auto">
            All batches include handwritten revision notes, smartboard visual lessons, weekly worksheets, and full access to Alok Sir.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {courses.map((course, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={`bg-gray-50/50 border rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between hover:shadow-lg ${course.color}`}
            >
              <div>
                {/* Header Tag */}
                <div className="flex justify-between items-center mb-4">
                  <span className={`font-inter font-bold text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full ${course.bgAccent}`}>
                    {course.badge}
                  </span>
                  <div className="flex items-center space-x-1 text-gray-400">
                    <Calendar className="h-3.5 w-3.5" />
                    <span className="font-inter font-bold text-[10px] uppercase tracking-wider">{course.duration}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-montserrat font-black text-lg sm:text-xl text-primary mb-4">
                  {course.title}
                </h3>


                {/* Pricing / Fees Cards */}
                <div className="bg-primary/95 text-white p-4 rounded-xl mb-6 shadow-sm flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <CreditCard className="h-4.5 w-4.5 text-accent" />
                    <div>
                      <span className="block text-[9px] font-inter uppercase text-gray-300 font-bold tracking-wider">Fee Structure</span>
                      <span className="block font-montserrat font-black text-sm text-white">{course.fees.total}</span>
                    </div>
                  </div>
                  <div className="text-right border-l border-white/20 pl-4">
                    <span className="block text-[9px] font-inter uppercase text-gray-300 font-bold tracking-wider">Monthly Option</span>
                    <span className="block font-inter font-extrabold text-xs text-accent">{course.fees.monthly}</span>
                  </div>
                </div>

                {/* Features Checklist */}
                <div className="border-t border-gray-200/60 pt-4 mb-6">
                  <ul className="space-y-2.5">
                    {course.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start space-x-2">
                        <div className="h-4.5 w-4.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 flex-shrink-0 mt-0.5">
                          <Check className="h-3 w-3" />
                        </div>
                        <span className="font-inter font-semibold text-xs text-gray-600 leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Link */}
              <a
                href="#admission"
                onClick={handleScrollToAdmission}
                className="w-full inline-flex items-center justify-center py-2.5 px-4 rounded-xl border border-primary/20 text-primary hover:bg-primary hover:text-white font-inter font-extrabold text-xs uppercase tracking-wider transition-all duration-150 text-center"
              >
                Inquire Admission
                <ChevronRight className="h-3.5 w-3.5 ml-1" />
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
