import { motion } from "framer-motion";
import { Star } from "lucide-react";

const stories = [
  {
    name: "Sarah M.",
    title: "Now teaching at Equinox & private clients",
    quote: "I left my corporate job after graduating from The Path. Within 3 months, I had a full roster of private clients and a weekly class at Equinox. This program gave me everything I needed.",
    year: "Class of 2023",
  },
  {
    name: "David L.",
    title: "Launched a mindfulness startup",
    quote: "The business module was invaluable. I launched my own mindfulness app for teens right after certification, and the network of graduates has been an incredible support system.",
    year: "Class of 2022",
  },
  {
    name: "Priya K.",
    title: "Corporate meditation facilitator",
    quote: "I now lead weekly sessions at Google and Deloitte. The practicum experience gave me the confidence to walk into any boardroom and create a moment of calm.",
    year: "Class of 2024",
  },
];

const StudentStories = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Student Success Stories</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our graduates are teaching across the globe — in studios, corporations, hospitals, and schools.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stories.map((story, i) => (
            <motion.div
              key={story.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card border border-border rounded-xl p-8"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="text-sm text-muted-foreground leading-relaxed mb-6 italic">
                "{story.quote}"
              </blockquote>
              <div>
                <p className="font-semibold text-foreground">{story.name}</p>
                <p className="text-xs text-muted-foreground">{story.title}</p>
                <p className="text-xs text-sage font-medium mt-1">{story.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentStories;
