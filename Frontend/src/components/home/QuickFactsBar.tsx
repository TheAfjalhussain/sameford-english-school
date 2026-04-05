import { MapPin, GraduationCap, BookOpen, Phone } from "lucide-react";
import { motion } from "framer-motion";

const facts = [
  { icon: MapPin, label: "Nawada, Bihar" },
  { icon: GraduationCap, label: "Play → Class X" },
  { icon: BookOpen, label: "CBSE Curriculum" },
  { icon: Phone, label: "Call for Enquiry" },
];

export function QuickFactsBar() {
  return (
    <section className="py-6 bg-background border-b border-border">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 md:gap-8"
        >
          {facts.map((fact, i) => (
            <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-cream">
              <fact.icon className="h-4 w-4 text-primary-dark" />
              <span className="text-sm font-medium text-foreground">{fact.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
