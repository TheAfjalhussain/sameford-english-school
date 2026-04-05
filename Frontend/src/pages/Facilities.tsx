import { motion} from "framer-motion";
import { Layout } from "@/components/layout";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Monitor, Shield, Bus, Utensils, TreePine, Video, Heart, BookOpen, FlaskConical, Laptop, Microscope, Trophy, Palette, Sparkles, Warehouse } from "lucide-react";
import { CTASection } from "@/components/home/CTASection";
import {
  BusFront,
  Users,
  ShieldCheck,
  MapPinned,
  Camera,
  BookOpenCheck,
} from "lucide-react";
import { useEffect, useState } from "react";
import { api, getImageUrl } from "@/api/api";

type TransportCard = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const transportData: TransportCard[] = [
  {
    icon: <BusFront className="h-8 w-8 text-white" />,
    title: "GPS-Enabled Fleet",
    description:
      "5+ buses and vans with real-time GPS tracking. monitor all routes via mobile app.",
  },
  {
    icon: <Users className="h-8 w-8 text-white" />,
    title: "Trained Staff",
    description:
      "Certified drivers, attendants on every bus, traffic wardens, and security guards for complete safety.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-white" />,
    title: "Safety Protocols",
    description:
      "First aid boxes, fire extinguishers, emergency exits, and student details available on every bus.",
  },
  {
    icon: <MapPinned className="h-8 w-8 text-white" />,
    title: "Route Planning",
    description:
      "Optimized routes designed for convenience. Students arrive at stops with parents or authorized nominees only.",
  },
  {
    icon: <Camera className="h-8 w-8 text-white" />,
    title: "CCTV Monitoring",
    description:
      "24/7 campus surveillance with CCTV cameras at all entry/exit points, corridors, and common areas.",
  },
  {
    icon: <BookOpenCheck className="h-8 w-8 text-white" />,
    title: "Bus Safety Rules",
    description:
      "School transport follows strict safety rules with no unauthorized food, no standing while moving, and proper discipline.",
  },
];

const otherFacilities = [
  { icon: Bus, title: "Transport", desc: "GPS-tracked buses covering all major routes with trained drivers and attendants." },
  { icon: Shield, title: "Safety & Security", desc: "24/7 CCTV, trained security, fire safety systems, and visitor management." },
  { icon: Warehouse, title: "Hygiene & Cleanliness", desc: "We keep our school clean, provide safe water, clean toilets, and maintain good hygiene everywhere." },
];

const stagger = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };


const safetyFeatures = [
  { icon: Video, title: "CCTV Monitoring", description: "Cameras across all areas for safety" },
  { icon: Shield, title: "Secure Entry", description: "Controlled access to campus" },
  { icon: Heart, title: "First Aid Ready", description: "Trained staff & emergency protocols" },
  { icon: Utensils, title: "Hygiene Standards", description: "Regular Cleaning of all areas" },
];

const additionalFacilities = [
  { icon: FlaskConical, title: "Science Lab", description: "Well-equipped laboratory for practical science learning and experiments" },
  { icon: Laptop, title: "Computer Lab", description: "Modern computers with internet access for digital literacy and IT education" },
  { icon: BookOpen, title: "Library", description: "Rich collection of books, reference materials, and reading space for students" },
  { icon: Bus, title: "Transport", description: "Safe school transport with trained drivers covering Nawada and nearby areas" },
];



export default function Facilities() {
  const [facilities, setFacilities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFacilities = async () => {
      try {
        setLoading(true);

        const data = await api.getFacilities();

        console.log("🔥 Facilities:", data); // ✅ debug

        setFacilities(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load facilities");
      } finally {
        setLoading(false);
      }
    };

    fetchFacilities();
  }, []);
  return (
    <Layout>
      <section className="relative py-24 bg-gradient-cool overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
        <div className="section-container relative">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-secondary-light text-secondary rounded-full text-sm font-semibold mb-4">Our Facilities</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">Modern Spaces for Growing Minds</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our thoughtfully designed facilities support learning, play, and development at every level.
            </p>
          </AnimatedSection>
        </div>
      </section>

     <section className="section-container py-10 bg-background">
      <div className="container-custom">
        <SectionHeading
          badge="Infrastructure"
          title="Modern Learning Spaces"
          subtitle="Every facility is thoughtfully designed to create the best learning environment."
        />

        {/* STATES */}
        {loading ? (
          <p className="text-center py-10">Loading facilities...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : facilities.length === 0 ? (
          <p className="text-center">No facilities found</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
            {facilities.map((f, i) => (
              <motion.div
                key={f.id}
                {...stagger}
                transition={{ delay: i * 0.08 }}
                className="card-premium overflow-hidden !p-0 group"
              >
                {/* IMAGE */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={getImageUrl(f.imageUrl)}
                    alt={f.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h3 className="font-heading font-bold text-lg mb-2">
                    {f.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>

      <section className="py-20 bg-cream">
        <div className="section-container">
          <AnimatedSection>
            <SectionHeading badge="Safety First" title="Your Child's Safety Is Our Priority" subtitle="We maintain the highest safety standards to give you complete peace of mind." />
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {safetyFeatures.map((feature, index) => (
              <StaggerItem key={index}>
                <motion.div whileHover={{ y: -6 }} className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 text-center h-full">
                  <div className="w-14 h-14 bg-secondary-light rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <feature.icon className="h-7 w-7 text-secondary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

    <section className="w-full bg-[#f8fbff] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12 text-center sm:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-[#1f3f77] sm:text-4xl lg:text-5xl">
            Transport &amp; Safety
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 via-blue-400 to-yellow-400" />

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Supreme Court compliant fleet with real-time GPS tracking
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {transportData.map((item, index) => (
            <div
              key={index}
              className="group rounded-[28px] bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_45px_rgba(15,23,42,0.12)] sm:p-7"
            >
              {/* Top pill */}
              <div className="relative mb-8 flex justify-center">
                <div className="flex h-16 w-full max-w-[320px] items-center justify-center rounded-full bg-gradient-to-r from-[#4f8ef7] to-[#5ca1ff] shadow-[0_14px_28px_rgba(79,142,247,0.25)] transform -rotate-3 transition-transform duration-300 group-hover:-rotate-2">
                  <span className="text-2xl">{item.icon}</span>
                </div>
              </div>

              <h3 className="text-center text-xl font-semibold text-slate-800 sm:text-[22px]">
                {item.title}
              </h3>

              <p className="mt-4 text-center text-sm leading-7 text-slate-500 sm:text-base">
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
            <motion.div key={f.title} {...stagger} transition={{ delay: i * 0.1 }} className="card-premium text-center">
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

    </Layout>
  );
}
