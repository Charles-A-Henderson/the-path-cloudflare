import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const InquiryForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="inquiry" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 max-w-5xl mx-auto items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Let's Build Your Program
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Every organization is different. Tell us about your team, and we'll design a mindfulness program that fits your culture, goals, and budget.
            </p>

            <div className="space-y-6">
              <div>
                <p className="font-semibold text-foreground text-sm mb-1">Quick response</p>
                <p className="text-sm text-muted-foreground">We respond to all inquiries within 24 hours.</p>
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm mb-1">Free consultation</p>
                <p className="text-sm text-muted-foreground">30-minute call to understand your needs — no commitment required.</p>
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm mb-1">Custom proposals</p>
                <p className="text-sm text-muted-foreground">We'll send a tailored proposal with pricing, timeline, and program structure.</p>
              </div>
            </div>

            <p className="mt-8 text-sm text-muted-foreground">
              Prefer email? Reach us at{" "}
              <a href="mailto:corporate@thepath.com" className="text-sage underline hover:text-sage/80 transition-colors">
                corporate@thepath.com
              </a>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {submitted ? (
              <div className="bg-sage/10 rounded-2xl p-10 text-center">
                <p className="font-serif text-2xl font-bold text-foreground mb-3">Thank you! 🙏</p>
                <p className="text-muted-foreground">We've received your inquiry and will be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">First Name</label>
                    <Input placeholder="Jane" required className="rounded-lg" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Last Name</label>
                    <Input placeholder="Smith" required className="rounded-lg" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Work Email</label>
                  <Input type="email" placeholder="jane@company.com" required className="rounded-lg" />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Company</label>
                  <Input placeholder="Acme Corp" required className="rounded-lg" />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Team Size</label>
                  <Select>
                    <SelectTrigger className="rounded-lg">
                      <SelectValue placeholder="Select team size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10-50">10–50 people</SelectItem>
                      <SelectItem value="50-200">50–200 people</SelectItem>
                      <SelectItem value="200-500">200–500 people</SelectItem>
                      <SelectItem value="500+">500+ people</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">What are you looking for?</label>
                  <Textarea placeholder="Tell us about your goals, timeline, and any specific needs..." rows={4} className="rounded-lg" />
                </div>

                <Button type="submit" size="lg" className="w-full rounded-full bg-sage text-sage-foreground hover:bg-sage/90 font-semibold">
                  Send Inquiry
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InquiryForm;
