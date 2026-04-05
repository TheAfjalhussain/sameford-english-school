import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/layout";
import logo from "../../public/images/sfes-logo.png";


const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center px-4">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <img
                src={logo}
                alt="School Logo"
                className="h-20 w-20 object-center rounded-lg"
              />
              <span className="font-bold text-x">
              Sameford English School
            </span>
            </Link>
          </div>
          <h1 className="font-heading text-6xl font-bold text-foreground mb-4">404</h1>
          <p className="text-xl text-muted-foreground mb-2">Oops! This page doesn't exist.</p>
          <p className="text-muted-foreground mb-8">Looks like you've wandered off the school map.</p>
          <Link
            to="/"
            className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold shadow-soft hover:shadow-medium transition-all"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
