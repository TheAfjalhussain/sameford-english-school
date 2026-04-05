import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play } from "lucide-react";
import { Layout } from "@/components/layout"; // ✅ IMPORTANT
import { AnimatedSection } from "@/components/ui/animated-section";

type Video = {
  id: number;
  title: string;
  youtubeId: string;
  category: string;
};

const categories = ["All", "Events", "Activities", "Academics"];

const videos: Video[] = [
  {
    id: 1,
    title: "Annual Function 2025",
    youtubeId: "ksGZsxdLriI",
    category: "Events",
  },
  {
    id: 2,
    title: "Nawada A Beautiful Heritaze",
    youtubeId: "f1h_gVD_ZRg",
    category: "Activities",
  },
  {
    id: 3,
    title: "Classroom Learning",
    youtubeId: "zQ1vmayNqtw",
    category: "Academics",
  },
  {
    id: 4,
    title: "Election Related Press Confress",
    youtubeId: "yAfx5BEytvI",
    category: "Activities",
  },
  {
    id: 5,
    title: "Independence Day Celebration",
    youtubeId: "O1CeJLc4Jw8",
    category: "Events",
  },
  {
    id: 6,
    title: "Winter Tour",
    youtubeId: "podOc-fCu0I",
    category: "Activities",
  },
];

export function Video() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  // ✅ Optimized filtering
  const filteredVideos = useMemo(() => {
    return activeCategory === "All"
      ? videos
      : videos.filter((v) => v.category === activeCategory);
  }, [activeCategory]);


  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedVideo(null);
    };

    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = selectedVideo ? "hidden" : "auto";

    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "auto";
    };
  }, [selectedVideo]);

  return (
    <Layout> {/* ✅ THIS FIXES NAVBAR + FOOTER */}

      <section className="relative py-24 bg-cream overflow-hidden">
        <div className="section-container relative">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-primary-light text-foreground rounded-full text-sm font-semibold mb-4">Video Gallery</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">Videos of School Life</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore the Sameford English School through our videos collection of moments and memories.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* MAIN GALLERY */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-blue-600 text-white shadow-md scale-105"
                    : "bg-white text-gray-700 hover:bg-blue-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video) => (
              <motion.div
                key={video.id}
                whileHover={{ scale: 1.04 }}
                className="cursor-pointer group"
                onClick={() => setSelectedVideo(video)}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-lg">

                  {/* Thumbnail */}
                  <img
                    src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/60 transition">
                    <div className="bg-white/90 p-4 rounded-full group-hover:scale-110 transition">
                      <Play className="text-black w-7 h-7" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition">
                    {video.title}
                  </h3>
                  <p className="text-sm text-gray-500">{video.category}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Modal */}
          <AnimatePresence>
            {selectedVideo && (
              <motion.div
                className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedVideo(null)}
              >
                {/* Close */}
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full"
                >
                  <X size={28} />
                </button>

                {/* Player */}
                <motion.div
                  className="w-full max-w-5xl aspect-video"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <iframe
                    className="w-full h-full rounded-2xl shadow-2xl"
                    src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1`}
                    title={selectedVideo.title}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

    </Layout>
  );
}