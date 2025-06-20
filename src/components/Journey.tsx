import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export const Journey: React.FC = () => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [animationProgress, setAnimationProgress] = useState(0);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const [isSectionInView, setIsSectionInView] = useState(false);
  const { setJourneyInView } = useTheme();
  
  // Sync journey visibility with theme context
  useEffect(() => {
    setJourneyInView(isSectionInView);
  }, [isSectionInView, setJourneyInView]);

  useEffect(() => {
    const section = sectionRef.current;
    const img = imgRef.current;
    
    if (!section || !img) return;    let currentProgress = 0;
    let sectionInView = false;
    let animationComplete = false;
    let isScrollLocked = false;
    let lockedScrollPosition = 0;
    let isInitialized = false;
    let lockEnforceTimer: number | null = null;

    // Initialize the animation state properly
    const initializeAnimation = () => {
      if (img && !isInitialized) {
        const containerHeight = window.innerHeight;
        const initialY = containerHeight * 0.5;
        img.style.transform = `translate(-50%, ${initialY}px)`;
        currentProgress = 0;
        animationComplete = false;
        setAnimationProgress(0);
        setIsAnimationComplete(false);
        isInitialized = true;
        console.log('Animation initialized');
      }    };    // Better detection for when section reaches top of screen with scroll lock
    const handlePageScroll = (e: Event) => {
      const rect = section.getBoundingClientRect();
      const isAtTop = rect.top <= 5; // Stricter threshold for immediate detection
        console.log('Scroll check:', { 
        rectTop: rect.top, 
        rectBottom: rect.bottom, 
        isAtTop, 
        sectionInView, 
        animationComplete,
        currentProgress,
        isScrollLocked,
        lockedScrollPosition
      });

      // Ensure animation is initialized
      initializeAnimation();      // If section top reaches viewport top and animation isn't complete, lock immediately
      if (isAtTop && !animationComplete) {        
        if (!isScrollLocked) {
          // Calculate the exact position where section top meets viewport top
          const currentScroll = window.pageYOffset;
          const sectionTop = currentScroll + rect.top;
          lockedScrollPosition = sectionTop;
          isScrollLocked = true;
          console.log('IMMEDIATE LOCK at position:', lockedScrollPosition, 'currentScroll:', currentScroll);
          
          // Force scroll to the exact lock position
          window.scrollTo({
            top: lockedScrollPosition,
            behavior: 'auto'
          });
          
          // Start continuous monitoring to enforce lock
          if (lockEnforceTimer) clearInterval(lockEnforceTimer);
          lockEnforceTimer = setInterval(() => {
            if (isScrollLocked && !animationComplete && window.pageYOffset !== lockedScrollPosition) {
              console.log('Enforcing scroll lock - correcting position from', window.pageYOffset, 'to', lockedScrollPosition);
              window.scrollTo({
                top: lockedScrollPosition,
                behavior: 'auto'
              });
            }
          }, 10) as unknown as number;
        }

        sectionInView = true;
        setIsSectionInView(true);
          } else if (!isAtTop && rect.top > 20) {
        // Reset animation if user scrolls significantly away from section
        if (sectionInView) {          console.log('Resetting animation - user scrolled away');
          currentProgress = 0;
          animationComplete = false;
          isScrollLocked = false;
          lockedScrollPosition = 0; // Reset lock position
          isInitialized = false; // Force re-initialization
          setAnimationProgress(0);
          setIsAnimationComplete(false);
          
          // Clear lock enforcement timer
          if (lockEnforceTimer) {
            clearInterval(lockEnforceTimer);
            lockEnforceTimer = null;
          }
        }
        sectionInView = false;
        setIsSectionInView(false);
      } else if (isAtTop && animationComplete) {
        // Animation is complete, allow normal scrolling
        sectionInView = true;
        isScrollLocked = false;
        setIsSectionInView(true);
        console.log('Animation complete, unlocking scroll');
        
        // Clear lock enforcement timer
        if (lockEnforceTimer) {
          clearInterval(lockEnforceTimer);
          lockEnforceTimer = null;
        }
      }
    };    // More aggressive scroll prevention
    const preventAllScroll = (e: Event) => {
      if (isScrollLocked && !animationComplete) {
        e.preventDefault();
        e.stopPropagation();
        
        // Force scroll position to locked position immediately
        setTimeout(() => {
          window.scrollTo({
            top: lockedScrollPosition,
            behavior: 'auto'
          });
        }, 0);
        
        console.log('Preventing scroll, enforcing lock at:', lockedScrollPosition);
        return false;
      }
    };    // Initial check
    initializeAnimation();
    handlePageScroll(new Event('scroll'));
    
    // Listen to scroll events for real-time detection
    window.addEventListener('scroll', handlePageScroll, { passive: false });
    window.addEventListener('scroll', preventAllScroll, { passive: false });
    window.addEventListener('wheel', preventAllScroll, { passive: false });
    window.addEventListener('touchmove', preventAllScroll, { passive: false });

    // Intersection Observer as backup
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          handlePageScroll(new Event('scroll')); // Trigger manual check when section is visible
        }
      },
      { 
        threshold: [0, 0.1] // Detect when section enters viewport
      }
    );

    observer.observe(section);

    const handleImageLoad = () => {
      const svgHeight = img.naturalHeight || img.height;
      const containerHeight = window.innerHeight;

      // Initial Y: SVG top at 50% of container
      const initialY = containerHeight * 0.5;      // Final Y: SVG bottom at 50% of container (this is the target end position)
      const finalY = (containerHeight * 0.5) - svgHeight;

      function updateAnimation(progress: number) {
        // Ensure smooth upward movement: start high, end low
        const currentY = initialY - (initialY - finalY) * progress;
        img.style.transform = `translate(-50%, ${currentY}px)`;
        
        currentProgress = progress;
        setAnimationProgress(progress);        // Check if SVG bottom has reached 50% of container height (middle of section)
        const svgBottom = currentY + svgHeight;
        const svgTop = currentY;
        const targetBottomPosition = containerHeight * 0.5; // 50% from top = middle of section
        const targetTopPosition = containerHeight * 0.5; // 50% from top for SVG top
        const bottomPercentageFromTop = (svgBottom / containerHeight) * 100;
        const topPercentageFromTop = (svgTop / containerHeight) * 100;
        
        console.log(`SVG bottom at ${bottomPercentageFromTop.toFixed(1)}%, SVG top at ${topPercentageFromTop.toFixed(1)}% from top`);
          // Animation should end when:
        // - SVG bottom reaches 50% (going down/forward) OR
        // - SVG top reaches 50% (going up/reverse)
        if (svgBottom <= targetBottomPosition || svgTop >= targetTopPosition) {
          animationComplete = true;
          setIsAnimationComplete(true);
          console.log('Animation complete: SVG reached boundary position');
          
          // Clear lock enforcement timer when animation completes
          if (lockEnforceTimer) {
            clearInterval(lockEnforceTimer);
            lockEnforceTimer = null;
          }
        } else {
          animationComplete = false;
          setIsAnimationComplete(false);
        }
      }      // Handle scroll events with bidirectional animation
      function handleWheelScroll(e: WheelEvent) {
        console.log('Wheel event:', { sectionInView, animationComplete, isScrollLocked, deltaY: e.deltaY });
        
        // Only handle wheel events when section is locked and animation isn't complete
        if (isScrollLocked && !animationComplete) {
          e.preventDefault();
          e.stopPropagation();
          
          console.log('Processing wheel for animation');
          
          // Allow both directions for animation
          if (e.deltaY > 0) {
            // Downward scroll - progress animation forward
            const scrollSensitivity = Math.abs(e.deltaY) / 1000;
            const delta = Math.min(scrollSensitivity, 0.01);
            const newProgress = Math.min(1, currentProgress + delta);
            console.log('Forward animation progress from', currentProgress, 'to', newProgress);
            updateAnimation(newProgress);
          } else if (e.deltaY < 0) {
            // Upward scroll - progress animation backward
            const scrollSensitivity = Math.abs(e.deltaY) / 1000;
            const delta = Math.min(scrollSensitivity, 0.01);
            const newProgress = Math.max(0, currentProgress - delta);
            console.log('Reverse animation progress from', currentProgress, 'to', newProgress);
            updateAnimation(newProgress);
          }
          
          // Enforce scroll lock position after animation update
          setTimeout(() => {
            window.scrollTo({
              top: lockedScrollPosition,
              behavior: 'auto'
            });
          }, 0);
        }
      }      // Also prevent regular scroll events when locked
      function preventScroll(e: Event) {
        if (isScrollLocked && !animationComplete) {
          e.preventDefault();
          e.stopPropagation();
          console.log('Preventing page scroll during animation');
          
          // Enforce lock position
          setTimeout(() => {
            window.scrollTo({
              top: lockedScrollPosition,
              behavior: 'auto'
            });
          }, 0);
        }
      }// Initial position
      updateAnimation(0);

      // Add scroll listeners with better control
      window.addEventListener('wheel', handleWheelScroll, { passive: false });
      window.addEventListener('scroll', preventScroll, { passive: false });

      return () => {
        window.removeEventListener('wheel', handleWheelScroll);
        window.removeEventListener('scroll', preventScroll);
      };
    };

    if (img.complete) {
      handleImageLoad();
    } else {
      img.onload = handleImageLoad;
    }    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handlePageScroll);
      window.removeEventListener('scroll', preventAllScroll);
      window.removeEventListener('wheel', preventAllScroll);
      window.removeEventListener('touchmove', preventAllScroll);
      
      // Clear lock enforcement timer
      if (lockEnforceTimer) {
        clearInterval(lockEnforceTimer);
      }
      
      if (img) {
        img.onload = null;
      }
    };
  }, []); // Remove dependencies to prevent re-running

  return (
    <section 
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      {/* Journey Text - Only visible in this section */}
      <div 
        className="absolute top-[10%] left-1/2 transform -translate-x-1/2 text-2xl font-bold z-20"
        style={{ 
          fontFamily: "'Courier New', Courier, monospace",
          color: 'goldenrod' 
        }}
      >
        Our Journey
      </div>

      {/* Container with mask for the SVG animation */}
      <div 
        className="absolute inset-0 w-full h-full flex justify-center items-start overflow-hidden"
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 1) 100%)',
          maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 1) 100%)'        }}
      >
        <img
          ref={imgRef}
          src="/animation.svg"
          alt="Journey Animation"
          className="absolute"
          style={{
            left: '50%',
            transform: 'translate(-50%, 50vh)', // Initial position
            maxWidth: '100%',
            height: 'auto',
            transition: 'none' // No CSS transition, we control it manually
          }}
        />
      </div>
    </section>
  );
};