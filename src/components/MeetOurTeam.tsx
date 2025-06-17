import React from 'react';

export const MeetOurTeam = () => {
  return (
    <>
      {/* MEET OUR TEAM Section Title */}
      <div className="flex justify-center items-center py-8 sm:py-10 md:py-12 px-4">
        <h2 className="text-[#06153A] text-lg sm:text-xl md:text-[25px] font-normal tracking-[2px] sm:tracking-[3px] md:tracking-[4px] text-center"
            style={{ fontFamily: '"Myriad Pro", Helvetica, Arial, sans-serif' }}>
          MEET OUR TEAM
        </h2>
      </div>

      {/* MEET OUR TEAM Content */}
      <div className="flex flex-col items-center gap-6 sm:gap-8 mb-12 sm:mb-14 md:mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full">
          {/* Team Member 1 */}
          <div className="relative overflow-hidden rounded-[15px] sm:rounded-[18px] md:rounded-[20px] transition-all duration-300 group hover:-translate-y-3">
            <img 
              src="https://c.animaapp.com/zheglGTa/img/image-11@2x.png" 
              alt="Team Member 1"
              className="w-full aspect-square object-cover transition-all duration-300 grayscale group-hover:grayscale-0 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/86 to-transparent h-[120px] sm:h-[135px] md:h-[155px]">
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                <h3 className="text-white text-lg sm:text-xl md:text-2xl font-normal tracking-[2px] sm:tracking-[3px] md:tracking-[4.8px] mb-1 sm:mb-2">
                  TEAM MEMBER
                </h3>
                <p className="text-white text-base sm:text-lg font-normal">
                  Position
                </p>
              </div>
            </div>
          </div>

          {/* Founder & CEO */}
          <div className="relative overflow-hidden rounded-[15px] sm:rounded-[18px] md:rounded-[20px] transition-all duration-300 group hover:-translate-y-3">
            <img 
              src="https://c.animaapp.com/zheglGTa/img/image-12.png" 
              alt="Founder CEO"
              className="w-full aspect-square object-cover transition-all duration-300 grayscale group-hover:grayscale-0 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/86 to-transparent h-[120px] sm:h-[135px] md:h-[155px]">
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                <h3 className="text-white text-lg sm:text-xl md:text-2xl font-normal tracking-[2px] sm:tracking-[3px] md:tracking-[4.8px] mb-1 sm:mb-2">
                  RITIK GUPTA
                </h3>
                <p className="text-white text-base sm:text-lg font-normal">
                  Founder & CEO
                </p>
              </div>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="relative overflow-hidden rounded-[15px] sm:rounded-[18px] md:rounded-[20px] transition-all duration-300 group hover:-translate-y-3 sm:col-span-2 md:col-span-1">
            <img 
              src="https://c.animaapp.com/zheglGTa/img/image-13@2x.png" 
              alt="Team Member 3"
              className="w-full aspect-square object-cover transition-all duration-300 grayscale group-hover:grayscale-0 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/86 to-transparent h-[120px] sm:h-[135px] md:h-[155px]">
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                <h3 className="text-white text-lg sm:text-xl md:text-2xl font-normal tracking-[2px] sm:tracking-[3px] md:tracking-[4.8px] mb-1 sm:mb-2">
                  TEAM MEMBER
                </h3>
                <p className="text-white text-base sm:text-lg font-normal">
                  Position
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
