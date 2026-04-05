import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Baby, Sparkles, BookOpen, GraduationCap, ArrowRight } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { PremiumButton } from "@/components/ui/premium-button";

const levels = [
  { title: "Play & Nursery", classes: "Play – KG", description: "Play-based learning, motor skills, and social development in a joyful environment.", color: "bg-primary-light border-primary/20", iconColor: "text-primary-dark" },
  { title: "Primary", classes: "Class I – V", description: "Strong fundamentals in language, maths, science, and values-based education.", color: "bg-secondary-light border-secondary/20", iconColor: "text-secondary" },
  { title: "Middle School", classes: "Class VI – VIII", description: "Advanced CBSE curriculum with labs, co-curricular activities, and critical thinking.", color: "bg-accent-light border-accent/20", iconColor: "text-accent" },
  { title: "High School", classes: "Class IX – X", description: "Focused board exam preparation, career guidance, and holistic development.", color: "bg-sky-light border-sky/20", iconColor: "text-sky" },
];

export function AcademicsSnapshot() {
  return (
    <section className="py-20 bg-cream">
      <div className="section-container">
        <AnimatedSection>
          <SectionHeading
            badge="Academics"
            title="Learning at Every Stage"
            subtitle="A structured CBSE curriculum from early years to board-level, designed to build confidence and competence."
          />
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {levels.map((level, i) => (
            <StaggerItem key={i}>
              <Link to="/academics">
                <motion.div
                  whileHover={{ y: -8 }}
                  className={`card-premium border-2 ${level.color} h-full cursor-pointer group`}
                >
                  <div className={`w-14 h-14 rounded-2xl ${level.color} flex items-center justify-center mb-5`}>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-1">{level.title}</h3>
                  <span className="inline-block text-xs font-semibold text-muted-foreground mb-3">{level.classes}</span>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{level.description}</p>
                  <span className="text-sm font-semibold text-accent flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </span>
                </motion.div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
