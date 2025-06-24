import React from 'react';

export const ProjectsHero: React.FC = () => {
  return (
    <section 
      className="w-full bg-[#06153A] relative overflow-hidden" 
      style={{ 
        height: 'calc(100vh - 70px)',
        minHeight: 'calc(100vh - 70px)'
      }}
    >
      <div className="w-full relative h-full max-w-[1440px] mx-auto">
        {/* Main Content */}
        <div className="relative z-10">
          {/* OUR PROJECTS Text */}
          <div className="absolute px-4 sm:px-6 md:px-8 lg:px-0"
               style={{
                 width: '100%',
                 maxWidth: '600px',
                 height: 'auto',
                 top: '40px',
                 left: '0px'
                 
               }}>
            <div className="relative">
              <h1 className="text-white text-[60px] sm:text-[80px] md:text-[100px] lg:text-[120px] font-normal leading-[1.1] sm:leading-[1.2] md:leading-[1.3] lg:leading-[130px] tracking-[5%]"
                  style={{ 
                    fontFamily: '"Myriad Pro", "Myriad Pro-SemiExtended", Helvetica, Arial, sans-serif',
                    fontWeight: 200
                  }}>
                OUR
              </h1>
              {/* Decorative Line */}
              <div className="absolute top-[30px] sm:top-[40px] md:top-[50px] lg:top-[60px] right-0 w-[140px] sm:w-[180px] md:w-[220px] lg:w-[280px] h-[2px] sm:h-[2px] md:h-[3px] bg-white"></div>
            </div>
            <h1 className="text-white text-[60px] sm:text-[80px] md:text-[100px] lg:text-[120px] font-normal leading-[1.1] sm:leading-[1.2] md:leading-[1.3] lg:leading-[130px] tracking-[5%] -mt-2 sm:-mt-3 md:-mt-4 lg:-mt-5"
                style={{ 
                  fontFamily: '"Myriad Pro", "Myriad Pro-SemiExtended", Helvetica, Arial, sans-serif',
                  fontWeight: 200
                }}>
              PROJECTS
            </h1>
          </div>
        </div>

        {/* SVG Image - Desktop */}
        <div className="hidden md:block absolute z-0"
             style={{ 
               width: '100%',
               maxWidth: '1118px',
               height: 'auto',
               aspectRatio: '1118/530',
               top: '70%',
               right: '-40px',
               transform: 'translateY(-50%)'
             }}>
          <img 
            src="/images/Project.svg" 
            alt="City Skyline" 
            className="w-full h-full object-contain opacity-90"
            style={{ filter: 'brightness(1.1)' }}
          />
        </div>

        {/* SVG Image - Tablet */}
        <div className="hidden sm:block md:hidden absolute z-0"
             style={{ 
               width: '100%',
               maxWidth: '800px',
               height: 'auto',
               aspectRatio: '1118/530',
               top: '50%',
               right: '-20px',
               transform: 'translateY(-50%)'
             }}>
          <img 
            src="/images/Project.svg" 
            alt="City Skyline" 
            className="w-full h-full object-contain opacity-90"
            style={{ filter: 'brightness(1.1)' }}
          />
        </div>

        {/* SVG Image - Mobile */}
        <div className="block sm:hidden absolute z-0 bottom-0 right-[-10px] w-full h-[200px]">
          <img 
            src="/images/Project.svg" 
            alt="City Skyline" 
            className="w-full h-full object-cover object-bottom opacity-90"
            style={{ filter: 'brightness(1.1)' }}
          />
        </div>

        {/* Bottom overlay bar */}
        <div className="absolute bottom-0 left-0 w-full h-[13px] bg-[#06153A] z-5"></div>

        {/* Gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#06153A] via-transparent to-[#06153A]/30 pointer-events-none z-1"></div>
      </div>
    </section>
  );
}; 
