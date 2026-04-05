import { motion } from "framer-motion";
import { Calendar, Phone, ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/ui/animated-section";
import { PremiumButton } from "@/components/ui/premium-button";

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-sunset relative overflow-hidden">
      <div className="absolute top-10 left-10 w-32 h-32 bg-background/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-background/10 rounded-full blur-3xl" />

      <div className="section-container relative">
        <AnimatedSection className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            Ready to Give Your Child the Best Start?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-foreground/80 mb-4 max-w-2xl mx-auto"
          >
            Secure a seat — limited for each class. Book a campus visit to see our classrooms in action.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-sm text-foreground/70 mb-10"
          >
            Download prospectus for fee details & curriculum.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link to="/admission">
              <PremiumButton size="lg" className="bg-card text-foreground hover:bg-card/90 group">
                Enroll Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </PremiumButton>
            </Link>
            <Link to="/contact">
              <PremiumButton variant="outline" size="lg" className="border-foreground text-foreground hover:bg-foreground/10">
                <Calendar className="mr-2 h-5 w-5" />
                Book a Visit
              </PremiumButton>
            </Link>
            <PremiumButton variant="ghost" size="lg" className="text-foreground hover:bg-foreground/10">
              <Download className="mr-2 h-5 w-5" />
              Download Prospectus
            </PremiumButton>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
