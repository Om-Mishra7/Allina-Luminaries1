import React from 'react';

export const AboutHero = () => {
  return (
    <div 
      className="relative w-full overflow-hidden"
      style={{
        height: '86.25vh',
        backgroundColor: '#06153A'
      }}
    >
      {/* Main heading group with line */}
      <div 
        className="about-hero-heading-group"
        style={{
          position: 'absolute',
          width: '50%',
          height: '50%',
          top: '7.28%',
          left: '3.61%'
        }}
      >
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          {/* WHO WE ARE heading */}
          <div
            className="about-hero-heading"
            style={{
              position: 'absolute',
              width: '95%',
              top: '0',
              left: '0',
              fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
              fontWeight: 400,
              color: '#ffffff',
              fontSize: '10vw',
              letterSpacing: '0.8vw',
              lineHeight: '9vw'
            }}
          >
            WHO WE ARE
          </div>
          
          {/* Decorative line */}
          <div
            style={{
              position: 'absolute',
              width: '40%',
              height: '1px',
              top: '20.19%',
              left: '60%',
              backgroundColor: '#ffffff'
            }}
          />
        </div>
      </div>

      {/* Bottom right description */}
      <p
        className="about-hero-text"
        style={{
          position: 'absolute',
          width: '20.42%',
          top: '78.28%',
          left: '76.81%',
          fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
          fontWeight: 400,
          color: '#ffffff',
          fontSize: '1.11vw',
          textAlign: 'justify',
          letterSpacing: '0',
          lineHeight: '1.875vw'
        }}
      >
        Over the years, ALLINA has evolved into a forward-thinking organization with a broader vision to address the growing demands of modern infrastructure.
      </p>

      {/* First image - left middle */}
      <img
        className="about-hero-image"
        src="/images/image1.jpg"
        alt="ALLINA infrastructure"
        style={{
          position: 'absolute',
          width: '18%',
          height: '78%',
          top: '20.79%',
          left: '57%',
          objectFit: 'cover',
          filter: 'grayscale(100%)'
        }}
      />

      {/* Second image - top right */}
      <img
        className="about-hero-image"
        src="/images/image2.png"
        alt="ALLINA team"
        style={{
          position: 'absolute',
          width: '20%',
          height: '69%',
          top: '7.28%',
          left: '77%',
          objectFit: 'cover',
          filter: 'grayscale(100%)'
        }}
      />

      {/* Bottom left description */}
      <p
        className="about-hero-text"
        style={{
          position: 'absolute',
          width: '24.65%',
          top: '67.55%',
          left: '3.61%',
          fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
          fontWeight: 400,
          color: '#ffffff',
          fontSize: '1.11vw',
          textAlign: 'justify',
          letterSpacing: '0',
          lineHeight: '1.875vw'
        }}
      >
        ALLINA, formerly known as Allina Luminaries, began its journey as a dedicated provider of high-quality streetlighting solutions. With a strong foundation in engineering, procurement, and construction (EPC) services, the company has established itself as a trusted name in the streetlighting industry
      </p>

      {/* Third image - bottom center */}
      <img
        className="about-hero-image"
        src="/images/image3.jpg"
        alt="ALLINA solutions"
        style={{
          position: 'absolute',
          width: '18%',
          height: '42%',
          top: '56.56%',
          left: '37%',
          objectFit: 'cover',
          filter: 'grayscale(100%)'
        }}
      />

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 1024px) {
          .about-hero-heading {
            font-size: 8vw !important;
            line-height: 7vw !important;
          }
          
          .about-hero-text {
            font-size: 1.5vw !important;
            line-height: 2.5vw !important;
          }
          
          .about-hero-image {
            width: 14% !important;
          }
        }

        @media (max-width: 768px) {
          .about-hero-heading-group {
            width: 80% !important;
            height: auto !important;
            top: 5% !important;
          }
          
          .about-hero-heading {
            font-size: 10vw !important;
            line-height: 8.5vw !important;
          }
          
          .about-hero-text {
            width: 80% !important;
            font-size: 2vw !important;
            line-height: 3vw !important;
          }
          
          .about-hero-image {
            width: 30% !important;
            height: auto !important;
          }
        }
      `}</style>
    </div>
  );
};
