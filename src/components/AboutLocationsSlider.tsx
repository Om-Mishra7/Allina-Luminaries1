import React, { useState, useEffect } from 'react';

const slides = [
  {
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    location: 'JAIPUR',
  },
  {
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
    location: 'DELHI',
  },
  {
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
    location: 'GURGAON',
  },
];

const IMAGE_HEIGHT = 340;
const IMAGE_WIDTH = 480;
const SHRUNKEN_WIDTH = 120;
const ANIMATION_DURATION = 500;
const SLIDE_DURATION = 2000;

export const AboutLocationsSlider = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [shrinkPhase, setShrinkPhase] = useState(false); // true: shrinking, false: expanding

  useEffect(() => {
    let shrinkTimeout, expandTimeout;
    shrinkTimeout = setTimeout(() => {
      setShrinkPhase(true); // Start shrinking
      setTimeout(() => {
        setAnimating(true); // Swap image
        setCurrent((prev) => (prev + 1) % slides.length);
        setTimeout(() => {
          setAnimating(false);
          setShrinkPhase(false); // Expand back
        }, ANIMATION_DURATION);
      }, ANIMATION_DURATION);
    }, SLIDE_DURATION);
    return () => {
      clearTimeout(shrinkTimeout);
      clearTimeout(expandTimeout);
    };
  }, [current]);

  // Calculate dynamic line width so lines always meet the image edge
  const imageWidth = shrinkPhase ? SHRUNKEN_WIDTH : IMAGE_WIDTH;
  const lineWidth = `calc((100% - ${imageWidth}px) / 2)`;

  return (
    <section className="w-full bg-[#E7DED7] py-16 flex flex-col items-center min-h-[480px]">
      {/* Dots */}
      <div className="flex gap-2 mb-4">
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full ${idx === current ? 'bg-orange-500' : 'bg-[#d9d9d9]'} transition-all`}
            style={{ display: 'inline-block' }}
          />
        ))}
      </div>
      {/* Animated lines and image */}
      <div className="relative flex items-center justify-center w-full max-w-5xl mb-8" style={{ minHeight: IMAGE_HEIGHT }}>
        {/* Left line */}
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] bg-[#7b7b7b] transition-all duration-500"
          style={{
            width: lineWidth,
            borderRadius: 2,
          }}
        />
        {/* Right line */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 h-[2px] bg-[#7b7b7b] transition-all duration-500"
          style={{
            width: lineWidth,
            borderRadius: 2,
          }}
        />
        {/* Image */}
        <div
          className="relative z-10 transition-all duration-500 flex items-center justify-center"
          style={{
            width: imageWidth,
            height: IMAGE_HEIGHT,
            borderRadius: 20,
            overflow: 'hidden',
            background: '#fff',
            boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
            margin: '0 32px',
            transition: 'width 0.5s cubic-bezier(0.4,0,0.2,1)',
          }}
        >
          <img
            src={slides[current].img}
            alt={slides[current].location}
            className="w-full h-full object-cover rounded-[20px]"
            style={{ height: '100%', width: '100%', transition: 'width 0.5s cubic-bezier(0.4,0,0.2,1)' }}
          />
        </div>
      </div>
      {/* Location */}
      <div className="flex flex-col items-center w-full max-w-2xl">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-orange-600 text-xl">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2C6.13 2 3 5.13 3 9c0 4.25 5.7 8.54 7.13 9.6a1 1 0 0 0 1.13 0C11.3 17.54 17 13.25 17 9c0-3.87-3.13-7-7-7zm0 2a5 5 0 0 1 5 5c0 2.88-3.13 6.13-5 7.61C8.13 15.13 5 11.88 5 9a5 5 0 0 1 5-5zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/></svg>
          </span>
          <span className="text-[#06153A] text-lg font-semibold tracking-[0.15em]" style={{ fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif', letterSpacing: '0.15em' }}>{slides[current].location}</span>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="w-full h-px bg-[#7b7b7b] max-w-2xl relative">
            <div className="absolute left-1/2 top-0 w-0.5 h-4 bg-[#7b7b7b] -translate-x-1/2" />
          </div>
        </div>
      </div>
    </section>
  );
}; 