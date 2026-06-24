"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border border-gray-150 rounded-2xl bg-white overflow-hidden shadow-sm transition-all duration-200">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
      >
        <span className="font-montserrat font-extrabold text-primary text-base sm:text-lg pr-4">
          {question}
        </span>
        <div className={`text-primary p-1 bg-primary/5 rounded-lg transition-transform duration-300 ${isOpen ? "rotate-180 text-accent" : ""}`}>
          <ChevronDown className="h-5 w-5" />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" as const }}
          >
            <div className="px-6 pb-6 font-inter font-medium text-sm sm:text-base text-gray-500 leading-relaxed border-t border-gray-100 pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Why choose Shree Ram Classes?",
      answer: "We are Patna's undisputed leader in Arts education. Unlike generic coachings, our classes are lead directly by Alok Sir, utilizing digital smartboards for map/timeline visualizations, premium printed notes, and rigorous test series aligned with latest board marking systems."
    },
    {
      question: "Who teaches the classes?",
      answer: "All primary core lectures for History, Geography, Political Science, Economics, and Sociology are taken directly by Alok Sir and team. We also have dedicated coordinators for regular mock test correction, doubts resolution, and counseling."
    },
    {
      question: "Are demo classes available?",
      answer: "Yes, we offer 3 free demo classes for all new students so they can experience Alok Sir's teaching methodology, see the digital classroom, and check the quality of notes before securing admission."
    },
    {
      question: "Which board is covered?",
      answer: "We offer comprehensive preparations for Bihar School Examination Board (BSEB / Bihar Board) and CBSE Class 11 and 12 Humanities. The study material is customized separately for both boards to match their exam patterns."
    },
    {
      question: "What subjects are taught?",
      answer: "We teach all ARTS subjects: History, Geography (with map work), Political Science (Civics), Economics, and Sociology + CUET preparation. We focus heavily on syllabus mastery and high-scoring techniques."
    },
    {
      question: "How can I enroll?",
      answer: "You can book a free demo class using the form on this website or by clicking the WhatsApp button. You can also call us directly at +91 77799 77725 or visit our Mahendru Post Office centre on Ashok Rajpath, Patna."
    }
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <HelpCircle className="h-10 w-10 text-accent mb-4" />
          <span className="font-inter font-bold text-xs text-secondary uppercase tracking-widest block mb-3">
            Questions &amp; Doubts
          </span>
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl text-primary mb-4 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="font-inter font-medium text-base text-gray-500 leading-relaxed">
            Have questions about fees, notes, boards, or schedules? Find quick answers to common questions below.
          </p>
        </div>

        {/* FAQs Accordion list */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <FAQItem
              key={idx}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === idx}
              onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
