"use client";

import { motion } from "framer-motion";

const newsItems = [
  "आर्ट्स में सर्वाधिक रिजल्ट देने वाला संस्थान",
  "आर्ट्स में सर्वाधिक रिजल्ट देने वाला संस्थान",
];

export default function NewsTicker() {
  const tickerText = newsItems.join(" • ");

  return (
    <div className="w-full overflow-hidden bg-accent text-primary h-10 flex items-center">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 80,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* First Copy */}
        <div className="flex shrink-0 items-center px-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="mx-8">
              {tickerText}
            </span>
          ))}
        </div>

        {/* Duplicate Copy */}
        <div className="flex shrink-0 items-center px-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={`dup-${i}`} className="mx-8">
              {tickerText}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}