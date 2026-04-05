import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { PremiumButton } from "@/components/ui/premium-button";
import classroomImage from "@/assets/classroom.jpg";
import playzoneImage from "@/assets/playzone.jpg";
import artImage from "@/assets/art-activity.jpg";
import outdoorImage from "@/assets/outdoor-play.jpg";

const galleryImages = [
  { src: classroomImage, alt: "Classroom session at Sameford English School", category: "Classroom" },
  { src: playzoneImage, alt: "Students in play zone", category: "Activities" },
  { src: artImage, alt: "Art session", category: "Activities" },
  { src: outdoorImage, alt: "Outdoor sports", category: "Sports" },
];

export function GalleryPreview() {
  return (
    <section className="py-20 bg-background">
      <div className="section-container">
        <AnimatedSection>
          <SectionHeading badge="Gallery" title="Glimpses of School Life" subtitle="See the vibrant world of Sameford English School through our collection of memories." />
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
          {galleryImages.map((image, index) => (
            <StaggerItem key={index}>
              <motion.div whileHover={{ scale: 1.03 }} className="group relative rounded-2xl overflow-hidden shadow-card cursor-pointer aspect-square">
                <img src={image.src} alt={image.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-4 py-2 bg-card rounded-full text-sm font-medium text-foreground">{image.category}</span>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection delay={0.4} className="text-center mt-12">
          <Link to="/gallery">
            <PremiumButton variant="outline" className="group">
              View Full Gallery
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </PremiumButton>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
