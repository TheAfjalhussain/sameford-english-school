import { Layout } from "@/components/layout";
import {
  HeroSection,
  QuickFactsBar,
  WhyChooseUsSection,
  VisionPreview,
  AcademicsSnapshot,
  FacilitiesPreview,
  ActivitiesPreview,
  // TeachersPreview,
  TestimonialsSection,
  GalleryPreview,
  NoticesPreview,
  FAQPreview,
  CTASection,
  About,
} from "@/components/home";
import { Mission } from "@/components/home/Mission";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <QuickFactsBar />
      <About />
      <WhyChooseUsSection />
      {/* <VisionPreview /> */}
      <AcademicsSnapshot />
      <FacilitiesPreview />
      <ActivitiesPreview />
      {/* <TeachersPreview /> */}
      {/* <GalleryPreview /> */}
      <Mission />
      {/* <NoticesPreview /> */}
      <TestimonialsSection />
      <FAQPreview />
    </Layout>
  );
};

export default Index;
