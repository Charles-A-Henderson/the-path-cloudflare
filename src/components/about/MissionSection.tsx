import { motion } from "framer-motion";
import { Compass, Heart, Users, Sparkles } from "lucide-react";

const values = [
  {
    icon: Compass,
    title: "Accessibility",
    desc: "Meditation should be available to everyone — regardless of background, experience, or belief system.",
  },
  {
    icon: Heart,
    title: "Authenticity",
    desc: "We honor the ancient roots of meditation while making it relevant, practical, and grounded in modern science.",
  },
  {
    icon: Users,
    title: "Community",
    desc: "We believe transformation happens in connection — through shared practice, honest conversation, and mutual support.",
  },
  {
    icon: Sparkles,
    title: "Impact",
    desc: "We measure success not by attendance, but by lasting change — in how people think, lead, and live.",
  },
];

const MissionSection = () => {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-primary-foreground/75 text-lg leading-relaxed">
            To make meditation the most accessible, impactful, and transformative practice on the planet — 
            one person, one team, one organization at a time.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
                <v.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">{v.title}</h3>
              <p className="text-sm text-primary-foreground/70 leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
