import { Layout } from "@/components/layout";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTASection } from "@/components/home/CTASection";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqCategories = [
  {
    title: "Admission",
    items: [
      { q: "What is the admission process?", a: "Submit an enquiry form, visit the campus, complete a brief interaction session, and then confirm admission with registration and fee payment." },
      { q: "What is the minimum age for Play class?", a: "Children should be at least 3 years old to join the Play class." },
      { q: "Is mid-session admission available?", a: "Yes, mid-session admission is available subject to seat availability in the respective class." },
    ],
  },
  {
    title: "Fees",
    items: [
      { q: "What is the fee structure?", a: "Fee details are available in our prospectus. You can download it from the Admission page or visit the school office." },
      { q: "Is the fee payable monthly or quarterly?", a: "Fees can be paid quarterly or annually. Monthly payment options may be available — please contact the office." },
    ],
  },
  {
    title: "Academics",
    items: [
      { q: "Which board does the school follow?", a: "Sameford English School follows the CBSE curriculum with NCERT pattern for all classes from Play to X." },
      { q: "What subjects are taught?", a: "Core subjects include English, Hindi, Mathematics, Science, Social Science, and Computer. Additional subjects vary by class level." },
    ],
  },
  {
    title: "Transport & Safety",
    items: [
      { q: "Does the school provide transport?", a: "Yes, school transport is available for students in Nawada and nearby areas with trained drivers." },
      { q: "What safety measures are in place?", a: "The campus has CCTV monitoring, secure entry, trained staff, and first-aid facilities." },
    ],
  },
  {
    title: "General",
    items: [
      { q: "What are the school timings?", a: "School hours are Monday to Saturday, 9:00 AM to 3:00 PM." },
      { q: "Is there a uniform?", a: "Yes, students are required to wear the school uniform. Details are provided at the time of admission." },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-left hover:bg-cream transition-colors">
        <span className="font-heading font-bold text-foreground pr-4">{q}</span>
        <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform flex-shrink-0 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}>
            <div className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">{a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <Layout>
      <section className="relative py-24 bg-gradient-cool overflow-hidden">
        <div className="section-container relative">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-secondary-light text-secondary rounded-full text-sm font-semibold mb-4">FAQ</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">Frequently Asked Questions</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">Find answers to common questions parents ask about Sameford English School.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="section-container max-w-3xl mx-auto">
          {faqCategories.map((cat, i) => (
            <AnimatedSection key={i} delay={i * 0.1} className="mb-12 last:mb-0">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">{cat.title}</h2>
              <div className="space-y-3">
                {cat.items.map((item, j) => (
                  <FAQItem key={j} q={item.q} a={item.a} />
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

    </Layout>
  );
}
