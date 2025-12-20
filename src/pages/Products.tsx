import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import bagsImg from "@/assets/product-bags.jpg";
import beltsImg from "@/assets/product-belts.jpg";
import walletsImg from "@/assets/product-wallets.jpg";
import backpacksImg from "@/assets/product-backpacks.jpg";
import accessoriesImg from "@/assets/product-accessories.jpg";

const products = [
  {
    id: 1,
    name: "Leather Bags",
    description: "Tote bags, messenger bags, briefcases, shoulder bags, and crossbody bags crafted for corporate and retail markets.",
    image: bagsImg,
    features: ["Tote Bags", "Messenger Bags", "Briefcases", "Shoulder Bags"],
  },
  {
    id: 2,
    name: "Wallets & Purses",
    description: "Premium wallets in bifold, trifold, card holders, and coin purses. Multiple leather finishes available.",
    image: walletsImg,
    features: ["Bifold Wallets", "Trifold", "Card Holders", "Coin Purses"],
  },
  {
    id: 3,
    name: "Leather Belts",
    description: "High-quality belts for formal and casual wear in various widths and buckle styles.",
    image: beltsImg,
    features: ["Dress Belts", "Casual Belts", "Reversible", "Custom Buckles"],
  },
  {
    id: 4,
    name: "Backpacks",
    description: "Stylish and functional leather backpacks for professionals and travelers.",
    image: backpacksImg,
    features: ["Laptop Packs", "Travel Packs", "Day Packs", "Business"],
  },
  {
    id: 5,
    name: "Accessories",
    description: "Complete your collection with keychains, passport holders, luggage tags, and more.",
    image: accessoriesImg,
    features: ["Keychains", "Passport Holders", "Luggage Tags", "Card Cases"],
  },
];

const Products = () => {
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
                Our Collection
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-foreground leading-tight mb-6">
                Premium Leather
                <br />
                <span className="font-semibold italic">Goods</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
                Explore our comprehensive range of leather products, crafted with precision 
                to meet international quality standards.
              </p>
            </div>
          </div>
        </section>

        {/* Products List */}
        <section className="pb-32 relative">
          <div className="absolute inset-0 grain" />
          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="space-y-1">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className="group border-t border-border/30 py-12 lg:py-16"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Number */}
                    <div className="lg:col-span-1">
                      <span className="text-xs text-muted-foreground tracking-widest">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Image */}
                    <div className="lg:col-span-3">
                      <div className="aspect-square overflow-hidden bg-card">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-6">
                      <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4 group-hover:text-yellow-yolk transition-colors">
                        {product.name}
                      </h2>
                      <p className="text-muted-foreground mb-6 max-w-lg">
                        {product.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {product.features.map((feature, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs tracking-wide text-muted-foreground border border-border/50 uppercase"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="lg:col-span-2 flex lg:justify-end">
                      <Link
                        to="/contact"
                        className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center group-hover:bg-yellow-yolk group-hover:border-yellow-yolk transition-all duration-500"
                      >
                        <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 bg-card border-t border-border/30 relative">
          <div className="absolute inset-0 grain" />
          <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
            <div className="w-12 h-px bg-yellow-yolk mx-auto mb-6" />
            <p className="text-xs tracking-[0.4em] text-yellow-yolk uppercase mb-4">
              Custom Orders
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-light text-foreground mb-6">
              Need Something <span className="font-semibold italic">Unique?</span>
            </h2>
            <p className="text-muted-foreground mb-10 max-w-md mx-auto">
              We offer custom design and manufacturing services tailored to your brand.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Request Custom Quote</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;