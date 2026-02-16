import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const CaseStudy = () => {
  return (
    <section className="py-24 bg-warm">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-center text-sm font-medium uppercase tracking-wider text-sage mb-8">Case Study</p>
          
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
              How a Fortune 500 Tech Company Reduced Burnout by 40%
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <p className="font-serif text-2xl font-bold text-sage">8 weeks</p>
                <p className="text-sm text-muted-foreground">Program duration</p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <p className="font-serif text-2xl font-bold text-sage">350+</p>
                <p className="text-sm text-muted-foreground">Employees participated</p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <p className="font-serif text-2xl font-bold text-sage">40%</p>
                <p className="text-sm text-muted-foreground">Reduction in burnout scores</p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">
              A leading technology company partnered with The Path to address rising burnout rates across their engineering and product teams. 
              Over 8 weeks, we delivered twice-weekly guided meditation sessions, manager training workshops, and an on-demand audio library. 
              Post-program surveys showed a 40% reduction in burnout indicators, a 25% improvement in self-reported focus, and 92% of participants 
              said they would recommend the program to colleagues.
            </p>

            <div className="border-t border-border pt-6">
              <Quote className="h-5 w-5 text-accent mb-3 opacity-60" />
              <p className="text-foreground italic leading-relaxed mb-3">
                "This wasn't just a wellness perk — it changed how our teams show up every day. The Path created something deeply impactful and practical."
              </p>
              <p className="text-sm text-muted-foreground font-medium">— Chief People Officer</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudy;
