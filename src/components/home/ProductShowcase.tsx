import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import bagsImg from "@/assets/product-bags.jpg";
import beltsImg from "@/assets/product-belts.jpg";
import walletsImg from "@/assets/product-wallets.jpg";
import backpacksImg from "@/assets/product-backpacks.jpg";
import accessoriesImg from "@/assets/product-accessories.jpg";

const categories = [
  {
    id: 1,
    name: "Bags",
    subtitle: "Totes & Messenger",
    image: bagsImg,
    size: "large",
  },
  {
    id: 2,
    name: "Belts",
    subtitle: "Premium Leather",
    image: beltsImg,
    size: "small",
  },
  {
    id: 3,
    name: "Wallets",
    subtitle: "Bifold & Card Holders",
    image: walletsImg,
    size: "small",
  },
  {
    id: 4,
    name: "Backpacks",
    subtitle: "Professional",
    image: backpacksImg,
    size: "medium",
  },
  {
    id: 5,
    name: "Accessories",
    subtitle: "Keychains & More",
    image: accessoriesImg,
    size: "medium",
  },
];

export function ProductShowcase() {
  return (
    <section className="py-32 bg-background relative">
      <div className="absolute inset-0 grain" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-20">
          <div>
            <div className="w-12 h-px bg-yellow-yolk mb-6" />
            <p className="text-xs tracking-[0.4em] text-yellow-yolk uppercase mb-4">
              Our Collection
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-light text-foreground">
              Crafted with
              <br />
              <span className="font-semibold italic">Precision</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-md mt-6 lg:mt-0 leading-relaxed">
            Each piece is meticulously crafted using the finest leather, 
            designed to meet the exacting standards of international brands.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Large Item */}
          <Link
            to="/products"
            className="group relative overflow-hidden bg-card lg:col-span-2 lg:row-span-2 aspect-square lg:aspect-auto"
          >
            <img
              src={categories[0].image}
              alt={categories[0].name}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-[10px] tracking-widest text-yellow-yolk uppercase mb-2">
                    {categories[0].subtitle}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-display font-semibold text-foreground">
                    {categories[0].name}
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center group-hover:bg-yellow-yolk group-hover:border-yellow-yolk transition-all duration-500">
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
              </div>
            </div>
          </Link>

          {/* Smaller Items */}
          {categories.slice(1).map((category) => (
            <Link
              key={category.id}
              to="/products"
              className="group relative overflow-hidden bg-card aspect-square"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-[10px] tracking-widest text-yellow-yolk uppercase mb-1">
                      {category.subtitle}
                    </p>
                    <h3 className="text-lg font-display font-semibold text-foreground">
                      {category.name}
                    </h3>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-border/50 flex items-center justify-center group-hover:bg-yellow-yolk group-hover:border-yellow-yolk transition-all duration-500">
                    <ArrowUpRight className="w-3 h-3 text-muted-foreground group-hover:text-foreground transition-colors" />
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
