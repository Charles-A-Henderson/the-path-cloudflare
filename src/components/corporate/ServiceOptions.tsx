import { motion } from "framer-motion";
import { Presentation, Mountain, CalendarCheck, Users } from "lucide-react";

const services = [
  {
    icon: Presentation,
    title: "Workshops & Keynotes",
    desc: "Engaging 60–90 minute sessions perfect for team offsites, wellness weeks, or company events. Customized to your audience and goals.",
    details: "From 20 to 500+ participants",
  },
  {
    icon: CalendarCheck,
    title: "Ongoing Programs",
    desc: "Weekly or bi-weekly meditation sessions for your team. Build a lasting culture of mindfulness with consistent practice and measurable outcomes.",
    details: "4, 8, or 12-week commitments",
  },
  {
    icon: Mountain,
    title: "Executive Retreats",
    desc: "Immersive half-day or full-day retreats for leadership teams. Combine meditation, breathwork, and strategic reflection in inspiring settings.",
    details: "Custom designed for your team",
  },
  {
    icon: Users,
    title: "Train the Trainer",
    desc: "Certify internal champions to lead meditation within your organization. Sustainable, scalable, and deeply embedded in your culture.",
    details: "6-week internal certification",
  },
];

const ServiceOptions = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">How We Work With You</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Flexible programs designed to meet your team where they are — from one-time events to embedded mindfulness cultures.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-sage/10 flex items-center justify-center mb-5">
                <service.icon className="h-6 w-6 text-sage" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.desc}</p>
              <p className="text-xs font-medium text-sage uppercase tracking-wider">{service.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceOptions;
