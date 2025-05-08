// pages/about.js
"use client";
import { motion } from "framer-motion";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AboutUs() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState<boolean[]>([]);

  const router = useRouter();

  const navigation = (route: string): void => {
    router.push(route);
  };

  useEffect(() => {
    // Initialize visibility array for animations
    setIsVisible(new Array(statistics.length).fill(false));

    // Set up intersection observer for statistics section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute("data-index") || "0"
            );
            setIsVisible((prev) => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    // Observe stat items
    document.querySelectorAll(".stat-item").forEach((item) => {
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      title: "AI-Powered Itineraries",
      description:
        "Our machine learning algorithms analyze thousands of data points to create personalized travel experiences tailored specifically to your preferences and interests.",
      icon: "/icons/ai-icon.svg",
      color: "bg-indigo-600",
    },
    {
      title: "Predictive Recommendations",
      description:
        "Unlike standard travel sites, our system predicts destinations you'll love based on your unique travel personality, not just popularity or pricing.",
      icon: "/icons/prediction-icon.svg",
      color: "bg-cyan-600",
    },
    {
      title: "Dynamic Adaptation",
      description:
        "As conditions change - weather, local events, or your preferences - our ML model automatically adjusts your itinerary in real-time.",
      icon: "/icons/adapt-icon.svg",
      color: "bg-emerald-600",
    },
    {
      title: "Seamless Experience",
      description:
        "From discovery to booking to your actual journey, our platform provides a unified, friction-free experience across all devices.",
      icon: "/icons/seamless-icon.svg",
      color: "bg-amber-600",
    },
  ];

  const statistics = [
    { value: 98, label: "Customer Satisfaction", symbol: "%" },
    { value: 1200, label: "ML Data Points Analyzed", symbol: "+" },
    { value: 63, label: "Time Saved Planning", symbol: "%" },
    { value: 87, label: "Trip Personalization", symbol: "%" },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <div className="min-h-screen  text-white">
      <Head>
        <title>About Us | AI-Powered Travel Experience</title>
        <meta
          name="description"
          content="Discover how our ML-powered travel platform creates personalized travel experiences"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section with Parallax Effect */}
      <section className="relative h-[600px] overflow-hidden bg-gradient-to-br from-sky-900 via-sky-800 to-sky-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-10"></div>
          <div className="w-full h-full relative">
            {/* This would be an actual image in production */}
            <div className="absolute inset-0 bg-[url('/placeholder/travel-hero.jpg')] bg-cover bg-center"></div>
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-center h-full container mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-emerald-400">
              Redefining Travel
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-slate-200">
              Where machine learning meets wanderlust to create personalized
              journeys as unique as you are.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button
                onClick={() => navigation("/1stpage")}
                className="px-8 py-4 bg-gradient-to-r from-sky-700 to-cyan-600 rounded-full font-medium text-lg hover:shadow-lg hover:shadow-blue-500/30 transition duration-300"
              >
                Discover Your Journey
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg
            className="w-10 h-10 text-white/80"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </motion.div>
      </section>

      {/* Mission Statement with 3D Effect */}
      <section className="py-16 relative bg-gradient-to-b from-black  via-sky-800 to-sky-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl leading-relaxed text-slate-300">
              To revolutionize trip planning from a frustrating chore to an
              intelligent, one-of-a-kind experience using the potential of
              machine learning. We want each trip to be as special as the
              individual taking it.
            </p>
          </motion.div>

          {/* 3D Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Intelligent",
                description:
                  "Our ML algorithms learn from thousands of successful trips to make intelligent recommendations tailored to you.",
              },
              {
                title: "Personalized",
                description:
                  "No more generic travel plans. Every suggestion is carefully curated to match your unique travel personality.",
              },
              {
                title: "Seamless",
                description:
                  "From inspiration to booking to on-trip guidance, our platform provides a unified, friction-free experience.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="perspective-1000"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ rotateY: 5, rotateX: -5, scale: 1.05 }}
              >
                <div className="relative h-full bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 shadow-xl border border-slate-700 backdrop-blur-sm">
                  <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-cyan-500 text-white font-bold text-2xl">
                    {index + 1}
                  </div>
                  <h3 className="text-2xl font-bold mt-6 mb-4">{item.title}</h3>
                  <p className="text-slate-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Background elements */}
        <div className="absolute top-40 left-10 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl"></div>
      </section>

      {/* Interactive Features Section */}
      <section className="py-20 bg-gradient-to-b from-sky-900 via-sky-800 to-sky-900 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Powered by Intelligence</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our machine learning technology transforms how you discover, plan,
              and experience travel.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Feature Navigation */}
            <div className="lg:col-span-1">
              <div className="space-y-2">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                      activeFeature === index
                        ? `${feature.color} shadow-lg`
                        : "bg-slate-800 hover:bg-slate-700"
                    }`}
                    onClick={() => setActiveFeature(index)}
                    whileHover={{ x: activeFeature === index ? 0 : 5 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="font-bold text-xl">{feature.title}</h3>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Feature Showcase */}
            <div className="lg:col-span-2 bg-slate-800 rounded-3xl p-8 shadow-xl relative">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="h-full"
              >
                <div className="flex flex-col h-full">
                  <div
                    className={`w-16 h-16 rounded-2xl ${features[activeFeature].color} flex items-center justify-center mb-6`}
                  >
                    {/* This would be an actual SVG icon in production */}
                    <div className="w-8 h-8 bg-white/20 rounded"></div>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">
                    {features[activeFeature].title}
                  </h3>
                  <p className="text-lg text-slate-300 mb-8">
                    {features[activeFeature].description}
                  </p>

                  {/* Interactive visualization area */}
                  <div className="mt-auto bg-slate-900/50 rounded-xl p-6 h-64 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-slate-400 mb-4">
                        Interactive Feature Visualization
                      </p>
                      <div className="inline-block relative">
                        {/* This would be an actual visualization in production */}
                        <div
                          className={`w-32 h-32 ${features[activeFeature].color} opacity-20 rounded-full`}
                        ></div>
                        <div
                          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 ${features[activeFeature].color} opacity-40 rounded-full animate-pulse`}
                        ></div>
                        <div
                          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 ${features[activeFeature].color} opacity-70 rounded-full`}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Stats Section */}
      <section className="py-20 relative bg-gradient-to-b from-black via-sky-800 to-sky-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Travel Intelligence by Numbers
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our machine learning platform delivers measurable results for
              every journey
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-item text-center p-6 bg-slate-800/50 rounded-2xl border border-slate-700"
                data-index={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible[index] ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5 }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                  {isVisible[index] ? (
                    <CountUp
                      end={stat.value}
                      duration={2}
                      suffix={stat.symbol}
                    />
                  ) : (
                    `0${stat.symbol}`
                  )}
                </div>
                <p className="text-slate-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our ML Technology */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full">
          <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl"></div>

          {/* Tech circuit pattern */}
          <svg
            className="absolute inset-0 w-full h-full opacity-10"
            viewBox="0 0 800 800"
          >
            <path
              d="M100,100 L700,100 L700,700 L100,700 Z"
              stroke="white"
              strokeWidth="2"
              fill="none"
            />
            <path d="M200,100 L200,700" stroke="white" strokeWidth="1" />
            <path d="M400,100 L400,700" stroke="white" strokeWidth="1" />
            <path d="M600,100 L600,700" stroke="white" strokeWidth="1" />
            <path d="M100,200 L700,200" stroke="white" strokeWidth="1" />
            <path d="M100,400 L700,400" stroke="white" strokeWidth="1" />
            <path d="M100,600 L700,600" stroke="white" strokeWidth="1" />
            <circle cx="200" cy="200" r="10" fill="white" />
            <circle cx="400" cy="200" r="10" fill="white" />
            <circle cx="600" cy="400" r="10" fill="white" />
            <circle cx="200" cy="600" r="10" fill="white" />
            <circle cx="400" cy="600" r="10" fill="white" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8 text-center">
              Our ML Technology
            </h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-12"
            >
              {[
                {
                  title: "Preference Pattern Recognition",
                  description:
                    "Our ML model analyzes thousands of successful travel patterns to identify what will resonate with your personal preferences.",
                  icon: "🧠",
                },
                {
                  title: "Contextual Understanding",
                  description:
                    "Unlike basic recommendation engines, our system understands the context of your travel needs, from seasonality to social dynamics.",
                  icon: "🔍",
                },
                {
                  title: "Continuous Adaptation",
                  description:
                    "The more you use our platform, the smarter it becomes - evolving with your changing preferences and travel history.",
                  icon: "📈",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex gap-6 items-start"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center text-3xl">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-300">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials with Parallax Effect */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-sky-900 via-sky-800 to-sky-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">What Our Travelers Say</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Real experiences from people who &apos;ve discovered the power of
              AI-driven travel planning
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "The personalized recommendations were spot on. It was like the platform knew exactly what kind of traveler I am.",
                author: "San, Adventure Seeker",
              },
              {
                quote:
                  "I saved hours of research time. The ML-powered suggestions gave me confidence that I wasn't missing any hidden gems.",
                author: "Dam, Cultural Explorer",
              },
              {
                quote:
                  "When our schedules had to be modified last minute because of the weather, the system promptly offered the most ideal substitutes. Impressive!",
                author: "Ban, Family Traveler",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-slate-800 p-8 rounded-2xl border border-slate-700"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="mb-6 text-cyan-400">
                  <svg
                    className="w-10 h-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-lg mb-6">{testimonial.quote}</p>
                <p className="font-medium text-slate-400">
                  {testimonial.author}
                </p>
              </motion.div>
            ))}
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

// Animation component for statistics
function CountUp({
  end,
  duration,
  suffix = "",
}: {
  end: number;
  duration: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);

      setCount(Math.floor(end * percentage));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}
