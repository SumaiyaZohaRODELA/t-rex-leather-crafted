import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent",
      description: "We will get back to you shortly.",
    });

    setFormData({ name: "", email: "", company: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-40 pb-20 relative">
          <div className="absolute inset-0 grain" />
          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="max-w-3xl">
              <div className="w-12 h-px bg-leather-tan mb-6" />
              <p className="text-xs tracking-[0.4em] text-leather-tan uppercase mb-4">
                Contact Us
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-foreground leading-tight mb-6">
                Let's Start a
                <br />
                <span className="font-semibold italic">Conversation</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
                Ready to discuss your leather goods requirements? Get in touch 
                and let's create something exceptional together.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-32 relative">
          <div className="absolute inset-0 grain" />
          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              {/* Contact Info */}
              <div>
                <div className="w-12 h-px bg-leather-tan mb-6" />
                <p className="text-xs tracking-[0.4em] text-leather-tan uppercase mb-4">
                  Get in Touch
                </p>
                <h2 className="text-3xl font-display font-light text-foreground mb-8">
                  We'd Love to <span className="font-semibold italic">Hear From You</span>
                </h2>
                <p className="text-muted-foreground mb-12 leading-relaxed">
                  Whether you need bulk orders, custom designs, or partnership 
                  opportunities, we're here to help.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-card border border-border/50 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-leather-tan" />
                    </div>
                    <div>
                      <p className="text-[10px] tracking-widest text-muted-foreground uppercase mb-1">Phone</p>
                      <a
                        href="tel:+8801712035733"
                        className="text-foreground hover:text-leather-tan transition-colors"
                      >
                        +880 1712-035733
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-card border border-border/50 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-leather-tan" />
                    </div>
                    <div>
                      <p className="text-[10px] tracking-widest text-muted-foreground uppercase mb-1">Email</p>
                      <a
                        href="mailto:info@trexleather.com"
                        className="text-foreground hover:text-leather-tan transition-colors"
                      >
                        info@trexleather.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-card border border-border/50 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-leather-tan" />
                    </div>
                    <div>
                      <p className="text-[10px] tracking-widest text-muted-foreground uppercase mb-1">Location</p>
                      <p className="text-foreground">Bangladesh</p>
                    </div>
                  </div>
                </div>

                {/* Owner Info */}
                <div className="mt-12 p-6 bg-card border border-border/30">
                  <p className="text-[10px] tracking-widest text-muted-foreground uppercase mb-2">Owner & Director</p>
                  <p className="text-lg text-leather-tan font-display font-semibold">Md. Shamsuzzoha</p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-card border border-border/30 p-10 lg:p-12">
                <p className="text-xs tracking-[0.4em] text-leather-tan uppercase mb-4">
                  Send Message
                </p>
                <h3 className="text-2xl font-display font-light text-foreground mb-8">
                  Inquiry <span className="font-semibold italic">Form</span>
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-[10px] tracking-widest text-muted-foreground uppercase mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="bg-background border-border/50 focus:border-leather-tan"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-[10px] tracking-widest text-muted-foreground uppercase mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        className="bg-background border-border/50 focus:border-leather-tan"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-[10px] tracking-widest text-muted-foreground uppercase mb-2">
                        Company
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company"
                        className="bg-background border-border/50 focus:border-leather-tan"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-[10px] tracking-widest text-muted-foreground uppercase mb-2">
                        Phone
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 234 567 890"
                        className="bg-background border-border/50 focus:border-leather-tan"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[10px] tracking-widest text-muted-foreground uppercase mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements..."
                      rows={5}
                      required
                      className="bg-background border-border/50 focus:border-leather-tan resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;