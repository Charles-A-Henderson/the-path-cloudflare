import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import FounderStory from "@/components/about/FounderStory";
import MissionSection from "@/components/about/MissionSection";
import PressSection from "@/components/about/PressSection";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <AboutHero />
        <FounderStory />
        <MissionSection />
        <PressSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
