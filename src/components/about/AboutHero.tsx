import { motion } from "framer-motion";
import founderImage from "@/assets/founder-portrait.jpg";

const AboutHero = () => {
  return (
    <section className="py-24 md:py-32 bg-warm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={founderImage}
              alt="Dina Kaplan, Founder of The Path"
              className="rounded-2xl w-full max-w-md mx-auto shadow-xl"
              loading="eager"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-sm font-medium uppercase tracking-wider text-sage">About The Path</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight">
              From Burnout to Breakthrough
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The Path was born from a simple belief: that meditation can transform lives — not just on the cushion, but in the boardroom, the classroom, and everywhere in between.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
