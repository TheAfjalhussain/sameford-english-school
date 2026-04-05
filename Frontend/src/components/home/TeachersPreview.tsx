import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { PremiumButton } from "@/components/ui/premium-button";
import teacher1 from "@/assets/teacher-1.jpg";
import teacher2 from "@/assets/teacher-2.jpg";
import teacher3 from "@/assets/teacher-3.jpg";

const teachers = [
  { name: "Mrs. Anita Sharma", role: "Principal & Senior Faculty", image: teacher1, experience: "18+ Years" },
  { name: "Mr. Rakesh Kumar", role: "Science & Maths Head", image: teacher2, experience: "12+ Years" },
  { name: "Mrs. Priya Singh", role: "English & Activities Head", image: teacher3, experience: "10+ Years" },
];

export function TeachersPreview() {
  return (
    <section className="py-20 bg-background">
      <div className="section-container">
        <AnimatedSection>
          <SectionHeading
            badge="Our Faculty"
            title="Passionate Educators"
            subtitle="Qualified, caring, and dedicated teachers who inspire every student."
          />
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          {teachers.map((teacher, i) => (
            <StaggerItem key={i}>
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-heading font-bold text-lg text-foreground">{teacher.name}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{teacher.role}</p>
                  <span className="inline-block mt-3 px-3 py-1 rounded-full bg-primary-light text-xs font-semibold text-foreground">
                    {teacher.experience}
                  </span>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection delay={0.4} className="text-center mt-12">
          <Link to="/teachers">
            <PremiumButton variant="outline" className="group">
              Meet All Teachers
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </PremiumButton>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
