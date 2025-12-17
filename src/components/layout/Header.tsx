import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Manufacturing", path: "/manufacturing" },
  { name: "Clients", path: "/clients" },
  { name: "Contact", path: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-leather-dark/95 backdrop-blur-md py-3 shadow-elevated"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <span className="text-2xl md:text-3xl font-display font-bold text-gold tracking-tight">
              T-REX
            </span>
            <span className="text-primary-foreground font-light tracking-widest text-sm uppercase">
              Leather
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium tracking-wide uppercase transition-colors duration-300 hover:text-gold",
                  location.pathname === link.path
                    ? "text-gold"
                    : "text-primary-foreground/80"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+8801712035733"
              className="flex items-center gap-2 text-primary-foreground/80 hover:text-gold transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">+880 1712-035733</span>
            </a>
            <Button variant="hero" size="sm" asChild>
              <Link to="/contact">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-primary-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-6 pb-6 border-t border-gold/20 pt-6 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-base font-medium tracking-wide uppercase transition-colors duration-300",
                    location.pathname === link.path
                      ? "text-gold"
                      : "text-primary-foreground/80 hover:text-gold"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Button variant="hero" className="mt-4" asChild>
                <Link to="/contact">Get Quote</Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
