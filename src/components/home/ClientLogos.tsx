const clients = [
  { name: "Bay", logo: "BAY" },
  { name: "Omni Group", logo: "OMNI" },
  { name: "Lotto", logo: "LOTTO" },
];

export function ClientLogos() {
  return (
    <section className="py-16 bg-leather-dark">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gold/80 text-sm font-medium tracking-widest uppercase">
            Trusted By Leading Brands
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <span className="text-2xl md:text-3xl font-display font-bold text-primary-foreground tracking-widest">
                {client.logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
