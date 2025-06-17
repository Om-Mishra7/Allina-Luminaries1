import React from 'react';
import { ChevronRight } from 'lucide-react';
import { ProjectStats } from './ProjectStats';
import { OngoingProjects } from './OngoingProjects';
import { CompletedProjects } from './CompletedProjects';

export const ProjectsContent = () => {
  return (
    <div className="relative w-[1440px] h-[2572px] bg-black mx-auto">
      <div
        style={{
          position: 'absolute',
          width: 922,
          height: 87,
          top: 45,
          left: 259,
          fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
          fontWeight: 400,
          fontSize: 15,
          lineHeight: '21.72px',
          letterSpacing: '7%',
          textAlign: 'center',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        At ALLINA, our projects reflect our commitment to innovation, sustainability, and excellence. With a proven track record in delivering high-quality streetlighting solutions, we have successfully transformed urban and rural landscapes across Haryana, Rajasthan, and beyond. This section showcases our expertise through ongoing and completed projects, providing insights into the scope, progress, and impact of our work.
      </div>
      <div className="absolute w-[1170px] h-[2315px] left-[135px] border border-[#323232]" style={{ top: 209 }}>
        {/* Top line */}
        <div className="absolute w-[1170px] h-[1px] top-[280px] left-[-1px] bg-[#323232]" />
        <div className="absolute w-[1170px] h-[2033px] top-[282px] left-0">
          {/* Main container */}
          <div className="absolute w-[1170px] h-[2033px] top-0 left-0">
            {/* Vertical line */}
            <div className="absolute w-[1px] h-[2033px] top-0 left-[342px] bg-[#323232]" />
            {/* Independent Components */}
            <OngoingProjects />
            <CompletedProjects />
          </div>
        </div>
        {/* Project Stats */}
        <ProjectStats />
      </div>
      {/* Streetlights button */}
      <div className="absolute flex w-[207px] h-[51px] items-center justify-center gap-[46px] p-[10px] left-[1098px] rounded-[1px] border border-[#323232]" style={{ top: 150 }}>
        <div 
          className="text-white text-[15px] text-center whitespace-nowrap"
          style={{ 
            fontFamily: '"Myriad Pro-SemiExtended", Helvetica',
            letterSpacing: '1.05px',
            lineHeight: '21.7px'
          }}
        >
          Streetlights
        </div>
        <ChevronRight className="w-[23px] h-[23px] text-[#e3e3e3]" />
      </div>
    </div>
  );
};
