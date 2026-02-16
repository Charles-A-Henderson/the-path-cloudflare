import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Quote } from "lucide-react";
import heroImage from "@/assets/corporate-hero.jpg";

const CorporateHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Corporate meditation wellness session" className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/65 to-primary/35" />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-32 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="text-accent font-medium uppercase tracking-wider text-sm mb-4">Corporate Mindfulness</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-8">
            Mindfulness Programs for High-Performing Teams
          </h1>

          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/10 mb-8">
            <Quote className="h-6 w-6 text-accent mb-3 opacity-70" />
            <p className="text-primary-foreground/90 italic leading-relaxed mb-3">
              "The Path's meditation program transformed our team culture at Xbox. We saw measurable improvements in focus, collaboration, and employee satisfaction."
            </p>
            <p className="text-primary-foreground/60 text-sm font-medium">— VP of People, Microsoft / Xbox</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="rounded-full px-8 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
              Request a Consultation
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold">
              View Case Studies
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CorporateHero;
