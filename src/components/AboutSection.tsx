
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-display mb-4">
              Experience Luxury at White Orchid
            </h2>
            <p className="text-gray-600 leading-relaxed">
              White Orchid is a 5-star luxury hotel in Cox's Bazar, offering world-class hospitality 
              with breathtaking views of the Bay of Bengal. Our signature infinity pool with a poolside 
              bar creates the perfect setting for unforgettable moments.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From our sea-facing rooftop villa to our 24/7 restaurant and room service, every detail 
              is crafted to provide an unparalleled luxury experience. Our commitment to excellence 
              ensures that your stay exceeds all expectations.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <div className="text-3xl font-display text-primary">150+</div>
                <div className="text-sm text-gray-600">Luxury Rooms</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display text-primary">24/7</div>
                <div className="text-sm text-gray-600">Room Service</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display text-primary">#1</div>
                <div className="text-sm text-gray-600">In Cox's Bazar</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop"
              alt="White Orchid Hotel Exterior"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary text-white p-4 rounded-lg shadow-lg">
              <div className="text-2xl font-display">5-Star</div>
              <div className="text-sm">Luxury Resort</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
