import { motion } from "framer-motion";
import { Layout } from "@/components/layout";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { BookOpen, GraduationCap, FlaskConical, Laptop, Award, Target } from "lucide-react";
import { CTASection } from "@/components/home/CTASection";

const curriculumHighlights = [
  { icon: BookOpen, title: "CBSE Curriculum", description: "Following the Central Board of Secondary Education guidelines for comprehensive, standardised education." },
  { icon: GraduationCap, title: "NCERT Pattern", description: "All subjects taught using NCERT textbooks and resources for board-aligned learning." },
  { icon: FlaskConical, title: "Practical Learning", description: "Science labs, computer labs, and hands-on projects bring textbook concepts to life." },
  { icon: Laptop, title: "Digital Literacy", description: "Computer education from primary level to build essential technology skills." },
];

const classWise = [
  { group: "Play & Nursery", subjects: "English, Hindi, EVS, Numbers, Art, Rhymes, Physical Play", approach: "Play-based, Montessori-inspired, activity-driven learning" },
  { group: "Class I – V", subjects: "English, Hindi, Mathematics, EVS/Science, Social Studies, Computer, GK, Art, PT", approach: "Foundation building with NCERT curriculum, regular assessments" },
  { group: "Class VI – VIII", subjects: "English, Hindi, Mathematics, Science, Social Science, Computer, Sanskrit (optional)", approach: "Conceptual learning, lab work, project-based assessments" },
  { group: "Class IX – X", subjects: "English, Hindi, Mathematics, Science, Social Science + Board subjects", approach: "Board exam focused, intensive revision, test series, career guidance" },
];

const assessmentMethods = [
  { icon: Target, title: "Regular Tests", description: "Weekly and monthly assessments to track progress and identify areas for improvement." },
  { icon: Award, title: "Board Preparation", description: "Structured exam preparation for Class X boards with sample papers and revision." },
];

export default function Academics() {
  return (
    <Layout>
      <section className="relative py-24 bg-gradient-cool overflow-hidden">
        <div className="section-container relative">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-secondary-light text-secondary rounded-full text-sm font-semibold mb-4">Academics</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">Strong Academics, Bright Futures</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              CBSE curriculum with NCERT pattern — building strong academic foundations from Play class to board exams.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="section-container">
          <AnimatedSection><SectionHeading badge="Curriculum" title="What Makes Our Academics Stand Out" subtitle="A structured, quality-driven approach to education." /></AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {curriculumHighlights.map((h, i) => (
              <StaggerItem key={i}>
                <motion.div whileHover={{ y: -6 }} className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 h-full text-center">
                  <div className="w-14 h-14 bg-primary-light rounded-2xl flex items-center justify-center mx-auto mb-5"><h.icon className="h-7 w-7 text-primary" /></div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-3">{h.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{h.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="section-container">
          <AnimatedSection><SectionHeading badge="Class-wise" title="Syllabus & Subjects" subtitle="Here's what students learn at each level." /></AnimatedSection>
          <div className="mt-14 space-y-6 max-w-4xl mx-auto">
            {classWise.map((c, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-card rounded-2xl p-6 shadow-card">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">{c.group}</h3>
                  <p className="text-muted-foreground text-sm mb-3"><strong>Subjects:</strong> {c.subjects}</p>
                  <p className="text-muted-foreground text-sm"><strong>Approach:</strong> {c.approach}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="section-container">
          <AnimatedSection><SectionHeading badge="Assessment" title="How We Measure Progress" subtitle="Regular assessments ensure every student stays on track." /></AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14 max-w-3xl mx-auto">
            {assessmentMethods.map((m, i) => (
              <StaggerItem key={i}>
                <motion.div whileHover={{ y: -6 }} className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300">
                  <div className="w-16 h-16 bg-secondary-light rounded-2xl flex items-center justify-center mb-5"><m.icon className="h-8 w-8 text-secondary" /></div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">{m.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{m.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

    </Layout>
  );
}
