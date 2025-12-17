import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";

const clients = [
  {
    name: "Bay",
    description: "A major retail partner with successful long-term trading relationship, supplying diverse leather goods.",
    highlights: ["Long-term partnership", "Diverse range", "Consistent quality"],
  },
  {
    name: "Omni Group",
    description: "Valued international partner trusting T-REX Leather for requirements across multiple seasons.",
    highlights: ["International partner", "Seasonal collections", "Premium standards"],
  },
  {
    name: "Lotto",
    description: "Global sports brand partnering for leather accessories, meeting world-class standards.",
    highlights: ["Global standards", "Sports accessories", "Quality compliance"],
  },
];

const testimonials = [
  {
    quote: "T-REX Leather delivers high-quality products meeting our strict requirements. Impressive attention to detail.",
    author: "International Buyer",
  },
  {
    quote: "Reliable partner for bulk orders. Production capacity and quality control are top-notch.",
    author: "Wholesale Client",
  },
];

const Clients = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-40 pb-20 relative">
          <div className="absolute inset-0 grain" />
          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="max-w-3xl">
              <div className="w-12 h-px bg-copper mb-6" />
              <p className="text-xs tracking-[0.4em] text-copper uppercase mb-4">
                Our Clients
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-foreground leading-tight mb-6">
                Trusted by
                <br />
                <span className="font-semibold italic">Leading Brands</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
                Long-standing partnerships with international brands who trust 
                T-REX Leather for their manufacturing needs.
              </p>
            </div>
          </div>
        </section>

        {/* Client Showcase */}
        <section className="py-32 relative">
          <div className="absolute inset-0 grain" />
          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border/30">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="bg-background p-10 group hover:bg-card transition-colors duration-500"
                >
                  <div className="w-14 h-14 bg-card border border-border/50 flex items-center justify-center mb-8 group-hover:border-copper/50 transition-colors">
                    <span className="text-lg font-display font-semibold text-copper">
                      {client.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-2xl font-display font-semibold text-foreground mb-4">
                    {client.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    {client.description}
                  </p>
                  <ul className="space-y-2">
                    {client.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="w-1 h-1 bg-copper rounded-full" />
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
        <section className="py-32 bg-card border-t border-border/30 relative">
          <div className="absolute inset-0 grain" />
          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <div className="w-12 h-px bg-copper mx-auto mb-6" />
              <p className="text-xs tracking-[0.4em] text-copper uppercase mb-4">
                Testimonials
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-light text-foreground">
                Client <span className="font-semibold italic">Feedback</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-background border border-border/30 p-10"
                >
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-copper text-copper" />
                    ))}
                  </div>
                  <p className="text-foreground italic text-lg mb-6 font-display">
                    "{testimonial.quote}"
                  </p>
                  <p className="text-xs tracking-widest text-muted-foreground uppercase">
                    — {testimonial.author}
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
            <div className="w-12 h-px bg-copper mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-display font-light text-foreground mb-6">
              Become Our <span className="font-semibold italic">Partner</span>
            </h2>
            <p className="text-muted-foreground mb-10 max-w-md mx-auto">
              Join our growing list of satisfied clients worldwide.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Contact Us
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

export default Clients;
