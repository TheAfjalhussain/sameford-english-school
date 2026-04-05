import { Layout } from "@/components/layout";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTASection } from "@/components/home/CTASection";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  { title: "5 Tips to Prepare Your Child for School", excerpt: "Starting school is a big milestone. Here are practical tips to make the transition smooth and joyful for your little one.", date: "Feb 28, 2025", category: "Parenting", slug: "#" },
  { title: "Why CBSE Curriculum Is Best for Early Learners", excerpt: "Understanding the benefits of CBSE curriculum and NCERT pattern for building strong academic foundations.", date: "Feb 15, 2025", category: "Education", slug: "#" },
  { title: "The Importance of Co-Curricular Activities", excerpt: "How sports, art, and music contribute to your child's overall development beyond textbooks.", date: "Jan 30, 2025", category: "Education", slug: "#" },
  { title: "Annual Day Celebrations 2025 — A Grand Success!", excerpt: "A look back at the colourful performances, awards, and memorable moments from our Annual Day.", date: "Jan 20, 2025", category: "School News", slug: "#" },
  { title: "How to Help Your Child Excel in Board Exams", excerpt: "Expert advice from our teachers on effective study habits and stress management for Class X students.", date: "Jan 10, 2025", category: "Education", slug: "#" },
  { title: "Republic Day Celebration at Sameford English School", excerpt: "Students performed patriotic songs, dances, and speeches marking a proud Republic Day celebration.", date: "Jan 26, 2025", category: "School News", slug: "#" },
];

export default function Blog() {
  return (
    <Layout>
      <section className="relative py-24 bg-gradient-warm overflow-hidden">
        <div className="section-container relative">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-primary-light text-foreground rounded-full text-sm font-semibold mb-4">Blog</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">News & Insights</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">Parenting tips, school updates, and educational insights from Sameford English School.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="section-container">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <StaggerItem key={i}>
                <div className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 h-full flex flex-col">
                  <div className="h-48 bg-gradient-warm flex items-center justify-center">
                    <span className="text-4xl">📝</span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-primary-light text-foreground rounded-full text-xs font-semibold">{post.category}</span>
                      <span className="flex items-center gap-1 text-muted-foreground text-xs"><Calendar className="h-3 w-3" />{post.date}</span>
                    </div>
                    <h3 className="font-heading text-lg font-bold text-foreground mb-3">{post.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                    <a href={post.slug} className="inline-flex items-center text-secondary font-semibold text-sm hover:gap-2 transition-all gap-1">
                      Read More <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
