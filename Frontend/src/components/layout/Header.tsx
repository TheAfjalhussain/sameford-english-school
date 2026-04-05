import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Phone,
  Mail,
  ChevronDown,
  Youtube,
  Instagram,
  Facebook,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "../../../public/images/sfes-logo.png";

interface NavItem {
  name: string;
  path: string;
  children?: { name: string; path: string }[];
}

const navLinks: NavItem[] = [
  { name: "Home", path: "/" },
  {
    name: "About",
    path: "/about",
    children: [
      { name: "About School", path: "/about" },
      { name: "Vision & Mission", path: "/vision" },
      // { name: "Teachers", path: "/teachers" },
    ],
  },
  {
    name: "Academics",
    path: "/academics",
    children: [
      { name: "Curriculum", path: "/academics" },
      { name: "Admission", path: "/admission" },
    ],
  },
  { name: "Facilities", path: "/facilities" },
  { name: "CCA", path: "/activities" },
  { name: "Gallery", 
    path: "/gallery" ,
    children: [
      {name: "Photo Gallery", path: "/gallery"},
      {name: "Video Gallery", path: "/video"}
    ]
  },
  {
    name: "More",
    path: "#",
    children: [
      { name: "Testimonials", path: "/testimonials" },
      { name: "Notices", path: "/notices" },
      { name: "FAQ", path: "/faq" },
    ],
  },
  { name: "Contact", path: "/contact" },
];

function DesktopDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const location = useLocation();

  const isActive =
    location.pathname === item.path ||
    item.children?.some((c) => location.pathname === c.path);

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        clearTimeout(timeoutRef.current);
        setOpen(true);
      }}
      onMouseLeave={() => {
        timeoutRef.current = setTimeout(() => setOpen(false), 150);
      }}
    >
      <Link
        to={item.path === "#" ? "#" : item.path}
        onClick={(e) => {
          if (item.path === "#") e.preventDefault();
        }}
        className={`flex items-center gap-1 px-3 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
          isActive
            ? "bg-primary/15 text-primary-foreground font-bold"
            : "text-foreground/80 hover:text-foreground hover:bg-muted"
        }`}
      >
        {item.name}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </Link>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 mt-1 w-48 bg-card rounded-xl shadow-large border border-border overflow-hidden z-50"
          >
            {item.children!.map((child) => (
              <Link
                key={child.path}
                to={child.path}
                className={`block px-4 py-3 text-sm transition-colors ${
                  location.pathname === child.path
                    ? "bg-primary/10 text-foreground font-semibold"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {child.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setExpandedMobile(null);
  }, [location]);

  return (
    <>
      {/* 🔶 TOP BAR */}
      {/* Top Bar */}
       <div className="w-full bg-yellow-400 text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:+919155070907" className="flex items-center gap-2 hover:opacity-90 transition-opacity" aria-label="phone">
                <Phone className="w-4 h-4" />
                <span className="font-medium">+91 9155070907</span>
              </a>
              <a href="mailto:samefordenglishschoolnawada@gmail.com" className="flex items-center gap-2 hover:opacity-90 transition-opacity" aria-label="email">
                <Mail className="w-4 h-4" />
                <span className="font-medium">samefordenglishschoolnawada@gmail.com</span>
              </a>
              {/* <div className="hidden md:flex items-center gap-2 text-xs text-gray-800/90">
                <MapPin className="w-4 h-4" />
                <span>Check Location</span>
              </div> */}
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2 text-xs">
                <Clock className="w-4 h-4" />
                <span>Mon - Sat: 9:00 AM - 3:00 PM</span>
              </div>

              <div className="flex items-center gap-3">
                <a href="https://www.facebook.com/samefordenglishschoolnawada/" aria-label="facebook" className="hidden sm:inline-flex items-center gap-1 hover:opacity-90">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://www.instagram.com/" aria-label="instagram" className="hidden sm:inline-flex items-center gap-1 hover:opacity-90">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://www.youtube.com/@SamefordEnglishSchoolNawada" aria-label="Youtube" className="hidden sm:inline-flex items-center gap-1 hover:opacity-90">
                  <Youtube className="w-4 h-4" />
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🔷 MAIN HEADER */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-card/95 backdrop-blur-md shadow-md"
            : "bg-background"
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-20">

            {/* ✅ LOGO */}
            <Link to="/" className="flex items-center gap-3">
              <img
                src={logo}
                alt="School Logo"
                className="h-12 w-12 object-contain rounded-lg"
              />
              <span className="font-bold text-xl">
                Same Ford English School
              </span>
            </Link>

            {/* ✅ DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <DesktopDropdown key={link.name} item={link} />
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-3 py-2 rounded-lg text-sm ${
                      location.pathname === link.path
                        ? "bg-primary/15 font-bold"
                        : "hover:bg-muted"
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              )}
            </nav>

            {/* ✅ CTA */}
            <div className="hidden lg:block">
              <Link to="https://vidyaflow.apdigi.in/apply/same-ford-english-school">
                <Button className="rounded-full">Enroll Now</Button>
              </Link>
            </div>

            {/* ✅ MOBILE BUTTON */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* 📱 MOBILE MENU */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-card border-t"
            >
              <div className="p-4 space-y-2">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    {link.children ? (
                      <>
                        <button
                          onClick={() =>
                            setExpandedMobile(
                              expandedMobile === link.name ? null : link.name
                            )
                          }
                          className="w-full flex justify-between px-3 py-2"
                        >
                          {link.name}
                          <ChevronDown />
                        </button>

                        {expandedMobile === link.name && (
                          <div className="pl-4">
                            {link.children.map((child) => (
                              <Link
                                key={child.path}
                                to={child.path}
                                className="block py-2"
                              >
                                {child.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link to={link.path} className="block px-3 py-2">
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}

                <Link to="/https://vidyaflow.apdigi.in/apply/same-ford-english-school">
                  <Button className="w-full mt-3">Enroll Now</Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}