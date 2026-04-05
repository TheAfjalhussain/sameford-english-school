import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";

const testimonials = [
  { name: "Sunita Devi", role: "Mother of Rahul, Class V", content: "Sameford English School has transformed my son's confidence. The teachers are very dedicated and the environment is safe and supportive. We are very happy with our choice.", rating: 5, avatar: "SD" },
  { name: "Rajesh Prasad", role: "Father of Priya, Class VIII", content: "The CBSE curriculum and NCERT pattern are well implemented. My daughter has shown remarkable academic improvement since joining. The school truly cares about each student.", rating: 5, avatar: "RP" },
  { name: "Kavita Singh", role: "Mother of Aditya, Class III", content: "From play class to now, the journey has been wonderful. The school maintains excellent discipline while keeping learning joyful. I recommend it to every parent in Nawada.", rating: 5, avatar: "KS" },
  { name: "Manoj Kumar", role: "Father of Sneha, Class X", content: "The board exam preparation is thorough and the teachers go above and beyond. My daughter feels well-prepared and confident. R.K. Mission is the best school in Nawada.", rating: 5, avatar: "MK" },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const next = () => setCurrentIndex((p) => (p + 1) % testimonials.length);
  const prev = () => setCurrentIndex((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 bg-cream overflow-hidden">
      <div className="section-container">
        <AnimatedSection>
          <SectionHeading badge="Testimonials" title="What Parents Say About Us" subtitle="Real stories from families who trust Sameford English School." />
        </AnimatedSection>

        <div className="relative mt-14">
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="bg-card rounded-3xl p-8 md:p-12 shadow-large relative"
              >
                <div className="absolute top-6 right-6 w-16 h-16 bg-primary-light rounded-2xl flex items-center justify-center opacity-50">
                  <Quote className="h-8 w-8 text-primary" />
                </div>
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 font-medium">
                  "{testimonials[currentIndex].content}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-bold text-lg">
                    {testimonials[currentIndex].avatar}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-foreground">{testimonials[currentIndex].name}</h4>
                    <p className="text-muted-foreground text-sm">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center items-center gap-4 mt-8">
            <button onClick={prev} className="w-12 h-12 rounded-full bg-card shadow-soft hover:shadow-medium flex items-center justify-center transition-all hover:-translate-x-1" aria-label="Previous testimonial">
              <ChevronLeft className="h-5 w-5 text-foreground" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button key={index} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? "bg-primary w-8" : "bg-border hover:bg-muted-foreground"}`} aria-label={`Go to testimonial ${index + 1}`} />
              ))}
            </div>
            <button onClick={next} className="w-12 h-12 rounded-full bg-card shadow-soft hover:shadow-medium flex items-center justify-center transition-all hover:translate-x-1" aria-label="Next testimonial">
              <ChevronRight className="h-5 w-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
