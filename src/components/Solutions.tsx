import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Solutions = () => {
  const solutions = [
    {
      id: "01",
      title: "STREETLIGHT SUPPLY",
      content: {
        description: "Connecting streetlights to smartphones and apps for advanced features such as dimming, scheduling, and real-time updates",
        features: [
          {
            title: "CCMS",
            description: "Energy-efficient and long-lasting lighting solutions KFS with smart control capabilities and remote monitoring features for optimal performance."
          },
          {
            title: "IOT INTEGRATION",
            description: "Seamless integration with IoT platforms enabling advanced features like real-time monitoring, data analytics, and predictive maintenance."
          },
          {
            title: "AUTOMATION",
            description: "Smart automation systems for efficient operation, including scheduled dimming, fault detection, and energy consumption optimization."
          }
        ]
      }
    },
    {
      id: "02",
      title: "EPC FOR STREETLIGHTS",
      content: {
        description: "Comprehensive EPC services for streetlight infrastructure projects",
        features: [
          {
            title: "PROJECT PLANNING",
            description: "Detailed project planning and design services with focus on efficiency and sustainability."
          },
          {
            title: "IMPLEMENTATION",
            description: "Expert implementation of lighting solutions with quality assurance and timely delivery."
          },
          {
            title: "COMMISSIONING",
            description: "Professional commissioning services ensuring optimal performance and reliability."
          }
        ]
      }
    },
    {
      id: "03",
      title: "OPERATION & MAINTENANCE (O&M)",
      content: {
        description: "Professional O&M services for sustainable lighting infrastructure",
        features: [
          {
            title: "PREVENTIVE MAINTENANCE",
            description: "Regular maintenance schedules to ensure optimal performance and prevent failures."
          },
          {
            title: "EMERGENCY RESPONSE",
            description: "24/7 emergency response team for quick resolution of critical issues."
          },
          {
            title: "PERFORMANCE MONITORING",
            description: "Continuous monitoring and reporting of system performance metrics."
          }
        ]
      }
    },
    {
      id: "04",
      title: "SMART LIGHTING SOLUTIONS",
      content: {
        description: "Advanced smart lighting solutions for modern urban infrastructure",
        features: [
          {
            title: "SMART CONTROLS",
            description: "Intelligent control systems with advanced features for optimal lighting management."
          },
          {
            title: "ENERGY MANAGEMENT",
            description: "Smart energy management solutions for improved efficiency and cost savings."
          },
          {
            title: "DATA ANALYTICS",
            description: "Advanced analytics for performance optimization and predictive maintenance."
          }
        ]
      }
    },
    {
      id: "05",
      title: "END-TO-END SOLUTIONS",
      content: {
        description: "Complete end-to-end lighting infrastructure solutions",
        features: [
          {
            title: "CONSULTING",
            description: "Expert consulting services for optimal solution design and planning."
          },
          {
            title: "IMPLEMENTATION",
            description: "Professional implementation services with quality assurance."
          },
          {
            title: "SUPPORT",
            description: "Comprehensive post-implementation support and maintenance services."
          }
        ]
      }
    }
  ];

  return (
    <>
      {/* STREETLIGHTING SOLUTIONS Section Title */}
      <div className="flex justify-center items-center py-8 sm:py-10 md:py-12 px-4">
        <h2 className="text-[#06153A] text-lg sm:text-xl md:text-[25px] font-normal tracking-[2px] sm:tracking-[3px] md:tracking-[4px] text-center"
            style={{ fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif', fontWeight: 400 }}>
          STREETLIGHTING SOLUTIONS
        </h2>
      </div>

      {/* STREETLIGHTING SOLUTIONS Content */}
      <div className="w-full bg-[#E7DED7] pt-0 pb-0">
        <div className="container mx-auto px-4 flex flex-col items-center">
        
        <div style={{ width: '1360px', maxWidth: '100%' }}>
          <Accordion type="single" collapsible className="w-full">
            {solutions.map((solution, index) => (
              <AccordionItem
                key={solution.id}
                value={solution.id}
                className="bg-transparent"
                style={{ marginBottom: index < solutions.length - 1 ? '24px' : '0' }}
              >
                <AccordionTrigger 
                  className="flex items-center hover:no-underline py-6 px-0"
                  style={{
                    width: '100%',
                    height: '47px',
                    padding: '0'
                  }}
                >
                  <div className="flex items-center gap-4 w-full">
                    <span 
                      style={{
                        fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                        fontWeight: 600,
                        fontSize: '39px',
                        lineHeight: '100%',
                        letterSpacing: '0.2em',
                        color: '#06153A'
                      }}
                    >
                      {solution.id}
                    </span>
                    <span 
                      style={{
                        fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                        fontWeight: 400,
                        fontSize: '30px',
                        lineHeight: '100%',
                        letterSpacing: '0.16em',
                        color: '#06153A'
                      }}
                    >
                      {solution.title}
                    </span>
                  </div>
                </AccordionTrigger>
                
                {/* Decorative line with gaps */}
                <div style={{ margin: '25px 0' }}>
                  <div 
                    style={{
                      width: '100%',
                      height: '1px',
                      backgroundColor: '#06153A'
                    }}
                  />
                </div>

                <AccordionContent className="px-0 pt-4 pb-8">
                  <p className="text-[#06153A] mb-8 text-lg">
                    {solution.content.description}
                  </p>
                  {solution.content.features.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                      {solution.content.features.map((feature, index) => (
                        <div key={index} className="space-y-4">
                          <h3 className="text-[#06153A] font-medium text-lg">
                            {feature.title}
                          </h3>
                          <p className="text-[#06153A] text-base">
                            {feature.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="w-full h-[300px] relative mt-8 overflow-hidden rounded-lg">
                    <img
                      src="/images/image2.png"
                      alt={`${solution.title} illustration`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
    </>
  );
};

export default Solutions; 