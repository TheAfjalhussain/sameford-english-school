import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Palette, Music, BookOpen, Bike, PartyPopper, Globe } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { PremiumButton } from "@/components/ui/premium-button";

const activities = [
  { icon: Palette, title: "Art & Craft", description: "Painting, drawing, and creative projects.", color: "bg-primary-light text-foreground" },
  { icon: Music, title: "Music & Dance", description: "Rhythmic learning and cultural performances.", color: "bg-accent-light text-accent-foreground" },
  { icon: BookOpen, title: "Quiz & Debates", description: "Building knowledge and public speaking.", color: "bg-secondary-light text-secondary" },
  { icon: Bike, title: "Sports", description: "Cricket, Football, and physical fitness.", color: "bg-sky-light text-sky" },
  { icon: PartyPopper, title: "Annual Events", description: "Festivals, sports day, and celebrations.", color: "bg-lavender-light text-lavender" },
  { icon: Globe, title: "Field Trips", description: "Educational excursions and nature walks.", color: "bg-primary-light text-foreground" },
];

export function ActivitiesPreview() {
  return (
    <section className="py-20 bg-gradient-cool">
      <div className="section-container">
        <AnimatedSection>
          <SectionHeading badge="Co-Curricular Activities" title="Beyond the Classroom" subtitle="Every co-curricular activities to develop every child's talents and confidence." />
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-14">
          {activities.map((activity, index) => (
            <StaggerItem key={index}>
              <motion.div whileHover={{ y: -6, scale: 1.02 }} className="bg-card rounded-2xl p-5 shadow-card hover:shadow-card-hover transition-all duration-300 text-center h-full">
                <div className={`w-14 h-14 ${activity.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <activity.icon className="h-7 w-7" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2 text-sm">{activity.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed hidden md:block">{activity.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection delay={0.4} className="text-center mt-12">
          <Link to="/activities">
            <PremiumButton variant="outline" className="group">
              View All Activities
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </PremiumButton>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
