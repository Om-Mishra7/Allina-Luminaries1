import React from 'react';
import { useNavigate } from 'react-router-dom';

const SustainabilityHero = () => {
  const navigate = useNavigate();

  const handleAboutUs = () => {
    navigate('/about');
  };

  const handleExplore = () => {
    const commitmentSection = document.getElementById('commitment-section');
    if (commitmentSection) {
      commitmentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full relative z-10" style={{ height: '86.25vh' }}>
      {/* Main Heading */}
      <h1 className="absolute z-30" 
          style={{
            width: '1163px',
            height: '264px',
            top: '90px',
            left: '50%',
            transform: 'translateX(-50%)',
            fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
            fontWeight: 10,
            fontSize: '88px',
            lineHeight: '132px',
            letterSpacing: '0.05em',
            textAlign: 'center',
            color: '#DDB9A2'
          }}>
        Empowering a Sustainable<br />
        Future with Allina
      </h1>
      
      {/* Description */}
      <p className="absolute z-30" 
         style={{
           width: '800px',
           height: '60px',
           top: '370px',
           left: '50%',
           transform: 'translateX(-50%)',
           fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
           fontWeight: 400,
           fontSize: '20px',
           lineHeight: '30px',
           letterSpacing: '1%',
           textAlign: 'center',
           color: 'white'
         }}>
        At ALLINA, we are committed to innovative solutions that prioritize sustainability and energy efficiency. Join us in creating a greener future for our communities and the planet.
      </p>
      
      {/* Buttons */}
      <div className="absolute z-30 flex flex-row gap-8 justify-center items-center" 
           style={{
             top: '500px',
             left: '50%',
             transform: 'translateX(-50%)'
           }}>
        <button 
          onClick={handleExplore}
          className="px-8 py-3 rounded-full bg-[#e3c6b2] text-[#0a2240] font-semibold text-lg transition hover:bg-[#ddb9a2]" 
          style={{fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif'}}
        >
          Explore
        </button>
        <button 
          onClick={handleAboutUs}
          className="px-8 py-3 rounded-full border border-[#e3c6b2] text-[#e3c6b2] font-semibold text-lg transition hover:bg-[#e3c6b2] hover:text-[#0a2240]" 
          style={{fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif'}}
        >
          About Us
        </button>
      </div>
      
      {/* SVG Illustration */}
      <img
        src="/images/Sustainability_hero.svg"
        alt="Sustainability Hero"
        className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[790px] max-w-full z-0 opacity-90 pointer-events-none select-none"
      />
    </section>
  );
};

export default SustainabilityHero; 