"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, X, BookOpen, Map, Users, Award, Landmark } from "lucide-react";
import Image from "next/image";

interface GalleryItem {
  id: number;
  title: string;
  category: "classroom" | "teaching" | "activities" | "events" | "environment";
  icon: any;
  color: string;
  imageSrc: string;
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
      imageSrc: "/class.jpg"
    },
    {
      id: 2,
      title: "Patna's Leading Arts Achievers (BSEB 2025)",
      category: "events",
      icon: Award,
      color: "from-purple-500 to-pink-600",
      imageSrc: "/achievers.jpg"
    },
    {
      id: 3,
      title: "Topper Felicitation & Celebration Day",
      category: "events",
      icon: Award,
      color: "from-amber-500 to-orange-600",
      imageSrc: "/celebration.jpg"
    },
    {
      id: 4,
      title: "Shree Ram Classes Board Toppers",
      category: "events",
      icon: Award,
      color: "from-red-500 to-rose-600",
      imageSrc: "/acheivers2.jpg"
    },
    {
      id: 5,
      title: "Student Counseling & Study Office Zone",
      category: "environment",
      icon: Landmark,
      color: "from-sky-500 to-blue-600",
      imageSrc: "/office.jpg"
    },
    {
      id: 6,
      title: "Off-Campus Seminar & Student Activities",
      category: "activities",
      icon: Users,
      color: "from-emerald-500 to-teal-600",
      imageSrc: "/offcampus.jpg"
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
                  {/* Real Image */}
                  <div className="w-full h-full relative transition-transform duration-500 group-hover:scale-105">
                    <Image
                      src={item.imageSrc}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      unoptimized
                    />
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

                {/* Image display container */}
                <div className="relative aspect-[4/3] w-full bg-[#0A2E46]/30">
                  <Image
                    src={selectedItem.imageSrc}
                    alt={selectedItem.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 800px"
                    unoptimized
                  />
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
