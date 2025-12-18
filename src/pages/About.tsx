import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Heart, Lightbulb, ArrowRight } from "lucide-react";
import aboutImg from "@/assets/about-craftsmanship.jpg";

const values = [
  {
    icon: Target,
    title: "Quality First",
    description: "We never compromise on materials or craftsmanship.",
  },
  {
    icon: Heart,
    title: "Customer Focus",
    description: "Building lasting partnerships through trust and reliability.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Continuously developing new designs and techniques.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-40 pb-20 relative">
          <div className="absolute inset-0 grain" />
          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="max-w-3xl">
              <div className="w-12 h-px bg-leather-tan mb-6" />
              <p className="text-xs tracking-[0.4em] text-leather-tan uppercase mb-4">
                Our Story
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-foreground leading-tight mb-6">
                Crafting Leather
                <br />
                <span className="font-semibold italic">Excellence</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
                T-REX Leather is a leading manufacturer and exporter based in Bangladesh, 
                dedicated to producing premium quality leather products for international markets.
              </p>
            </div>
          </div>
        </section>

        {/* Image Section */}
        <section className="relative">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="aspect-[21/9] overflow-hidden">
              <img
                src={aboutImg}
                alt="Leather craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-32 relative">
          <div className="absolute inset-0 grain" />
          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div>
                <div className="w-12 h-px bg-leather-tan mb-6" />
                <p className="text-xs tracking-[0.4em] text-leather-tan uppercase mb-4">
                  Heritage
                </p>
                <h2 className="text-3xl md:text-4xl font-display font-light text-foreground mb-8">
                  A Legacy of
                  <br />
                  <span className="font-semibold italic">Craftsmanship</span>
                </h2>
              </div>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Founded by Md. Shamsuzzoha, T-REX Leather began with a vision to bring 
                  Bangladesh's finest leather craftsmanship to the global market.
                </p>
                <p>
                  Our commitment to quality has earned us long-term partnerships with 
                  renowned brands like Bay, Omni Group, and Lotto. We take pride in 
                  producing leather goods that meet the highest international standards.
                </p>
                <p>
                  Today, we continue to expand our capabilities while staying true 
                  to our core values of quality, reliability, and innovation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-32 bg-card relative">
          <div className="absolute inset-0 grain" />
          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <div className="w-12 h-px bg-leather-tan mx-auto mb-6" />
              <p className="text-xs tracking-[0.4em] text-leather-tan uppercase mb-4">
                Our Values
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-light text-foreground">
                What Drives Us <span className="font-semibold italic">Forward</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border/30">
              {values.map((value, index) => (
                <div key={index} className="bg-card p-10 text-center">
                  <value.icon className="w-8 h-8 text-leather-tan mx-auto mb-6" strokeWidth={1.5} />
                  <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Owner Section */}
        <section className="py-32 relative">
          <div className="absolute inset-0 grain" />
          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-12 h-px bg-leather-tan mx-auto mb-6" />
              <p className="text-xs tracking-[0.4em] text-leather-tan uppercase mb-4">
                Leadership
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-light text-foreground mb-12">
                Meet Our <span className="font-semibold italic">Founder</span>
              </h2>
              
              <div className="bg-card border border-border/50 p-12">
                <div className="w-20 h-20 bg-secondary rounded-full mx-auto mb-6 flex items-center justify-center border border-leather-tan/30">
                  <span className="text-2xl font-display font-semibold text-leather-tan">MS</span>
                </div>
                <h3 className="text-2xl font-display font-semibold text-foreground mb-2">
                  Md. Shamsuzzoha
                </h3>
                <p className="text-leather-tan text-sm uppercase tracking-widest mb-6">Founder & Owner</p>
                <p className="text-muted-foreground leading-relaxed max-w-md mx-auto">
                  With a passion for leather craftsmanship and a vision for excellence, 
                  Md. Shamsuzzoha established T-REX Leather to bring quality leather goods 
                  from Bangladesh to the world.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 bg-card border-t border-border/30 relative">
          <div className="absolute inset-0 grain" />
          <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
            <div className="w-12 h-px bg-leather-tan mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-display font-light text-foreground mb-6">
              Ready to Work <span className="font-semibold italic">Together?</span>
            </h2>
            <p className="text-muted-foreground mb-10 max-w-md mx-auto">
              Contact us today to discuss your leather goods requirements.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;