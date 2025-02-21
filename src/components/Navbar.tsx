
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { title: "Home", href: "#home" },
    { title: "Rooms & Suites", href: "#rooms" },
    { title: "Dining", href: "#dining" },
    { title: "Amenities", href: "#amenities" },
    { title: "Gallery", href: "#gallery" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a
            href="#"
            className="text-2xl md:text-3xl font-display font-semibold text-luxury-navy"
          >
            White Orchid
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="text-luxury-navy hover:text-primary transition-colors duration-300"
              >
                {link.title}
              </a>
            ))}
            <button className="bg-primary hover:bg-primary-light text-white px-6 py-2 rounded transition-colors duration-300">
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-luxury-navy"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg animate-fade-down">
            <div className="flex flex-col py-4">
              {navLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="px-4 py-2 text-luxury-navy hover:bg-luxury-cream transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.title}
                </a>
              ))}
              <button className="mx-4 mt-4 bg-primary hover:bg-primary-light text-white px-6 py-2 rounded transition-colors duration-300">
                Book Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
