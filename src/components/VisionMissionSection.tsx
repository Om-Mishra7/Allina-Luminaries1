import React, { useState } from 'react';

type TabType = 'vision' | 'mission';

interface ContentData {
  quote: string;
  description: string;
  emphasizedWords: string[];
}

export const VisionMissionSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('vision');

  const contentData: Record<TabType, ContentData> = {
    vision: {
      quote: "TO ILLUMINATE THE FUTURE WITH SUSTAINABLE, SMART, AND RELIABLE LIGHTING SOLUTIONS THAT ENHANCE COMMUNITIES AND PROTECT OUR PLANET",
      description: "We envision a world where every street, every community, and every corner is illuminated by intelligent, energy-efficient lighting systems that not only provide safety and security but also contribute to environmental sustainability and urban development.",
      emphasizedWords: ["ILLUMINATE", "FUTURE", "SUSTAINABLE", "SMART", "RELIABLE", "ENHANCE", "COMMUNITIES", "PROTECT", "PLANET"]
    },
    mission: {
      quote: "TO DELIVER CUTTING-EDGE STREET LIGHTING INFRASTRUCTURE THROUGH INNOVATIVE TECHNOLOGY, EXCEPTIONAL SERVICE, AND UNWAVERING COMMITMENT TO EXCELLENCE",
      description: "Our mission is to transform urban landscapes through state-of-the-art lighting solutions, providing comprehensive EPC services, IoT integration, and sustainable energy management that creates safer, smarter, and more connected communities worldwide.",
      emphasizedWords: ["DELIVER", "CUTTING-EDGE", "INFRASTRUCTURE", "INNOVATIVE", "TECHNOLOGY", "EXCEPTIONAL", "SERVICE", "COMMITMENT", "EXCELLENCE"]
    }
  };

  const renderQuoteWithEmphasis = (quote: string, emphasizedWords: string[]) => {
    const words = quote.split(' ');
    return words.map((word, index) => {
      const cleanWord = word.replace(/[.,!?;]/g, '');
      const isEmphasized = emphasizedWords.includes(cleanWord);
      const punctuation = word.match(/[.,!?;]/g)?.[0] || '';
      
      return (
        <span key={index}>
          <span className={isEmphasized ? 'text-white font-semibold' : 'text-gray-400'}>
            {cleanWord}
          </span>
          {punctuation && <span className="text-gray-400">{punctuation}</span>}
          {index < words.length - 1 && ' '}
        </span>
      );
    });
  };

  const currentContent = contentData[activeTab];

  return (
    <section className="w-full bg-[#E7DED7] pt-16 sm:pt-20 md:pt-24 mb-8">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-[#06153A] text-lg sm:text-xl md:text-[25px] font-normal tracking-[2px] sm:tracking-[3px] md:tracking-[4px] text-center"
              style={{ fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif', fontWeight: 400 }}>
            OUR PURPOSE
          </h2>
        </div>

        {/* Main Container */}
        <div 
          className="relative w-full bg-black rounded-[30px] p-8 sm:p-12 lg:p-16 xl:p-20 flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16 xl:gap-20 min-h-[500px] lg:min-h-[600px] overflow-hidden"
          style={{
            backgroundImage: `url('/images/image1.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60 rounded-[30px]"></div>

          {/* Left Sidebar - Navigation */}
          <div className="relative z-10 flex flex-row lg:flex-col gap-6 lg:gap-8">
            {/* Animated Vertical Line */}
            <div className="hidden lg:block absolute left-0 w-[1px] bg-white h-8 transition-transform duration-500 ease-out"
                 style={{
                   transform: activeTab === 'vision' ? 'translateY(0px)' : 'translateY(56px)'
                 }}>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={() => setActiveTab('vision')}
              className={`text-left pl-4 lg:pl-8 transition-all duration-300 ${
                activeTab === 'vision' ? 'text-white' : 'text-[#C1A278]'
              }`}
              style={{
                fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                fontSize: 'clamp(16px, 2.5vw, 20px)',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase'
              }}
            >
              VISION
            </button>

            <button
              onClick={() => setActiveTab('mission')}
              className={`text-left pl-4 lg:pl-8 transition-all duration-300 ${
                activeTab === 'mission' ? 'text-white' : 'text-[#C1A278]'
              }`}
              style={{
                fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                fontSize: 'clamp(16px, 2.5vw, 20px)',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase'
              }}
            >
              MISSION
            </button>
          </div>

          {/* Main Content */}
          <div className="relative z-10 flex-1 w-full">
            <div className={`transition-all duration-500 ${
              activeTab === 'vision' 
                ? 'opacity-100 transform translate-y-0' 
                : activeTab === 'mission' 
                  ? 'opacity-100 transform translate-y-0' 
                  : 'opacity-0 transform translate-y-4'
            }`}>
              {/* Large Quotation Mark */}
              <div className="text-5xl sm:text-6xl lg:text-7xl text-white font-serif mb-4 lg:mb-6 text-center">
                "
              </div>

              {/* Main Quote */}
              <div className="mb-10 lg:mb-12">
                <p 
                  className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl leading-relaxed lg:leading-relaxed text-center tracking-wide"
                  style={{
                    fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                    lineHeight: '1.4'
                  }}
                >
                  {renderQuoteWithEmphasis(currentContent.quote, currentContent.emphasizedWords)}
                </p>
              </div>

              {/* Description */}
              <div className="max-w-4xl mx-auto">
                <p 
                  className="text-gray-300 text-base sm:text-lg leading-relaxed text-center"
                  style={{
                    fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                    lineHeight: '1.6',
                    letterSpacing: '0.05em'
                  }}
                >
                  {currentContent.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 