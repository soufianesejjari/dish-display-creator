import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import bannerImage from "@/assets/burger-banner.jpg";

const PromotionalBanner = () => {
  return (
    <section className="relative bg-foreground text-background py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bannerImage}
          alt="Delicious Orlando Food"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          
          {/* Badge */}
          <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30 mb-6">
            Pick Any Sandwich With An Entry
          </Badge>

          {/* Headlines */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            We make best Food in Orlando
          </h2>

          {/* Description */}
          <p className="text-lg text-background/90 mb-8 leading-relaxed max-w-lg">
            "Savor the taste of perfection! Our sandwiches and entrées are crafted with 
            the freshest ingredients, ensuring every bite is flavorful and satisfying..."
          </p>

          {/* Pricing and CTA */}
          <div className="flex items-center gap-6">
            <Button variant="hero" size="lg">
              Check The Options
            </Button>
            
            <div className="text-2xl font-bold">
              <span className="text-primary">$15.99</span>
              <span className="text-background/60 text-lg ml-2 line-through">$20.99</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionalBanner;