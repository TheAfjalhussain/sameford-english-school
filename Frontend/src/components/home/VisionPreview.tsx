import { Link } from "react-router-dom";
import { ArrowRight, Eye, Target } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { PremiumButton } from "@/components/ui/premium-button";

export function VisionPreview() {
  return (
    <section className="py-20 bg-gradient-navy text-background overflow-hidden relative">
      <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-secondary/10 rounded-full blur-3xl" />

      <div className="section-container relative">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <div className="flex justify-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center">
              <Eye className="h-7 w-7 text-primary" />
            </div>
            <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center">
              <Target className="h-7 w-7 text-secondary" />
            </div>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Our Vision & Mission
          </h2>
          <p className="text-background/80 text-lg leading-relaxed mb-4">
            To nurture confident, curious, and compassionate learners who are prepared for the challenges of the future — rooted in values and empowered by knowledge.
          </p>
          <p className="text-background/60 text-base leading-relaxed mb-10">
            We believe every child is unique. Our mission is to provide a safe, stimulating environment where academic excellence meets character building.
          </p>
          <Link to="/vision">
            <PremiumButton size="lg" className="group">
              Explore Our Vision
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </PremiumButton>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
