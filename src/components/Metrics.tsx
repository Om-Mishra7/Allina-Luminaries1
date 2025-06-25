import React, { useState } from 'react';

type TabType = 'key-figures' | 'climate-commitment';

interface MetricData {
  value: string;
  label: string;
}

export const Metrics: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('key-figures');

  const keyFiguresData: MetricData[] = [
    { value: '1 Mn', label: 'Streetlights Deployed' },
    { value: '20K+', label: 'CCMS Panels Deployed' },
    { value: '98%', label: 'Uptime of Lights' },
    { value: '100%', label: 'On-Time Completion' }
  ];

  const climateCommitmentData: MetricData[] = [
    { value: '45%', label: 'Energy Efficiency' },
    { value: '5 Mn Kg', label: 'Carbon Emissions Reduced' }
  ];

  return (
    <section className="w-full bg-[#E7DED7] py-16 sm:py-20 md:py-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Title */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 
            className="text-[#06153A] text-lg sm:text-xl md:text-[25px] font-normal tracking-[2px] sm:tracking-[3px] md:tracking-[4px] uppercase"
            style={{ fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif', fontWeight: 400 }}
          >
            OUR METRICS
          </h2>
        </div>

        {/* Main Container - Increased Size */}
        <div className="w-full bg-black rounded-[30px] p-12 sm:p-16 lg:p-20 xl:p-24 flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-20 xl:gap-24 min-h-[500px] lg:min-h-[600px]">
          
          {/* Left Side - Navigation Menu */}
          <div className="relative flex flex-row lg:flex-col gap-8 lg:gap-12">
            {/* Animated Vertical Line */}
            <div className="hidden lg:block absolute left-0 w-[1px] bg-white h-6 transition-transform duration-500 ease-out"
                 style={{
                   transform: activeTab === 'key-figures' ? 'translateY(0px)' : 'translateY(68px)'
                 }}>
            </div>
            
            {/* Navigation Buttons */}
            <button
              onClick={() => setActiveTab('key-figures')}
              className={`text-left pl-4 lg:pl-8 transition-all duration-300 ${
                activeTab === 'key-figures' ? 'text-white' : 'text-[#C1A278]'
              }`}
              style={{
                fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                fontSize: 'clamp(16px, 2.5vw, 20px)',
                fontWeight: 400,
                letterSpacing: '0.05em'
              }}
            >
              Key Figures
            </button>
            
            <button
              onClick={() => setActiveTab('climate-commitment')}
              className={`text-left pl-4 lg:pl-8 transition-all duration-300 ${
                activeTab === 'climate-commitment' ? 'text-white' : 'text-[#C1A278]'
              }`}
              style={{
                fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                fontSize: 'clamp(16px, 2.5vw, 20px)',
                fontWeight: 400,
                letterSpacing: '0.05em'
              }}
            >
              Climate<br className="hidden lg:block" /><span className="lg:hidden"> </span>Commitment
            </button>
          </div>

          {/* Right Side - Metrics Content */}
          <div className="flex-1 w-full relative">
            {/* Key Figures Content */}
            <div className={`transition-all duration-500 ${
              activeTab === 'key-figures' 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-4 absolute pointer-events-none'
            }`}>
              <div className="relative">
                {/* Decorative Lines for Key Figures */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Horizontal dividing line */}
                  <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/20"></div>
                  {/* Vertical dividing line */}
                  <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/20"></div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 relative z-10">
                  {keyFiguresData.map((metric, index) => (
                    <div key={index} className="text-center py-8 lg:py-12">
                      <div 
                        className="text-white font-normal mb-4 sm:mb-6"
                        style={{
                          fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                          fontSize: 'clamp(3.5rem, 10vw, 6rem)',
                          lineHeight: '1.1',
                          fontWeight: 300
                        }}
                      >
                        {metric.value}
                      </div>
                      <div 
                        className="text-gray-400"
                        style={{
                          fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                          fontSize: 'clamp(14px, 2.5vw, 18px)',
                          fontWeight: 400,
                          letterSpacing: '0.05em'
                        }}
                      >
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Climate Commitment Content */}
            <div className={`transition-all duration-500 ${
              activeTab === 'climate-commitment' 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-4 absolute pointer-events-none'
            }`}>
              <div className="relative">
                {/* Decorative Lines for Climate Commitment */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Vertical dividing line */}
                  <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/20"></div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-20 xl:gap-24 max-w-5xl mx-auto relative z-10">
                  {climateCommitmentData.map((metric, index) => (
                    <div key={index} className="text-center py-12 lg:py-16">
                      <div 
                        className="text-white font-normal mb-4 sm:mb-6"
                        style={{
                          fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                          fontSize: 'clamp(3.5rem, 10vw, 6rem)',
                          lineHeight: '1.1',
                          fontWeight: 300
                        }}
                      >
                        {metric.value}
                      </div>
                      <div 
                        className="text-gray-400"
                        style={{
                          fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                          fontSize: 'clamp(14px, 2.5vw, 18px)',
                          fontWeight: 400,
                          letterSpacing: '0.05em'
                        }}
                      >
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
