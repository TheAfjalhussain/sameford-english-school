import { motion } from "framer-motion";
import { Baby, Sparkles, GraduationCap, BookOpen, School } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";

const classGroups = [
  {
    icon: Baby,
    title: "Play & Nursery",
    age: "3 – 5 Years",
    description: "First steps into structured learning through play-based education",
    color: "bg-primary-light text-foreground",
    borderColor: "border-primary/20",
  },
  {
    icon: Sparkles,
    title: "Class I – V",
    age: "6 – 10 Years",
    description: "Building strong foundations in academics, values, and creativity",
    color: "bg-secondary-light text-secondary",
    borderColor: "border-secondary/20",
  },
  {
    icon: BookOpen,
    title: "Class VI – VIII",
    age: "11 – 13 Years",
    description: "Expanding knowledge with CBSE curriculum and co-curricular activities",
    color: "bg-accent-light text-accent-foreground",
    borderColor: "border-accent/20",
  },
  {
    icon: GraduationCap,
    title: "Class IX – X",
    age: "14 – 16 Years",
    description: "Board exam preparation with a focus on academic excellence",
    color: "bg-sky-light text-sky",
    borderColor: "border-sky/20",
  },
];

export function AgeGroupsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="section-container">
        <AnimatedSection>
          <SectionHeading
            badge="Our Classes"
            title="Play to Class X — Every Stage Matters"
            subtitle="From early play-based learning to board-level academics, we guide each child through their unique journey."
          />
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {classGroups.map((group, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -8 }}
                className={`card-premium border-2 ${group.borderColor} h-full`}
              >
                <div className={`w-14 h-14 rounded-2xl ${group.color} flex items-center justify-center mb-5`}>
                  <group.icon className="h-7 w-7" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">{group.title}</h3>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${group.color}`}>
                  {group.age}
                </span>
                <p className="text-muted-foreground text-sm leading-relaxed">{group.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
