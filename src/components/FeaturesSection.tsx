import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const FeaturesSection = () => {
  const features = [
    {
      icon: "🏛️",
      title: "A Taste of Greece, Right Here", 
      description: "Fresh, homemade recipes inspired by Greek tradition.",
      subtitle: "Every bite is full of flavor."
    },
    {
      icon: "⚡",
      title: "Fast, Fresh & Convenient",
      description: "Perfect for lunch, dinner, or on the go.",
      subtitle: "Quality food served quickly, without compromise."
    },
    {
      icon: "🏠",
      title: "A Growing Family", 
      description: "More than just a restaurant, we're building a community of Mediterranean food lovers in every city we open.",
      subtitle: ""
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-4">
            About Us
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Our Food
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center space-y-4">
                
                {/* Icon */}
                <div className="w-16 h-16 mx-auto bg-warm-cream rounded-full flex items-center justify-center text-2xl mb-6">
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-2">
                  {feature.description}
                </p>

                {/* Subtitle */}
                {feature.subtitle && (
                  <p className="text-sm font-medium text-foreground">
                    {feature.subtitle}
                  </p>
                )}

              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;