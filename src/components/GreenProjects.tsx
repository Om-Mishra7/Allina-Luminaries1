import React from 'react';

const projects = [
  {
    title: 'Solar Streetlighting in Alwar.',
    desc: [
      'Thought the street lights are crucial parts of society and lifestyle, it is necessary to keep in mind that solar lights are too useful. keep in mind that solar lights are too useful.',
      'Thought the street lights are crucial parts of society and lifestyle, it is necessary to keep in mind that solar lights are too useful. keep in mind that solar lights are too useful.'
    ],
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'LED Retrofit in Gurgaon.',
    desc: [
      'Thought the street lights are crucial parts of society and lifestyle, it is necessary to keep in mind that solar lights are too useful.','Thought the street lights are crucial parts of society and lifestyle, it is necessary to keep in mind that solar lights are too useful.','Thought the street lights are crucial parts of society and lifestyle, it is necessary to keep in mind that solar lights are too useful.'
    ],
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80'
  }
];

export const GreenProjects = () => (
  <section className="w-full bg-[#E7DED7] py-16 px-4 flex flex-col items-center">
    <h3 className="text-[#06153A] text-xs tracking-[0.2em] font-normal text-center mb-12" style={{ fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif', letterSpacing: '0.2em' }}>
      GREEN PROJECTS
    </h3>
    <div className="flex flex-col gap-16 w-full max-w-5xl">
      {projects.map((project, idx) => (
        <div key={idx} className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-[#E7DED7] rounded-[20px] p-0">
          <img
            src={project.img}
            alt={project.title}
            className="w-[320px] h-[320px] object-cover rounded-[20px] mb-6 md:mb-0 md:mr-8"
            style={{ minWidth: 220, maxWidth: 400 }}
          />
          <div className="flex-1 flex flex-col justify-center items-start">
            <h4 className="text-[#06153A] text-3xl md:text-4xl font-semibold mb-4" style={{ fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif' }}>{project.title}</h4>
            {project.desc.map((p, i) => (
              <p key={i} className="text-[#7b7b7b] text-base font-normal mb-4" style={{ fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif' }}>{p}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
); 