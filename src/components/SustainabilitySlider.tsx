import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const SustainabilitySlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/images/Sustainability_windmil.jpg',
      text: 'CONTRIBUTE TO GLOBAL EFFORTS TO COMBAT CLIMATE CHANGE.'
    },
    {
      image: '/images/image1.jpg',
      text: 'REDUCE CARBON FOOTPRINT THROUGH INNOVATIVE SOLUTIONS.'
    },
    {
      image: '/images/image2.png',
      text: 'CREATE ENERGY-EFFICIENT INFRASTRUCTURE FOR COMMUNITIES.'
    },
    {
      image: '/images/image3.jpg',
      text: 'PROMOTE RENEWABLE ENERGY AND SUSTAINABLE PRACTICES.'
    },
    {
      image: '/images/image4.jpg',
      text: 'BUILD A GREENER FUTURE FOR THE NEXT GENERATION.'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section className="w-full bg-[#E7DED7] pt-0 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto flex flex-col" style={{ gap: '40px' }}>
        {/* Header Section */}
        <div className="text-center">
          <h2 
            className="text-[#06153A] text-lg sm:text-xl md:text-[25px] font-normal tracking-[2px] sm:tracking-[3px] md:tracking-[4px] uppercase mb-6"
            style={{ fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif', fontWeight: 400, letterSpacing: '0.03em' }}
          >
            WHY SUSTAINABILITY MATTERS
          </h2>
          <p 
            className="text-[#06153A] text-lg leading-relaxed max-w-4xl mx-auto"
            style={{ 
              fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
              fontWeight: 400,
              fontSize: '17px',
              lineHeight: '28px',
              letterSpacing: '0.01em',
              marginBottom: '0px'
            }}
          >
            At ALLINA, we believe that sustainability is not just a responsibility but an opportunity to create lasting value for our clients, communities, and the planet. By prioritizing green practices and energy-efficient solutions, we aim to:
          </p>
        </div>

        {/* Slider Section */}
        <div className="relative w-full overflow-hidden rounded-lg h-[400px] sm:h-[500px] md:h-[600px] lg:h-[697px]">
          {/* Slides Container */}
          <div 
            className="flex h-full transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`
            }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="relative w-full h-full flex-shrink-0">
                <img
                  src={slide.image}
                  alt={`Sustainability slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                
                {/* Bottom vignette effect */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to bottom, transparent 0%, transparent 60%, rgba(0, 0, 0, 0.7) 100%)'
                  }}
                />

                {/* Overlay Text */}
                <div 
                  className="absolute bottom-8 sm:bottom-12 lg:bottom-16 left-4 sm:left-6 lg:left-8 right-4 sm:right-6 lg:right-8 text-white uppercase z-20"
                  style={{
                    fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                    fontWeight: 300,
                    fontSize: 'clamp(18px, 4vw, 39px)',
                    lineHeight: '1.4',
                    letterSpacing: '0.16em'
                  }}
                >
                  {slide.text}
                </div>
              </div>
            ))}
          </div>

          {/* Left Navigation Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-4 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300 z-30"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>

          {/* Right Navigation Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-4 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300 z-30"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}; 