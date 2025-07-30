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
    company: "",
    currentLeads: "",
    budget: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Consultation booking:", formData);
    // Here you would integrate with your consultation booking system
  };

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${dubaiHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-85"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Headline */}
          <div className="text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Sick of leads that 
              <span className="block text-white drop-shadow-lg">don't pick up or just say</span>
              <span className="block text-white drop-shadow-lg">"not interested"?</span>
            </h1>
            <p className="text-2xl mb-8 text-white font-semibold">
              Get <span className="text-white">3x better-qualified</span> real estate leads at <span className="text-white">40% lower cost</span> using LeadCare proven strategy
            </p>
            <p className="text-lg mb-8 text-white/90">
              The one secret tested by <span className="text-white font-semibold">66+ agencies</span> that generated over <span className="text-white font-semibold">1B AED</span> in real estate sales
            </p>
            <div className="grid grid-cols-3 gap-6 text-center mb-8">
              <div>
                <div className="text-3xl font-bold text-white">66+</div>
                <div className="text-white/80">Agencies</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">1B+</div>
                <div className="text-white/80">AED Sales</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">3x</div>
                <div className="text-white/80">Better Leads</div>
              </div>
            </div>
          </div>

          {/* Right Column - Consultation Form */}
          <Card className="p-8 shadow-glow bg-white/95 backdrop-blur-sm">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Book Your Free Consultation
              </h2>
              <p className="text-muted-foreground">
                Discover how to get qualified leads that actually convert
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
              <Input
                placeholder="Company/Agency Name"
                value={formData.company}
                onChange={(e) => setFormData({...formData, company: e.target.value})}
                required
              />
              <Select value={formData.currentLeads} onValueChange={(value) => setFormData({...formData, currentLeads: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Current Monthly Lead Volume" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-50">0-50 leads/month</SelectItem>
                  <SelectItem value="50-100">50-100 leads/month</SelectItem>
                  <SelectItem value="100-500">100-500 leads/month</SelectItem>
                  <SelectItem value="500+">500+ leads/month</SelectItem>
                </SelectContent>
              </Select>
              <Select value={formData.budget} onValueChange={(value) => setFormData({...formData, budget: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Monthly Marketing Budget" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5k-10k">AED 5K - 10K</SelectItem>
                  <SelectItem value="10k-25k">AED 10K - 25K</SelectItem>
                  <SelectItem value="25k-50k">AED 25K - 50K</SelectItem>
                  <SelectItem value="50k+">AED 50K+</SelectItem>
                </SelectContent>
              </Select>
              <Button type="submit" className="w-full text-lg py-6 bg-gradient-primary hover:scale-105 transition-transform">
                Book Your Free Consultation
              </Button>
            </form>
            
            <p className="text-xs text-muted-foreground text-center mt-4">
              * 100% Free consultation. No obligations. Results guaranteed or your money back.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;