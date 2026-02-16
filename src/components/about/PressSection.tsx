import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const pressItems = [
  {
    outlet: "The New York Times",
    abbr: "NYT",
    headline: "\"How One Former Tech CEO Found Peace Through Meditation\"",
    year: "2019",
  },
  {
    outlet: "Forbes",
    abbr: "Forbes",
    headline: "\"The Path Is Changing How Corporate America Meditates\"",
    year: "2020",
  },
  {
    outlet: "The Wall Street Journal",
    abbr: "WSJ",
    headline: "\"Meditation Goes Mainstream in the C-Suite\"",
    year: "2021",
  },
  {
    outlet: "Inc.",
    abbr: "Inc.",
    headline: "\"This Founder Left Tech to Build a Meditation Empire\"",
    year: "2018",
  },
  {
    outlet: "Fast Company",
    abbr: "Fast Co.",
    headline: "\"Why Fortune 500 Companies Are Investing in Mindfulness\"",
    year: "2022",
  },
  {
    outlet: "Entrepreneur",
    abbr: "Entrep.",
    headline: "\"Dina Kaplan on Building The Path From Burnout\"",
    year: "2020",
  },
];

const PressSection = () => {
  return (
    <section className="py-24 bg-warm">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Press & Media</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              The Path and Dina Kaplan have been featured in leading publications worldwide.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {pressItems.map((item, i) => (
              <motion.div
                key={item.outlet}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="font-serif text-lg font-bold text-foreground">{item.abbr}</span>
                  <span className="text-xs text-muted-foreground">{item.year}</span>
                </div>
                <p className="text-sm text-muted-foreground italic leading-relaxed">{item.headline}</p>
                <div className="flex items-center gap-1 mt-3 text-sage text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Read article</span>
                  <ExternalLink className="h-3 w-3" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PressSection;
