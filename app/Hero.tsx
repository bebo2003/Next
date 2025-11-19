"use client";
import { useState, useEffect } from "react";

export default function HeroSlider() {
  const slides = ["/img.jpg", "/imgg.jpg", "/photo.jpg"];

  // النصوص لكل صورة
  const captions = [
    "أفضل السيارات الرياضية",
    "سيارات عائلية مريحة",
    "سيارات فاخرة للرحلات الطويلة",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="w-full h-screen relative bg-gray-900 overflow-hidden">
      <div className="w-full h-full relative">
        {slides.map((slide, i) => (
          <div key={i} className="absolute top-0 left-0 w-full h-full">
            <img
              src={slide}
              alt={`slide-${i}`}
              className={`w-full h-full object-cover transition-opacity duration-1000 ${
                index === i ? "opacity-100" : "opacity-0"
              }`}
            />

            {/* Overlay نصوص */}
            <div
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center px-4 transition-opacity duration-1000 ${
                index === i ? "opacity-100" : "opacity-0"
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#B08B4F] drop-shadow-lg mb-4">
                {captions[i]}
              </h2>

              {/* زرار اتصل بنا */}
              <a
                href="tel:0123456789"
                className="relative inline-block px-6 py-2 font-bold text-white bg-gradient-to-r from-[#B08B4F] to-black rounded-full overflow-hidden group"
              >
                <span className="absolute inset-0 w-full h-full bg-white opacity-20 blur-xl animate-cloud"></span>
                <span className="relative z-10">اتصل الآن</span>
              </a>
            </div>
          </div>
        ))}

        {/* Dots centered at bottom */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-4 h-4 rounded-full cursor-pointer transition-all ${
                index === i ? "bg-[#CD7F32] scale-125" : "bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
