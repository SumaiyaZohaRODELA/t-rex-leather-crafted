import { Gem, Shield, Sparkles, Globe } from "lucide-react";

const features = [
  {
    icon: Gem,
    title: "Premium Materials",
    description: "Only the finest leather sourced from trusted suppliers worldwide.",
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description: "Rigorous multi-stage quality control for every single piece.",
  },
  {
    icon: Sparkles,
    title: "Expert Craft",
    description: "Skilled artisans with decades of leather working experience.",
  },
  {
    icon: Globe,
    title: "Export Ready",
    description: "Full compliance with international export standards.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-32 bg-card relative">
      <div className="absolute inset-0 grain" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-20">
          <div className="w-12 h-px bg-yellow-yolk mb-6" />
          <p className="text-xs tracking-[0.4em] text-yellow-yolk uppercase mb-4">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-light text-foreground mb-6">
            Excellence in
            <br />
            <span className="font-semibold italic">Every Detail</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We combine traditional craftsmanship with modern production capabilities 
            to deliver leather goods that exceed expectations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/30">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-8 lg:p-10 group hover:bg-secondary/50 transition-colors duration-500"
            >
              <feature.icon className="w-6 h-6 text-yellow-yolk mb-6" strokeWidth={1.5} />
              <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
