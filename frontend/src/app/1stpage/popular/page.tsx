"use client";
import { ChevronLeft, ChevronRight, Globe } from "lucide-react";
import { useEffect as reactUseEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const PopularDestinations = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hovering, setHovering] = useState(false);

  const culturalDestinations = [
    {
      id: "c1",
      name: "Jaipur",
      image: "/jaipur.jpg",
      description: "Palaces, forts, Rajasthani culture",
      region: "Rajasthan",
    },
    {
      id: "c2",
      name: "Kathmandu",
      image: "/kathmandu.webp",
      description: "Ancient temples and spiritual vibes",
      region: "Nepal",
    },
    {
      id: "c3",
      name: "Budapest",
      image: "/budapest.jpeg",
      description:
        "Historical sites, thermal baths, and beautiful architecture",
      region: "Hungary",
    },
    {
      id: "c4",
      name: "Dublin",
      image: "/dublin.jpeg",
      description: "Rich in literature, music, and Irish pubs",
      region: "Ireland",
    },
    {
      id: "c5",
      name: "Rome",
      image: "/rome.jpg",
      description: "Ancient ruins, Roman history, and vibrant culture",
      region: "Italy",
    },
  ];

  const budgetFriendly = [
    {
      id: "b1",
      name: "Vietnam",
      image: "/vietnam.jpg",
      description: "Lush landscapes, bustling cities, and street food delights",
      region: "Southeast Asia",
    },
    {
      id: "b2",
      name: "Bangkok",
      image: "/bangkok.jpg",
      description: "Vibrant nightlife, temples, and floating markets",
      region: "Thailand",
    },
    {
      id: "b3",
      name: "Colombo",
      image: "/colombo.jpeg",
      description: "Beaches, colonial architecture, and cultural heritage",
      region: "Sri Lanka",
    },
    {
      id: "b4",
      name: "Cambodia",
      image: "/cambodia.jpg",
      description: "Angkor Wat, temples, and affordable travel",
      region: "Southeast Asia",
    },
    {
      id: "b5",
      name: "Gokarna",
      image: "/gokarna.jpg",
      description: "Peaceful beaches and scenic temples",
      region: "Karnataka",
    },
    {
      id: "b6",
      name: "Hampi",
      image: "/hampi.jpg",
      description: "Ruins of Vijayanagara Empire and stunning landscapes",
      region: "Karnataka",
    },
  ];

  const natureAdventure = [
    { name: "Gulmarg", image: "/gulmarg.jpg" },
    { name: "Leh", image: "/leh.jpg" },
    { name: "Austria", image: "/austria.webp" },
    { name: "Bali", image: "/bali.webp" },
    { name: "Havelock Island", image: "/havelock.jpg" },
    { name: "Kodaikanal", image: "/kodaikanal.jpg" },
    { name: "Kasol", image: "/kasol.jpg" },
  ];

  const honeymoon = [
    { name: "Pondicherry", image: "/pondicherry.jpg" },
    { name: "Maldives", image: "/maldives.webp" },
    { name: "Switzerland", image: "/switzerland.jpg" },
    { name: "Norway", image: "/norway.jpg" },
    { name: "Iceland", image: "/iceland.jpg" },
  ];

  const modernCity = [
    {
      id: "m1",
      name: "Chicago",
      image: "/chicago.jpg",
      description: "Skyscrapers, art, and deep-dish pizza",
      region: "United States",
    },
    {
      id: "m2",
      name: "San Francisco",
      image: "/san-francisco.jpg",
      description: "Tech hub with iconic Golden Gate Bridge",
      region: "United States",
    },
    {
      id: "m3",
      name: "London",
      image: "/london.avif",
      description: "Royal palaces, museums, and British culture",
      region: "United Kingdom",
    },
    {
      id: "m4",
      name: "Madrid",
      image: "/madrid.jpg",
      description: "Art, cuisine, and Spanish flair",
      region: "Spain",
    },
    {
      id: "m5",
      name: "Tokyo",
      image: "/tokyo.jpeg",
      description: "Futuristic cityscape and traditional temples",
      region: "Japan",
    },
    {
      id: "m6",
      name: "Monte Carlo",
      image: "/monte-carlo.jpeg",
      description: "Luxury, casinos, and Formula 1",
      region: "Monaco",
    },
    {
      id: "m7",
      name: "Barcelona",
      image: "/barcelona.jpg",
      description: "Modernist architecture and Mediterranean vibes",
      region: "Spain",
    },
    {
      id: "m8",
      name: "Shanghai",
      image: "/shanghai.jpg",
      description: "Skyline views and bustling markets",
      region: "China",
    },
    {
      id: "m9",
      name: "Sydney",
      image: "/sydney.jpg",
      description: "Opera House, beaches, and vibrant city life",
      region: "Australia",
    },
    {
      id: "m10",
      name: "Mumbai",
      image: "/mumbai.avif",
      description: "Bollywood, street food, and urban energy",
      region: "India",
    },
    {
      id: "m11",
      name: "Seoul",
      image: "/seoul.jpg",
      description: "Tech innovation meets rich tradition",
      region: "South Korea",
    },
    {
      id: "m12",
      name: "Bengaluru",
      image: "/bengaluru.jpg",
      description: "India's Silicon Valley and startup capital",
      region: "India",
    },
    {
      id: "m13",
      name: "Delhi",
      image: "/delhi.jpg",
      description: "Historic landmarks and vibrant street life",
      region: "India",
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? modernCity.length - 1 : prev - 1));
    setIsAutoPlaying(false);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === modernCity.length - 1 ? 0 : prev + 1));
    setIsAutoPlaying(false);
  };

  // Auto-play functionality for Modern City Escapes
  useEffect(() => {
    if (!isAutoPlaying || hovering) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === modernCity.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, hovering]); // Added modernCity.length

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8"></h1>
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Cultural / Heritage Destinations
        </h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {culturalDestinations.map((destination) => (
            <SwiperSlide key={destination.id}>
              <div className="flex flex-col items-center p-16">
                <div
                  className="w-48 h-48 rounded-full bg-cover bg-center mb-4 border-4 border-white shadow-lg"
                  style={{ backgroundImage: `url(${destination.image})` }}
                ></div>
                <h3 className="text-lg font-bold text-center">
                  {destination.name}
                </h3>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded-full mb-2">
                  {destination.region}
                </span>
                <p className="text-sm text-gray-600 text-center">
                  {destination.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Nature & Adventure</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-16">
          {natureAdventure.map((place, index) => (
            <div
              key={index}
              className={`relative rounded-lg overflow-hidden shadow-md cursor-pointer ${
                index === 0 || index === 3
                  ? "md:row-span-2 h-80 md:h-auto"
                  : "h-64"
              }`}
            >
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${place.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30" />

              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h3 className="text-xl font-bold bg-gray-200 p-2 text-black rounded-2xl">
                  {place.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Affordable Escapes</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {budgetFriendly.map((destination) => (
            <SwiperSlide key={destination.id}>
              <div className="flex flex-col items-center py-16">
                <div
                  className="w-48 h-48 bg-cover bg-center mb-4 border-4 border-white shadow-lg rounded-lg"
                  style={{ backgroundImage: `url(${destination.image})` }}
                ></div>
                <h3 className="text-lg font-bold text-center">
                  {destination.name}
                </h3>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded-full mb-2">
                  {destination.region}
                </span>
                <p className="text-sm text-gray-600 text-center">
                  {destination.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Honeymoon Destination</h2>
        <div className="overflow-hidden py-12">
          <div className="relative flex items-center justify-center h-72 overflow-x-hidden">
            <div className="flex space-x-4 items-center">
              {honeymoon.map((city, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 cursor-pointer transform ${
                    index === activeIndex
                      ? "scale-110 z-30"
                      : Math.abs(index - activeIndex) === 1
                      ? "scale-90 z-20 opacity-80"
                      : "scale-75 z-10 opacity-60"
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="relative w-48 md:w-64 rounded-lg overflow-hidden shadow-lg">
                    <div
                      className="h-40 md:h-48 bg-cover bg-center"
                      style={{ backgroundImage: `url(${city.image})` }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white p-3">
                      <h3 className="font-bold">{city.name}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* UPDATED MODERN CITY ESCAPES SECTION */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">Modern City Escapes</h2>
          <div className="flex items-center">
            <button
              className="px-3 py-1 rounded-full mr-2 text-sm flex items-center"
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            ></button>
            <div className="text-gray-500 text-sm">
              {activeIndex + 1} / {modernCity.length}
            </div>
          </div>
        </div>

        <div
          className="relative overflow-hidden rounded-xl shadow-lg"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          {/* Main showcase */}
          <div className="relative h-[45rem]">
            {modernCity.map((city, index) => (
              <div
                key={city.id}
                className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                  index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${city.image})`,
                    filter: "brightness(0.7)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
                  <div className="flex items-center mb-2">
                    <Globe size={18} className="mr-2 text-blue-400" />
                    <span className="text-blue-300 text-sm">{city.region}</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-2">{city.name}</h3>
                  <p className="text-lg mb-4">{city.description}</p>
                  <button className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg transition-colors">
                    Explore {city.name}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-70 text-white p-2 rounded-full transition-all z-20"
            onClick={handlePrev}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-70 text-white p-2 rounded-full transition-all z-20"
            onClick={handleNext}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Thumbnail carousel */}
        <div className="mt-6 overflow-x-auto pb-4 ">
          <div className="flex space-x-3 justify-center">
            {modernCity.map((city, index) => (
              <div
                key={city.id}
                className={`transition-all duration-300 cursor-pointer ${
                  index === activeIndex
                    ? "scale-105"
                    : "opacity-70 hover:opacity-100"
                }`}
                onClick={() => {
                  setActiveIndex(index);
                  setIsAutoPlaying(false);
                }}
              >
                <div className="w-24 h-20 rounded-md overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${city.image})` }}
                  />
                </div>
                <p className="text-xs mt-1 font-medium text-center truncate">
                  {city.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* END OF UPDATED SECTION */}
    </div>
  );
};

export default PopularDestinations;
function useEffect(effect: () => (() => void) | undefined, deps: boolean[]) {
  reactUseEffect(effect, deps);
}
