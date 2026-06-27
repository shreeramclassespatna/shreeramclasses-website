"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, X } from "lucide-react";
import Image from "next/image";

interface GalleryItem {
  id: number;
  title: string;
  category: "classroom" | "batches" | "achievements" | "events" | "banners";
  imageSrc: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Board Toppers Banner",
    category: "achievements",
    imageSrc: "/toppers_banner-1.jpeg",
    description: "Felicitation banner of our high-scoring board performers in Arts."
  },
  {
    id: 2,
    title: "Board Toppers Banner",
    category: "achievements",
    imageSrc: "/toppers_banner-2.jpeg",
    description: "Felicitation banner of our high-scoring board performers in Science."
  },
  {
    id: 3,
    title: "Board Toppers Banner",
    category: "achievements",
    imageSrc: "/toppers_banner-3.jpeg",
    description: "Felicitation banner of our high-scoring board performers in Commerce."
  },
  {
    id: 4,
    title: "Class 12 Rank Holder",
    category: "achievements",
    imageSrc: "/ranker-1.jpeg",
    description: "One of our top rankers celebrating board exam success."
  },
  {
    id: 5,
    title: "Class 12 Rank Holder",
    category: "achievements",
    imageSrc: "/ranker-2.jpeg",
    description: "One of our top rankers celebrating board exam success."
  },
  {
    id: 6,
    title: "Class 12 Rank Holder",
    category: "achievements",
    imageSrc: "/ranker-3.jpeg",
    description: "One of our top rankers celebrating board exam success."
  },
  {
    id: 7,
    title: "Achiever Felicitation - 1",
    category: "achievements",
    imageSrc: "/achievers-1.jpeg",
    description: "Alok Sir congratulating student achievers with trophies and gifts."
  },
  {
    id: 8,
    title: "Achiever Felicitation - 2",
    category: "achievements",
    imageSrc: "/achievers-2.jpeg",
    description: "Celebrating excellent percentages scored by our Humanities batch."
  },
  {
    id: 9,
    title: "Achiever Felicitation - 3",
    category: "achievements",
    imageSrc: "/achievers-3.jpeg",
    description: "Trophy distribution for outstanding academic consistency."
  },
  {
    id: 10,
    title: "Achiever Felicitation - 4",
    category: "achievements",
    imageSrc: "/achievers-4.jpeg",
    description: "Proud parents and students celebrating at Shree Ram Classes."
  },
  {
    id: 11,
    title: "Achiever Felicitation - 5",
    category: "achievements",
    imageSrc: "/achievers-5.jpeg",
    description: "Rewarding effort and top marks in Geography and History papers."
  },
  {
    id: 12,
    title: "Achiever Felicitation - 6",
    category: "achievements",
    imageSrc: "/achievers-6.jpeg",
    description: "Rewarding effort and top marks in Geography and History papers."
  },
  {
    id: 13,
    title: "Achiever Felicitation - 7",
    category: "achievements",
    imageSrc: "/achievers-7.jpeg",
    description: "Rewarding effort and top marks in Geography and History papers."
  },
  {
    id: 14,
    title: "Active Smartboard Session",
    category: "classroom",
    imageSrc: "/classes-ongoing-1.jpeg",
    description: "Students attending interactive map-making and lecture slides by Alok Sir."
  },
  {
    id: 15,
    title: "Ongoing Classroom Lecture",
    category: "classroom",
    imageSrc: "/classes-ongoing-2.jpeg",
    description: "Focused classroom study environment in Ashok Rajpath, Patna."
  },
  {
    id: 16,
    title: "Ongoing Classroom Lecture",
    category: "classroom",
    imageSrc: "/classes-ongoing-3.jpeg",
    description: "Focused classroom study environment in Ashok Rajpath, Patna."
  },
  {
    id: 17,
    title: "Ongoing Classroom Lecture",
    category: "classroom",
    imageSrc: "/classes-ongoing-4.jpeg",
    description: "Focused classroom study environment in Ashok Rajpath, Patna."
  },
  {
    id: 18,
    title: "Office & Counseling Zone",
    category: "classroom",
    imageSrc: "/office.jpg",
    description: "Admissions inquiry office and one-on-one student counseling cabin."
  },
  {
    id: 19,
    title: "Student Batch 2022 - 2024",
    category: "batches",
    imageSrc: "/batch-students-2022-2024.jpeg",
    description: "Group photo of our graduated batch of Humanities toppers."
  },
  {
    id: 20,
    title: "Student Batch 2024 - 2025",
    category: "batches",
    imageSrc: "/batch-students-2024-2025.jpeg",
    description: "Active Class 12 batch prepared for Board and CUET exams."
  },
  {
    id: 21,
    title: "Student Batch 2024 - 2026",
    category: "batches",
    imageSrc: "/batch-students-2024-2026.jpeg",
    description: "Foundation Class 11 batch students under mentoring."
  },
  {
    id: 22,
    title: "Annual Topper Celebration",
    category: "events",
    imageSrc: "/celebration-1.jpeg",
    description: "Cake-cutting ceremony and celebrations with students and Alok Sir."
  },
  {
    id: 23,
    title: "Topper Felicitation Ceremony",
    category: "events",
    imageSrc: "/celebration-2.jpeg",
    description: "Group photograph of awardees during felicitation day."
  },
  {
    id: 24,
    title: "Topper Felicitation Ceremony",
    category: "events",
    imageSrc: "/celebration-3.jpeg",
    description: "Group photograph of awardees during felicitation day."
  },
  {
    id: 25,
    title: "Gifting Event - Trophies & Rewards",
    category: "events",
    imageSrc: "/gifting-1.jpeg",
    description: "Rewarding high scorers with study materials and trophies."
  },
  {
    id: 26,
    title: "Student Reward Ceremony",
    category: "events",
    imageSrc: "/gifting-2.jpeg",
    description: "Alok Sir presenting a gift pack to a top Humanities scorer."
  },
  {
    id: 27,
    title: "Student Reward Ceremony 2",
    category: "events",
    imageSrc: "/gifting-3.jpeg",
    description: "Encouraging junior batches to aim for 1st Division results."
  },
  {
    id: 28,
    title: "Student Reward Ceremony 2",
    category: "events",
    imageSrc: "/gifting-4.jpeg",
    description: "Encouraging junior batches to aim for 1st Division results."
  },
  {
    id: 29,
    title: "Syllabus Notes Distribution",
    category: "events",
    imageSrc: "/notes-distribution-1.jpeg",
    description: "Distributing printed chapter notes and board maps to the batch."
  },

    {
      id: 30,
      title: "Banner & Poster Display",
      category: "banners",
      imageSrc: "/hero_section_bg.jpeg",
      description: "Promotional banner of Shree Ram Classes displayed at Ashok Rajpath, Patna."
    },
  {
    id: 31,
    title: "Banner & Poster Display",
    category: "banners",
    imageSrc: "/banner-1.jpeg",
    description: "Promotional banner of Shree Ram Classes displayed at Ashok Rajpath, Patna."
  },
  {
    id: 32,
    title: "Banner & Poster Display",
    category: "banners",
    imageSrc: "/banner-2.jpeg",
    description: "Promotional banner of Shree Ram Classes displayed at Ashok Rajpath, Patna."
  },
  {
    id: 33,
    title: "Banner & Poster Display",
    category: "banners",
    imageSrc: "/banner-3.jpeg",
    description: "Promotional banner of Shree Ram Classes displayed at Ashok Rajpath, Patna."
  },
];

