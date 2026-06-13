"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, X, BookOpen, Map, Users, Award, Landmark } from "lucide-react";

interface GalleryItem {
  id: number;
  title: string;
  category: "classroom" | "teaching" | "activities" | "events" | "environment";
  icon: any;
  color: string;
  svgGraphic: () => React.ReactNode;
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const categories = [
    { value: "all", label: "All Photos" },
    { value: "classroom", label: "Classrooms" },
    { value: "teaching", label: "Teaching Sessions" },
    { value: "activities", label: "Student Activities" },
    { value: "events", label: "Events & Awards" },
    { value: "environment", label: "Institute Environment" }
  ];

  const items: GalleryItem[] = [
    {
      id: 1,
      title: "Interactive Smartboard Classroom",
      category: "classroom",
      icon: BookOpen,
      color: "from-blue-500 to-indigo-600",
      svgGraphic: () => (
        <svg viewBox="0 0 400 300" className="w-full h-full text-white" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="300" rx="12" fill="#0B3C5D" />
          <rect x="40" y="40" width="320" height="180" rx="8" fill="#133E87" />
          <path d="M60 130 C 100 110, 160 160, 220 90 C 280 140, 320 80, 340 120" stroke="#F5A623" strokeWidth="4" strokeLinecap="round" />
          <circle cx="220" cy="90" r="6" fill="#F5A623" />
          <circle cx="60" cy="130" r="6" fill="#F5A623" />
          <rect x="60" y="60" width="100" height="8" rx="4" fill="#ffffff" fillOpacity="0.8" />
          <rect x="60" y="76" width="150" height="8" rx="4" fill="#ffffff" fillOpacity="0.5" />
          <path d="M170 220 L150 270 M230 220 L250 270 M130 270 L270 270" stroke="#0B3C5D" strokeWidth="6" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Alok Sir Geography Map Class",
      category: "teaching",
      icon: Map,
      color: "from-emerald-500 to-teal-600",
      svgGraphic: () => (
        <svg viewBox="0 0 400 300" className="w-full h-full text-white" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="300" rx="12" fill="#133E87" />
          <path d="M120 70 L 140 100 L 170 90 L 200 140 L 230 110 L 280 160" stroke="#F5A623" strokeWidth="3" fill="none" />
          {/* India map outline simplified */}
          <path d="M200 60 C 210 40, 220 50, 230 60 C 240 70, 260 80, 250 100 C 240 120, 250 145, 230 160 C 210 180, 200 230, 195 240 L 190 240 C 185 220, 160 180, 150 170 C 130 150, 140 130, 150 120 C 160 100, 180 80, 200 60 Z" fill="#FAFAFA" fillOpacity="0.1" stroke="#FAFAFA" strokeWidth="2" />
          <circle cx="200" cy="110" r="5" fill="#F5A623" />
          <text x="212" y="114" fill="#ffffff" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Patna</text>
        </svg>
      )
    },
    {
      id: 3,
      title: "Arts Seminar & Group Discussions",
      category: "activities",
      icon: Users,
      color: "from-amber-500 to-orange-600",
      svgGraphic: () => (
        <svg viewBox="0 0 400 300" className="w-full h-full text-white" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="300" rx="12" fill="#F5A623" />
          <circle cx="120" cy="130" r="30" fill="#ffffff" fillOpacity="0.2" />
          <circle cx="200" cy="110" r="40" fill="#ffffff" fillOpacity="0.2" />
          <circle cx="280" cy="130" r="30" fill="#ffffff" fillOpacity="0.2" />
          <path d="M100 210 C 100 180, 140 180, 140 210" stroke="#0B3C5D" strokeWidth="4" strokeLinecap="round" />
          <path d="M170 200 C 170 160, 230 160, 230 200" stroke="#0B3C5D" strokeWidth="4" strokeLinecap="round" />
          <path d="M260 210 C 260 180, 300 180, 300 210" stroke="#0B3C5D" strokeWidth="4" strokeLinecap="round" />
          <line x1="150" y1="120" x2="250" y2="120" stroke="#0B3C5D" strokeWidth="2" strokeDasharray="4 4" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Felicitation Ceremony: BSEB Toppers 2025",
      category: "events",
      icon: Award,
      color: "from-purple-500 to-pink-600",
      svgGraphic: () => (
        <svg viewBox="0 0 400 300" className="w-full h-full text-white" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="300" rx="12" fill="#0B3C5D" />
          <circle cx="200" cy="120" r="50" fill="#F5A623" />
          <path d="M200 95 L205 110 L220 110 L208 120 L212 135 L200 125 L188 135 L192 120 L180 110 L195 110 Z" fill="#0B3C5D" />
          <path d="M175 160 C 175 140, 225 140, 225 160" stroke="#F5A623" strokeWidth="4" strokeLinecap="round" />
          <rect x="120" y="210" width="160" height="40" rx="4" fill="#133E87" />
          <text x="145" y="235" fill="#ffffff" fontSize="12" fontWeight="bold" fontFamily="sans-serif">TOPPER CELEBRATION</text>
        </svg>
      )
    },
    {
      id: 5,
      title: "Comprehensive Arts Library & Self-Study Zone",
      category: "environment",
      icon: Landmark,
      color: "from-sky-500 to-blue-600",
      svgGraphic: () => (
        <svg viewBox="0 0 400 300" className="w-full h-full text-white" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="300" rx="12" fill="#133E87" />
          {/* Bookshelves */}
          <rect x="50" y="60" width="300" height="20" fill="#F5A623" />
          <rect x="50" y="160" width="300" height="20" fill="#F5A623" />
          {/* Books */}
          <rect x="70" y="20" width="15" height="40" fill="#ffffff" fillOpacity="0.8" />
          <rect x="87" y="25" width="12" height="35" fill="#ffffff" fillOpacity="0.5" />
          <rect x="101" y="15" width="18" height="45" fill="#ffffff" />
          <rect x="250" y="25" width="14" height="35" fill="#ffffff" fillOpacity="0.6" />
          <rect x="70" y="110" width="18" height="50" fill="#ffffff" />
          <rect x="90" y="120" width="12" height="40" fill="#ffffff" fillOpacity="0.6" />
          <rect x="280" y="115" width="15" height="45" fill="#ffffff" fillOpacity="0.8" />
        </svg>
      )
    },
    {
      id: 6,
      title: "One-on-One Counseling & Doubt Desk",
      category: "classroom",
      icon: Users,
      color: "from-red-500 to-rose-600",
      svgGraphic: () => (
        <svg viewBox="0 0 400 300" className="w-full h-full text-white" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="300" rx="12" fill="#0B3C5D" />
          <rect x="100" y="180" width="200" height="15" rx="2" fill="#F5A623" />
          <circle cx="160" cy="120" r="25" fill="#ffffff" fillOpacity="0.2" />
          <circle cx="240" cy="120" r="25" fill="#ffffff" fillOpacity="0.2" />
          <path d="M145 180 C 145 155, 175 155, 175 180" stroke="#FAFAFA" strokeWidth="3" />
          <path d="M225 180 C 225 155, 255 155, 255 180" stroke="#FAFAFA" strokeWidth="3" />
          <circle cx="200" cy="80" r="10" fill="#F5A623" />
        </svg>
      )
    }
  ];

  const filteredItems = activeCategory === "all" 
    ? items 
    : items.filter(item => item.category === activeCategory);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-inter font-bold text-xs text-secondary uppercase tracking-widest block mb-3">
            Life at Institute
          </span>
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl text-primary mb-4 leading-tight">
            Institute Gallery &amp; Environment
          </h2>
          <p className="font-inter font-medium text-base text-gray-500 leading-relaxed">
            Explore our state-of-the-art visual classrooms, interactive learning seminars, library, and achiever award celebrations in Patna.
          </p>

          {/* Filters List */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-4.5 py-2 rounded-full font-inter font-semibold text-xs transition-all duration-200 border ${
                  activeCategory === cat.value
                    ? "bg-primary text-white border-primary shadow-sm"
                    : "bg-gray-50 text-gray-500 border-gray-200 hover:text-gray-800 hover:bg-gray-100"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry-Style Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className="group relative bg-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md cursor-pointer border border-gray-150 aspect-[4/3] flex items-center justify-center"
                >
                  {/* SVG graphic */}
                  <div className="w-full h-full p-2 bg-gradient-to-tr transition-transform duration-500 group-hover:scale-103">
                    {item.svgGraphic()}
                  </div>

                  {/* Dark Overlay on Hover */}
                  <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-between p-6 z-10">
                    <div className="bg-accent/20 p-2 rounded-lg text-accent w-fit border border-accent/30 self-end">
                      <Eye className="h-5 w-5" />
                    </div>
                    <div className="text-left">
                      <span className="font-inter font-bold text-xs text-accent uppercase tracking-wider block mb-1">
                        {item.category}
                      </span>
                      <h4 className="font-montserrat font-extrabold text-white text-base leading-snug">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Popups */}
        <AnimatePresence>
          {selectedItem && (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedItem(null)}
                className="absolute inset-0 bg-black/85 backdrop-blur-sm"
              />

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-primary/95 border border-white/10 rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative z-10"
              >
                {/* Header detail */}
                <div className="flex justify-between items-center px-6 py-4 border-b border-white/10">
                  <h3 className="font-montserrat font-bold text-sm text-white">{selectedItem.title}</h3>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="text-white hover:text-accent p-1"
                    aria-label="Close lightbox"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* SVG display container */}
                <div className="p-6 md:p-10 aspect-[4/3] w-full flex items-center justify-center bg-[#0A2E46]/30">
                  <div className="w-full max-w-[500px]">
                    {selectedItem.svgGraphic()}
                  </div>
                </div>

                {/* Footer label details */}
                <div className="bg-[#0A2E46] px-6 py-4 flex justify-between items-center">
                  <span className="font-inter font-bold text-xs text-accent uppercase tracking-widest">
                    Category: {selectedItem.category}
                  </span>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="font-inter font-semibold text-xs text-white hover:text-accent"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
