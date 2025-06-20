import React, { useEffect, useRef, useState } from 'react';

export const VisionMissionSection: React.FC = () => {
  const [currentContent, setCurrentContent] = useState<'vision' | 'mission'>('vision');
  const [isScrollLocked, setIsScrollLocked] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'up' | 'down'>('up');
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  const visionContent = {
    title: "VISION",
    text: "To be a global leader in delivering innovative, sustainable, and reliable solutions across industries. Our vision reflects our ambition to grow beyond streetlighting and become a multi-industry leader, offering cutting-edge solutions that empower communities, drive progress, and contribute to a sustainable future."
  };

  const missionContent = {
    title: "MISSION", 
    text: "To provide high-quality, energy-efficient streetlighting and infrastructure solutions that enhance safety, sustainability, and quality of life for communities. We are committed to engineering excellence, customer satisfaction, and environmental responsibility."
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let isInSection = false;
    let hasScrolled = false;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const currentScrollY = window.scrollY;
      
      // Check if section is in viewport
      const isVisible = rect.top <= 100 && rect.bottom >= window.innerHeight - 100;
      
      if (isVisible && !isInSection) {
        isInSection = true;
        setIsScrollLocked(true);
        document.body.style.overflow = 'hidden';
        hasScrolled = false;
      } else if (!isVisible && isInSection) {
        isInSection = false;
        setIsScrollLocked(false);
        document.body.style.overflow = 'auto';
        hasScrolled = false;
      }

      if (isInSection && !hasScrolled && !isAnimating) {
        const scrollDirection = currentScrollY > lastScrollY.current ? 1 : -1;
        const scrollDiff = Math.abs(currentScrollY - lastScrollY.current);
        
        // Only trigger content change if scroll is significant enough
        if (scrollDiff > 30) {
          hasScrolled = true;
          setIsAnimating(true);
          
          if (scrollDirection > 0 && currentContent === 'vision') {
            setSlideDirection('up');
            setCurrentContent('mission');
          } else if (scrollDirection < 0 && currentContent === 'mission') {
            setSlideDirection('down');
            setCurrentContent('vision');
          }
          
          // Reset scroll flag after animation
          if (scrollTimeout.current) {
            clearTimeout(scrollTimeout.current);
          }
          scrollTimeout.current = setTimeout(() => {
            hasScrolled = false;
            setIsAnimating(false);
          }, 800);
        }
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'auto';
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [currentContent, isAnimating]);

  const currentData = currentContent === 'vision' ? visionContent : missionContent;

  return (
    <div ref={sectionRef} className="w-full flex justify-center items-center py-20">
      <div 
        className="w-[1360px] h-[647px] rounded-[30px] relative overflow-hidden bg-cover bg-center shadow-2xl"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1360&q=80')",
          filter: 'grayscale(100%)'
        }}
      >
        {/* Content Overlay with Slide Animation */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div 
            className={`text-center px-8 max-w-4xl transition-all duration-700 ease-out ${
              isAnimating 
                ? slideDirection === 'up'
                  ? 'animate-slideInFromBottom'
                  : 'animate-slideInFromTop'
                : 'transform translate-y-0 opacity-100'
            }`}
          >
            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-widest drop-shadow-lg">
              {currentData.title}
            </h2>
            <p className="text-white text-lg md:text-xl lg:text-2xl drop-shadow-lg leading-relaxed">
              {currentData.text}
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        {isScrollLocked && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-sm opacity-70">
            Scroll to navigate
          </div>
        )}
      </div>
    </div>
  );
}; 