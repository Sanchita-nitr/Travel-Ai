// pages/blog.js
"use client";
import { motion } from "framer-motion";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [visiblePosts, setVisiblePosts] = useState<typeof blogPosts>([]);
  const [featuredPostVisible, setFeaturedPostVisible] = useState(false);
  const [searchQuery] = useState("");

  // Blog data
  const blogPosts = [
    {
      id: "ml-travel-revolution",
      title: "How ML is Revolutionizing Travel Planning",
      excerpt:
        "Discover how machine learning algorithms are transforming the way travelers discover and experience destinations worldwide.",
      author: "Alexandra Chen",
      authorRole: "Chief Data Scientist",
      publishDate: "April 3, 2025",
      readTime: "6 min read",
      category: "technology",
      image: "/images/blog/ml-travel.jpg",
      featured: true,
    },
    {
      id: "hidden-gems-asia",
      title: "5 Hidden Gems in Southeast Asia Uncovered by Our Algorithm",
      excerpt:
        "Our ML system analyzed millions of travel reviews to identify these overlooked destinations that match popular preference patterns.",
      author: "Marco Rodriguez",
      authorRole: "Travel Researcher",
      publishDate: "March 27, 2025",
      readTime: "4 min read",
      category: "destinations",
    },
    {
      id: "personalization-future",
      title: "The Future of Travel Personalization",
      excerpt:
        "How predictive analytics and machine learning will create hyper-personalized travel experiences in the coming decade.",
      author: "Sophia Park",
      authorRole: "Product Manager",
      publishDate: "March 18, 2025",
      readTime: "8 min read",
      category: "technology",
    },
    {
      id: "sustainable-travel-ai",
      title: "Using AI to Promote Sustainable Tourism",
      excerpt:
        "How our recommendation engine is helping distribute tourism more evenly and reduce environmental impact.",
      author: "Thomas Greene",
      authorRole: "Sustainability Lead",
      publishDate: "March 12, 2025",
      readTime: "5 min read",
      category: "sustainability",
    },
    {
      id: "travel-data-insights",
      title:
        "What 2 Million Travel Itineraries Taught Us About Modern Travelers",
      excerpt:
        "The surprising patterns and preferences we've discovered after analyzing millions of travel plans.",
      author: "Aisha Johnson",
      authorRole: "Data Analyst",
      publishDate: "March 5, 2025",
      readTime: "7 min read",
      category: "insights",
    },
    {
      id: "family-travel-ml",
      title: "How ML Makes Family Vacation Planning Stress-Free",
      excerpt:
        "Our family-specific algorithms find the perfect balance of activities for all age groups automatically.",
      author: "Daniel Kim",
      authorRole: "UX Researcher",
      publishDate: "February 28, 2025",
      readTime: "4 min read",
      category: "planning",
    },
    {
      id: "prediction-accuracy",
      title: "Behind the Numbers: How We Achieved 94% Prediction Accuracy",
      excerpt:
        "A technical deep dive into our recommendation engine and how we continuously improve its performance.",
      author: "Rachel Mehta",
      authorRole: "ML Engineer",
      publishDate: "February 21, 2025",
      readTime: "10 min read",
      category: "technology",
    },
    {
      id: "travel-trends-2025",
      title: "Travel Trends Our AI Predicts for Late 2025",
      excerpt:
        "Based on early booking patterns and preference shifts, here's where people will be traveling in Q3 and Q4.",
      author: "James Wilson",
      authorRole: "Trend Analyst",
      publishDate: "February 14, 2025",
      readTime: "6 min read",
      category: "insights",
    },
  ];

  const categories = [
    { id: "all", name: "All Posts" },
    { id: "technology", name: "Technology" },
    { id: "destinations", name: "Destinations" },
    { id: "planning", name: "Planning" },
  ];

  // Filter posts based on category and search query
  useEffect(() => {
    let filtered = [...blogPosts];

    if (activeCategory !== "all") {
      filtered = filtered.filter((post) => post.category === activeCategory);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.category.toLowerCase().includes(query)
      );
    }

    setVisiblePosts(filtered);
  }, [activeCategory, searchQuery, blogPosts]);

  // Set initial posts on component mount
  useEffect(() => {
    setVisiblePosts(blogPosts);

    // Set up intersection observer for featured post
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setFeaturedPostVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const featuredElement = document.querySelector("#featured-post");
    if (featuredElement) {
      observer.observe(featuredElement);
    }

    return () => {
      if (featuredElement) {
        observer.unobserve(featuredElement);
      }
    };
  }, [blogPosts]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const featuredPost = blogPosts.find((post) => post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Head>
        <title>Blog | AI-Powered Travel Experience</title>
        <meta
          name="description"
          content="Insights, trends, and stories about ML-powered travel planning"
        />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900 z-10"></div>
          <div className="w-full h-full relative">
            {/* Background placeholder */}
            <div className="absolute inset-0 bg-[url('/api/placeholder/1600/800')] bg-cover bg-center opacity-40"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
              Travel Intelligence Blog
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Insights, trends, and stories about how machine learning is
              transforming the way we discover and experience the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 container mx-auto px-4">
          <motion.div
            id="featured-post"
            className="relative overflow-hidden rounded-3xl"
            initial={{ opacity: 0, y: 40 }}
            animate={featuredPostVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-gradient-to-r from-blue-900/80 to-cyan-900/80 backdrop-blur-sm">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="p-10 md:p-16">
                  <span className="inline-block px-4 py-2 rounded-full bg-blue-600/30 text-blue-300 text-sm font-medium mb-6">
                    Featured Post
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-lg text-slate-300 mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center mr-4 text-xl font-bold">
                      {featuredPost.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium">{featuredPost.author}</p>
                      <p className="text-slate-400 text-sm">
                        {featuredPost.authorRole}
                      </p>
                    </div>
                    <div className="ml-auto text-slate-400 text-sm">
                      {featuredPost.publishDate} · {featuredPost.readTime}
                    </div>
                  </div>
                </div>
                <div className="h-80 md:h-auto relative">
                  {/* Placeholder for featured image */}
                  <div className="absolute inset-0 bg-[url('/api/placeholder/800/600')] bg-cover bg-center"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      )}

      {/* Category Navigation */}
      <section className="py-8 container mx-auto px-4">
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-blue-600 text-white"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-24 container mx-auto px-4">
        {visiblePosts.length > 0 ? (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {visiblePosts.map((post) => (
              <motion.div
                key={post.id}
                className="bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700 hover:border-slate-600 transition-all duration-300 flex flex-col"
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="h-48 bg-slate-700 relative">
                  {/* Placeholder for post image */}
                  <div className="absolute inset-0 bg-[url('/api/placeholder/400/320')] bg-cover bg-center"></div>
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-slate-900/70 backdrop-blur-sm text-xs font-medium capitalize">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-300 mb-6 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-slate-400 mt-auto">
                    <span>{post.publishDate}</span>
                    <span className="mx-2">·</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <a href={`/blog/${post.id}`}>
                  <a className="block p-4 border-t border-slate-700 text-blue-400 font-medium hover:bg-slate-700/30 transition-colors duration-300">
                    Read More →
                  </a>
                </a>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-20">
            <svg
              className="w-16 h-16 mx-auto text-slate-600 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              ></path>
            </svg>
            <h3 className="text-2xl font-bold mb-2">No posts found</h3>
            <p className="text-slate-400">
              Try adjusting your search or category filter
            </p>
          </div>
        )}
      </section>

      <footer className="bg-slate-900 py-6 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-slate-500">
              © 2025 GlobeTide. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
