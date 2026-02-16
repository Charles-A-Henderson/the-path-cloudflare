import { motion } from "framer-motion";

const pressLogos = [
  { name: "The New York Times", abbr: "NYT" },
  { name: "Forbes", abbr: "Forbes" },
  { name: "The Wall Street Journal", abbr: "WSJ" },
  { name: "Inc.", abbr: "Inc." },
  { name: "Fast Company", abbr: "Fast Co." },
  { name: "Entrepreneur", abbr: "Entrep." },
];

const PressLogos = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="text-center text-sm font-medium uppercase tracking-wider text-muted-foreground mb-10">
          As Featured In
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
        >
          {pressLogos.map((logo) => (
            <span
              key={logo.name}
              className="font-serif text-xl md:text-2xl font-bold text-muted-foreground/40 hover:text-muted-foreground/70 transition-colors"
              title={logo.name}
            >
              {logo.abbr}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PressLogos;
