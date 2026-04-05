import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  BookOpen,
  Award,
  ArrowRight,
} from "lucide-react";
import { PremiumButton } from "@/components/ui/premium-button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { api, getImageUrl } from "@/api/api";
import { HeroSkeleton } from "../ui/HeroSkeleton";

const badges = [
  { icon: BookOpen, label: "CBSE Curriculum" },
  { icon: Award, label: "NCERT Pattern" },
  { icon: Shield, label: "Safe Campus" },
];

export function HeroSection() {
  const [sliders, setSliders] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // 🔥 Fetch sliders
  useEffect(() => {
    const fetchSliders = async () => {
      try {
        const data = await api.getHeroSliders();
        setSliders(data);
      } catch (err) {
        console.error("❌ Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSliders();
  }, []);

  // 🔁 Auto Slide
  useEffect(() => {
    if (sliders.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliders.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [sliders]);

  // ✅ Show Skeleton Loader
  if (loading) return <HeroSkeleton />;

  if (sliders.length === 0)
    return <p className="text-center py-20">No sliders found</p>;

  const currentSlide = sliders[currentIndex];

  return (
    <section className="relative min-h-[700px] flex items-center overflow-hidden">

      {/* 🔥 Background Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide.id}
            src={getImageUrl(currentSlide.imageUrl)}
            alt={currentSlide.title}
            className="w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" />
      </div>

      {/* 🔷 Content */}
      <motion.div
        className="section-container relative z-10 py-16 lg:py-24"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-3xl">

          {/* Badge */}
          <motion.div className="inline-flex items-center gap-2 px-4 py-2 bg-primary rounded-full mb-6">
            <span className="h-2 w-2 bg-white rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold text-white">
              Admissions Open 2026–27
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {currentSlide.title || "Welcome to Our School"}
          </motion.h1>

          {/* Subtitle */}
          <motion.p className="text-white/90 mb-6 max-w-xl">
            {currentSlide.subtitle}
          </motion.p>

          {/* CTA */}
          {currentSlide.buttonText && (
            <motion.div className="flex gap-4 mb-10">
              <Link to={currentSlide.buttonLink || "/"}>
                <PremiumButton className="group">
                  {currentSlide.buttonText}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition" />
                </PremiumButton>
              </Link>
            </motion.div>
          )}

          {/* Badges */}
          <div className="flex flex-wrap gap-3">
            {badges.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20"
              >
                <item.icon className="h-4 w-4 text-primary" />
                <span className="text-sm text-white">{item.label}</span>
              </div>
            ))}
          </div>

        </div>
      </motion.div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
}