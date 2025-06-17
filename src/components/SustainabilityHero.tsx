import React from 'react';

const SustainabilityHero = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center pt-24 pb-16 relative z-10 min-h-[600px]">
      <h1 className="text-[48px] md:text-[64px] lg:text-[72px] font-normal text-[#e3c6b2] text-center leading-tight mb-8" style={{fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif'}}>
        Empowering a Sustainable<br />
        Future with Allina
      </h1>
      <div className="w-full flex flex-col items-center justify-center relative z-20">
        <p className="max-w-[800px] mx-auto text-center text-white text-[16px] md:text-[18px] font-normal mb-10" style={{fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif'}}>
          At ALLINA, we are committed to innovative solutions that prioritize sustainability and energy efficiency. Join us in creating a greener future for our communities and the planet.
        </p>
        <div className="flex flex-row gap-8 justify-center items-center mb-2">
          <button className="px-8 py-3 rounded-full bg-[#e3c6b2] text-[#0a2240] font-semibold text-lg transition hover:bg-[#ddb9a2]" style={{fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif'}}>Explore</button>
          <button className="px-8 py-3 rounded-full border border-[#e3c6b2] text-[#e3c6b2] font-semibold text-lg transition hover:bg-[#e3c6b2] hover:text-[#0a2240]" style={{fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif'}}>About Us</button>
        </div>
      </div>
      {/* SVG Illustration */}
      <img
        src="/images/Sustainability_hero.svg"
        alt="Sustainability Hero"
        className="absolute left-1/2 top-2/2 -translate-x-1/2 -translate-y-1/4 w-[700px] max-w-full z-0 opacity-90 pointer-events-none select-none"
        style={{maxHeight: 400}}
        
      />
    </section>
  );
};

export default SustainabilityHero; 