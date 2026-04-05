import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { Layout } from "@/components/layout";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTASection } from "@/components/home/CTASection";

import { api, getImageUrl } from "@/api/api";
import { log } from "console";

// Animation
const stagger = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function Activities() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch data
  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const data = await api.getActivities();
        setActivities(data);
        console.log(data)
      } catch (err) {
        console.error(err);
        setError("Failed to load activities");
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
  }, []);

  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="relative py-24 bg-gradient-warm overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />

        <div className="section-container relative">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-accent-light text-accent-foreground rounded-full text-sm font-semibold mb-4">
              Co-curricular activities
            </span>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Beyond the Classroom
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              A rich variety of co-curricular and extra-curricular activities
              that build confidence, creativity, and character.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ACTIVITIES SECTION */}
      <div className="py-12">
        <section className="section-padding bg-background">
          <div className="section-container">
            <SectionHeading
              badge="Co-Curricular Activities"
              title="Activities That Shape Character"
              subtitle="We believe education extends far beyond the classroom."
            />

            {/* 🔥 STATES HANDLING */}
            {loading ? (
              <p className="text-center py-10">Loading activities...</p>
            ) : error ? (
              <p className="text-center text-red-500 py-10">{error}</p>
            ) : activities.length === 0 ? (
              <p className="text-center py-10">No activities found.</p>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6 md:pt-8">
                {activities.map((a, i) => (
                  <motion.div
                    key={a.id}
                    {...stagger}
                    transition={{ delay: i * 0.08 }}
                    className="card-premium overflow-hidden !p-0 group"
                  >
                    {/* IMAGE */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={
                          getImageUrl(a.imageUrl) ||
                          "/fallback.jpg" // optional fallback
                        }
                        alt={a.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                    </div>

                    {/* CONTENT */}
                    <div className="p-5">
                      <h3 className="font-heading font-bold text-lg mb-1">
                        {a.title}
                      </h3>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {a.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>

    </Layout>
  );
}