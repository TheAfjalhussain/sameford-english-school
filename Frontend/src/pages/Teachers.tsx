import { motion } from "framer-motion";
import { Layout } from "@/components/layout";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Award, Heart, GraduationCap } from "lucide-react";
import { CTASection } from "@/components/home/CTASection";
import teacher1 from "@/assets/teacher-1.jpg";
import teacher2 from "@/assets/teacher-2.jpg";
import teacher3 from "@/assets/teacher-3.jpg";

const teachers = [
  { name: "Mrs. Rani Kumari", role: "Senior Teacher — Mathematics", image: teacher1, qualification: "M.Sc., B.Ed.", experience: "12+ years experience", bio: "Passionate about making mathematics accessible and enjoyable for every student." },
  { name: "Mr. Anil Kumar", role: "Science Teacher — Physics & Chemistry", image: teacher2, qualification: "M.Sc. Physics, B.Ed.", experience: "10+ years experience", bio: "Brings science to life through practical experiments and interactive teaching." },
  { name: "Mrs. Sunita Singh", role: "Primary Section Head", image: teacher3, qualification: "M.A. Education, B.Ed.", experience: "15+ years experience", bio: "Dedicated to building strong foundations in the primary years with care and expertise." },
  { name: "Mrs. Rani Kumari", role: "Senior Teacher — Mathematics", image: teacher1, qualification: "M.Sc., B.Ed.", experience: "12+ years experience", bio: "Passionate about making mathematics accessible and enjoyable for every student." },
  { name: "Mr. Anil Kumar", role: "Science Teacher — Physics & Chemistry", image: teacher2, qualification: "M.Sc. Physics, B.Ed.", experience: "10+ years experience", bio: "Brings science to life through practical experiments and interactive teaching." },
  { name: "Mrs. Sunita Singh", role: "Primary Section Head", image: teacher3, qualification: "M.A. Education, B.Ed.", experience: "15+ years experience", bio: "Dedicated to building strong foundations in the primary years with care and expertise." },
];

const values = [
  { icon: GraduationCap, title: "Qualified Educators", description: "All teachers hold relevant degrees and professional teaching certifications." },
  { icon: Heart, title: "Passionate & Caring", description: "Our team genuinely cares about every student's academic and personal growth." },
  { icon: Award, title: "Continuous Development", description: "Regular training keeps our teachers updated with modern pedagogy." },
];

export default function Teachers() {
  return (
    <Layout>
      <section className="relative py-24 bg-gradient-cool overflow-hidden">
        <div className="section-container relative">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-secondary-light text-secondary rounded-full text-sm font-semibold mb-4">Our Team</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">Meet Our Dedicated Teachers</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Experienced, qualified, and passionate educators committed to shaping young minds at Sameford English School.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="section-container">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <StaggerItem key={i}>
                <div className="flex items-center gap-4 p-6 bg-cream rounded-2xl">
                  <div className="w-14 h-14 bg-primary-light rounded-2xl flex items-center justify-center flex-shrink-0">
                    <v.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div><h3 className="font-heading font-bold text-foreground mb-1">{v.title}</h3><p className="text-muted-foreground text-sm">{v.description}</p></div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="section-container">
          <AnimatedSection><SectionHeading badge="Faculty" title="Our Expert Educators" subtitle="Get to know the dedicated professionals behind Sameford English School." /></AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
            {teachers.map((t, i) => (
              <StaggerItem key={i}>
                <motion.div whileHover={{ y: -8 }} className="bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300">
                  <div className="aspect-square overflow-hidden"><img src={t.image} alt={t.name} className="w-full h-full object-cover" loading="lazy" /></div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold text-foreground mb-1">{t.name}</h3>
                    <p className="text-secondary font-medium text-sm mb-3">{t.role}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{t.bio}</p>
                    <div className="space-y-2">
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

    </Layout>
  );
}
