import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { PremiumButton } from "@/components/ui/premium-button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "What curriculum does Sameford English School follow?", a: "We follow the CBSE curriculum with NCERT pattern, ensuring a nationally recognized and comprehensive education from Play to Class X." },
  { q: "What is the admission process?", a: "Fill out the enquiry form, visit the campus, attend a brief interaction session, and complete the enrollment. Admissions are open for 2025-26." },
  { q: "What safety measures are in place?", a: "Our campus has CCTV surveillance, secure entry/exit, trained staff, first-aid facilities, and strict visitor protocols." },
  { q: "Is transport available?", a: "Yes, we provide safe school transport covering major areas in and around Nawada with GPS-tracked vehicles." },
  { q: "What are the school timings?", a: "School operates Monday to Saturday, 9:00 AM to 3:00 PM. Specific timings may vary by class group." },
  { q: "Are there extracurricular activities?", a: "Yes — sports, music, art, dance, debates, quizzes, annual events, and field trips are integral to our programme." },
];

export function FAQPreview() {
  return (
    <section className="py-20 bg-cream">
      <div className="section-container">
        <AnimatedSection>
          <SectionHeading
            badge="FAQ"
            title="Common Questions"
            subtitle="Quick answers to what parents ask most."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="max-w-3xl mx-auto mt-14">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border border-border px-6 shadow-card">
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>

        <AnimatedSection delay={0.4} className="text-center mt-12">
          <Link to="/faq">
            <PremiumButton variant="outline" className="group">
              View All FAQs
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </PremiumButton>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
