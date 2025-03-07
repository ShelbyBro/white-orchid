
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop')`
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center text-white">
        <div className="container mx-auto px-4">
          <span className="block text-sm md:text-base uppercase tracking-[0.2em] text-primary animate-fade-down">
            Welcome to
          </span>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl mt-4 mb-6 animate-fade-up">
            White Orchid
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-up">
            Experience unparalleled luxury at Cox's Bazar's premier 5-star beachfront resort
          </p>
          <button className="bg-primary hover:bg-primary-light text-white px-8 py-3 rounded text-lg transition-all duration-300 transform hover:scale-105 animate-fade-up flex items-center gap-2 mx-auto">
            Book Your Stay <ArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-12 rounded-full bg-white/50 relative">
          <div className="absolute top-0 w-full h-1/3 bg-white rounded-full animate-[slide-down_1.5s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
