import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Paintbrush, Factory, CheckCircle, Package, ArrowRight } from "lucide-react";
import craftImg from "@/assets/about-craftsmanship.jpg";

const capabilities = [
  {
    icon: Paintbrush,
    title: "Custom Design",
    description: "Our in-house design team works closely with clients to develop unique products that match their brand identity and market requirements.",
    features: ["Original designs", "Brand customization", "Color matching", "Logo embossing"],
  },
  {
    icon: Factory,
    title: "Bulk Production",
    description: "Our manufacturing facility is equipped to handle large-scale orders while maintaining consistent quality across all units.",
    features: ["High capacity", "Consistent quality", "On-time delivery", "Flexible MOQ"],
  },
  {
    icon: CheckCircle,
    title: "Quality Control",
    description: "Every product goes through rigorous quality checks at multiple stages to ensure it meets international standards.",
    features: ["Multi-stage inspection", "Material testing", "Finish verification", "Packaging QC"],
  },
  {
    icon: Package,
    title: "OEM / Private Label",
    description: "We offer complete OEM and private label solutions for brands looking to launch their own leather goods line.",
    features: ["Private labeling", "Custom packaging", "Brand documentation", "Export compliance"],
  },
];

const process = [
  { step: "01", title: "Consultation", description: "Discuss your requirements and specifications" },
  { step: "02", title: "Design", description: "Develop samples and finalize designs" },
  { step: "03", title: "Production", description: "Manufacture with strict quality control" },
  { step: "04", title: "Delivery", description: "Ship with proper documentation" },
];

const Manufacturing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-leather-dark">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-gold text-sm font-medium tracking-widest uppercase">
                Design & Manufacturing
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mt-4 mb-6">
                From Concept to Creation
              </h1>
              <p className="text-primary-foreground/80 text-lg leading-relaxed">
                T-REX Leather offers comprehensive manufacturing solutions, from custom design 
                development to bulk production and private label services.
              </p>
            </div>
          </div>
        </section>

        {/* Image Section */}
        <section className="relative h-[50vh] overflow-hidden">
          <img
            src={craftImg}
            alt="Leather manufacturing process"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        </section>

        {/* Capabilities */}
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-gold text-sm font-medium tracking-widest uppercase">
                Our Capabilities
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-4">
                End-to-End Manufacturing Solutions
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="bg-card border border-border/50 rounded-lg p-8 hover:shadow-elevated hover:border-gold/30 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gold/10 rounded-lg flex items-center justify-center mb-6">
                    <capability.icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                    {capability.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {capability.description}
                  </p>
                  <ul className="space-y-2">
                    {capability.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                        <CheckCircle className="w-4 h-4 text-gold" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-gold text-sm font-medium tracking-widest uppercase">
                Our Process
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-4">
                How We Work
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <div key={index} className="text-center relative">
                  <div className="text-6xl font-display font-bold text-gold/20 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 right-0 translate-x-1/2 w-16 border-t-2 border-dashed border-gold/30" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss your manufacturing requirements and create something exceptional together.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Start a Project
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

export default Manufacturing;
