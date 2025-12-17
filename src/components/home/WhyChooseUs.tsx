import { Shield, Award, Users, Globe } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Quality Assured",
    description: "Every product undergoes rigorous quality checks to meet international standards.",
  },
  {
    icon: Award,
    title: "Expert Craftsmanship",
    description: "Skilled artisans with decades of experience in leather manufacturing.",
  },
  {
    icon: Users,
    title: "Trusted Partner",
    description: "Long-term partnerships with Bay, Omni Group, Lotto and more global brands.",
  },
  {
    icon: Globe,
    title: "Export Ready",
    description: "Fully equipped for bulk orders and international shipping requirements.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold text-sm font-medium tracking-widest uppercase">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-4 mb-6">
            Your Reliable Manufacturing Partner
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            T-REX Leather combines traditional craftsmanship with modern production 
            capabilities to deliver exceptional leather goods.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card border border-border/50 rounded-lg p-8 hover:shadow-elevated hover:border-gold/30 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gold/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                <feature.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
