import { Crown, Facebook, Twitter, Linkedin, Instagram, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const restaurantHours = [
    "Sunday: 10 AM - 3 AM",
    "Monday: 10 AM - 3 AM", 
    "Tuesday: 10 AM - 3 AM",
    "Wednesday: 10 AM - 3 AM",
    "Thursday: 10 AM - 3 AM",
    "Friday: 10 AM - 4 AM",
    "Saturday: 10 AM - 4 AM"
  ];

  const contactInfo = [
    "Orlando (Colonial Dr): (407) 500-0506",
    "Kissimmee (Vine St): (407) 785-1223", 
    "Orlando (S Orange Blossom Trl)"
  ];

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 font-bold text-xl">
              <Crown className="h-6 w-6 text-primary" />
              <span>G<span className="text-primary">y</span>ros</span>
            </Link>
            
            <p className="text-background/80 leading-relaxed max-w-sm">
              Authentic Mediterranean Flavors, Made for America.
            </p>

            {/* Social Media */}
            <div className="flex gap-4">
              <button className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors">
                <Linkedin className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors">
                <Instagram className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Opening Restaurant</h3>
            <div className="space-y-2">
              {restaurantHours.map((hour, index) => (
                <p key={index} className="text-background/80 text-sm">
                  {hour}
                </p>
              ))}
            </div>
          </div>

          {/* Contact Us */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Contact Us</h3>
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <p key={index} className="text-background/80 text-sm">
                  {contact}
                </p>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <div className="flex gap-2">
                <Input 
                  placeholder="Enter your email"
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
                />
                <Button variant="hero" size="icon">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              Designed, crafted and coded with ♥ by NeoLogix
            </p>
            
            <div className="flex gap-6 text-sm">
              <Link to="/terms" className="text-background/80 hover:text-primary transition-colors">
                Terms
              </Link>
              <Link to="/privacy" className="text-background/80 hover:text-primary transition-colors">
                Privacy
              </Link>
              <Link to="/cookies" className="text-background/80 hover:text-primary transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;