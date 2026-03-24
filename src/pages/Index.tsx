import ParticleBackground from "@/components/ParticleBackground";
import FloatingNav from "@/components/FloatingNav";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import UseCasesSection from "@/components/UseCasesSection";
import DashboardSection from "@/components/DashboardSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <>
    <ParticleBackground />
    <FloatingNav />
    <main>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <UseCasesSection />
      <DashboardSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </main>
    <FooterSection />
  </>
);

export default Index;
