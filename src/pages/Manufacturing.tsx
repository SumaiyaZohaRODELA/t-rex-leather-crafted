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
    description: "Our design team develops unique products matching your brand identity.",
    features: ["Original designs", "Brand customization", "Color matching", "Logo embossing"],
  },
  {
    icon: Factory,
    title: "Bulk Production",
    description: "Manufacturing facility equipped for large-scale orders with consistency.",
    features: ["High capacity", "Consistent quality", "On-time delivery", "Flexible MOQ"],
  },
  {
    icon: CheckCircle,
    title: "Quality Control",
    description: "Rigorous multi-stage quality checks meeting international standards.",
    features: ["Multi-stage inspection", "Material testing", "Finish verification", "Packaging QC"],
  },
  {
    icon: Package,
    title: "Private Label",
    description: "Complete OEM and private label solutions for your brand.",
    features: ["Private labeling", "Custom packaging", "Documentation", "Export compliance"],
  },
];

const process = [
  { step: "01", title: "Consultation", description: "Discuss requirements" },
  { step: "02", title: "Design", description: "Develop samples" },
  { step: "03", title: "Production", description: "Manufacture with QC" },
  { step: "04", title: "Delivery", description: "Ship worldwide" },
];

const Manufacturing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-40 pb-20 relative">
          <div className="absolute inset-0 grain" />
          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="max-w-3xl">
              <div className="w-12 h-px bg-yellow-yolk mb-6" />
              <p className="text-xs tracking-[0.4em] text-yellow-yolk uppercase mb-4">
                Design & Manufacturing
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-foreground leading-tight mb-6">
                From Concept
                <br />
                <span className="font-semibold italic">to Creation</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
                Comprehensive manufacturing solutions from custom design development 
                to bulk production and private label services.
              </p>
            </div>
          </div>
        </section>

        {/* Image Section */}
        <section className="relative">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="aspect-[21/9] overflow-hidden">
              <img
                src={craftImg}
                alt="Manufacturing process"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-32 relative">
          <div className="absolute inset-0 grain" />
          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="max-w-2xl mb-20">
              <div className="w-12 h-px bg-yellow-yolk mb-6" />
              <p className="text-xs tracking-[0.4em] text-yellow-yolk uppercase mb-4">
                Our Capabilities
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-light text-foreground">
                End-to-End <span className="font-semibold italic">Solutions</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border/30">
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="bg-background p-10 group hover:bg-card transition-colors duration-500"
                >
                  <capability.icon className="w-6 h-6 text-yellow-yolk mb-6" strokeWidth={1.5} />
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                    {capability.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    {capability.description}
                  </p>
                  <ul className="space-y-2">
                    {capability.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="w-1 h-1 bg-yellow-yolk rounded-full" />
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
        <section className="py-32 bg-card border-t border-border/30 relative">
          <div className="absolute inset-0 grain" />
          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <div className="w-12 h-px bg-yellow-yolk mx-auto mb-6" />
              <p className="text-xs tracking-[0.4em] text-yellow-yolk uppercase mb-4">
                Our Process
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-light text-foreground">
                How We <span className="font-semibold italic">Work</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-display font-light text-border mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 relative">
          <div className="absolute inset-0 grain" />
          <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
            <div className="w-12 h-px bg-yellow-yolk mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-display font-light text-foreground mb-6">
              Start Your <span className="font-semibold italic">Project</span>
            </h2>
            <p className="text-muted-foreground mb-10 max-w-md mx-auto">
              Let's discuss your manufacturing requirements and create something exceptional.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Get Started
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

export default Manufacturing;