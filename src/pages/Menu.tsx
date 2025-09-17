import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Filter } from "lucide-react";

// Import food images
import houseSalad from "@/assets/house-salad.jpg";
import cajunFries from "@/assets/cajun-fries.jpg";
import phillyToPhilly from "@/assets/philly-sandwich.jpg";
import chickenWings from "@/assets/chicken-wings.jpg";
import chickenSalad from "@/assets/chicken-salad.jpg";
import fishRiceSalad from "@/assets/fish-rice-salad.jpg";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { name: "All", icon: "⭕", color: "bg-primary text-primary-foreground" },
    { name: "Burger", icon: "🍔", color: "bg-muted text-muted-foreground" },
    { name: "Cupcake", icon: "🧁", color: "bg-muted text-muted-foreground" },
    { name: "Ramen", icon: "🍜", color: "bg-muted text-muted-foreground" },
    { name: "Ice Cream", icon: "🍦", color: "bg-muted text-muted-foreground" },
  ];

  const menuItems = [
    {
      id: 1,
      name: "House Salad",
      price: "$5.99",
      image: houseSalad,
      category: "Salad"
    },
    {
      id: 2,
      name: "Cajun Curly Fries", 
      price: "$4.99",
      image: cajunFries,
      category: "Sides"
    },
    {
      id: 3,
      name: "Gizzards or Livers",
      price: "$9.99", 
      image: chickenWings,
      category: "Chicken"
    },
    {
      id: 4,
      name: "Fish over Rice, Salad",
      price: "$12.99",
      image: fishRiceSalad,
      category: "Fish"
    },
    {
      id: 5,
      name: "Philly Sandwich",
      price: "$8.99",
      image: phillyToPhilly,
      category: "Sandwich"
    },
    {
      id: 6,
      name: "Chicken Salad", 
      price: "$9.57",
      image: chickenSalad,
      category: "Salad"
    }
  ];

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      
      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <a href="/" className="hover:text-primary">Home</a>
            <span>›</span>
            <span className="text-primary font-medium">Menu</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar - Categories */}
          <div className="lg:w-1/4">
            <div className="bg-card rounded-lg p-6 border border-border/50">
              <h2 className="text-xl font-bold text-primary mb-6 tracking-wide">
                OUR MENU
              </h2>
              
              <div className="space-y-3">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${
                      selectedCategory === category.name
                        ? category.color
                        : "bg-muted/50 text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    <span className="text-lg">{category.icon}</span>
                    <span className="font-medium">{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Enter your choice..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline" className="sm:w-auto">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
              <Button variant="outline" className="sm:w-auto">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>

            {/* Results Count */}
            <p className="text-muted-foreground mb-6">
              <span className="font-medium text-foreground">{filteredItems.length}</span> Results Found
            </p>

            {/* Menu Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
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
                      <h3 className="text-lg font-semibold text-foreground">
                        {item.name}
                      </h3>
                      <span className="text-xl font-bold text-primary">
                        {item.price}
                      </span>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button 
                        variant="default" 
                        size="sm" 
                        className="flex-1"
                        onClick={() => window.location.href = `/product/${item.id}`}
                      >
                        Order Now
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => window.location.href = `/product/${item.id}`}
                      >
                        View
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;