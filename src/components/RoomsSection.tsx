
import { ArrowRight } from "lucide-react";

const RoomsSection = () => {
  const rooms = [
    {
      name: "Deluxe Ocean View",
      price: "BDT 8,500",
      description: "Elegant room with stunning ocean views and private balcony",
      image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=2067&auto=format&fit=crop",
      features: ["Ocean View", "King Bed", "40m²", "Free WiFi"],
    },
    {
      name: "Premium Suite",
      price: "BDT 12,500",
      description: "Spacious suite with separate living area and panoramic sea views",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
      features: ["Panoramic View", "King Bed", "65m²", "Lounge Area"],
    },
    {
      name: "Royal Villa",
      price: "BDT 18,000",
      description: "Exclusive beachfront villa with private infinity pool",
      image: "https://images.unsplash.com/photo-1561501900-3701fa6a0864?q=80&w=2070&auto=format&fit=crop",
      features: ["Private Pool", "Ocean Front", "120m²", "Butler Service"],
    },
  ];

  return (
    <section id="rooms" className="py-20 bg-luxury-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display text-center mb-4">
          Luxurious Accommodations
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Experience unparalleled comfort in our thoughtfully designed rooms and suites
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div key={room.name} className="bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
              <div className="relative h-64">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-display">{room.name}</h3>
                  <span className="text-primary font-semibold">{room.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{room.description}</p>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {room.features.map((feature) => (
                    <span key={feature} className="text-sm text-gray-500">
                      • {feature}
                    </span>
                  ))}
                </div>
                <button className="w-full bg-primary hover:bg-primary-light text-white py-3 rounded flex items-center justify-center gap-2 transition-colors duration-300">
                  Book Now <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
