import { Link } from "react-router-dom";
import { ArrowRight, FileText, Calendar } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { PremiumButton } from "@/components/ui/premium-button";

const notices = [
  { title: "Admission Open for Session 2025-26", date: "March 1, 2025", category: "Admissions" },
  { title: "Annual Sports Day — April 15", date: "Feb 20, 2025", category: "Events" },
  { title: "Parent-Teacher Meeting Schedule", date: "Feb 10, 2025", category: "Academic" },
];

export function NoticesPreview() {
  return (
    <section className="py-20 bg-muted">
      <div className="section-container">
        <AnimatedSection>
          <SectionHeading badge="Latest" title="Notices & Updates" subtitle="Stay informed about the latest happenings at Sameford English School." />
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
          {notices.map((notice, index) => (
            <StaggerItem key={index}>
              <div className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 h-full">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-primary-light text-foreground rounded-full text-xs font-semibold">{notice.category}</span>
                </div>
                <h3 className="font-heading font-bold text-foreground mb-3">{notice.title}</h3>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>{notice.date}</span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection delay={0.4} className="text-center mt-12">
          <Link to="/notices">
            <PremiumButton variant="outline" className="group">
              View All Notices
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </PremiumButton>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
