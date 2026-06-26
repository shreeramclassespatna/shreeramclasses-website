"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Camera, Play, X } from "lucide-react";
import { useState } from "react";

interface PreviewImage {
  src: string;
  title: string;
  label: string;
}

const previewImages: PreviewImage[] = [
  {
    src: "/toppers_banner-1.jpeg",
    title: "Board Toppers Banner",
    label: "Achievements",
  },
  {
    src: "/toppers_banner-2.jpeg",
    title: "Board Toppers Banner",
    label: "Achievements",
  },
  {
    src: "/toppers_banner-3.jpeg",
    title: "Board Toppers Banner",
    label: "Achievements",
  },
  {
    src: "/classes-ongoing-1.jpeg",
    title: "Smartboard Session",
    label: "Classroom",
  },
  {
    src: "/batch-students-2024-2025.jpeg",
    title: "Batch 2024-25",
    label: "Student Batches",
  },
  {
    src: "/celebration-1.jpeg",
    title: "Topper Celebration",
    label: "Events",
  },
  {
    src: "/gifting-1.jpeg",
    title: "Reward Ceremony",
    label: "Events",
  },
];

function GalleryCard({ image, index }: { image: PreviewImage; index: number }) {
  const [tapped, setTapped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.06 }}
      className={`group relative rounded-xl overflow-hidden shadow-sm border border-gray-200 cursor-pointer ${index === 0 ? "col-span-2 row-span-2 aspect-[16/10] md:aspect-auto" : "aspect-[16/10]"
        }`}
      onClick={() => setTapped((prev) => !prev)}
    >
      <div className="w-full h-full relative">
        <Image
          src={image.src}
          alt={image.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes={index === 0 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
          loading="lazy"
        />
      </div>

      {/* Label overlay — visible on hover (desktop) or tap (mobile) */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent flex flex-col justify-end p-3 sm:p-4 transition-opacity duration-300 ${tapped ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          }`}
      >
        <span className="font-inter font-bold text-[9px] sm:text-[10px] text-accent uppercase tracking-wider block mb-0.5">
          {image.label}
        </span>
        <h4 className="font-montserrat font-extrabold text-xs sm:text-sm text-white leading-tight">
          {image.title}
        </h4>
      </div>
    </motion.div>
  );
}

function VideoCard({ index }: { index: number }) {
  const [tapped, setTapped] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlayClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: index * 0.06 }}
        className="group relative rounded-xl overflow-hidden shadow-sm border border-gray-200 cursor-pointer aspect-[16/10]"
        onClick={() => setTapped((prev) => !prev)}
      >
        <div className="w-full h-full relative bg-black">
          <video
            src="/class-ongoing-video.mp4"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            controlsList="nodownload"
          />
        </div>

        {/* Center Play Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => {
            e.stopPropagation();
            handlePlayClick();
          }}
          className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/60 via-black/30 to-black/60 transition-opacity duration-300 z-20"
          aria-label="Play video"
        >
          <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-accent shadow-lg">
            <Play className="h-6 w-6 sm:h-8 sm:w-8 text-primary fill-primary" />
          </div>
        </motion.button>

        {/* Label overlay — visible on hover (desktop) or tap (mobile) */}
        <div
          className={`absolute top-0 left-0 right-0 bg-gradient-to-b from-primary/90 via-primary/30 to-transparent p-3 sm:p-4 transition-opacity duration-300 ${tapped ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            }`}
        >
          <span className="font-inter font-bold text-[9px] sm:text-[10px] text-accent uppercase tracking-wider block mb-0.5">
            Video
          </span>
          <h4 className="font-montserrat font-extrabold text-xs sm:text-sm text-white leading-tight">
            Classroom Session
          </h4>
        </div>
      </motion.div>

      {/* Video Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="bg-black border border-white/10 rounded-2xl w-full max-w-4xl shadow-2xl relative z-10 overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white hover:text-accent p-1 z-20 bg-black/50 hover:bg-black/80 rounded-full transition-all"
                aria-label="Close video"
              >
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>

              {/* Video Container */}
              <div className="relative w-full bg-black aspect-video">
                <video
                  src="/class-ongoing-video.mp4"
                  className="w-full h-full object-cover"
                  controls
                  controlsList="nodownload"
                  autoPlay
                />
              </div>

              {/* Video Info */}
              <div className="bg-primary p-4 sm:p-6 text-left">
                <h3 className="font-montserrat font-extrabold text-sm sm:text-base text-white mb-2">
                  Classroom Session
                </h3>
                <p className="font-inter text-xs sm:text-sm text-gray-200 leading-relaxed">
                  Experience our interactive teaching sessions at Shree Ram Classes. Watch our educators delivering engaging lessons with smartboard technology.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function GalleryPreview() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-end justify-between mb-6">
          <div>
            <span className="font-inter font-bold text-xs text-secondary uppercase tracking-widest block mb-1.5">
              Life at Shree Ram
            </span>
            <h2 className="font-montserrat font-black text-xl sm:text-2xl text-primary leading-tight">
              Photo Gallery
            </h2>
          </div>
        </div>

        {/* Bento-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-2 auto-rows-[140px] sm:auto-rows-[170px] md:auto-rows-[190px]">
          {previewImages.map((image, idx) => (
            <GalleryCard key={idx} image={image} index={idx} />
          ))}

          {/* Video Card */}
          <VideoCard index={previewImages.length} />

          {/* View All tile — fills the remaining grid slot */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: previewImages.length * 0.06 }}
            className="group relative rounded-xl overflow-hidden shadow-sm border border-gray-200 cursor-pointer aspect-[16/10] md:aspect-auto"
          >
            <Link
              href="/gallery"
              className="group relative rounded-xl overflow-hidden border border-primary/15 aspect-[16/10] flex flex-col items-center justify-center bg-gradient-to-br from-primary to-secondary text-white hover:shadow-lg transition-all duration-300 cursor-pointer h-full w-full"
            >

              <span className="font-montserrat font-black text-sm sm:text-base">19+ Photos</span>
              <span className="font-inter text-[10px] sm:text-xs text-gray-300 mt-0.5">View Full Gallery</span>
              <div className="mt-2.5 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 border border-white/15 font-inter font-bold text-[10px] group-hover:bg-accent group-hover:text-primary group-hover:border-accent transition-all duration-200">
                Explore
                <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
