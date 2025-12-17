import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Star } from "lucide-react";

const clients = [
  {
    name: "Bay",
    description: "A major retail partner with whom we have maintained a successful long-term trading relationship, supplying diverse leather goods for their stores.",
    highlights: ["Long-term partnership", "Diverse product range", "Consistent quality delivery"],
  },
  {
    name: "Omni Group",
    description: "One of our valued international partners, Omni Group has trusted T-REX Leather for their leather goods requirements across multiple seasons.",
    highlights: ["International partnership", "Seasonal collections", "Premium quality standards"],
  },
  {
    name: "Lotto",
    description: "The renowned sports brand has partnered with us for leather accessories, demonstrating our capability to meet the standards of global brands.",
    highlights: ["Global brand standards", "Sports accessories", "Quality compliance"],
  },
];

const testimonials = [
  {
    quote: "T-REX Leather has consistently delivered high-quality products that meet our strict requirements. Their attention to detail is impressive.",
    author: "International Buyer",
  },
  {
    quote: "Reliable partner for bulk orders. Their production capacity and quality control processes are top-notch.",
    author: "Wholesale Client",
  },
];

const Clients = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-leather-dark">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-gold text-sm font-medium tracking-widest uppercase">
                Our Clients
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mt-4 mb-6">
                Trusted by Leading Brands
              </h1>
              <p className="text-primary-foreground/80 text-lg leading-relaxed">
                We take pride in our long-standing partnerships with international brands 
                and corporate buyers who trust T-REX Leather for their manufacturing needs.
              </p>
            </div>
          </div>
        </section>

        {/* Client Showcase */}
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-gold text-sm font-medium tracking-widest uppercase">
                Partnerships
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-4">
                Long-Term Trading Partners
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="bg-card border border-border/50 rounded-lg p-8 hover:shadow-elevated hover:border-gold/30 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-leather-dark rounded-lg flex items-center justify-center mb-6">
                    <span className="text-xl font-display font-bold text-gold">
                      {client.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                    {client.name}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {client.description}
                  </p>
                  <ul className="space-y-2">
                    {client.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                        <CheckCircle className="w-4 h-4 text-gold" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-gold text-sm font-medium tracking-widest uppercase">
                Testimonials
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-4">
                What Our Partners Say
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-card border border-border/50 rounded-lg p-8"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-foreground italic text-lg mb-6">
                    "{testimonial.quote}"
                  </p>
                  <p className="text-muted-foreground font-medium">
                    — {testimonial.author}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-gold text-sm font-medium tracking-widest uppercase">
                Why Partner With Us
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-4">
                The T-REX Advantage
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Reliable Supply", description: "Consistent production capacity for your needs" },
                { title: "Quality Assurance", description: "Strict quality control at every stage" },
                { title: "Custom Solutions", description: "Tailored products to match your brand" },
                { title: "Competitive Pricing", description: "Best value without compromising quality" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-6">
              Become Our Partner
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Join our growing list of satisfied clients. Contact us to discuss partnership opportunities.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Contact Us
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

export default Clients;
