import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">LeadCare UAE</h3>
            <p className="text-white/80 mb-6">
              Your trusted partner for Dubai real estate investments. We connect global investors 
              with premium property opportunities in the UAE.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-white/60 hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-white/60 hover:text-primary cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-white/60 hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-white/60 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-primary transition-colors">Properties</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Investment Guide</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Market Analysis</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Legal Services</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Financing</a></li>
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Property Types</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-primary transition-colors">Luxury Apartments</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Premium Villas</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Commercial Spaces</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Off-Plan Projects</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Investment Plots</a></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <div className="space-y-4 mb-6">
              <div className="flex items-center text-white/80">
                <Phone className="w-4 h-4 mr-2" />
                <span>+971-XX-XXX-XXXX</span>
              </div>
              <div className="flex items-center text-white/80">
                <Mail className="w-4 h-4 mr-2" />
                <span>info@leadcareuae.com</span>
              </div>
              <div className="flex items-center text-white/80">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Dubai, UAE</span>
              </div>
            </div>
            
            <div>
              <p className="text-sm text-white/80 mb-3">Subscribe for property updates</p>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Your email" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Button className="bg-primary hover:bg-primary/90">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2024 LeadCare UAE. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-white/60 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;