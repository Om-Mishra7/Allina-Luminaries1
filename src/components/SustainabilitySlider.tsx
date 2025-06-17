import React, { useState } from 'react';

const slides = [
  {
    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80',
    caption: 'CONTRIBUTE TO GLOBAL EFFORTS TO COMBAT CLIMATE CHANGE.'
  },
  {
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=900&q=80',
    caption: 'PROMOTE RENEWABLE ENERGY AND SUSTAINABLE PRACTICES.'
  },
  {
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=900&q=80',
    caption: 'CREATE LASTING VALUE FOR COMMUNITIES AND THE PLANET.'
  }
];

export const SustainabilitySlider = () => {
  const [current, setCurrent] = useState(0);
  const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrent((current + 1) % slides.length);

  return (
    <section className="w-full bg-[#E7DED7] py-12 flex flex-col items-center">
      <h4 className="text-[#7b7b7b] text-xs tracking-[0.2em] font-normal text-center mb-4" style={{ fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif', letterSpacing: '0.2em' }}>
        WHY SUSTAINABILITY MATTERS
      </h4>
      <p className="text-[#06153A] text-center mx-auto mb-8" style={{ maxWidth: 700, fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif', fontWeight: 400, fontSize: 17, lineHeight: '28px', letterSpacing: '0.5%' }}>
        At ALLINA, we believe that sustainability is not just a responsibility but an opportunity to create lasting value for our clients, communities, and the planet. By prioritizing green practices and energy-efficient solutions, we aim to:
      </p>
      <div className="w-full max-w-5xl mx-auto relative">
        <div className="relative w-full h-[350px] sm:h-[400px] md:h-[420px] lg:h-[420px] rounded-[8px] overflow-hidden">
          <img
            src={slides[current].img}
            alt={slides[current].caption}
            className="w-full h-full object-cover"
          />
          {/* Overlay caption */}
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent px-8 py-8">
            <span className="text-white text-xl sm:text-2xl md:text-3xl font-normal tracking-[0.15em]" style={{ fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif', letterSpacing: '0.15em' }}>
              {slides[current].caption}
            </span>
          </div>
          {/* Left arrow */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white/90 rounded-full w-12 h-12 flex items-center justify-center text-3xl z-10 transition"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <span className="text-[#06153A]">&#8592;</span>
          </button>
          {/* Right arrow */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white/90 rounded-full w-12 h-12 flex items-center justify-center text-3xl z-10 transition"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <span className="text-[#06153A]">&#8594;</span>
          </button>
        </div>
      </div>
    </section>
  );
}; 