import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProgramsPage from "@/components/programs/ProgramsPage";
import SEO from "@/components/SEO";

const Programs = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Programs"
        description="Explore The Path's meditation programs: Teacher Training certification, 30 Days to Meditator, private coaching, retreats, and corporate mindfulness."
        ogType="website"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "The Path — Programs & Offerings",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Meditation Teacher Training" },
            { "@type": "ListItem", position: 2, name: "30 Days to Meditator" },
            { "@type": "ListItem", position: 3, name: "Private Coaching" },
            { "@type": "ListItem", position: 4, name: "Retreats" },
            { "@type": "ListItem", position: 5, name: "Corporate Mindfulness" },
            { "@type": "ListItem", position: 6, name: "Mindful Business Program" },
          ],
        }}
      />
      <Navbar />
      <main>
        <ProgramsPage />
      </main>
      <Footer />
    </div>
  );
};

export default Programs;
