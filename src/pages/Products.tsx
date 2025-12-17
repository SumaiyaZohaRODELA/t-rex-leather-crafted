import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import bagsImg from "@/assets/product-bags.jpg";
import beltsImg from "@/assets/product-belts.jpg";
import walletsImg from "@/assets/product-wallets.jpg";
import backpacksImg from "@/assets/product-backpacks.jpg";
import accessoriesImg from "@/assets/product-accessories.jpg";

const products = [
  {
    id: 1,
    name: "Leather Bags",
    description: "Our extensive bag collection includes tote bags, messenger bags, briefcases, shoulder bags, and crossbody bags. Perfect for corporate gifting, retail, and wholesale markets.",
    image: bagsImg,
    features: ["Tote Bags", "Messenger Bags", "Briefcases", "Shoulder Bags", "Crossbody Bags"],
  },
  {
    id: 2,
    name: "Money Bags & Wallets",
    description: "Premium wallets and money bags in various styles including bifold, trifold, card holders, and coin purses. Available in multiple leather finishes and colors.",
    image: walletsImg,
    features: ["Bifold Wallets", "Trifold Wallets", "Card Holders", "Coin Purses", "Money Clips"],
  },
  {
    id: 3,
    name: "Leather Belts",
    description: "High-quality leather belts for formal and casual wear. Available in various widths, buckle styles, and leather types to meet diverse market needs.",
    image: beltsImg,
    features: ["Dress Belts", "Casual Belts", "Reversible Belts", "Custom Buckles", "Various Widths"],
  },
  {
    id: 4,
    name: "Backpacks",
    description: "Stylish and functional leather backpacks designed for professionals and travelers. Durable construction with premium materials.",
    image: backpacksImg,
    features: ["Laptop Backpacks", "Travel Backpacks", "Day Packs", "Mini Backpacks", "Business Packs"],
  },
  {
    id: 5,
    name: "Accessories",
    description: "Complete your collection with our range of leather accessories including keychains, passport holders, luggage tags, and more.",
    image: accessoriesImg,
    features: ["Keychains", "Passport Holders", "Luggage Tags", "Card Cases", "Pen Holders"],
  },
];

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-leather-dark">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-gold text-sm font-medium tracking-widest uppercase">
                Our Products
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mt-4 mb-6">
                Premium Leather Goods Collection
              </h1>
              <p className="text-primary-foreground/80 text-lg leading-relaxed">
                Explore our comprehensive range of leather products, crafted with precision 
                and designed to meet international quality standards.
              </p>
            </div>
          </div>
        </section>

        {/* Products List */}
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="space-y-24">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="relative overflow-hidden rounded-lg shadow-elevated">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full aspect-square object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-leather-dark/40 to-transparent" />
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <span className="text-gold text-sm font-medium tracking-widest uppercase">
                      Category {String(product.id).padStart(2, "0")}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-4 mb-6">
                      {product.name}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-8">
                      {product.description}
                    </p>
                    <div className="mb-8">
                      <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">
                        Available Types
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {product.features.map((feature, i) => (
                          <span
                            key={i}
                            className="px-4 py-2 bg-muted text-muted-foreground text-sm rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Button variant="premium" asChild>
                      <Link to="/contact">
                        Inquire About This Product
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-6">
              Need Custom Products?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              We offer custom design and manufacturing services. Share your requirements and 
              let us bring your vision to life.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Request Custom Quote
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

export default Products;
