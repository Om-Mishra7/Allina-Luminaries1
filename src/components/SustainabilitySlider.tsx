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

        {/* Gap between text and slider */}
        <div className="mb-20"></div>

        {/* Slider Section */}
        <div className="relative">
          <div 
            className="relative overflow-hidden"
            style={{
              width: '1440px',
              height: '697px',
              top: '6px',
              background: `url(${slides[currentSlide].image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Bottom vignette effect */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(to bottom, transparent 0%, transparent 60%, rgba(0, 0, 0, 0.7) 100%)'
              }}
            />

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
            <div 
              className="absolute text-white uppercase z-20"
              style={{
                width: '1400px',
                height: '132px',
                top: '549px',
                left: '30.6px',
                fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                fontWeight: 10,
                fontStyle: 'normal',
                fontSize: '39px',
                lineHeight: '66px',
                letterSpacing: '0.16em'
              }}
            >
              {slides[currentSlide].text}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 