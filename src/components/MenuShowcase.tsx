import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

// Import food images
import houseSalad from "@/assets/house-salad.jpg";
import cajunFries from "@/assets/cajun-fries.jpg";
import phillyToPhilly from "@/assets/philly-sandwich.jpg";
import chickenWings from "@/assets/chicken-wings.jpg";
import chickenSalad from "@/assets/chicken-salad.jpg";
import fishRiceSalad from "@/assets/fish-rice-salad.jpg";

const MenuShowcase = () => {
  const menuItems = [
    {
      id: 1,
      name: "House Salad",
      price: "$5.99",
      image: houseSalad,
      badge: "Order Now"
    },
    {
      id: 2, 
      name: "Cajun Curly Fries",
      price: "$4.99",
      image: cajunFries,
      badge: "Order Now"
    },
    {
      id: 3,
      name: "Gizzards or Livers", 
      price: "$9.99",
      image: chickenWings,
      badge: "Add To Cart"
    },
    {
      id: 4,
      name: "Fish over Rice, Salad",
      price: "$12.99", 
      image: fishRiceSalad,
      badge: "Add To Cart"
    },
    {
      id: 5,
      name: "Philly Sandwich",
      price: "$8.99",
      image: phillyToPhilly,
      badge: "Add To Cart"
    },
    {
      id: 6,
      name: "Chicken Salad",
      price: "$9.57",
      image: chickenSalad,
      badge: "Add To Cart"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-4">
            Menu
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Special Menu for you
          </h2>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {menuItems.map((item) => (
              <Card key={item.id} className="bg-card border-border/50 hover:shadow-card transition-all duration-300 hover:scale-105 overflow-hidden cursor-pointer"
                onClick={() => window.location.href = `/product/${item.id}`}>
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  {/* Decorative elements overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/5"></div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.name}
                    </h3>
                    <span className="text-xl font-bold text-primary">
                      {item.price}
                    </span>
                  </div>
                  
                  <Button variant="default" size="sm" className="w-full">
                    {item.badge}
                  </Button>
                </CardContent>
              </Card>
            ))}
        </div>

        {/* See Menu Button */}
        <div className="text-center">
          <Link to="/menu">
            <Button variant="hero" size="lg" className="px-8">
              See Menu
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MenuShowcase;