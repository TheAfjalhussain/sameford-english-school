import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  MailIcon,
} from "lucide-react";
import logo from "../../../public/images/sfes-logo.png";

const quickLinks = [
  { name: "About Us", path: "/about" },
  { name: "Vision & Mission", path: "/vision" },
  { name: "Academics", path: "/academics" },
  { name: "Admission", path: "/admission" },
  { name: "Facilities", path: "/facilities" },
  { name: "Gallery", path: "/gallery" },
];

const moreLinks = [
  { name: "CCA", path: "/activities" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Notices", path: "/notices" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact Us", path: "/contact" },
];

const socialLinks = [
  {
    icon: Facebook,
    link: "https://www.facebook.com/samefordenglishschoolnawada/",
  },
  {
    icon: Instagram,
    link: "https://www.instagram.com/", // update with real link
  },
  {
    icon: Twitter,
    link: "https://twitter.com/", // update with real link
  },
  {
    icon: Youtube,
    link: "https://www.youtube.com/@SamefordEnglishSchoolNawada",
  },
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* BRAND */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={logo}
                alt="Sameford English School Logo"
                className="h-12 w-12 object-contain rounded-xl bg-white p-1"
              />
              <div>
                <h3 className="font-bold text-lg leading-tight">
                  Same Ford English School
                </h3>
              </div>
            </Link>

            <p className="text-sm text-gray-400 leading-relaxed">
              CBSE Curriculum • NCERT Pattern • Play to Class X.
              We focus on academic excellence, discipline, and holistic growth.
            </p>

            {/* SOCIAL */}
            <div className="flex gap-3">
              {socialLinks.map((item, i) => {
                const Icon = item.icon;
                return (
                  <a
                    key={i}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary hover:scale-110 transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-all duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* MORE LINKS */}
          <div>
            <h4 className="font-semibold text-lg mb-6">More</h4>
            <ul className="space-y-3">
              {moreLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-all duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Us</h4>

            <div className="space-y-4 text-sm text-gray-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <p>
                  Baghi Bardiha Mode, Vikas Nagar<br />
                  Nawada - 805132
                </p>
              </div>

              <a
                href="mailto:samefordenglishschoolnawada@gmail.com"
                className="flex items-center gap-3 hover:text-white"
              >
                <MailIcon className="w-5 h-5 text-primary" />
                 <p>
                  samefordenglishschoolnawada
                    <br /> @gmail.com
                 </p>
              </a>

              <a
                href="tel:+919155070907"
                className="flex items-center gap-3 hover:text-white"
              >
                <Phone className="w-5 h-5 text-primary" />
                +91 9155070907
              </a>

              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary" />
                Mon – Sat: 9:00 AM – 3:00 PM
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">

          <p>
            © {new Date().getFullYear()} Sameford English School. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link to="/policies" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms & Conditions</Link>
          </div>

          <div>
            Designed & Developed by :
            <a
            href="https://growthix.in"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <span className="font-semibold"> Growthix</span>
          </a>
          <span> & </span>
          <a
            href="https://apdigi.in"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <span className="font-semibold">Apdigi</span>
          </a>
          </div>
        </div>
      </div>
    </footer>
  );
}