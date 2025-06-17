import React, { useState, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

interface MetricData {
  efficiency: string;
  customers: string;
  projects: string;
  revenue: string;
}

export const Metrics: React.FC = () => {
  const { setTheme } = useTheme();
  const sectionRef = useRef<HTMLElement>(null);
  const [activeOption, setActiveOption] = useState<'lorem' | 'ipsum' | 'dolor sit'>('lorem');

  // Metric data for different options
  const metricData: Record<string, MetricData> = {
    lorem: {
      efficiency: '98%',
      customers: '20K+',
      projects: '120+',
      revenue: '500M'
    },
    ipsum: {
      efficiency: '95%',
      customers: '15K+',
      projects: '90+',
      revenue: '400M'
    },
    'dolor sit': {
      efficiency: '92%',
      customers: '10K+',
      projects: '80+',
      revenue: '300M'
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="w-full flex justify-center mt-12 sm:mt-16 md:mt-20"
    >
      <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 md:px-8">
        <div 
          className="bg-black rounded-[20px] sm:rounded-[25px] md:rounded-[32.18px] text-white flex flex-col md:flex-row items-stretch relative min-h-[500px] md:min-h-[600px] lg:min-h-[600px]"
        >
          {/* Left side nav (desktop) */}
          <div className="hidden md:flex flex-col justify-center items-center min-w-[140px] px-4 py-8 gap-6 border-r border-[#222]">
            <div className="flex flex-col gap-4 text-[#DDB9A2] text-base lg:text-lg tracking-wider w-full">
              <button 
                onClick={() => setActiveOption('lorem')}
                className={`text-left hover:text-white transition-colors ${activeOption === 'lorem' ? 'text-white' : ''}`}
              >
                LOREM
              </button>
              <button 
                onClick={() => setActiveOption('ipsum')}
                className={`text-left hover:text-white transition-colors ${activeOption === 'ipsum' ? 'text-white' : ''}`}
              >
                IPSUM
              </button>
              <button 
                onClick={() => setActiveOption('dolor sit')}
                className={`text-left hover:text-white transition-colors ${activeOption === 'dolor sit' ? 'text-white' : ''}`}
              >
                DOLOR SIT
              </button>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="flex-1 flex flex-col justify-center items-center py-8 px-2 sm:px-8">
            <div className="grid grid-cols-2 grid-rows-2 gap-x-6 gap-y-8 w-full max-w-3xl">
              {/* Top Left */}
              <div className="flex flex-col items-center justify-center">
                <div className="text-[2rem] sm:text-[2.5rem] md:text-[3.5rem] font-light mb-1 sm:mb-2">{metricData[activeOption].efficiency}</div>
                <div className="text-[#DDB9A2] text-xs sm:text-sm md:text-base tracking-wider text-center">Customer Efficiency</div>
              </div>
              {/* Top Right */}
              <div className="flex flex-col items-center justify-center">
                <div className="text-[2rem] sm:text-[2.5rem] md:text-[3.5rem] font-light mb-1 sm:mb-2">{metricData[activeOption].customers}</div>
                <div className="text-[#DDB9A2] text-xs sm:text-sm md:text-base tracking-wider text-center">Total Customers</div>
              </div>
              {/* Bottom Left */}
              <div className="flex flex-col items-center justify-center">
                <div className="text-[2rem] sm:text-[2.5rem] md:text-[3.5rem] font-light mb-1 sm:mb-2">{metricData[activeOption].projects}</div>
                <div className="text-[#DDB9A2] text-xs sm:text-sm md:text-base tracking-wider text-center">Projects Completed</div>
              </div>
              {/* Bottom Right */}
              <div className="flex flex-col items-center justify-center">
                <div className="text-[2rem] sm:text-[2.5rem] md:text-[3.5rem] font-light mb-1 sm:mb-2">{metricData[activeOption].revenue}</div>
                <div className="text-[#DDB9A2] text-xs sm:text-sm md:text-base tracking-wider text-center">Revenue Generated</div>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex justify-center items-center gap-4 py-4 border-t border-[#222]">
            <button 
              onClick={() => setActiveOption('lorem')}
              className={`hover:text-white transition-colors text-[#DDB9A2] text-sm sm:text-base ${activeOption === 'lorem' ? 'text-white' : ''}`}
            >
              LOREM
            </button>
            <button 
              onClick={() => setActiveOption('ipsum')}
              className={`hover:text-white transition-colors text-[#DDB9A2] text-sm sm:text-base ${activeOption === 'ipsum' ? 'text-white' : ''}`}
            >
              IPSUM
            </button>
            <button 
              onClick={() => setActiveOption('dolor sit')}
              className={`hover:text-white transition-colors text-[#DDB9A2] text-sm sm:text-base ${activeOption === 'dolor sit' ? 'text-white' : ''}`}
            >
              DOLOR SIT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
