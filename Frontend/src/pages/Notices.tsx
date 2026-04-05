import { Layout } from "@/components/layout";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Calendar } from "lucide-react";
import { CTASection } from "@/components/home/CTASection";
import { useEffect, useState } from "react";
import { api } from "@/api/api";

const categories = ["All", "Academic", "Events", "Admissions"];

export default function Notices() {
  const [notices, setNotices] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch notices
  useEffect(() => {
    const fetchNotices = async () => {
      try {
        setLoading(true);

        const data = await api.getActivities();
        setNotices(data);
        console.log(data)

        setNotices(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load notices");
      } finally {
        setLoading(false);
      }
    };

    fetchNotices();
  }, [activeCategory, searchTerm]);

  return (
    <Layout>
      {/* HERO */}
      <section className="relative py-24 bg-gradient-warm overflow-hidden">
        <div className="section-container relative">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-primary-light text-foreground rounded-full text-sm font-semibold mb-4">
              Notices
            </span>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Notices & Updates
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Stay informed about the latest happenings at Sameford English School.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 bg-background">
        <div className="section-container max-w-4xl mx-auto">

          {/* 📂 CATEGORY FILTER */}
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1 rounded-full text-sm ${
                  activeCategory === cat
                    ? "bg-primary text-white"
                    : "bg-muted"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* 📋 NOTICE LIST */}
          <div className="space-y-4">
            {loading ? (
              <p className="text-center py-10">Loading notices...</p>
            ) : error ? (
              <p className="text-center text-red-500">{error}</p>
            ) : notices.length === 0 ? (
              <p className="text-center py-10">
                No notices found matching your criteria.
              </p>
            ) : (
              notices.map((notice, i) => (
                <AnimatedSection key={notice.id} delay={i * 0.05}>
                  <div className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">

                        {/* CATEGORY + DATE */}
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-3 py-1 bg-primary-light text-foreground rounded-full text-xs font-semibold">
                            {notice.category}
                          </span>

                          <span className="flex items-center gap-1 text-muted-foreground text-xs">
                            <Calendar className="h-3 w-3" />
                            {notice.date}
                          </span>
                        </div>

                        {/* TITLE */}
                        <h3 className="font-heading font-bold text-foreground mb-2">
                          {notice.title}
                        </h3>

                        {/* DESCRIPTION */}
                        <p className="text-muted-foreground text-sm">
                          {notice.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))
            )}
          </div>
        </div>
      </section>

    </Layout>
  );
}