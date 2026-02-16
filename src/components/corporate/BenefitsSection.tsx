import { motion } from "framer-motion";
import { TrendingDown, Brain, Heart, Zap } from "lucide-react";

const benefits = [
  { icon: TrendingDown, stat: "32%", label: "Reduction in employee burnout", source: "American Psychological Association" },
  { icon: Brain, stat: "23%", label: "Increase in focus & productivity", source: "Harvard Business Review" },
  { icon: Heart, stat: "28%", label: "Improvement in employee well-being", source: "Journal of Occupational Health" },
  { icon: Zap, stat: "19%", label: "Boost in creative problem-solving", source: "Mindfulness Research Monthly" },
];

const BenefitsSection = () => {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">The Business Case for Mindfulness</h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Research-backed outcomes that matter to your bottom line.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {benefits.map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
                <b.icon className="h-7 w-7 text-accent" />
              </div>
              <p className="font-serif text-4xl font-bold text-accent mb-2">{b.stat}</p>
              <p className="text-sm text-primary-foreground/85 mb-2">{b.label}</p>
              <p className="text-xs text-primary-foreground/40 italic">{b.source}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
