import React from 'react';

const projects = [
  {
    title: 'Solar Streetlighting in Alwar.',
    desc: [
      'Thought the street lights are crucial parts of society and lifestyle, it is necessary to keep in mind that solar lights are too useful. keep in mind that solar lights are too useful.',
      'Thought the street lights are crucial parts of society and lifestyle, it is necessary to keep in mind that solar lights are too useful. keep in mind that solar lights are too useful.'
    ],
    img: '/images/GreenProject1.jpg'
  },
  {
    title: 'LED Retrofit in Gurgaon.',
    desc: [
      'Thought the street lights are crucial parts of society and lifestyle, it is necessary to keep in mind that solar lights are too useful.',
      'Thought the street lights are crucial parts of society and lifestyle, it is necessary to keep in mind that solar lights are too useful.',
      'Thought the street lights are crucial parts of society and lifestyle, it is necessary to keep in mind that solar lights are too useful.'
    ],
    img: '/images/GreenProject2.jpg'
  },
  {
    title: 'Smart City Project in Jaipur.',
    desc: [
      'Implementation of smart lighting solutions for enhanced urban infrastructure and energy efficiency.',
      'Integration of IoT-based control systems for optimal performance and monitoring capabilities.'
    ],
    img: '/images/GreenProject3.jpg'
  }
];

export const GreenProjects = () => (
  <section className="w-full bg-[#E7DED7] py-16 px-8 md:px-16 flex flex-col items-center">
    <h3 
      className="text-[#06153A] text-xs tracking-[0.2em] font-normal text-center mb-16" 
      style={{ fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif', letterSpacing: '0.2em' }}
    >
      GREEN PROJECTS
    </h3>
    <div className="flex flex-col gap-24 w-full max-w-[1440px]">
      {projects.map((project, idx) => (
        <div 
          key={idx} 
          className="flex flex-col md:flex-row items-center gap-12 md:gap-16"
        >
          <div className="w-full md:w-[657px] flex-shrink-0">
            <div 
              className="w-full md:w-[657px] h-[666px] rounded-[21px] overflow-hidden"
              style={{ border: '1px solid #06153A' }}
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full md:flex-1 flex flex-col justify-center">
            <div 
              className="w-full md:w-[602px] h-[136px] mb-[45px]"
            >
              <h4 
                className="text-[#06153A] text-[46px] leading-[63px] font-semibold"
                style={{ 
                  fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                  letterSpacing: '0.02em',
                  fontWeight: 600
                }}
              >
                {project.title}
              </h4>
            </div>
            <div className="mt-[60px]">
              {project.desc.map((p, i) => (
                <div 
                  key={i} 
                  className="w-full md:w-[638px] min-h-[91px] flex items-center mb-[45px] last:mb-0"
                >
                  <p 
                    className="text-[#676767] text-[19px]"
                    style={{ 
                      fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                      fontWeight: 400,
                      lineHeight: '28px',
                      letterSpacing: '0.04em'
                    }}
                  >
                    {p}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
); 