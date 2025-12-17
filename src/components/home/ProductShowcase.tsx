import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import bagsImg from "@/assets/product-bags.jpg";
import beltsImg from "@/assets/product-belts.jpg";
import walletsImg from "@/assets/product-wallets.jpg";
import backpacksImg from "@/assets/product-backpacks.jpg";
import accessoriesImg from "@/assets/product-accessories.jpg";

const categories = [
  {
    id: 1,
    name: "Leather Bags",
    description: "Totes, messenger bags, briefcases & more",
    image: bagsImg,
    featured: true,
  },
  {
    id: 2,
    name: "Belts",
    description: "Premium leather belts for every occasion",
    image: beltsImg,
    featured: false,
  },
  {
    id: 3,
    name: "Wallets & Purses",
    description: "Bifold, trifold, and card holders",
    image: walletsImg,
    featured: false,
  },
  {
    id: 4,
    name: "Backpacks",
    description: "Stylish leather backpacks for professionals",
    image: backpacksImg,
    featured: true,
  },
  {
    id: 5,
    name: "Accessories",
    description: "Keychains, passport holders & more",
    image: accessoriesImg,
    featured: false,
  },
];

export function ProductShowcase() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold text-sm font-medium tracking-widest uppercase">
            Our Collection
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-4 mb-6">
            Premium Leather Products
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            From elegant bags to essential accessories, we manufacture a complete range of 
            leather goods for international brands and corporate buyers.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to="/products"
              className={`group relative overflow-hidden rounded-lg ${
                category.featured && index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              <div 
                className={`relative overflow-hidden ${
                  category.featured && index === 0 ? "aspect-square lg:aspect-auto lg:h-full" : "aspect-square"
                }`}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-leather-dark/90 via-leather-dark/20 to-transparent" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-xl md:text-2xl font-display font-semibold text-primary-foreground mb-2">
                    {category.name}
                  </h3>
                  <p className="text-primary-foreground/70 text-sm mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center gap-2 text-gold group-hover:gap-4 transition-all">
                    <span className="text-sm font-medium uppercase tracking-wide">View Products</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
