import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export const ScrollToTop = () => {
  const { pathname } = useLocation();
  const { setJourneyInView } = useTheme();
  const prevPathnameRef = useRef<string | null>(null);

  useEffect(() => {
    // Only trigger when pathname actually changes (not on initial load)
    if (prevPathnameRef.current !== null && prevPathnameRef.current !== pathname) {
      // User navigated to a different page
      const scrollToTop = () => {
        // Immediate scroll for instant feedback
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant'
        });
        
        // Reset theme state - Journey is not in view on new page load
        setJourneyInView(false);
        
        // Ensure scroll position is maintained at top for all browsers
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        
        // Force repaint to ensure smooth rendering
        document.documentElement.style.scrollBehavior = 'auto';
        setTimeout(() => {
          document.documentElement.style.scrollBehavior = 'smooth';
        }, 100);
      };

      // Use requestAnimationFrame for smoother execution
      requestAnimationFrame(scrollToTop);
    }

    // Update the previous pathname
    prevPathnameRef.current = pathname;
  }, [pathname, setJourneyInView]);

  return null;
}; 