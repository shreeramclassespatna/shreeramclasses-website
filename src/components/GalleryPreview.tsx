"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Camera } from "lucide-react";
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
  {
    src: "/achievers-1.jpeg",
    title: "Achiever Felicitation",
    label: "Achievements",
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
