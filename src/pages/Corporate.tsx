import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CorporateHero from "@/components/corporate/CorporateHero";
import TrustedBy from "@/components/corporate/TrustedBy";
import ServiceOptions from "@/components/corporate/ServiceOptions";
import BenefitsSection from "@/components/corporate/BenefitsSection";
import CaseStudy from "@/components/corporate/CaseStudy";
import InquiryForm from "@/components/corporate/InquiryForm";

const Corporate = () => {
  return (
    <div className="min-h-screen bg-background">
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
