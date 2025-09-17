import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Import images
import fishRiceHero from "@/assets/fish-rice-hero.jpg";
import houseSalad from "@/assets/house-salad.jpg";
import cajunFries from "@/assets/cajun-fries.jpg";
import phillyToPhilly from "@/assets/philly-sandwich.jpg";
import chickenWings from "@/assets/chicken-wings.jpg";
import chickenSalad from "@/assets/chicken-salad.jpg";
import fishRiceSalad from "@/assets/fish-rice-salad.jpg";

const ProductDetail = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Mock product data - in real app this would come from API/database
  const product = {
    id: "fish-rice-salad",
    name: "Fish over Rice, Salad & Fries",
    price: "$12.99",
    description: "A Grilled fish platter is a platter that typically consists of seasoned meat, lettuce, tomato, onion, and creamy tzatziki sauce.",
    images: [fishRiceHero, fishRiceSalad],
    category: "Mediterranean Platters"
  };

  const relatedProducts = [
    {
      id: 1,
      name: "House Salad",
      price: "$5.99",
      image: houseSalad
    },
    {
      id: 2,
      name: "Cajun Curly Fries", 
      price: "$4.99",
      image: cajunFries
    },
    {
      id: 3,
      name: "Gizzards or Livers",
      price: "$9.99",
      image: chickenWings
    },
    {
      id: 4,
      name: "Fish over Rice, Salad",
      price: "$12.99",
      image: fishRiceSalad
    },
    {
      id: 5,
      name: "Philly Sandwich",
      price: "$8.99", 
      image: phillyToPhilly
    },
    {
      id: 6,
      name: "Chicken Salad",
      price: "$9.57",
      image: chickenSalad
    }
  ];

  const deliveryPlatforms = [
    { name: "GRUBHUB", color: "bg-red-500", textColor: "text-white" },
    { name: "UBEREATS", color: "bg-primary", textColor: "text-white" },
    { name: "DOORDASH", color: "bg-red-600", textColor: "text-white" }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="min-h-screen bg-background">
      
      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Home className="w-4 h-4" />
            <Link to="/" className="hover:text-primary">Home</Link>
            <span>›</span>
            <Link to="/menu" className="hover:text-primary">Menu</Link>
            <span>›</span>
            <span className="text-primary font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Main Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Product Hero Image */}
        <div className="relative mb-12">
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden bg-muted/30">
            <img 
              src={product.images[currentImageIndex]} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
            
            {/* Navigation Arrows */}
            {product.images.length > 1 && (
              <>
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/90 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/90 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Additional product images thumbnails */}
            <div className="absolute bottom-4 right-4 flex gap-2">
              {product.images.slice(1, 4).map((img, index) => (
                <div key={index} className="w-16 h-16 rounded-lg overflow-hidden border-2 border-white shadow-sm">
                  <img src={img} alt={`${product.name} ${index + 2}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            {product.name}
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Description */}
            <div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {product.description}
              </p>
              <button className="text-primary font-medium hover:underline">
                Read More...
              </button>
            </div>

            {/* Price and Actions */}
            <div className="space-y-6">
              <div className="text-3xl font-bold text-primary">
                {product.price}
              </div>
              
              <div className="flex gap-3">
                <Button variant="hero" size="lg" className="flex-1">
                  Add to Cart
                </Button>
                <Button variant="outline" size="lg">
                  Order Now
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Available Delivery */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-foreground mb-6">Available Delivery</h3>
          <div className="flex flex-wrap gap-4">
            {deliveryPlatforms.map((platform) => (
              <Badge
                key={platform.name}
                className={`${platform.color} ${platform.textColor} px-6 py-2 text-sm font-medium rounded-full`}
              >
                {platform.name}
              </Badge>
            ))}
          </div>
        </div>

        {/* You May Also Like */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8">YOU MAY ALSO LIKE</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((item) => (
              <Card key={item.id} className="bg-card border-border/50 hover:shadow-card transition-all duration-300 hover:scale-105 overflow-hidden">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                </div>
                
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-lg font-semibold text-foreground">
                      {item.name}
                    </h4>
                    <span className="text-xl font-bold text-primary">
                      {item.price}
                    </span>
                  </div>
                  
                  <Button variant="default" size="sm" className="w-full">
                    {item.name.includes("Salad") ? "Order Now" : "Add To Cart"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;