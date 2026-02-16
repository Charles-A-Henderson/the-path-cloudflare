import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import FounderStory from "@/components/about/FounderStory";
import MissionSection from "@/components/about/MissionSection";
import PressSection from "@/components/about/PressSection";
import SEO from "@/components/SEO";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="About"
        description="Meet Dina Kaplan, founder of The Path. From tech startup burnout to building a meditation movement — learn about our mission, values, and press coverage."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          mainEntity: {
            "@type": "Person",
            name: "Dina Kaplan",
            jobTitle: "Founder",
            worksFor: { "@type": "Organization", name: "The Path" },
            alumniOf: { "@type": "CollegeOrUniversity", name: "Yale University" },
            description: "Meditation teacher and founder of The Path, featured in NYT, Forbes, and WSJ.",
          },
        }}
      />
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
