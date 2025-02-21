
import { ArrowRight, Users, Square, Wifi, Coffee } from "lucide-react";

const RoomsSection = () => {
  const rooms = [
    {
      name: "Standard Room",
      price: "BDT 3,500",
      description: "Comfortable room with modern amenities and partial sea view",
      image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=2067&auto=format&fit=crop",
      features: ["32m²", "2 Guests", "City View", "Free WiFi"],
    },
    {
      name: "Deluxe Room",
      price: "BDT 6,500",
      description: "Spacious room with private balcony and full sea view",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
      features: ["45m²", "2-3 Guests", "Sea View", "Balcony"],
    },
    {
      name: "Executive Suite",
      price: "BDT 12,000",
      description: "Luxury suite with separate living area and panoramic views",
      image: "https://images.unsplash.com/photo-1561501900-3701fa6a0864?q=80&w=2070&auto=format&fit=crop",
      features: ["75m²", "4 Guests", "Living Room", "Butler"],
    },
    {
      name: "Rooftop Sea-Facing Villa",
      price: "BDT 18,000",
      description: "Exclusive villa with private infinity pool and butler service",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop",
      features: ["120m²", "4-6 Guests", "Private Pool", "Personal Chef"],
    },
  ];

  const handleCheckAvailability = (roomName: string) => {
    // This would typically integrate with a booking system
    console.log(`Checking availability for ${roomName}`);
  };

  return (
    <section id="rooms" className="py-20 bg-luxury-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display text-center mb-4">
          Luxurious Accommodations
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Experience unparalleled comfort in our thoughtfully designed rooms and suites
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {rooms.map((room) => (
            <div key={room.name} className="bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
              <div className="relative h-64">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full">
                  {room.price}/night
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display mb-2">{room.name}</h3>
                <p className="text-gray-600 mb-4">{room.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {room.features.map((feature) => (
                    <div key={feature} className="flex items-center text-sm text-gray-500">
                      <ArrowRight size={16} className="mr-2 text-primary" />
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="flex gap-4">
                  <button 
                    onClick={() => handleCheckAvailability(room.name)}
                    className="flex-1 bg-luxury-navy hover:bg-luxury-navy/90 text-white py-3 rounded flex items-center justify-center gap-2 transition-colors duration-300"
                  >
                    Check Availability
                  </button>
                  <button className="flex-1 bg-primary hover:bg-primary-light text-white py-3 rounded flex items-center justify-center gap-2 transition-colors duration-300">
                    Book Now <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
