import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Layout } from "@/components/layout";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTASection } from "@/components/home/CTASection";

const testimonials = [
  { name: "Sunita Devi", role: "Mother of Rahul, Class V", content: "Sameford English School has transformed my son's confidence and academics. The teachers are dedicated and the campus is safe. Best school in Nawada.", rating: 5, avatar: "SD" },
  { name: "Rajesh Prasad", role: "Father of Priya, Class VIII", content: "The CBSE curriculum and NCERT pattern are well implemented. My daughter has shown remarkable improvement. Highly recommended.", rating: 5, avatar: "RP" },
  { name: "Kavita Singh", role: "Mother of Aditya, Class III", content: "From play class to now, the journey has been wonderful. Excellent discipline and joyful learning environment.", rating: 5, avatar: "KS" },
  { name: "Manoj Kumar", role: "Father of Sneha, Class X", content: "Board exam preparation is thorough and teachers go above and beyond. My daughter feels confident and well-prepared.", rating: 5, avatar: "MK" },
  { name: "Pooja Gupta", role: "Mother of Aryan, Class I", content: "My son loves going to school every day. The play-based approach for young children is perfect. We are very satisfied.", rating: 5, avatar: "PG" },
  { name: "Vikash Yadav", role: "Father of Ritu, Class VII", content: "Co-curricular activities alongside strong academics make this school stand out. Ritu participates in everything with enthusiasm.", rating: 5, avatar: "VY" },
];

const stats = [
  { number: "1000+", label: "Happy Students" },
  { number: "4.9", label: "Parent Rating" },
  { number: "98%", label: "Satisfaction" },
  { number: "Play–X", label: "All Classes" },
];

export default function Testimonials() {
  const [ci, setCI] = useState(0);
  const next = () => setCI((p) => (p + 1) % testimonials.length);
  const prev = () => setCI((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <Layout>
      <section className="relative py-24 bg-gradient-warm overflow-hidden">
        <div className="section-container relative">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-accent-light text-accent-foreground rounded-full text-sm font-semibold mb-4">Testimonials</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">What Parents Say About Us</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">Real stories from families who trust Sameford English School with their children's future.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="section-container">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (<StaggerItem key={i}><div className="text-center p-6"><span className="text-4xl md:text-5xl font-bold text-primary">{s.number}</span><p className="text-muted-foreground mt-2">{s.label}</p></div></StaggerItem>))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20 bg-cream overflow-hidden">
        <div className="section-container">
          <AnimatedSection><SectionHeading badge="Featured" title="Parent Stories" subtitle="Hear directly from families who chose Sameford English School." /></AnimatedSection>
          <div className="relative mt-14">
            <div className="max-w-4xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div key={ci} initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ duration: 0.5 }} className="bg-card rounded-3xl p-8 md:p-12 shadow-large relative">
                  <div className="absolute top-6 right-6 w-16 h-16 bg-primary-light rounded-2xl flex items-center justify-center opacity-50"><Quote className="h-8 w-8 text-primary" /></div>
                  <div className="flex gap-1 mb-6">{[...Array(testimonials[ci].rating)].map((_, i) => (<Star key={i} className="h-5 w-5 fill-primary text-primary" />))}</div>
                  <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 font-medium">"{testimonials[ci].content}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-bold text-lg">{testimonials[ci].avatar}</div>
                    <div><h4 className="font-heading font-bold text-foreground">{testimonials[ci].name}</h4><p className="text-muted-foreground text-sm">{testimonials[ci].role}</p></div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="flex justify-center items-center gap-4 mt-8">
              <button onClick={prev} className="w-12 h-12 rounded-full bg-card shadow-soft hover:shadow-medium flex items-center justify-center transition-all" aria-label="Previous"><ChevronLeft className="h-5 w-5" /></button>
              <div className="flex gap-2">{testimonials.map((_, i) => (<button key={i} onClick={() => setCI(i)} className={`w-3 h-3 rounded-full transition-all ${i === ci ? "bg-primary w-8" : "bg-border"}`} aria-label={`Testimonial ${i + 1}`} />))}</div>
              <button onClick={next} className="w-12 h-12 rounded-full bg-card shadow-soft hover:shadow-medium flex items-center justify-center transition-all" aria-label="Next"><ChevronRight className="h-5 w-5" /></button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="section-container">
          <AnimatedSection><SectionHeading badge="Reviews" title="More Parent Reviews" subtitle="Read what other families have to say." /></AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {testimonials.map((t, i) => (
              <StaggerItem key={i}>
                <motion.div whileHover={{ y: -6 }} className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 h-full">
                  <div className="flex gap-1 mb-4">{[...Array(t.rating)].map((_, j) => (<Star key={j} className="h-4 w-4 fill-primary text-primary" />))}</div>
                  <p className="text-foreground text-sm leading-relaxed mb-5 line-clamp-4">"{t.content}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-foreground font-bold text-sm">{t.avatar}</div>
                    <div><h4 className="font-heading font-bold text-foreground text-sm">{t.name}</h4><p className="text-muted-foreground text-xs">{t.role}</p></div>
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
