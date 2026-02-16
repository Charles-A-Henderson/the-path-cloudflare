import { motion } from "framer-motion";

const weeks = [
  { week: "1–3", title: "Foundations", desc: "Personal practice deepening, meditation history, and core techniques." },
  { week: "4–6", title: "Teaching Skills", desc: "Class structure, voice training, cueing, and guided meditation creation." },
  { week: "7–9", title: "Advanced Practice", desc: "Trauma-informed teaching, group dynamics, and specialized populations." },
  { week: "10–11", title: "Practicum", desc: "Lead real sessions with peer feedback and mentor guidance." },
  { week: "12", title: "Certification", desc: "Final assessment, business launch planning, and graduation ceremony." },
];

const CurriculumTimeline = () => {
  return (
    <section className="py-24 bg-warm">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">12-Week Curriculum</h2>
          <p className="text-muted-foreground text-lg">A structured journey from practitioner to certified teacher.</p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden sm:block" />

          <div className="space-y-10">
            {weeks.map((w, i) => (
              <motion.div
                key={w.week}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="w-12 h-12 rounded-full bg-sage text-sage-foreground flex items-center justify-center shrink-0 text-sm font-bold relative z-10">
                  {w.week}
                </div>
                <div className="pt-1">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-1">{w.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{w.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumTimeline;
