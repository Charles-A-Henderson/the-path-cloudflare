import Navbar from "@/components/Navbar";
import HeroSection from "@/components/home/HeroSection";
import SocialProofBar from "@/components/home/SocialProofBar";
import WhoItsFor from "@/components/home/WhoItsFor";
import Testimonials from "@/components/home/Testimonials";
import FounderSpotlight from "@/components/home/FounderSpotlight";
import PressLogos from "@/components/home/PressLogos";
import NewsletterSignup from "@/components/home/NewsletterSignup";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <SocialProofBar />
        <WhoItsFor />
        <Testimonials />
        <FounderSpotlight />
        <PressLogos />
        <NewsletterSignup />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
