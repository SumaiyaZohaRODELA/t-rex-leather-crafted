import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-leather-dark text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <span className="text-3xl font-display font-bold text-gold tracking-tight">
                T-REX
              </span>
              <span className="text-primary-foreground font-light tracking-widest text-sm uppercase">
                Leather
              </span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Premium leather goods manufacturer and exporter from Bangladesh. 
              Crafting quality leather products for international brands since establishment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-display text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About Us", "Products", "Manufacturing", "Clients", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(" ", "-").replace("home", "")}`}
                    className="text-primary-foreground/70 hover:text-gold transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-gold font-display text-lg mb-6">Our Products</h4>
            <ul className="space-y-3">
              {["Leather Bags", "Belts", "Wallets & Purses", "Backpacks", "Keychains", "Passport Holders"].map((item) => (
                <li key={item}>
                  <Link
                    to="/products"
                    className="text-primary-foreground/70 hover:text-gold transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-gold font-display text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-primary-foreground/70 text-sm">Phone</p>
                  <a href="tel:+8801712035733" className="text-primary-foreground hover:text-gold transition-colors">
                    +880 1712-035733
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-primary-foreground/70 text-sm">Email</p>
                  <a href="mailto:info@trexleather.com" className="text-primary-foreground hover:text-gold transition-colors">
                    info@trexleather.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-primary-foreground/70 text-sm">Location</p>
                  <p className="text-primary-foreground">Bangladesh</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © {new Date().getFullYear()} T-REX Leather. All rights reserved.
            </p>
            <p className="text-primary-foreground/50 text-sm">
              Owner: Md. Shamsuzzoha
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
