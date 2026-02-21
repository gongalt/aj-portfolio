import HeroSection from "@/components/sections/HeroSection";
import ServicesPreview from "@/components/sections/ServicesPreview";
import FeaturedWork from "@/components/sections/FeaturedWork";
import AboutPreview from "@/components/sections/AboutPreview";
import TechStack from "@/components/sections/TechStack";
import ContactCTA from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesPreview />
      <FeaturedWork />
      <AboutPreview />
      <TechStack />
      <ContactCTA />
    </main>
  );
}
