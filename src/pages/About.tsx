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
    description: "We never compromise on the quality of our materials or craftsmanship.",
  },
  {
    icon: Heart,
    title: "Customer Focus",
    description: "Building lasting partnerships through reliability and trust.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Continuously developing new designs and manufacturing techniques.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-leather-dark">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-gold text-sm font-medium tracking-widest uppercase">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mt-4 mb-6">
                Crafting Leather Excellence Since Day One
              </h1>
              <p className="text-primary-foreground/80 text-lg leading-relaxed">
                T-REX Leather is a leading leather goods manufacturer and exporter based in Bangladesh, 
                dedicated to producing premium quality leather products for international markets.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <img
                  src={aboutImg}
                  alt="Leather craftsmanship"
                  className="rounded-lg shadow-elevated w-full"
                />
              </div>
              <div>
                <span className="text-gold text-sm font-medium tracking-widest uppercase">
                  Our Story
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-4 mb-6">
                  A Legacy of Leather Craftsmanship
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Founded by Md. Shamsuzzoha, T-REX Leather began with a vision to bring 
                    Bangladesh's finest leather craftsmanship to the global market. What started 
                    as a small workshop has grown into a trusted manufacturing partner for 
                    international brands.
                  </p>
                  <p>
                    Our commitment to quality, innovation, and customer satisfaction has earned 
                    us long-term partnerships with renowned brands like Bay, Omni Group, and Lotto. 
                    We take pride in producing leather goods that meet the highest international standards.
                  </p>
                  <p>
                    Today, we continue to expand our product range and manufacturing capabilities, 
                    always staying true to our core values of quality, reliability, and innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-gold text-sm font-medium tracking-widest uppercase">
                Our Values
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-4">
                What Drives Us Forward
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Owner Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-gold text-sm font-medium tracking-widest uppercase">
                Leadership
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-4 mb-8">
                Meet Our Founder
              </h2>
              <div className="bg-card border border-border/50 rounded-lg p-8 md:p-12">
                <div className="w-24 h-24 bg-leather-tan rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-3xl font-display font-bold text-leather-dark">MS</span>
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                  Md. Shamsuzzoha
                </h3>
                <p className="text-gold font-medium mb-4">Founder & Owner</p>
                <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
                  With a passion for leather craftsmanship and a vision for excellence, 
                  Md. Shamsuzzoha established T-REX Leather to bring quality leather goods 
                  from Bangladesh to the world. His dedication to quality and customer 
                  satisfaction continues to drive the company forward.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your leather goods requirements.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="w-5 h-5" />
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
