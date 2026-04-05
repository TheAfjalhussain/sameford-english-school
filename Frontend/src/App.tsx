import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Vision from "./pages/Vision";
import Facilities from "./pages/Facilities";
import Activities from "./pages/Activities";
import Gallery from "./pages/Gallery";
import Teachers from "./pages/Teachers";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Admission from "./pages/Admission";
import Academics from "./pages/Academics";
import Notices from "./pages/Notices";
import FAQ from "./pages/FAQ";
// import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/layout/ScrollToTop";
import { Video } from "./pages/Video";
import Policies from "./pages/Policies";
import Terms from "./pages/Terms";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
       <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/video" element={<Video />} />
          {/* <Route path="/teachers" element={<Teachers />} /> */}
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/notices" element={<Notices />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/terms" element={<Terms />} />
          {/* <Route path="/blog" element={<Blog />} /> */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
