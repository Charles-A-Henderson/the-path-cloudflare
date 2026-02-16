import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Do I need prior meditation experience?",
    a: "We recommend at least 6 months of regular personal practice, but you don't need to be an expert. Our program deepens your practice while teaching you how to teach others.",
  },
  {
    q: "What is the time commitment?",
    a: "The program runs for 12 weeks with 2 live sessions per week (evenings, 2 hours each) plus approximately 5 hours of weekly self-study, practice, and assignments.",
  },
  {
    q: "Is the program in-person or online?",
    a: "We offer both formats. Our in-person cohorts meet in New York City, while our online cohorts join via live video sessions. Both receive the same curriculum and certification.",
  },
  {
    q: "What certification do I receive?",
    a: "Graduates receive The Path's Certified Meditation Teacher credential, recognized by studios, corporations, and wellness organizations worldwide.",
  },
  {
    q: "Are scholarships available?",
    a: "Yes! We offer need-based scholarships covering up to 50% of tuition. We believe financial constraints shouldn't prevent anyone from pursuing this path. Apply during enrollment.",
  },
  {
    q: "What does the program cost?",
    a: "Tuition is $5,500 for the full 12-week program. Payment plans are available (3 or 6 monthly installments), and early-bird pricing offers $500 off when you enroll 60+ days before the cohort starts.",
  },
  {
    q: "Can I teach professionally after graduating?",
    a: "Absolutely. Our graduates teach at studios, gyms, corporations, hospitals, schools, and in private practice. Many launch their teaching careers within weeks of completing the program.",
  },
];

const TeacherFAQ = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default TeacherFAQ;
