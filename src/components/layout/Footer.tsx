import { Link } from "react-router-dom";

const footerLinks = {
  navigation: [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Manufacturing", path: "/manufacturing" },
    { name: "Clients", path: "/clients" },
    { name: "Contact", path: "/contact" },
  ],
  products: [
    "Leather Bags",
    "Belts",
    "Wallets",
    "Backpacks",
    "Accessories",
  ],
};

export function Footer() {
  return (
    <footer className="bg-background border-t border-border/30 relative">
      <div className="absolute inset-0 grain" />
      
      {/* Main Footer */}
      <div className="container mx-auto px-6 lg:px-12 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <span className="text-2xl font-display font-semibold text-foreground tracking-tight">
                T-REX
              </span>
              <p className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
                Fine Leather Goods
              </p>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Premium leather goods manufacturer and exporter from Bangladesh. 
              Crafting excellence for international brands.
            </p>
            <div className="w-12 h-px bg-copper" />
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs tracking-widest text-foreground uppercase mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-sm text-muted-foreground hover:text-copper transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs tracking-widest text-foreground uppercase mb-6">
              Products
            </h4>
            <ul className="space-y-3">
              {footerLinks.products.map((item) => (
                <li key={item}>
                  <Link
                    to="/products"
                    className="text-sm text-muted-foreground hover:text-copper transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-widest text-foreground uppercase mb-6">
              Contact
            </h4>
            <div className="space-y-4">
              <div>
                <p className="text-[10px] tracking-widest text-muted-foreground uppercase mb-1">Phone</p>
                <a href="tel:+8801712035733" className="text-sm text-foreground hover:text-copper transition-colors">
                  +880 1712-035733
                </a>
              </div>
              <div>
                <p className="text-[10px] tracking-widest text-muted-foreground uppercase mb-1">Location</p>
                <p className="text-sm text-foreground">Bangladesh</p>
              </div>
              <div>
                <p className="text-[10px] tracking-widest text-muted-foreground uppercase mb-1">Owner</p>
                <p className="text-sm text-copper">Md. Shamsuzzoha</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/30">
        <div className="container mx-auto px-6 lg:px-12 py-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} T-REX Leather. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Handcrafted with precision in Bangladesh
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
