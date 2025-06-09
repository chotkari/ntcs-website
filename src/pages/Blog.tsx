import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Search,
  Calendar,
  User,
  Tag,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import future5g from "../image/future-5g.png";
import { Link } from "react-router-dom";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Technology",
    "Security",
    "Networking",
    "Tips & Tricks",
    "Industry News",
  ];

  const articles = [
    {
      id: 1,
      title: "10 Essential Cybersecurity Tips for Small Businesses in Nepal",
      category: "Security",
      author: "Rajesh Shrestha",
      date: "2024-01-15",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
      excerpt:
        "Learn the fundamental cybersecurity practices that every small business in Nepal should implement to protect their digital assets.",
      tags: ["Cybersecurity", "Small Business", "Protection"],
    },
    {
      id: 2,
      title: "The Future of 5G Technology in Nepal: What to Expect",
      category: "Technology",
      author: "Priya Sharma",
      date: "2024-01-10",
      readTime: "7 min read",
      image: future5g,
      excerpt:
        "Exploring the upcoming 5G rollout in Nepal and its potential impact on businesses and consumers.",
      tags: ["5G", "Nepal", "Technology", "Future"],
    },
    {
      id: 3,
      title: "Setting Up a Secure Home Office Network",
      category: "Networking",
      author: "Amit Patel",
      date: "2024-01-05",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop",
      excerpt:
        "A comprehensive guide to creating a secure and efficient home office network setup for remote work.",
      tags: ["Home Office", "Network Security", "Remote Work"],
    },
    {
      id: 4,
      title: "Cloud Migration Strategies for Nepali Businesses",
      category: "Technology",
      author: "Rajesh Shrestha",
      date: "2023-12-28",
      readTime: "8 min read",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
      excerpt:
        "Best practices for migrating your business operations to the cloud while maintaining security and efficiency.",
      tags: ["Cloud Computing", "Migration", "Business Strategy"],
    },
    {
      id: 5,
      title: "Common IT Mistakes That Cost Businesses Money",
      category: "Tips & Tricks",
      author: "Priya Sharma",
      date: "2023-12-20",
      readTime: "4 min read",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      excerpt:
        "Identify and avoid these costly IT mistakes that many businesses make without realizing their impact.",
      tags: ["Business Tips", "Cost Saving", "IT Management"],
    },
    {
      id: 6,
      title: "Nepal's Digital Transformation: Progress and Challenges",
      category: "Industry News",
      author: "Amit Patel",
      date: "2023-12-15",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=600&h=400&fit=crop",
      excerpt:
        "An analysis of Nepal's journey towards digital transformation and the challenges that lie ahead.",
      tags: ["Digital Transformation", "Nepal", "Innovation"],
    },
  ];

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-20 max-h-[95vh] flex items-center justify-center">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 z-0"></div>

          {/* Animated tech elements */}
          <div className="absolute inset-0 overflow-hidden z-1">
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 1200 800"
              preserveAspectRatio="none"
            >
              <path
                d="M200,200 L1000,200 M200,400 L1000,400 M200,600 L1000,600"
                stroke="rgba(99,102,241,0.15)"
                strokeWidth="2"
                strokeDasharray="10 5"
              />
              {[250, 450, 650].map((y, i) => (
                <circle key={i} cx={300 + i * 150} cy={y} r="2" fill="#6366f1">
                  <animate
                    attributeName="opacity"
                    values="0.3;0.8;0.3"
                    dur={`${3 + i}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              ))}
            </svg>

            {/* Floating blobs */}
            <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 opacity-10 blur-3xl animate-pulse"></div>
            <div className="absolute -right-40 top-1/3 w-96 h-96 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 opacity-10 blur-3xl animate-pulse animation-delay-2000"></div>
          </div>

          {/* Centered Content */}
          <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center text-center">
            <div className="text-white space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary-300 to-white bg-clip-text text-transparent">
                  Tech Blog
                </span>
              </h1>
              <p className="text-xl text-primary-200 max-w-2xl leading-relaxed">
                Stay updated with the latest technology trends, tips, and
                insights from our team of IT experts.
              </p>
            </div>
          </div>
        </section>

        <section className="relative py-20 overflow-hidden">
          {/* Decorative tech elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-1/3 top-32 w-0.5 h-24 bg-gradient-to-b from-primary-500 to-transparent opacity-30"></div>
            <div className="absolute right-1/4 bottom-48 w-24 h-0.5 bg-gradient-to-r from-accent-500 to-transparent opacity-30"></div>
          </div>

          {/* Search and Filter */}
          <div className="container mx-auto px-4 mb-16">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col items-center">
                {/* Enhanced search header */}
                <div className="flex items-center justify-center space-x-3 mb-8 group">
                  <div className="relative">
                    <Search className="w-6 h-6 text-primary-500 group-hover:text-accent-500 transition-colors" />
                    <div className="absolute -inset-1 bg-accent/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <span className="text-lg font-medium text-gray-700 group-hover:text-primary-600 transition-colors">
                    Explore Our Knowledge Base
                  </span>
                </div>

                {/* Search input */}
                {/* Search input */}
                <div className="relative w-full max-w-2xl mb-8">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-6 py-3 bg-white rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    ×
                  </button>
                )}

                {/* Animated filter buttons */}
                <div className="flex flex-wrap justify-center gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`relative px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                        selectedCategory === category
                          ? "text-white shadow-lg"
                          : "text-gray-700 hover:text-primary-600 bg-gray-50 hover:bg-gray-100"
                      }`}
                    >
                      {selectedCategory === category && (
                        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 z-0"></span>
                      )}
                      <span className="relative z-10 flex items-center">
                        {category}
                        {selectedCategory === category && (
                          <CheckCircle className="ml-2 w-4 h-4 text-white" />
                        )}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Articles Grid */}
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              {filteredArticles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredArticles.map((article) => (
                    <article
                      key={article.id}
                      className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 overflow-hidden"
                    >
                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      {/* Make the entire card clickable while preserving hover effects */}
                      <Link
                        to={`/blog/${article.id}`}
                        className="absolute inset-0 z-20"
                        aria-label={`Read more about ${article.title}`}
                      />

                      {/* Article header (unchanged) */}
                      <div className="relative z-10 mb-6">
                        <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <span className="absolute top-3 left-3 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                            {article.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                          {article.title}
                        </h3>
                      </div>

                      {/* Article content (unchanged) */}
                      <div className="relative z-10">
                        {/* ... rest of your article content ... */}

                        {/* Update the "Read more" link to match the card link */}
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">
                            {article.readTime}
                          </span>
                          <div className="text-primary-600 hover:text-accent-500 font-medium flex items-center transition-colors">
                            Read more
                            <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    No articles found
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Try adjusting your search terms or category filter.
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("All");
                    }}
                    className="relative px-6 py-2.5 rounded-full font-medium text-white shadow-lg overflow-hidden"
                  >
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 z-0"></span>
                    <span className="relative z-10 flex items-center">
                      Clear filters
                    </span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Floating tech decor */}
          <div className="absolute left-0 bottom-0 w-32 h-32 bg-primary-500/5 rounded-full blur-3xl -z-10"></div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
