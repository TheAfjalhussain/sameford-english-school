import { Award, BookOpen, GraduationCap, Quote, Shield, Star, Users } from 'lucide-react';
import React from 'react'
import { SectionHeading } from '../ui/section-heading';
import { stagger } from 'framer-motion';
import { motion } from "framer-motion";
import dir from "../../../public/images/sameford-img/dir.png";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

export function About() {
  return (
    <div>
         {/* Director Message */}
    <section className="py-20 bg-background">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeInUp}>
            <div className="relative">
              <img src={dir} alt="Principal" className="rounded-3xl w-full h-auto max-w-md mx-auto" loading="lazy" style={{ boxShadow: "var(--shadow-elevated)" }} />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-gold/20 -z-10" />
            </div>
          </motion.div>
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <SectionHeading badge="From the Director" title="A Message of Trust"/>
            <div className='px-6 md:px-0'>
              <Quote className="w-6 h-6 text-gold/40 mb-4" />
            <p className="text-muted-foreground leading-relaxed mb-4">
              "At Same Ford English School, we believe that education is not just about academic excellence but about igniting a passion for lifelong learning.
               Our mission is to provide an environment where every student feels empowered to explore their potential, embrace innovation, and develop the character needed to lead in an ever-changing world."
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              " Together with our dedicated faculty and supportive parents, we are shaping the global citizens of tomorrow."
            </p>
            <div>
              <p className="font-heading font-bold text-foreground">Vinita Kumari</p>
              <p className="text-sm font-bold text-muted-foreground">Director, Same Ford English school</p>
            </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    </div>
  )
}

