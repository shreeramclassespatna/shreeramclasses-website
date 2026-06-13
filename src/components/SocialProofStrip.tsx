"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface CounterProps {
  value: number;
  suffix: string;
  duration?: number;
}

function Counter({ value, suffix, duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    if (start === end) return;

    const totalSteps = 50;
    const increment = end / totalSteps;
    const stepTime = Math.abs(Math.floor(duration / totalSteps));

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  // Special formatter for decimal ratings
  const displayValue = value === 5.0 && suffix === "" ? "5.0" : count.toString();

  return (
    <span ref={ref} className="font-montserrat font-black text-4xl md:text-5xl text-accent">
      {displayValue}
      {suffix}
    </span>
  );
}

export default function SocialProofStrip() {
  const items = [
    { value: 590, suffix: "+", label: "Student Reviews" },
    { value: 5, suffix: ".0 Rating", label: "Average Google Rating" },
    { value: 5, suffix: "+ Years", label: "Academic Excellence" },
    { value: 100, suffix: "% Focus", label: "Arts Syllabus Mastery" },
  ];

  return (
    <div className="relative bg-primary py-8 border-y border-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center space-y-1">
              <div className="flex items-baseline justify-center">
                {item.value === 5 && item.suffix === ".0 Rating" ? (
                  <span className="font-montserrat font-black text-4xl md:text-5xl text-accent">
                    5.0
                  </span>
                ) : (
                  <Counter value={item.value} suffix={item.suffix.startsWith(".") ? "" : item.suffix} />
                )}
                {item.suffix.startsWith(".") && (
                  <span className="font-montserrat font-black text-2xl md:text-3xl text-accent ml-1">
                    {item.suffix}
                  </span>
                )}
              </div>
              <span className="font-inter font-semibold text-xs md:text-sm text-gray-300 uppercase tracking-widest mt-1">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
