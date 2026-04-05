import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

const routeNames: Record<string, string> = {
  "/": "Home",
  "/about": "About",
  "/vision": "Vision & Mission",
  "/academics": "Academics",
  "/admission": "Admission",
  "/facilities": "Facilities",
  "/activities": "Activities",
  "/gallery": "Gallery",
  "/teachers": "Teachers",
  "/testimonials": "Testimonials",
  "/contact": "Contact",
  "/notices": "Notices",
  "/faq": "FAQ",
  "/blog": "Blog",
};

export function BreadcrumbNav() {
  const location = useLocation();

  if (location.pathname === "/") return null;

  const pageName = routeNames[location.pathname] || "Page";

  return (
    <nav aria-label="Breadcrumb" className="bg-cream border-b border-border">
      <div className="section-container py-3">
        <ol className="flex items-center gap-2 text-sm">
          <li>
            <Link to="/" className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
              <Home className="h-3.5 w-3.5" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
          </li>
          <li>
            <span className="font-medium text-foreground">{pageName}</span>
          </li>
        </ol>
      </div>
    </nav>
  );
}
