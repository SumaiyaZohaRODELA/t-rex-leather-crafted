export function ClientLogos() {
  const clients = [
    { name: "Bay", display: "BAY" },
    { name: "Omni Group", display: "OMNI" },
    { name: "Lotto", display: "LOTTO" },
  ];

  return (
    <section className="py-20 bg-card border-y border-border/30 relative">
      <div className="absolute inset-0 grain" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase">
            Trusted by International Brands
          </p>
          
          <div className="flex items-center gap-16 md:gap-24">
            {clients.map((client, index) => (
              <div
                key={index}
                className="text-xl md:text-2xl font-display font-semibold text-muted-foreground/50 hover:text-foreground transition-colors duration-500 tracking-wider"
              >
                {client.display}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
