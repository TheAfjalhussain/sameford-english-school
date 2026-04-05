import { motion } from "framer-motion";
import { Layout } from "@/components/layout";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Phone, Mail, MapPin, Clock, Send, PhoneIcon } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  { icon: Mail, title: "Email", details: ["samefordenglishschoolnawada@gmail.com", "samefordenglishschoolnawada@yahoo.com"], action: "mailto:samefordenglishschoolnawada@gmail.com" },
  { icon: MapPin, title: "Address", details: ["Baghi Bardiha Mode, Vikas Nagar, Nawada", "Nawada - 805132"], action: "" },
  { icon: PhoneIcon, title: "Phone", details: ["9155070907     ||     9199118105"], action: "" },
  { icon: Clock, title: "School Hours", details: ["Monday – Saturday: 9:00 AM – 3:00 PM", "Office: 8:00 AM – 4:00 PM"], action: null },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", relation: "", phone: "", email: "", childAge: "", preferredTime: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your enquiry! We'll get back to you soon.");
    setFormData({ name: "", relation: "", phone: "", email: "", childAge: "", preferredTime: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      <section className="relative py-24 bg-gradient-cool overflow-hidden">
        <div className="section-container relative">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-secondary-light text-secondary rounded-full text-sm font-semibold mb-4">Contact Us</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">We'd Love to Hear from You</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Have questions about admissions, want to schedule a campus visit, or need more information? Reach out to us.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-background">
  <div className="section-container">
    <div className="grid lg:grid-cols-2 gap-12 items-start">

      {/* 🔥 FULL ENQUIRY FORM */}
      <AnimatedSection direction="left">
        <div className="bg-card rounded-3xl shadow-large overflow-hidden border">

          {/* Header */}
          <div className="p-6 border-b bg-primary text-primary-foreground">
            <h2 className="text-2xl font-bold">
              Online Enquiry Form
            </h2>
            <p className="text-sm opacity-90">
              Fill the form below for admission enquiry
            </p>
          </div>

          {/* Embedded Form */}
          <div className="w-full h-auto ">
            <iframe
              src="https://vidyaflow.apdigi.in/enquiry/same-ford-english-school"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              title="School Enquiry Form"
            />
          </div>

        </div>
      </AnimatedSection>

      {/* CONTACT INFO */}
      <div className="space-y-8">

        <AnimatedSection>
          <SectionHeading
            title="Get in Touch"
            subtitle="Reach out through any of these channels."
            centered={false}
          />
        </AnimatedSection>

        <StaggerContainer className="space-y-5">
          {contactInfo.map((info, i) => (
            <StaggerItem key={i}>
              <motion.div
                whileHover={{ y: -4 }}
                className="flex items-start gap-4 p-6 bg-cream rounded-2xl shadow-sm hover:shadow-md transition-all"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <info.icon className="h-6 w-6 text-primary" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">
                    {info.title}
                  </h3>
                  {info.details.map((d, j) => (
                    <p key={j} className="text-muted-foreground text-sm leading-relaxed">
                      {d}
                    </p>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </div>
  </div>
</section>

      <section className="py-16 bg-cream">
  <div className="section-container">
    <AnimatedSection>
      <div className="relative rounded-3xl overflow-hidden shadow-large">

        {/* Google Map */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.156106179621!2d85.6409178!3d24.9267514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2559b7439aeef%3A0xb45cdf2d54026cc7!2sSame%20Ford%20English%20school!5e0!3m2!1sen!2sin!4v1775198894459!5m2!1sen!2sin"
          className="w-full h-[400px] md:h-[500px] border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        ></iframe>

      </div>
    </AnimatedSection>
  </div>
</section>
    </Layout>
  );
}
