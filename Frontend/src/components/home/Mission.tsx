import { BookOpen, Bus, Shield, Sparkles, Trophy, Users, Warehouse } from 'lucide-react';
import React from 'react'
import { SectionHeading } from '../ui/section-heading';
import { cleanDirtyNodes, motion } from 'framer-motion';

const otherFacilities = [
  { icon: Bus, title: "Transport", desc: "GPS-tracked buses covering all major routes with trained drivers and attendants." },
  { icon: Shield, title: "Safety & Security", desc: "24/7 CCTV, trained security, fire safety systems, and visitor management." },
  { icon: Warehouse, title: "Hygiene & Cleanliness", desc: "We keep our school clean, provide safe water, clean toilets, and maintain good hygiene everywhere." },
];

const stagger = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const missionData = [
    {
      icon: <BookOpen size={40} className="text-orange-500" />,
      title: "Academic Excellence",
      description:
        "National curriculum designed to challenge and inspire students to reach their full potential.",
    },
    {
      icon: <Users size={40} className="text-orange-500" />,
      title: "Community Focus",
      description:
      "We build strong relationships and create a sense of belonging within our school community."
    },
    {
      icon: <Trophy size={40} className="text-orange-500" />,
      title: "Future Ready",
      description:
        "Preparing students with 21st-century skills for success in an evolving world.",
    },
  ];

export function Mission() {
  return (
    <div>
      <section className="bg-gray-50 py-16 px-4 md:px-10">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          Our Mission
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
          To provide a nurturing environment where every student can discover
          their potential, develop critical thinking skills, and become
          confident, compassionate leaders.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {missionData.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex justify-center mb-4">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>


    <section className="py-10 bg-cream">
      <div className="section-container pb-6 md:pb-8">
        <SectionHeading badge="Safety & Support" title="Care Beyond Classrooms" />
        <div className="grid md:grid-cols-3 gap-6 pt-6 md:pt-8">
          {otherFacilities.map((f, i) => (
            <motion.div key={f.title} {...stagger} transition={{ delay: i * 0.1 }} className="z-10 card-premium text-center">
              <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-4">
                <f.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}