import { Card, CardContent } from "@/components/ui/card";
import { Star, TrendingUp, DollarSign, Users, Target } from "lucide-react";

const TrustIndicators = () => {
  const stats = [
    {
      icon: Users,
      number: "66+",
      label: "Agencies Served",
      description: "Real estate agencies trust our proven system"
    },
    {
      icon: DollarSign,
      number: "1B+ AED",
      label: "Sales Generated",
      description: "Total sales volume from our lead system"
    },
    {
      icon: Target,
      number: "3x",
      label: "Better Qualified",
      description: "Lead quality compared to traditional methods"
    },
    {
      icon: TrendingUp,
      number: "40%",
      label: "Lower Cost",
      description: "Reduced cost per qualified lead"
    }
  ];

  const testimonials = [
    {
      name: "Ahmed Hassan",
      company: "Dubai Properties Elite",
      location: "Dubai Marina",
      text: "We went from 50 unqualified leads to 150 hot prospects monthly. Our conversion rate increased by 300%!",
      rating: 5,
      result: "300% conversion increase"
    },
    {
      name: "Sarah Al Zahra",
      company: "Emirates Real Estate Group", 
      location: "Downtown Dubai",
      text: "LeadCare strategy completely transformed our business. We're now closing 40% more deals with half the effort.",
      rating: 5,
      result: "40% more closings"
    },
    {
      name: "Mohammad Khan",
      company: "Premium Properties UAE",
      location: "Business Bay",
      text: "Best investment we ever made. ROI was 500% in the first 3 months. Highly recommend LeadCare UAE!",
      rating: 5,
      result: "500% ROI in 3 months"
    }
  ];

  const agencies = [
    "Dubai Properties Elite",
    "Emirates Real Estate Group", 
    "Premium Properties UAE",
    "Golden Gate Realty",
    "Skyline Properties",
    "Marina Real Estate",
    "Business Bay Holdings",
    "Palm Properties LLC"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Trusted By Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Trusted By Tens Of Real Estate Agencies
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join the agencies already dominating Dubai real estate with our proven system
          </p>
          
          {/* Agency Names Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {agencies.map((agency, index) => (
              <div key={index} className="text-center py-4 px-2 bg-secondary rounded-lg">
                <span className="text-sm font-medium text-foreground">{agency}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center shadow-card hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-foreground mb-2">{stat.label}</div>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Real Results From Real Agencies
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">"{testimonial.text}"</p>
                <div className="mb-4">
                  <div className="inline-block bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full">
                    {testimonial.result}
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-primary font-medium">{testimonial.company}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;