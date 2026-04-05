import { motion } from "framer-motion";
import { Layout } from "@/components/layout";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  Target,
  Eye,
  Heart,
  BookOpen,
  Users,
  Award,
  Quote,
} from "lucide-react";
import { CTASection } from "@/components/home/CTASection";
import priciple from "../../public/images/sameford-img/pri.png"


const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const timeline = [
  {
    year: "Foundation",
    title: "Our Humble Beginning",
    description:
      "Sameford English School was established with a vision to provide quality English-medium education to students in Baghi Bardiha Nawada and surrounding communities.",
  },
  {
    year: "Academic Growth",
    title: "Expanding Educational Excellence",
    description:
      "The school expanded its curriculum and infrastructure, introducing classes up to Class X with a strong CBSE-based academic framework.",
  },
  {
    year: "Modern Facilities",
    title: "Building a Future-Ready Campus",
    description:
      "Smart classrooms, laboratories, computer labs, and others co-curricular activities based learning environments were introduced to enhance student learning.",
  },
  {
    year: "Today",
    title: "A Trusted Educational Institution",
    description:
      "Today, Sameford English School proudly serves hundreds of Students, providing holistic education focused on academic success and character building.",
  },
];

const values = [
  {
    icon: Heart,
    title: "Care & Discipline",
    description:
      "We nurture students in a caring and disciplined environment that promotes respect, responsibility, and strong moral values.",
  },
  {
    icon: BookOpen,
    title: "Academic Excellence",
    description:
      "Our CBSE-aligned curriculum ensures strong academic foundations while encouraging curiosity and lifelong learning.",
  },
  {
    icon: Users,
    title: "Strong Community",
    description:
      "We build meaningful relationships among students, parents, and teachers to create a supportive educational ecosystem.",
  },
  {
    icon: Award,
    title: "Holistic Development",
    description:
      "We focus on intellectual, emotional, physical, and social development to shape confident and responsible individuals.",
  },
];

export default function About() {
  return (
    <Layout>

      {/* HERO SECTION */}

      <section className="relative py-28 bg-gradient-warm overflow-hidden">

        <div className="absolute top-20 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-secondary/10 rounded-full blur-3xl" />

        <div className="section-container relative">

          <AnimatedSection className="text-center max-w-4xl mx-auto">

            <span className="inline-block px-5 py-3 bg-primary-light text-foreground rounded-full text-lg font-semibold mb-6">
              About Sameford English School
            </span>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Shaping Young Minds <br /> For a Brighter Future
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              
               A Legacy of Excellence <b>SAMEFORD ENGLISH SCHOOL, NAWADA,</b> is established under Anandi Welfare Educational Trust in 2023. Located near Baghi Bardiha around 12km to Nawada District Head quarter, Warisaliganj and Pakribrama. We are nurturing a community of 1000 future leaders.
               <br /><br />
               <p>
              Our motto is 'Service Before Self'
             Within 3 years we set a benchmark in the field of education. We are making our students 'Bold, Patriot and the best resource of our beautiful great nation India.
            </p>
            </p>

          </AnimatedSection>

        </div>

      </section>

      {/* VISION & MISSION */}

      <section className="py-24 bg-background">

        <div className="section-container">

          <div className="grid md:grid-cols-2 gap-12">

            <AnimatedSection direction="left">

              <div className="bg-primary-light rounded-3xl p-10 h-full shadow-card">

                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="h-8 w-8 text-primary-foreground" />
                </div>

                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Our Vision
                </h2>

                <p className="text-muted-foreground leading-relaxed">
                  Our vision is to become a leading school that inspires students to dream big, think smart, and act responsibly. 
                  We want to build confident students who grow into good citizens and contribute positively to society and the nation.
                </p>

              </div>

            </AnimatedSection>

            <AnimatedSection direction="right">

              <div className="bg-secondary-light rounded-3xl p-10 h-full shadow-card">

                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-secondary-foreground" />
                </div>

                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Our Mission
                </h2>

                <p className="text-muted-foreground leading-relaxed">
                  Our mission is to provide a safe, supportive, and motivating environment where students can learn and grow.
                  We focus on academic excellence, creativity, and strong moral values, so students are ready for future challenges.
                </p>

              </div>

            </AnimatedSection>

          </div>

        </div>

      </section>

      {/* PRINCIPAL MESSAGE */}

      <section className="py-20 bg-cream">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeInUp}>
            <div className="relative">
              <img src={priciple} alt="Principal" className="rounded-3xl w-full h-auto max-w-md mx-auto" loading="lazy" style={{ boxShadow: "var(--shadow-elevated)" }} />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-gold/20 -z-10" />
            </div>
          </motion.div>
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <SectionHeading title="Principal Message"/>
            <div className='px-6 md:px-0'>
              <Quote className="w-6 h-6 text-gold/40 mb-4" />
            <p className="text-muted-foreground leading-relaxed mb-4">
              "At SAME FORD ENGLISH SCHOOL, We value individualism, creativity and innovation and strive to nurture them in our students. The perpetual energy, movement & enthusiasm permeate the atmosphere at our school."
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              "
            The School’s genuine concern ensures student’s emotional growth along with intellectual excellence. This empowers them to develop their self-esteem, self-awareness and self- confidence. Sharing ideas, analyzing situations and expressing them confidently are essential skills which are honed here, through Experiential Learning."
           </p>
            <div>
              <p className="font-heading font-bold text-foreground">Ravi Kumar Jha</p>
              <p className="text-sm text-muted-foreground">Principal, Same Ford English school</p>
            </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

      {/* VALUES */}

      <section className="py-24 bg-background">

        <div className="section-container">

          <AnimatedSection>

            <SectionHeading
              badge="Our Core Values"
              title="Principles That Guide Us"
              subtitle="The foundation of our educational philosophy and daily practices."
            />

          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

            {values.map((value, index) => (

              <StaggerItem key={index}>

                <motion.div
                  whileHover={{ y: -6 }}
                  className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 text-center h-full"
                >

                  <div className="w-14 h-14 bg-primary-light rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>

                  <h3 className="font-heading text-lg font-bold text-foreground mb-3">
                    {value.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>

                </motion.div>

              </StaggerItem>

            ))}

          </StaggerContainer>

        </div>

      </section>

      {/* TIMELINE */}

      <section className="py-24 bg-gradient-warm">

        <div className="section-container">

          <AnimatedSection>

            <SectionHeading
              badge="Our Journey"
              title="Milestones of Growth"
              subtitle="Key moments that shaped the success of Sameford English School."
            />

          </AnimatedSection>

          <div className="max-w-4xl mx-auto mt-16">

            <div className="relative">

              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 hidden md:block" />

              {timeline.map((item, index) => (

                <AnimatedSection key={index} delay={index * 0.1}>

                  <div className={`flex items-center gap-8 mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>

                    <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>

                      <div className="bg-card rounded-2xl p-6 shadow-card inline-block">

                        <span className="text-primary font-bold text-lg">
                          {item.year}
                        </span>

                        <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                          {item.title}
                        </h3>

                        <p className="text-muted-foreground text-sm">
                          {item.description}
                        </p>

                      </div>

                    </div>

                    <div className="w-4 h-4 bg-primary rounded-full hidden md:block relative z-10" />

                    <div className="flex-1 hidden md:block" />

                  </div>

                </AnimatedSection>

              ))}

            </div>

          </div>

        </div>

      </section>

    </Layout>
  );
}