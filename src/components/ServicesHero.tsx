import React from 'react';

const ServicesHero = () => {
  return (
    <div 
      className="relative w-full overflow-hidden flex items-center justify-center" 
      style={{ background: '#05343E', height: '86.25vh' }}
    >
      {/* Text Container */}
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        {/* "WHAT WE" text */}
        <div 
          style={{
            width: '703px',
            height: '161px',
            position: 'absolute',
            top: '5%',
            fontFamily: 'Myriad Pro, sans-serif',
            fontSize: '90px',
            fontWeight: '400',
            lineHeight: '161px',
            letterSpacing: '0.1em',
            textAlign: 'center',
            color: 'white',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 10
          }}
        >
          WHAT WE
        </div>

        {/* "OFFER" text with image mask */}
        <div 
          style={{
            width: '1187px',
            height: '466px',
            position: 'absolute',
            top: '23%',
            left: '50%',
            transform: 'translateX(-50%)',
            fontFamily: 'Anton, sans-serif',
            fontSize: '450px',
            fontWeight: '400',
            lineHeight: '500px',
            letterSpacing: '5%',
            textAlign: 'center',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            backgroundImage: 'url(/images/image1.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: 10
          }}
        >
          OFFER
        </div>
      </div>

      {/* Optional: Add a subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 z-0"></div>
    </div>
  );
};

export default ServicesHero; 