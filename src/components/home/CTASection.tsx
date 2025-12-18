import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import craftImg from "@/assets/about-craftsmanship.jpg";

export function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={craftImg} 
          alt="Leather craftsmanship" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/90" />
      </div>

      <div className="absolute inset-0 grain" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-12 h-px bg-leather-tan mx-auto mb-8" />
          <p className="text-xs tracking-[0.4em] text-leather-tan uppercase mb-6">
            Partner With Us
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-light text-foreground mb-6">
            Let's Create
            <br />
            <span className="font-semibold italic">Something Exceptional</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10 max-w-lg mx-auto">
            From custom designs to bulk manufacturing, we're ready to bring 
            your vision to life with uncompromising quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Start a Project
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/products">View Catalog</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
