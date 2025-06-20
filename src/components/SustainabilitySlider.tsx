import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const SustainabilitySlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/images/Sustainability_windmil.jpg',
      text: 'CONTRIBUTE TO GLOBAL EFFORTS TO COMBAT CLIMATE CHANGE.'
    }
    // You can add more slides here if needed
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="w-full bg-[#E7DED7] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 
            className="text-[#06153A] text-sm font-medium tracking-[0.2em] uppercase mb-6"
            style={{ fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif', letterSpacing: '0.2em' }}
          >
            WHY SUSTAINABILITY MATTERS
          </h2>
          <p 
            className="text-[#06153A] text-lg leading-relaxed max-w-4xl mx-auto"
            style={{ 
              fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
              fontWeight: 400,
              fontSize: '18px',
              lineHeight: '28px'
            }}
          >
            At ALLINA, we believe that sustainability is not just a responsibility but an opportunity to create lasting value for our clients, communities, and the planet. By prioritizing green practices and energy-efficient solutions, we aim to:
          </p>
        </div>

        {/* Slider Section */}
        <div className="relative">
          <div 
            className="relative h-[600px] rounded-[20px] overflow-hidden"
            style={{
              background: `linear-gradient(180deg, rgba(74, 144, 226, 0.8) 0%, rgba(144, 224, 239, 0.6) 100%), url(${slides[currentSlide].image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Left Navigation Arrow */}
            <button
              onClick={prevSlide}
              className="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300 z-10"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            {/* Right Navigation Arrow */}
            <button
              onClick={nextSlide}
              className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300 z-10"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Overlay Text */}
            <div className="absolute bottom-16 left-8 max-w-2xl">
              <h3 
                className="text-white text-3xl md:text-4xl font-bold leading-tight"
                style={{ 
                  fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                  fontWeight: 700,
                  fontSize: '42px',
                  lineHeight: '52px',
                  letterSpacing: '1px'
                }}
              >
                {slides[currentSlide].text}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 