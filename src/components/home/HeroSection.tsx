import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-leather.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-2 mb-8 animate-fade-up opacity-0">
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            <span className="text-gold text-sm font-medium tracking-wide uppercase">
              Premium Leather Manufacturer
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-primary-foreground leading-tight mb-6 animate-fade-up opacity-0 stagger-1">
            Crafting Excellence in{" "}
            <span className="text-gradient-gold">Leather</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-10 max-w-2xl animate-fade-up opacity-0 stagger-2">
            T-REX Leather is Bangladesh's trusted manufacturer and exporter of premium leather goods. 
            From bags to accessories, we deliver quality craftsmanship to international brands worldwide.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up opacity-0 stagger-3">
            <Button variant="hero" size="xl" asChild>
              <Link to="/products">
                Explore Products
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/contact">Request Quote</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-10 border-t border-gold/20 animate-fade-up opacity-0 stagger-4">
            <div>
              <p className="text-3xl md:text-4xl font-display font-bold text-gold">15+</p>
              <p className="text-primary-foreground/60 text-sm mt-1">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-display font-bold text-gold">50+</p>
              <p className="text-primary-foreground/60 text-sm mt-1">Product Categories</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-display font-bold text-gold">100%</p>
              <p className="text-primary-foreground/60 text-sm mt-1">Quality Assured</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-gold rounded-full" />
        </div>
      </div>
    </section>
  );
}
