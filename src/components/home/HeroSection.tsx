import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-leather.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Premium leather goods" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      </div>

      {/* Grain Texture */}
      <div className="absolute inset-0 grain" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-32 pb-20">
        <div className="max-w-2xl">
          {/* Copper Line */}
          <div className="w-16 h-px bg-copper mb-8 animate-fade-up opacity-0" />
          
          {/* Small Text */}
          <p className="text-xs tracking-[0.4em] text-copper uppercase mb-6 animate-fade-up opacity-0 stagger-1">
            Handcrafted Since Establishment
          </p>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-light text-foreground leading-[1.1] mb-8 animate-fade-up opacity-0 stagger-2">
            Exceptional
            <br />
            <span className="font-semibold italic">Leather</span>
            <br />
            Craftsmanship
          </h1>

          {/* Subheading */}
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-12 max-w-lg animate-fade-up opacity-0 stagger-3">
            Bangladesh's premier manufacturer of fine leather goods. 
            We craft timeless pieces for discerning international brands.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up opacity-0 stagger-4">
            <Button variant="hero" size="lg" asChild>
              <Link to="/products">
                View Collection
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/about">Our Story</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-border/30 bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-3 divide-x divide-border/30">
            <div className="py-6 px-4 text-center">
              <p className="text-2xl md:text-3xl font-display font-semibold text-foreground">15+</p>
              <p className="text-[10px] tracking-widest text-muted-foreground uppercase mt-1">Years</p>
            </div>
            <div className="py-6 px-4 text-center">
              <p className="text-2xl md:text-3xl font-display font-semibold text-foreground">50+</p>
              <p className="text-[10px] tracking-widest text-muted-foreground uppercase mt-1">Products</p>
            </div>
            <div className="py-6 px-4 text-center">
              <p className="text-2xl md:text-3xl font-display font-semibold text-copper">100%</p>
              <p className="text-[10px] tracking-widest text-muted-foreground uppercase mt-1">Quality</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
