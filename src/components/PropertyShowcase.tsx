import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Bed, Bath, Square } from "lucide-react";

const PropertyShowcase = () => {
  const properties = [
    {
      id: 1,
      title: "Luxury Penthouse - Downtown Dubai",
      price: "AED 4,500,000",
      location: "Downtown Dubai",
      beds: 3,
      baths: 4,
      sqft: "2,850",
      type: "Penthouse",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Premium Villa - Palm Jumeirah",
      price: "AED 8,200,000",
      location: "Palm Jumeirah",
      beds: 5,
      baths: 6,
      sqft: "4,200",
      type: "Villa",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Modern Apartment - Marina",
      price: "AED 1,850,000",
      location: "Dubai Marina",
      beds: 2,
      baths: 3,
      sqft: "1,650",
      type: "Apartment",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Featured Dubai Properties
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover exclusive investment opportunities in Dubai's most prestigious locations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <Card key={property.id} className="overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105">
              <div className="relative">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                  {property.type}
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                <div className="flex items-center text-muted-foreground mb-3">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>
                
                <div className="flex justify-between items-center mb-4">
                  <div className="flex space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Bed className="w-4 h-4 mr-1" />
                      {property.beds}
                    </div>
                    <div className="flex items-center">
                      <Bath className="w-4 h-4 mr-1" />
                      {property.baths}
                    </div>
                    <div className="flex items-center">
                      <Square className="w-4 h-4 mr-1" />
                      {property.sqft} sqft
                    </div>
                  </div>
                </div>
                
                <div className="text-2xl font-bold text-primary">
                  {property.price}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            These are just a few examples. We have 100+ new properties added daily.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PropertyShowcase;