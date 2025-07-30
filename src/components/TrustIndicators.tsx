import { Card, CardContent } from "@/components/ui/card";
import { Star, Users, TrendingUp, Globe } from "lucide-react";

const TrustIndicators = () => {
  const stats = [
    {
      icon: Users,
      number: "50,000+",
      label: "Happy Investors",
      description: "Clients worldwide who trust our expertise"
    },
    {
      icon: TrendingUp,
      number: "95%",
      label: "Success Rate",
      description: "Of our leads convert to actual investments"
    },
    {
      icon: Globe,
      number: "50+",
      label: "Countries",
      description: "We serve investors from around the world"
    },
    {
      icon: Star,
      number: "4.9/5",
      label: "Client Rating",
      description: "Average satisfaction score from our clients"
    }
  ];

  const testimonials = [
    {
      name: "Ahmed Al Mansouri",
      location: "Saudi Arabia",
      text: "Found my dream property in Downtown Dubai within 2 weeks. Excellent service!",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      location: "United Kingdom", 
      text: "Professional team that understands international investors. Highly recommended!",
      rating: 5
    },
    {
      name: "Raj Patel",
      location: "India",
      text: "Best ROI on my Dubai property investment. Thank you LeadCare UAE!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Stats Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Trusted by Investors Worldwide
          </h2>
          <p className="text-xl text-muted-foreground">
            Our track record speaks for itself
          </p>
        </div>

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
            What Our Clients Say
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-card">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
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