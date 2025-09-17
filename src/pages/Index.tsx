import HeroSection from "@/components/HeroSection";
import MenuShowcase from "@/components/MenuShowcase"; 
import FeaturesSection from "@/components/FeaturesSection";
import PromotionalBanner from "@/components/PromotionalBanner";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <MenuShowcase />
      <PromotionalBanner />
      <FeaturesSection />
    </div>
  );
};

export default Index;
