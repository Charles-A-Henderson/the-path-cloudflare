import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The Path's teacher training completely transformed my career and my life. I now teach meditation full-time and have never felt more aligned with my purpose.",
    name: "Sarah M.",
    title: "Certified Meditation Teacher, Class of 2023",
  },
  {
    quote: "We brought The Path into Microsoft for our team wellness program. The impact on focus, creativity, and overall morale has been extraordinary.",
    name: "James T.",
    title: "VP of People, Microsoft / Xbox",
  },
  {
    quote: "As someone who tried meditation apps for years without success, The Path's personal approach finally made it click. I've maintained a daily practice for over a year now.",
    name: "Priya K.",
    title: "30 Days to Meditator Graduate",
  },
  {
    quote: "Dina's warmth and expertise create a truly safe space for transformation. The training was rigorous, supportive, and life-changing.",
    name: "Michael R.",
    title: "Certified Meditation Teacher, Class of 2022",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-warm">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Community Says
          </h2>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="text-center px-8"
            >
              <Quote className="h-10 w-10 text-accent mx-auto mb-6 opacity-60" />
              <blockquote className="font-serif text-xl md:text-2xl text-foreground leading-relaxed mb-8 italic">
                "{testimonials[current].quote}"
              </blockquote>
              <p className="font-semibold text-foreground">{testimonials[current].name}</p>
              <p className="text-sm text-muted-foreground">{testimonials[current].title}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5 text-muted-foreground" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-accent" : "bg-border"}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
