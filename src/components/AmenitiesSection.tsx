
import { Bath, UtensilsCrossed, Clock, Dumbbell, Wifi, Coffee, MapPin, Hotel } from "lucide-react";

const AmenitiesSection = () => {
  const amenities = [
    {
      icon: <Bath className="w-8 h-8" />,
      title: "Infinity Pool",
      description: "Stunning infinity pool overlooking the Bay of Bengal",
    },
    {
      icon: <UtensilsCrossed className="w-8 h-8" />,
      title: "Fine Dining",
      description: "24/7 restaurant serving international cuisine",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Room Service",
      description: "24-hour in-room dining service",
    },
    {
      icon: <Dumbbell className="w-8 h-8" />,
      title: "Fitness Center",
      description: "State-of-the-art gym equipment",
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "Free WiFi",
      description: "High-speed internet throughout the property",
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Café & Bar",
      description: "Beachfront café and cocktail bar",
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Prime Location",
      description: "Direct access to Cox's Bazar beach",
    },
    {
      icon: <Hotel className="w-8 h-8" />,
      title: "Luxury Spa",
      description: "Traditional and modern spa treatments",
    },
  ];

  return (
    <section id="amenities" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display text-center mb-4">
          Premium Amenities
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Indulge in our world-class facilities and services
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((amenity) => (
            <div
              key={amenity.title}
              className="p-6 bg-luxury-cream rounded-lg text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-primary mb-4 flex justify-center">
                {amenity.icon}
              </div>
              <h3 className="font-display text-xl mb-2">{amenity.title}</h3>
              <p className="text-gray-600">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
