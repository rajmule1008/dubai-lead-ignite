import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Target, TrendingUp, Users, Zap, Shield } from "lucide-react";

const StrategyShowcase = () => {
  const strategies = [
    {
      icon: Target,
      title: "Meta Ads Optimization",
      description: "Advanced targeting algorithms that identify high-intent buyers before your competitors do",
      results: "3x higher conversion rates"
    },
    {
      icon: TrendingUp,
      title: "Google Ads Mastery", 
      description: "Proprietary keyword research and bidding strategies that dominate Dubai real estate searches",
      results: "40% lower cost-per-lead"
    },
    {
      icon: Users,
      title: "Snapchat & TikTok Funnel",
      description: "Cutting-edge social media funnels that capture younger, high-net-worth international investors",
      results: "250% lead volume increase"
    }
  ];

  const benefits = [
    "Qualified leads that actually answer their phones",
    "Pre-qualified budget confirmation before first contact", 
    "Interested prospects ready to view properties",
    "Higher closing rates with less effort",
    "Reduced time spent on dead-end leads",
    "Scalable system that grows with your agency"
  ];

  const problemsFixed = [
    {
      problem: "Leads don't pick up calls",
      solution: "Pre-engagement sequences ensure warm leads"
    },
    {
      problem: "\"Not interested\" responses",
      solution: "Intent-based targeting attracts ready buyers"
    },
    {
      problem: "High cost per lead",
      solution: "Optimized campaigns reduce costs by 40%"
    },
    {
      problem: "Low conversion rates",
      solution: "Quality over quantity approach triples conversions"
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Main Headline */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            The LeadCare Strategy That's Changing Everything
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stop wasting money on leads that go nowhere. Our proven 3-step system delivers qualified prospects who are ready to buy, not just browse.
          </p>
        </div>

        {/* Strategy Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {strategies.map((strategy, index) => (
            <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <strategy.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{strategy.title}</h3>
                <p className="text-muted-foreground mb-4">{strategy.description}</p>
                <div className="inline-block bg-primary text-primary-foreground text-sm font-semibold px-4 py-2 rounded-full">
                  {strategy.results}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Problem vs Solution */}
        <div className="bg-white rounded-lg p-8 mb-16 shadow-card">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            From Problems to Solutions
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problemsFixed.map((item, index) => (
              <div key={index} className="text-center">
                <div className="mb-4">
                  <div className="text-destructive font-semibold mb-2">❌ {item.problem}</div>
                  <div className="text-primary font-semibold">✅ {item.solution}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits List */}
        <div className="bg-white rounded-lg p-8 shadow-card">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            What You Get With Our System
          </h3>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="w-6 h-6 text-primary mr-3 flex-shrink-0" />
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button className="bg-gradient-primary hover:scale-105 transition-transform text-lg px-8 py-4">
              Book Your Free Strategy Session
            </Button>
            <p className="text-sm text-muted-foreground mt-2">
              Limited spots available this month
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategyShowcase;