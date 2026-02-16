import { motion } from "framer-motion";

const logos = [
  "Microsoft", "Google", "Deloitte", "Nike", "Spotify", "Salesforce",
];

const TrustedBy = () => {
  return (
    <section className="py-14 bg-muted/40">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="text-center text-sm font-medium uppercase tracking-wider text-muted-foreground mb-8">
          Trusted by Leading Organizations
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-14"
        >
          {logos.map((logo) => (
            <span
              key={logo}
              className="font-sans text-lg md:text-xl font-bold text-muted-foreground/35 hover:text-muted-foreground/60 transition-colors tracking-wide uppercase"
            >
              {logo}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBy;
