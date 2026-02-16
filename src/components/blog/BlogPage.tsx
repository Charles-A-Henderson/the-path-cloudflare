import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import featuredImage from "@/assets/blog-featured.jpg";

const categories = ["All", "Student Stories", "Mindfulness Tips", "News", "Research"];

const posts = [
  {
    slug: "morning-meditation-routine",
    title: "How to Build a Morning Meditation Routine That Actually Sticks",
    excerpt: "Forget the 5 AM alarm and hour-long sits. Here's a practical, science-backed approach to making meditation a lasting morning habit.",
    category: "Mindfulness Tips",
    date: "Feb 10, 2026",
    readTime: "6 min read",
    featured: true,
  },
  {
    slug: "teacher-training-changed-my-life",
    title: "From Anxious Lawyer to Certified Meditation Teacher",
    excerpt: "After 15 years in corporate law, Sarah enrolled in The Path's teacher training. Here's how it transformed her career and her life.",
    category: "Student Stories",
    date: "Feb 3, 2026",
    readTime: "8 min read",
  },
  {
    slug: "workplace-mindfulness-research",
    title: "New Research: Mindfulness Programs Cut Employee Turnover by 25%",
    excerpt: "A landmark study from Harvard Business Review confirms what we've seen firsthand — meditation reduces turnover and boosts retention.",
    category: "Research",
    date: "Jan 28, 2026",
    readTime: "5 min read",
  },
  {
    slug: "breathwork-for-beginners",
    title: "5 Breathwork Techniques You Can Practice Anywhere",
    excerpt: "From box breathing to 4-7-8, these simple techniques can calm your nervous system in minutes — no cushion required.",
    category: "Mindfulness Tips",
    date: "Jan 20, 2026",
    readTime: "4 min read",
  },
  {
    slug: "xbox-meditation-program",
    title: "Inside Microsoft's Xbox Meditation Program with The Path",
    excerpt: "How we designed a custom mindfulness program for one of the world's most creative teams — and what we learned along the way.",
    category: "News",
    date: "Jan 14, 2026",
    readTime: "7 min read",
  },
  {
    slug: "meditation-myths",
    title: "7 Meditation Myths That Are Holding You Back",
    excerpt: "You don't need to clear your mind. You don't need to sit still for an hour. Let's debunk the biggest misconceptions about meditation.",
    category: "Mindfulness Tips",
    date: "Jan 6, 2026",
    readTime: "5 min read",
  },
  {
    slug: "corporate-retreat-guide",
    title: "How to Plan a Mindfulness Retreat for Your Team",
    excerpt: "A step-by-step guide to designing a corporate meditation retreat that's impactful, inclusive, and actually enjoyable.",
    category: "News",
    date: "Dec 18, 2025",
    readTime: "6 min read",
  },
  {
    slug: "student-story-mark",
    title: "\"Meditation Gave Me My Life Back\" — Mark's Story",
    excerpt: "After a health scare at 42, Mark discovered meditation through The Path. Two years later, he's a certified teacher helping others heal.",
    category: "Student Stories",
    date: "Dec 10, 2025",
    readTime: "9 min read",
  },
];

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const featuredPost = posts.find((p) => p.featured);
  const filteredPosts = posts
    .filter((p) => !p.featured)
    .filter((p) => activeCategory === "All" || p.category === activeCategory);

  return (
    <>
      {/* Featured Post */}
      {featuredPost && (
        <section className="pt-12 pb-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden mb-6">
                <img
                  src={featuredImage}
                  alt={featuredPost.title}
                  className="w-full h-64 md:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                  <span className="inline-block bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                    Featured
                  </span>
                  <h2 className="font-serif text-2xl md:text-4xl font-bold text-primary-foreground leading-tight mb-3">
                    {featuredPost.title}
                  </h2>
                  <p className="text-primary-foreground/80 text-sm md:text-base max-w-2xl leading-relaxed hidden sm:block">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 mt-4 text-primary-foreground/60 text-xs">
                    <span>{featuredPost.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Category Filters */}
      <section className="pb-8 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={activeCategory === cat ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full text-sm ${
                  activeCategory === cat
                    ? "bg-sage text-sage-foreground hover:bg-sage/90"
                    : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer"
              >
                <div className="p-6 flex flex-col h-full">
                  <span className="text-xs font-medium uppercase tracking-wider text-sage mb-3">
                    {post.category}
                  </span>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-3 leading-snug group-hover:text-sage transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No posts found in this category.</p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setActiveCategory("All")}
                className="mt-4 rounded-full"
              >
                View all posts
              </Button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default BlogPage;
