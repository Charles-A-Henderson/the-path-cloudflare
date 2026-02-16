import { motion } from "framer-motion";

const FounderStory = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-sage mb-4">Dina Kaplan</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              The Founder's Story
            </h2>
          </div>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Dina Kaplan co-founded Blip, one of New York's most successful video startups, scaling it from an idea 
              to a company powering millions of video streams. But behind the fundraising rounds and press features, 
              she was quietly struggling with anxiety, insomnia, and burnout.
            </p>
            <p>
              In search of relief, Dina traveled to more than 30 countries studying meditation traditions — from 
              Vipassana retreats in Myanmar to Zen monasteries in Japan, from Transcendental Meditation centers in 
              India to mindfulness labs at Harvard. What she discovered was transformative: meditation wasn't just 
              a relaxation technique — it was a fundamental skill that could rewire how we think, lead, and live.
            </p>
            <p>
              In 2014, Dina founded The Path in New York City with a mission to make meditation accessible, practical, 
              and deeply impactful. She designed The Path's signature methodology — blending ancient contemplative 
              practices with modern neuroscience — to serve everyone from first-time meditators to Fortune 500 executives.
            </p>
            <p>
              A graduate of Yale University, Dina has been featured in The New York Times, Forbes, The Wall Street Journal, 
              Inc., and Fast Company. She has led meditation programs for companies including Microsoft, Google, Nike, and 
              Deloitte, and has trained over 1,000 meditation teachers through The Path's certification program.
            </p>
            <p>
              Today, Dina continues to teach, write, and advocate for meditation as a tool for personal and organizational 
              transformation. Her vision remains the same as it was on day one: to help people find stillness in a 
              noisy world.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border">
            {[
              { stat: "30+", label: "Countries studied in" },
              { stat: "1,000+", label: "Teachers certified" },
              { stat: "10+", label: "Years of impact" },
              { stat: "50+", label: "Corporate clients" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="font-serif text-2xl md:text-3xl font-bold text-sage">{item.stat}</p>
                <p className="text-xs text-muted-foreground mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderStory;
