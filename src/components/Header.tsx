import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import allinaLogoLight from '/images/AllinaHeader.svg';
import allinaLogoDark from '/images/Allina.svg';

// Adjustable logo vertical offset (in px)
const LOGO_VERTICAL_OFFSET = 0; // Change this value to adjust logo distance from top

export const Header: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const logoSrc = isDark ? allinaLogoDark : allinaLogoLight;
  const headerTextColor = isDark ? '#DDB9A2' : '#06153A';

  // Responsive: hide nav links on small screens, always show ☰
  return ( 
    <header className="relative w-full h-[60px] sm:h-[80px] md:h-[100px] z-50">
      <nav className="fixed w-full h-[60px] sm:h-[80px] md:h-[100px] top-0 left-0 bg-[#E7DED7] dark:bg-black transition-colors duration-700 z-50 shadow-[0_6px_32px_0_rgba(0,0,0,0.18)]">
        <div className="max-w-[1440px] mx-auto relative h-full px-4 sm:px-6 md:px-8 flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center h-full">
            <Link to="/" className="block h-full flex items-center">
              <div
                className="relative h-[80px] sm:h-[95px] md:h-[120px] flex items-center"
                style={{ marginTop: LOGO_VERTICAL_OFFSET }}
              >
                <img src={logoSrc} alt="ALLINA" className="h-full w-auto" />
              </div>
            </Link>
          </div>

          {/* Nav Links + Hamburger */}
          <div className="flex items-center gap-6 md:gap-10 ml-auto">
            <div className="hidden sm:flex items-center gap-6 md:gap-10">
              <Link
                to="/about"
                className="uppercase tracking-[2.5px] md:tracking-[3.2px] text-lg md:text-xl transition-colors duration-700"
                style={{ color: headerTextColor, fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif' }}
              >ABOUT</Link>
              <Link
                to="/projects"
                className="uppercase tracking-[2.5px] md:tracking-[3.2px] text-lg md:text-xl transition-colors duration-700"
                style={{ color: headerTextColor, fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif' }}
              >PROJECTS</Link>
              <Link
                to="/services"
                className="uppercase tracking-[2.5px] md:tracking-[3.2px] text-lg md:text-xl transition-colors duration-700"
                style={{ color: headerTextColor, fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif' }}
              >SERVICES</Link>
            </div>
            {/* Hamburger */}
            <button
              className="flex items-center justify-center w-10 h-10 rounded transition-colors duration-700 focus:outline-none"
              aria-label="Open menu"
              onClick={() => setDrawerOpen(true)}
            >
              <span className="text-3xl font-bold" style={{ color: headerTextColor }}>&#9776;</span>
            </button>
          </div>
        </div>

        {/* Slide-down Drawer */}
        {drawerOpen && (
          <div className="fixed left-0 top-0 w-full h-[30vh] bg-[#E7DED7] dark:bg-black z-[999] shadow-xl animate-fade-slide-down flex flex-col justify-center items-center transition-all duration-500">
            <button
              className="absolute top-4 right-6 text-3xl"
              style={{ color: headerTextColor, transition: 'opacity 0.3s 0.2s' }}
              aria-label="Close menu"
              onClick={() => setDrawerOpen(false)}
            >
              &times;
            </button>
            <nav className="flex flex-col items-center justify-center gap-6 h-full">
              <Link
                to="/sustainability"
                className="uppercase tracking-[2.5px] text-xl md:text-2xl transition-colors duration-700"
                style={{ color: headerTextColor, fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif' }}
                onClick={() => setDrawerOpen(false)}
              >SUSTAINABILITY</Link>
              <Link
                to="/career"
                className="uppercase tracking-[2.5px] text-xl md:text-2xl transition-colors duration-700"
                style={{ color: headerTextColor, fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif' }}
                onClick={() => setDrawerOpen(false)}
              >CAREERS</Link>
              <Link
                to="/contact"
                className="uppercase tracking-[2.5px] text-xl md:text-2xl transition-colors duration-700"
                style={{ color: headerTextColor, fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif' }}
                onClick={() => setDrawerOpen(false)}
              >CONTACT US</Link>
            </nav>
            <style>{`
              @keyframes fade-slide-down {
                0% { opacity: 0; transform: translateY(-40px); }
                100% { opacity: 1; transform: translateY(0); }
              }
              .animate-fade-slide-down {
                animation: fade-slide-down 0.5s cubic-bezier(0.4,0,0.2,1);
              }
            `}</style>
          </div>
        )}
      </nav>
    </header>
  );
};
