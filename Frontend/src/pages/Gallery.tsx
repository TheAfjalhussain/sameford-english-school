import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Layout } from "@/components/layout";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { X } from "lucide-react";
import { CTASection } from "@/components/home/CTASection";

import { api, getImageUrl } from "@/api/api";

const categories = ["All", "Classroom", "Activities", "Sports", "Events"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // 🔥 Fetch images from backend
  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);

        const data = await api.getGalleryImages({
          category: activeCategory,
        });
        console.log("🔥 API RESPONSE:", data);

        setImages(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load gallery");
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [activeCategory]);

  return (
    <Layout>
      {/* HERO */}
      <section className="relative py-24 bg-gradient-warm overflow-hidden">
        <div className="section-container relative">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-primary-light text-foreground rounded-full text-sm font-semibold mb-4">
              Gallery
            </span>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Glimpses of School Life
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore the vibrant world of Sameford English School through our
              collection of moments and memories.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* FILTER */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <AnimatedSection className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full font-medium text-sm ${
                  activeCategory === cat
                    ? "bg-primary text-white"
                    : "bg-cream hover:bg-primary-light"
                }`}
              >
                {cat}
              </button>
            ))}
          </AnimatedSection>

          {/* GALLERY GRID */}
          {loading ? (
            <p className="text-center">Loading gallery...</p>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : images.length === 0 ? (
            <p className="text-center">No images found</p>
          ) : (
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <AnimatePresence mode="popLayout">
                {images.map((img, index) => (
                  <StaggerItem key={img.id}>
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      whileHover={{ scale: 1.03 }}
                      onClick={() =>
                        setSelectedImage(getImageUrl(img.imageUrl))
                      }
                      className="group relative rounded-2xl overflow-hidden shadow-card cursor-pointer aspect-square"
                    >
                      <img
                        src={getImageUrl(img.imageUrl)}
                        alt={img.altText}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />

                      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-300" />

                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-white text-sm font-medium">
                          {img.category}
                        </span>
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </AnimatePresence>
            </StaggerContainer>
          )}
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-6 right-6">
              <X className="text-white" />
            </button>

            <motion.img
              src={selectedImage}
              className="max-w-full max-h-[85vh] rounded-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>

    </Layout>
  );
}