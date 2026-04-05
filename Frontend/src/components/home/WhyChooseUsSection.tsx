import { motion, stagger } from "framer-motion";
import { Shield, Users, BookOpen, Award, HeartHandshake, Video, GraduationCap, Star, StarIcon, GraduationCapIcon, BusFrontIcon, AwardIcon } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";

const features = [
  { icon: GraduationCapIcon, title: "Academic Excellence", description: "We follow the CBSE curriculum with practical learning and activities, helping students achieve excellent results every year.", color: "bg-accent" },
  { icon: Users, title: "Expert Faculty", description: "Our teachers are qualified, experienced, and dedicated to helping every student grow and succeed.", color: "bg-primary" },
  { icon: StarIcon, title: "Modern Infrastructure", description: "We provide smart classrooms, well-equipped labs, and good sports facilities for better learning.", color: "bg-accent" },
  { icon: Award, title: "Holistic Development", description: "We focus on overall growth through sports, co-curricular activities, leadership programs, and life skills.", color: "bg-sky" },
  { icon: BusFrontIcon, title: "Safe Transport", description: "Our school buses are safe with GPS tracking, trained drivers, and attendants for student safety.", color: "bg-accent" },
  { icon: AwardIcon, title: "Sports Academy", description: "We offer training in sports like cricket, football, kabaddi and more co-curricular activities with skilled coaches.", color: "bg-accent" },
  { icon: Video, title: "Smart Campus", description: "Our campus includes smart classes, computer labs, online systems, and internet facilities for modern learning.", color: "bg-lavender" },
  { icon: HeartHandshake, title: "Value Education", description: "We teach good values, discipline, and social responsibility to help students become better individuals.", color: "bg-secondary" },

          
];

export function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-cream">
      <div className="section-container">
        <AnimatedSection>
          <SectionHeading
            badge="Why R.K. Mission"
            title="The Right Choice for Your Child"
            subtitle="We combine safety, strong academics, and a caring environment to help every child thrive."
          />
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {features.map((feature, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -6 }}
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 h-full"
              >
                <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-5`}>
                  <feature.icon className="h-6 w-6 text-secondary-foreground" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}