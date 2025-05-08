"use client";
import { useRouter } from "next/navigation";
import "swiper/css"; // Import Swiper styles
import "swiper/css/effect-fade"; // Import fade effect styles
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Hero = () => {
  const router = useRouter();

  interface RouteFunction {
    (name: string): void;
  }

  const route: RouteFunction = (name) => {
    router.push(name);
  };

  const slides = [
    {
      id: 1,
      image: "/icehill.jpg",
      text: "🏔️ Explore Hidden Trails",
    },
    {
      id: 2,
      image: "/beach.avif",
      text: "🏝️ Soak in the Serenity of Beaches",
    },
    {
      id: 3,
      image: "/sunset.jpg",
      text: "🏜️ Witness the Magic of Sunsets",
    },
    {
      id: 4,
      image: "/culture1.jpg",
      text: "🛕 Witness the Harmony of Faith and Art",
    },
  ];

  return (
    <div className="relative w-full h-[600px]">
      <Swiper
        navigation
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full"
        fadeEffect={{ crossFade: true }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `url('${slide.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "100%",
              }}
            >
              <div className="p-4 h-full flex flex-col justify-center items-center absolute top-0 left-0 w-full bg-gradient-to-b from-black/60 to-black/40">
                <h1 className="md:text-5xl sm:text-4xl text-3xl font-serif font-bold text-center text-white animate__animated animate__fadeIn mb-6">
                  {slide.text}
                </h1>
                <button
                  className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-5 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  onClick={() => route("/auth/signup")}
                >
                  Begin Your Journey
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
