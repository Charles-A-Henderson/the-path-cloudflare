import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogPage from "@/components/blog/BlogPage";
import SEO from "@/components/SEO";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Blog"
        description="Stories, insights, and practical guidance from The Path community. Explore mindfulness tips, student stories, research, and news."
        ogType="blog"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "The Path Blog",
          description: "Stories, insights, and practical guidance from The Path meditation community.",
          publisher: { "@type": "Organization", name: "The Path" },
        }}
      />
      <Navbar />
      <main>
        <section className="pt-24 pb-4 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Blog</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Stories, insights, and practical guidance from The Path community.
            </p>
          </div>
        </section>
        <BlogPage />
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
