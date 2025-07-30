import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="border-b border-border py-2">
          <div className="flex justify-between items-center text-sm">
            <div className="flex space-x-6 text-muted-foreground">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-1" />
                <span>+971-XX-XXX-XXXX</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-1" />
                <span>info@leadcareuae.com</span>
              </div>
            </div>
            <div className="flex items-center text-muted-foreground">
              <MapPin className="w-4 h-4 mr-1" />
              <span>Dubai, UAE</span>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">LeadCare UAE</h1>
            <span className="ml-2 text-sm text-muted-foreground">Dubai Real Estate</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#properties" className="text-foreground hover:text-primary transition-colors">Properties</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About Us</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </nav>

          <Button className="bg-gradient-primary hover:scale-105 transition-transform">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;