// pages/careers.js
"use client";
import { motion } from "framer-motion";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";

export default function Careers() {
  type JobCategory = keyof typeof jobCategories;
  const [activeCategory] = useState<JobCategory>("engineering");
  const [searchQuery] = useState("");
  const [visiblePositions, setVisiblePositions] = useState<
    {
      id: string;
      title: string;
      location: string;
      type: string;
      description: string;
      skills: string[];
    }[]
  >([]);
  const searchRef = useRef<HTMLDivElement | null>(null);

  // Sample job postings
  const jobCategories = {
    engineering: [
      {
        id: "e1",
        title: "Senior Frontend Engineer",
        location: "San Francisco, CA / Remote",
        type: "Full-time",
        description:
          "Join our team to build cutting-edge ML-powered interfaces that transform how people interact with travel data.",
        skills: ["React", "Next.js", "TailwindCSS", "TypeScript", "GraphQL"],
      },
      {
        id: "e2",
        title: "Machine Learning Engineer",
        location: "Boston, MA / Remote",
        type: "Full-time",
        description:
          "Develop and optimize machine learning models that power our personalized travel recommendation system.",
        skills: [
          "Python",
          "TensorFlow",
          "PyTorch",
          "NLP",
          "Recommendation Systems",
        ],
      },
      {
        id: "e3",
        title: "DevOps Engineer",
        location: "Remote",
        type: "Full-time",
        description:
          "Scale our infrastructure to support millions of users while maintaining reliability and performance.",
        skills: ["AWS", "Kubernetes", "Terraform", "CI/CD", "Docker"],
      },
    ],
    design: [
      {
        id: "d1",
        title: "Senior UX Designer",
        location: "New York, NY / Remote",
        type: "Full-time",
        description:
          "Create intuitive and delightful experiences that make complex travel planning feel effortless.",
        skills: [
          "User Research",
          "Figma",
          "Prototyping",
          "Design Systems",
          "Usability Testing",
        ],
      },
      {
        id: "d2",
        title: "Product Designer",
        location: "Remote",
        type: "Full-time",
        description:
          "Translate business requirements and user needs into elegant design solutions that drive engagement.",
        skills: [
          "UI Design",
          "User Flows",
          "Design Thinking",
          "Information Architecture",
          "Visual Design",
        ],
      },
    ],
    product: [
      {
        id: "p1",
        title: "Senior Product Manager",
        location: "San Francisco, CA / Remote",
        type: "Full-time",
        description:
          "Lead the development of innovative ML features that revolutionize how travelers discover and book experiences.",
        skills: [
          "Product Strategy",
          "Data Analysis",
          "User Research",
          "Roadmapping",
          "A/B Testing",
        ],
      },
      {
        id: "p2",
        title: "Growth Product Manager",
        location: "Remote",
        type: "Full-time",
        description:
          "Drive user acquisition and engagement through data-driven product optimizations and feature development.",
        skills: [
          "Growth Strategies",
          "Funnel Optimization",
          "User Retention",
          "Analytics",
          "Experimentation",
        ],
      },
    ],
    marketing: [
      {
        id: "m1",
        title: "Content Marketing Manager",
        location: "Remote",
        type: "Full-time",
        description:
          "Develop compelling content that educates and inspires travelers about the power of AI-driven travel planning.",
        skills: [
          "Content Strategy",
          "SEO",
          "Storytelling",
          "Editorial Planning",
          "Performance Analytics",
        ],
      },
      {
        id: "m2",
        title: "Digital Marketing Specialist",
        location: "Chicago, IL / Remote",
        type: "Full-time",
        description:
          "Create and optimize digital campaigns that connect our ML-powered platform with travelers worldwide.",
        skills: [
          "Paid Media",
          "Campaign Management",
          "Performance Marketing",
          "A/B Testing",
          "Analytics",
        ],
      },
    ],
  };

  // Filter jobs based on search query
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setVisiblePositions(jobCategories[activeCategory]);
    } else {
      const filtered = jobCategories[activeCategory].filter(
        (job) =>
          job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job.skills.some((skill) =>
            skill.toLowerCase().includes(searchQuery.toLowerCase())
          )
      );
      setVisiblePositions(filtered);
    }
  }, [searchQuery, activeCategory, jobCategories]);

  // Set initial positions
  useEffect(() => {
    setVisiblePositions(jobCategories[activeCategory]);
  }, [activeCategory, jobCategories]);

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const handleSearchFocus = () => {
    if (searchRef.current) {
      searchRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Head>
        <title>Careers | Join Our ML-Powered Travel Platform</title>
        <meta
          name="description"
          content="Join our team and help revolutionize travel planning with machine learning"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-600/20 to-transparent"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Join Our Mission
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8">
              Help us transform travel planning with AI and machine learning
              that creates personalized journeys for travelers worldwide.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <button
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full font-medium text-lg hover:shadow-lg hover:shadow-blue-500/30 transition duration-300"
                onClick={handleSearchFocus}
              >
                Explore Opportunities
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Tech pattern decoration */}
        <div className="absolute bottom-0 left-0 w-full h-32 overflow-hidden">
          <svg
            className="absolute bottom-0 left-0 w-full opacity-10"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V120H0V95.8c67.44-22.6 150.61-52.95 241.35-82.22 89.29-28.65 191.26-45.49 255.31-2.82 62.93 41.95 95.98 101.1 175.52 109.37 58.53 6.09 115.69-4.64 174.17-27.79 69.4-27.51 127.3-56.17 202.39-37.78 66.55 16.42 133.6 92.29 182.83 1.38 24.63-45.42 40.98-108.13 104.5-99.29 54.96 7.62 81.1 79.85 131.31 106.8z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              These principles guide everything we do, from how we build
              products to how we work together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Innovation First",
                description:
                  "We constantly push boundaries and explore new technologies to solve complex travel problems.",
                icon: "💡",
                color: "from-blue-600 to-cyan-600",
              },
              {
                title: "User Empathy",
                description:
                  "We deeply understand traveler needs, designing every feature with our users in mind.",
                icon: "❤️",
                color: "from-purple-600 to-pink-600",
              },
              {
                title: "Data-Driven",
                description:
                  "We make decisions based on insights and measure impact to continuously improve.",
                icon: "📊",
                color: "from-emerald-600 to-teal-600",
              },
              {
                title: "Global Impact",
                description:
                  "We build technology that brings the joy of personalized travel to people everywhere.",
                icon: "🌎",
                color: "from-amber-600 to-orange-600",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="h-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="h-full bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:shadow-xl group relative overflow-hidden">
                  {/* Animated gradient background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  ></div>

                  <div className="relative z-10">
                    <div className="text-3xl mb-4">{value.icon}</div>
                    <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                    <p className="text-slate-300">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 bg-slate-900/50" ref={searchRef}>
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8 text-center">
              Open Positions
            </h2>
          </motion.div>

          {/* Job Listings */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            {visiblePositions.length > 0 ? (
              visiblePositions.map((job) => (
                <motion.div
                  key={job.id}
                  variants={itemVariants}
                  className="mb-6 bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:shadow-xl group cursor-pointer"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
                      <span className="px-3 py-1 bg-slate-700 rounded-full text-sm">
                        {job.location}
                      </span>
                      <span className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm">
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <p className="text-slate-300 mb-4">{job.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {job.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-blue-400 font-medium flex items-center group-hover:underline">
                      View Job Details
                      <svg
                        className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all"
                    >
                      Apply Now
                    </motion.button>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-12 bg-slate-800/50 rounded-xl border border-slate-700">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold mb-2">No positions found</h3>
                <p className="text-slate-400">
                  Try adjusting your search or selecting a different category
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Perks & Benefits */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-blue-600/10 via-transparent to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-cyan-600/10 via-transparent to-transparent blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Perks & Benefits</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We invest in our team &apos;s wellbeing and growth with
              comprehensive benefits
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Flexible Remote Work",
                description:
                  "Work from anywhere with flexible hours that fit your lifestyle and productivity rhythm.",
                icon: "🏡",
              },
              {
                title: "Competitive Compensation",
                description:
                  "Competitive salary, equity options, and performance bonuses to share in our success.",
                icon: "💰",
              },
              {
                title: "Health & Wellness",
                description:
                  "Comprehensive health insurance, mental wellness programs, and fitness benefits.",
                icon: "🏥",
              },
              {
                title: "Learning Budget",
                description:
                  "Annual budget for courses, conferences, and resources to fuel your professional growth.",
                icon: "📚",
              },
              {
                title: "Paid Time Off",
                description:
                  "Generous vacation policy with additional wellness days to recharge and explore the world.",
                icon: "✈️",
              },
              {
                title: "Team Retreats",
                description:
                  "Regular company retreats to collaborate, connect, and celebrate our achievements together.",
                icon: "🌴",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-slate-800/70 backdrop-blur-sm rounded-2xl p-6 border border-slate-700"
              >
                <div className="text-3xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-slate-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-blue-600/10"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-600/20 via-transparent to-transparent blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto bg-slate-800/80 backdrop-blur-sm rounded-3xl p-12 border border-slate-700 shadow-xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Ready to Make an Impact?
              </h2>
              <p className="text-xl mb-8 text-slate-300">
                Join our team and help build the future of AI-powered travel
                experiences
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl font-medium text-lg hover:shadow-lg hover:shadow-blue-500/30 transition duration-300"
                  onClick={handleSearchFocus}
                >
                  View Open Positions
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-slate-700 hover:bg-slate-600 rounded-xl font-medium text-lg transition duration-300"
                >
                  Meet Our Team
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 py-12 border-t border-slate-800">
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
