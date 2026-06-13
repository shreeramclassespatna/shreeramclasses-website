"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Reviews() {
  const reviews = [
    {
      name: "Aditya Raj",
      role: "Class 12 Arts (BSEB 2025)",
      text: "Before joining Shree Ram Classes, I used to find History extremely dry and boring. Alok Sir taught us through maps and stories on the smartboard, which completely changed my approach. I scored 96 marks in History!",
      rating: 5,
    },
    {
      name: "Sneha Sinha",
      role: "Class 12 Arts (CBSE 2025)",
      text: "The notes provided by Alok Sir are excellent. They are exam-focused and explain complex terms in easy words. The weekly mock tests made board exams feel like a regular test. I highly recommend Shree Ram Classes.",
      rating: 5,
    },
    {
      name: "Mohammad Yusuf",
      role: "Class 11 Arts Student",
      text: "Alok Sir does not just teach; he mentors. He explained the core concepts of the Indian Constitution so well that I now want to pursue Political Science for my higher studies. The atmosphere in Mahendru centre is highly motivational.",
      rating: 5,
    },
    {
      name: "Rinki Kumari",
      role: "Class 12 Arts (BSEB 2025)",
      text: "I was very worried about the Geography map questions. Alok Sir made us practice map drawing daily on the smartboard. Because of his personal guidance, I scored 98 in Geography. Best coaching in Patna!",
      rating: 5,
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setActiveIndex((prevIndex) =>
          prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
        ),
      6000
    );

    return () => {
      resetTimeout();
    };
  }, [activeIndex, reviews.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="reviews" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <span className="font-inter font-bold text-xs text-secondary uppercase tracking-widest block mb-3">
            Testimonials
          </span>
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl text-primary mb-4 leading-tight">
            Loved by Students, Trusted by Parents
          </h2>
          
          {/* Summary Badges */}
          <div className="flex items-center space-x-3 mt-2 bg-white px-5 py-2.5 rounded-full border border-gray-200 shadow-sm">
            <div className="flex text-accent">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-[18px] w-[18px] fill-accent text-accent" />
              ))}
            </div>
            <span className="font-montserrat font-black text-sm text-primary">5.0 / 5.0 Rating</span>
            <span className="text-gray-300 font-inter text-sm">|</span>
            <span className="font-inter font-bold text-xs text-gray-500">590+ Google Reviews</span>
          </div>
        </div>

        {/* Carousel Window */}
        <div className="relative bg-white border border-gray-150 p-8 sm:p-12 md:p-16 rounded-3xl shadow-md overflow-hidden min-h-[350px] sm:min-h-[280px] flex items-center">
          {/* Large decorative quotation mark */}
          <Quote className="absolute top-8 left-8 h-20 w-20 text-gray-100/80 pointer-events-none transform rotate-180" />

          <div className="relative w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col justify-center items-center text-center"
              >
                {/* Stars */}
                <div className="flex text-accent mb-6">
                  {[...Array(reviews[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="font-inter font-medium text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl">
                  &ldquo;{reviews[activeIndex].text}&rdquo;
                </p>

                {/* Reviewer Details */}
                <div>
                  <h4 className="font-montserrat font-black text-primary text-base sm:text-lg">
                    {reviews[activeIndex].name}
                  </h4>
                  <span className="font-inter font-bold text-xs text-accent uppercase tracking-widest block mt-1.5">
                    {reviews[activeIndex].role}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Manual Navigation Controls */}
        <div className="flex items-center justify-between mt-8">
          {/* Page Indicators */}
          <div className="flex space-x-2.5">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? "w-8 bg-primary" : "w-2.5 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Previous/Next Buttons */}
          <div className="flex space-x-3">
            <button
              onClick={handlePrev}
              className="h-11 w-11 rounded-full border border-gray-250 flex items-center justify-center text-primary bg-white hover:bg-gray-50 active:scale-95 transition-all duration-200 shadow-sm"
              aria-label="Previous review"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              className="h-11 w-11 rounded-full border border-gray-250 flex items-center justify-center text-primary bg-white hover:bg-gray-50 active:scale-95 transition-all duration-200 shadow-sm"
              aria-label="Next review"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