const featuredVideos = [
  {
    id: "rankers",
    title: "Rankers Showcase",
    src: "/rankers.mp4",
    description: "Watch our high achievers celebrate board success and awards."
  },
  {
    id: "classroom-session",
    title: "Classroom in Action",
    src: "/class-ongoing-video.mp4",
    description: "Experience a live teaching session from Shree Ram Classes."
  }
];

const categories = [
  { value: "all", label: "All Photos" },
  { value: "classroom", label: "Classrooms & Office" },
  { value: "batches", label: "Student Batches" },
  { value: "achievements", label: "Achievements & Toppers" },
  { value: "events", label: "Events & Distribution" },
  { value: "banners", label: "Banners & Posters" }
];

function GalleryCard({
  item,
  onOpen,
}: {
  item: GalleryItem;
  onOpen: (item: GalleryItem) => void;
}) {
  const [tapped, setTapped] = useState(false);

  const handleTap = () => {
    // On mobile: first tap shows overlay, second tap opens lightbox
    if (tapped) {
      onOpen(item);
    } else {
      setTapped(true);
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      onClick={handleTap}
      onMouseLeave={() => setTapped(false)}
      className="group relative bg-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md cursor-pointer border border-gray-200 aspect-[4/3] flex items-center justify-center"
    >
      <div className="w-full h-full relative transition-transform duration-300 group-hover:scale-103">
        <Image
          src={item.imageSrc}
          alt={item.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 25vw"
          loading="lazy"
        />
      </div>

      {/* Desktop: hover overlay | Mobile: tap overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-primary/20 flex flex-col justify-between p-3.5 z-10 text-left transition-opacity duration-200 ${
          tapped ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
      >
        <div className="bg-accent/20 p-1.5 rounded-lg text-accent w-fit border border-accent/30 self-end">
          <Eye className="h-4 w-4" />
        </div>
        <div>
          <span className="font-inter font-bold text-[9px] text-accent uppercase tracking-wider block mb-0.5">
            {item.category}
          </span>
          <h4 className="font-montserrat font-black text-xs text-white leading-tight">
            {item.title}
          </h4>
          <p className="font-inter text-[10px] text-gray-200 mt-1 leading-snug line-clamp-2">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<typeof featuredVideos[number] | null>(null);

  const filteredItems = activeCategory === "all"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section className="py-10 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Filters */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="font-inter font-bold text-xs text-secondary uppercase tracking-widest block mb-2">
            Life at Shree Ram
          </span>
          <h2 className="font-montserrat font-black text-2xl sm:text-3xl text-primary mb-3 leading-tight">
            Institute Gallery &amp; Achievements
          </h2>
          <p className="font-inter font-medium text-xs sm:text-sm text-gray-500 leading-relaxed max-w-md mx-auto">
            Explore our visual classrooms, topper felicitation ceremonies, study material distribution, and active student batches in Patna.
          </p>

          {/* Filters List */}
          <div className="mt-6 flex flex-wrap justify-center gap-1.5 md:gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-3 py-1.5 rounded-full font-inter font-bold text-[10px] sm:text-xs transition-all border ${
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

        {/* Featured videos */}
        <div className="space-y-4 mb-6">
          {featuredVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => setSelectedVideo(video)}
              className="group cursor-pointer overflow-hidden rounded-3xl border border-gray-200 bg-[#071F2F] shadow-sm transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="px-6 py-4 sm:px-8 sm:py-6">
                <h3 className="font-montserrat font-black text-lg text-white">{video.title}</h3>
                <p className="font-inter text-sm text-gray-200 mt-2">{video.description}</p>
              </div>
              <div className="relative w-full aspect-video bg-black">
                <video
                  src={video.src}
                  className="w-full h-full object-cover"
                  muted
                  playsInline
                  preload="metadata"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/25 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-sm font-bold text-slate-900">
                    Open full view
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <AnimatePresence>
          {selectedVideo && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedVideo(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              />
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="relative z-10 w-full h-full max-w-none overflow-hidden rounded-none bg-slate-950 shadow-2xl"
                onClick={(event) => event.stopPropagation()}
              >
                <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between gap-4 border-b border-white/10 bg-slate-950/80 px-4 py-3 backdrop-blur-sm sm:px-6">
                  <div>
                    <h3 className="font-montserrat font-black text-sm text-white sm:text-base">{selectedVideo.title}</h3>
                    <p className="font-inter text-[11px] text-gray-300 sm:text-sm">{selectedVideo.description}</p>
                  </div>
                  <button
                    onClick={() => setSelectedVideo(null)}
                    className="rounded-full bg-white/10 px-3 py-2 text-xs font-semibold text-white transition hover:bg-white/20"
                  >
                    Close
                  </button>
                </div>
                <div className="absolute inset-0 bg-black">
                  <video
                    src={selectedVideo.src}
                    className="w-full h-full object-contain"
                    controls
                    autoPlay
                    muted
                    playsInline
                  />
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Mobile hint */}
        <p className="text-center text-[10px] font-inter text-gray-400 mb-4 md:hidden">
          Tap once to preview · Tap again to expand
        </p>

        {/* Responsive Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <GalleryCard
                key={item.id}
                item={item}
                onOpen={setSelectedItem}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedItem && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedItem(null)}
                className="absolute inset-0 bg-black/85 backdrop-blur-sm"
              />

              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="bg-primary/95 border border-white/10 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative z-10"
              >
                {/* Header */}
                <div className="flex justify-between items-center px-4 py-3 border-b border-white/10">
                  <h3 className="font-montserrat font-extrabold text-xs text-white">{selectedItem.title}</h3>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="text-white hover:text-accent p-1"
                    aria-label="Close lightbox"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                {/* Image */}
                <div className="relative aspect-[4/3] w-full bg-[#0A2E46]/30">
                  <Image
                    src={selectedItem.imageSrc}
                    alt={selectedItem.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 600px"
                    priority
                  />
                </div>

                {/* Description */}
                <div className="bg-[#0A2E46] p-4 text-left">
                  <span className="font-inter font-bold text-[9px] text-accent uppercase tracking-widest block mb-1">
                    Category: {selectedItem.category}
                  </span>
                  <p className="font-inter text-xs text-gray-200 leading-relaxed">
                    {selectedItem.description}
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
