import React from 'react';

export const AboutHero = () => {
  return (
    <div className="relative w-full bg-[#06153A] mt-0">
      <div className="max-w-[1440px] mx-auto relative min-h-[600px] sm:min-h-[700px] md:min-h-[800px] overflow-hidden px-4 sm:px-6 md:px-8">
        {/* Main heading "WHO WE ARE" */}
        <h1 
          className="absolute text-white font-normal text-right text-[80px] sm:text-[120px] md:text-[170px] leading-[70px] sm:leading-[100px] md:leading-[150px] tracking-[0.1em] w-full sm:w-[500px] md:w-[703px] h-auto sm:h-[250px] md:h-[322px] top-1/2 sm:top-[411px] left-1/2 sm:left-[calc(50%-650px)] -translate-y-1/2 sm:translate-y-0"
        >
          WHO<br />WE ARE
        </h1>

        {/* First description text */}
        <p 
          className="absolute text-justify text-white text-xs sm:text-sm md:text-base leading-6 sm:leading-7 w-[280px] sm:w-[320px] md:w-[355px] h-auto top-[193px] left-4 sm:left-6 md:left-[calc(50%-661px)]"
        >
          ALLINA, formerly known as Allina Luminaries, began its journey as a dedicated provider of high-quality streetlighting solutions. With a strong foundation in engineering, procurement, and construction (EPC) services, the company has established itself as a trusted name in the streetlighting industry.
        </p>

        {/* Horizontal line */}
        <div 
          className="absolute bg-white w-[120px] sm:w-[150px] md:w-[190px] h-[1px] top-[490px] left-4 sm:left-6 md:left-[calc(50%-661px)]"
        />

        {/* Images section */}
        <div className="absolute top-[55px] left-1/2 -translate-x-1/2 md:left-[calc(50%-241px)] md:translate-x-0">
          {/* First image */}
          <div 
            className="absolute w-[200px] h-[186px] sm:w-[250px] sm:h-[232px] md:w-[294px] md:h-[273px] bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://c.animaapp.com/zheglGTa/img/unsplash-qsxwhsqyrak.png)'
            }}
          />

          {/* Second image */}
          <div 
            className="absolute w-[200px] h-[440px] sm:w-[250px] sm:h-[550px] md:w-[294px] md:h-[645px] left-[220px] sm:left-[270px] md:left-[319px] bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://c.animaapp.com/zheglGTa/img/image-10@2x.png)'
            }}
          />

          {/* Third image */}
          <div 
            className="absolute w-[205px] h-[367px] sm:w-[255px] sm:h-[458px] md:w-[301px] md:h-[538px] left-[440px] sm:left-[540px] md:left-[638px] bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://c.animaapp.com/zheglGTa/img/unsplash-yxcxhfetdhc.png)'
            }}
          />
        </div>

        {/* Bottom description text */}
        <p 
          className="absolute text-justify text-white text-xs sm:text-sm md:text-base leading-6 sm:leading-7 w-[280px] sm:w-[320px] md:w-[294px] h-auto top-[629px] left-4 sm:left-6 md:left-[calc(50%+404px)]"
        >
          Over the years, ALLINA has evolved into a forward-thinking organization with a broader vision to address the growing demands of modern infrastructure.
        </p>
      </div>
    </div>
  );
};
