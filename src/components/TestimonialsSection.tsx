
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "United Kingdom",
      rating: 5,
      comment: "An absolutely stunning hotel with impeccable service. The infinity pool is breathtaking, and the staff went above and beyond to make our stay memorable.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&q=80",
    },
    {
      name: "Michael Chen",
      location: "Singapore",
      rating: 5,
      comment: "The rooftop villa exceeded all expectations. The views are spectacular, and the private butler service made us feel like royalty.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&q=80",
    },
    {
      name: "Priya Patel",
      location: "India",
      rating: 5,
      comment: "White Orchid sets a new standard for luxury in Cox's Bazar. The attention to detail and the gourmet dining options are outstanding.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&q=80",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display text-center mb-4">
          Guest Experiences
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          What our valued guests say about their stay at White Orchid
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-luxury-cream p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-display text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                </div>
              </div>
              <div className="flex text-primary mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 italic">"{testimonial.comment}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
