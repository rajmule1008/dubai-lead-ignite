import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import dubaiHero from "@/assets/dubai-skyline-hero.jpg";

const Hero = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    location: "",
    propertyType: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Lead submitted:", formData);
    // Here you would integrate with your lead management system
  };

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${dubaiHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Headline */}
          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Invest in Dubai's
              <span className="block text-white drop-shadow-lg">Premium Properties</span>
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Join 1000+ daily investors worldwide who trust us to find the perfect Dubai real estate opportunities. 
              From luxury apartments to commercial spaces - we deliver quality leads that convert.
            </p>
            <div className="grid grid-cols-3 gap-6 text-center mb-8">
              <div>
                <div className="text-3xl font-bold text-white">1000+</div>
                <div className="text-white/80">Daily Leads</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-white/80">Countries</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">95%</div>
                <div className="text-white/80">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Column - Lead Form */}
          <Card className="p-8 shadow-glow bg-white/95 backdrop-blur-sm">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Get Premium Dubai Properties
              </h2>
              <p className="text-muted-foreground">
                Fill out the form below to receive exclusive property listings
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
              <Input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
              <Input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                required
              />
              <Select value={formData.budget} onValueChange={(value) => setFormData({...formData, budget: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Investment Budget" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="100k-500k">AED 100K - 500K</SelectItem>
                  <SelectItem value="500k-1m">AED 500K - 1M</SelectItem>
                  <SelectItem value="1m-5m">AED 1M - 5M</SelectItem>
                  <SelectItem value="5m+">AED 5M+</SelectItem>
                </SelectContent>
              </Select>
              <Input
                placeholder="Current Location"
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
              />
              <Select value={formData.propertyType} onValueChange={(value) => setFormData({...formData, propertyType: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Property Type Interest" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apartment">Luxury Apartments</SelectItem>
                  <SelectItem value="villa">Premium Villas</SelectItem>
                  <SelectItem value="commercial">Commercial Properties</SelectItem>
                  <SelectItem value="off-plan">Off-Plan Projects</SelectItem>
                </SelectContent>
              </Select>
              <Button type="submit" className="w-full text-lg py-6 bg-gradient-primary hover:scale-105 transition-transform">
                Get Exclusive Property Listings
              </Button>
            </form>
            
            <p className="text-xs text-muted-foreground text-center mt-4">
              * We guarantee 100% privacy. Your information will never be shared.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;