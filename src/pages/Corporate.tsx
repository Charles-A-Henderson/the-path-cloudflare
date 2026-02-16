import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CorporateHero from "@/components/corporate/CorporateHero";
import TrustedBy from "@/components/corporate/TrustedBy";
import ServiceOptions from "@/components/corporate/ServiceOptions";
import BenefitsSection from "@/components/corporate/BenefitsSection";
import CaseStudy from "@/components/corporate/CaseStudy";
import InquiryForm from "@/components/corporate/InquiryForm";
import SEO from "@/components/SEO";

const Corporate = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Corporate Mindfulness Programs"
        description="Bring meditation to your workplace with The Path. Workshops, ongoing programs, executive retreats, and train-the-trainer certifications for teams of all sizes."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Corporate Mindfulness Programs",
          provider: { "@type": "Organization", name: "The Path" },
          description: "Customized meditation and mindfulness programs for corporate teams, from workshops to ongoing embedded programs.",
          serviceType: "Corporate Wellness",
        }}
      />
      <Navbar />
      <main>
        <CorporateHero />
        <TrustedBy />
        <ServiceOptions />
        <BenefitsSection />
        <CaseStudy />
        <InquiryForm />
      </main>
      <Footer />
    </div>
  );
};

export default Corporate;
