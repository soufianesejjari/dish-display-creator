import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-gradient-hero min-h-[600px] flex items-center py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-8">
          {/* Special Badge */}
          <Badge variant="secondary" className="w-fit bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm font-medium">
            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
            </svg>
            #Special Food
          </Badge>

          {/* Main Headlines */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Authentic Greek &
              </h1>
              <Leaf className="text-accent w-8 h-8 md:w-10 md:h-10" />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Mediterranean Flavors
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-4">
              Fresh, Fast, Delicious.
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
            Satisfy your cravings with our perfectly seasoned wings, 
            cooked to crispy perfection. Whether you're in the mood for 
            mild or extra spicy, we have the flavors you love—served 
            quick, fresh, and hot!
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/menu">
              <Button variant="hero" size="lg" className="w-full sm:w-auto">
                See Menu
              </Button>
            </Link>
            <Link to="/location">
              <Button variant="outline-light" size="lg" className="w-full sm:w-auto">
                Find a Location
              </Button>
            </Link>
          </div>

          {/* Decorative Leaves */}
          <div className="hidden lg:block">
            <Leaf className="text-accent w-12 h-12 opacity-60" />
          </div>
        </div>

        {/* Right Content - Food Showcase */}
        <div className="relative">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-card rounded-3xl transform rotate-3 opacity-20"></div>
          
          <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-card">
            <div className="grid grid-cols-2 gap-6">
              
              {/* Food Items */}
              <div className="text-center space-y-3">
                <div className="w-20 h-20 mx-auto bg-muted rounded-full flex items-center justify-center">
                  <span className="text-2xl">🥗</span>
                </div>
                <h3 className="font-semibold text-foreground">Sandwich</h3>
                <p className="text-sm text-muted-foreground">Philly Sandwich</p>
                <p className="font-bold text-primary">$7.99</p>
              </div>

              <div className="text-center space-y-3">
                <div className="w-20 h-20 mx-auto bg-muted rounded-full flex items-center justify-center">
                  <span className="text-2xl">🥙</span>
                </div>
                <h3 className="font-semibold text-foreground">Salad</h3>
                <p className="text-sm text-muted-foreground">Caesar Salad</p>
                <p className="font-bold text-primary">$7.99</p>
              </div>

              <div className="text-center space-y-3">
                <div className="w-20 h-20 mx-auto bg-muted rounded-full flex items-center justify-center">
                  <span className="text-2xl">🍗</span>
                </div>
                <h3 className="font-semibold text-foreground">Chicken</h3>
                <p className="text-sm text-muted-foreground">6 Chicken Wings</p>
                <p className="font-bold text-primary">$7.99</p>
              </div>

              <div className="text-center space-y-3">
                <div className="w-20 h-20 mx-auto bg-muted rounded-full flex items-center justify-center">
                  <span className="text-2xl">🍰</span>
                </div>
                <h3 className="font-semibold text-foreground">Cake</h3>
                <p className="text-sm text-muted-foreground">Mushroom Sauce</p>
                <p className="font-bold text-primary">$5.15</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;