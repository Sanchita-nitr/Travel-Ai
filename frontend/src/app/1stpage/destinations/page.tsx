"use client";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

const DestinationsPage = () => {
  const [activeCategory, setActiveCategory] = useState("national");
  const [viewStyle, setViewStyle] = useState("square");

  const nationalDestinations = [
    {
      id: "n1",
      name: "Taj Mahal",
      image: "/taj-mahal.webp",
      description: "A timeless symbol of love in white marble",
      category: "national",
      region: "North",
    },
    {
      id: "n2",
      name: "Rishikesh",
      image: "/rishikesh.webp",
      description: "Trekking, and river rafting by the Ganges",
      category: "national",
      region: "North",
    },
    {
      id: "n3",
      name: "Munnar",
      image: "/munnar.jpg",
      description: "Lush tea gardens and misty hill views",
      category: "national",
      region: "South",
    },
    {
      id: "n4",
      name: "Goa",
      image: "/goa.avif",
      description: "Beaches, nightlife, and coastal charm",
      category: "national",
      region: "West",
    },
  ];

  const internationalDestinations = [
    {
      id: "i1",
      name: "Dubai",
      image: "/dubai.avif",
      description: "Skyscrapers, deserts, and luxury vibes",
      category: "international",
      region: "Middle East",
    },
    {
      id: "i2",
      name: "Maldives",
      image: "/maldives.webp",
      description: "Crystal waters and dreamy island escapes",
      category: "international",
      region: "Indian Ocean",
    },
    {
      id: "i3",
      name: "Singapore",
      image: "/singapore.jpg",
      description: "Clean, green, and ultra-modern city life",
      category: "international",
      region: "Asia",
    },
    {
      id: "i4",
      name: "Japan",
      image: "/japan.jpg",
      description: "Where tradition meets cutting-edge tech",
      category: "international",
      region: "Asia",
    },
  ];

  const filteredDestinations =
    activeCategory === "national" ? nationalDestinations : internationalDestinations;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Explore the World</h1>
      {/* Category and View Style Controls */}
      <div className="flex flex-wrap justify-between items-center mb-8">
        <div className="flex space-x-4 mb-4 md:mb-0">
          <button
            className={`px-4 py-2 rounded-full transition-all ${
              activeCategory === "national" ? "bg-teal-600 text-white" : "bg-gray-200"
            }`}
            onClick={() => setActiveCategory("national")}
          >
            National
          </button>
          <button
            className={`px-4 py-2 rounded-full transition-all ${
              activeCategory === "international" ? "bg-teal-600 text-white" : "bg-gray-200"
            }`}
            onClick={() => setActiveCategory("international")}
          >
            International
          </button>
        </div>

        <div className="flex space-x-4">
          <button
            className={`p-2 rounded transition-all ${
              viewStyle === "square" ? "bg-teal-600 text-white" : "bg-gray-200"
            }`}
            onClick={() => setViewStyle("square")}
            aria-label="Square view"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          <button
            className={`p-2 rounded transition-all ${
              viewStyle === "round" ? "bg-teal-600 text-white" : "bg-gray-200"
            }`}
            onClick={() => setViewStyle("round")}
            aria-label="Round view"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Destinations Grid */}
      <div
        className={`grid gap-6 py-16 ${
          viewStyle === "square"
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4"
            : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        }`}
      >
        {filteredDestinations.map((destination) => (
          <Link href={`/destinations/${destination.id}`} key={destination.id}>
            {viewStyle === "square" ? (
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${destination.image})` }}
                ></div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold">{destination.name}</h3>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">{destination.region}</span>
                  </div>
                  <p className="text-sm text-gray-600">{destination.description}</p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <div
                  className="w-48 h-48 rounded-full bg-cover bg-center mb-4 border-4 border-white shadow-lg"
                  style={{ backgroundImage: `url(${destination.image})` }}
                ></div>
                <h3 className="text-lg font-bold text-center">{destination.name}</h3>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded-full mb-2">{destination.region}</span>
                <p className="text-sm text-gray-600 text-center">{destination.description}</p>
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DestinationsPage;
