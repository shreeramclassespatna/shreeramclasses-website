"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";

const videos = [
  {
    id: "JIQo6OBW1iI",
    thumbnail: "/youtube/JIQo6OBW1iI-HQ.jpg",
  },
  {
    id: "aopdSd4OcOs",
    thumbnail: "/youtube/aopdSd4OcOs-HQ.jpg",
  },
  {
    id: "5u-m7vfpzMw",
    thumbnail: "/youtube/5u-m7vfpzMw-HQ.jpg",
  },
  {
    id: "nHDfeXsTMpo",
    thumbnail: "/youtube/nHDfeXsTMpo-HQ.jpg",
  },

];

export default function YoutubeSection() {
  return (
    <section className="overflow-hidden py-8">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-primary">
            Video Library
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Learn Through Videos
          </h2>
        </motion.div>

        {/* Videos */}
        <div className="overflow-x-auto scrollbar-none">
          <div className="flex gap-6 pb-4">
            {videos.map((video, index) => (
              <motion.a
                key={video.id}
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group relative min-w-[320px] md:min-w-[420px]"
              >
                <div className="overflow-hidden rounded-[28px] border border-border bg-card shadow-lg">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={video.thumbnail}
                      alt="YouTube Video Thumbnail"
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/20 transition-all duration-300 group-hover:bg-black/30" />

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 backdrop-blur-md shadow-xl transition duration-300 group-hover:scale-110">
                        <Play
                          className="ml-1 h-6 w-6 fill-current text-black"
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}