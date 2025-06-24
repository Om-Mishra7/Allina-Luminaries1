import React, { useState } from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './ui/accordion';

export const SustainabilityIntro = () => (
  <section className="w-full bg-[#E7DED7] py-10 flex justify-center items-center">
    <p
      className="text-[#06153A] text-center mx-auto"
      style={{
        maxWidth: 900,
        fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
        fontWeight: 400,
        fontSize: 18,
        lineHeight: '28px',
        letterSpacing: '0.5%',
        margin: 0
      }}
    >
      At ALLINA, sustainability is at the core of everything we do. We believe in creating solutions that not only meet the needs of today but also preserve resources for future generations. From energy-efficient streetlighting to renewable energy projects, our commitment to green practices drives us to innovate and deliver infrastructure that contributes to a sustainable and brighter future.
    </p>
  </section>
);

export const OurCommitments = () => {
  const commitments = [
    {
      num: '01.',
      title: 'ENERGY EFFICIENCY',
      desc: 'We implement advanced energy-saving technologies to maximize efficiency and minimize waste in every project.'
    },
    {
      num: '02.',
      title: 'RENEWABLE ENERGY',
      desc: 'Our projects integrate solar, wind, and other renewable sources to reduce reliance on fossil fuels.'
    },
    {
      num: '03.',
      title: 'SUSTAINABLE PRACTICES',
      desc: 'We follow green construction and operational practices to ensure long-term environmental stewardship.'
    },
    {
      num: '04.',
      title: 'COMMUNITY IMPACT',
      desc: 'We strive to create positive social and economic impacts in the communities we serve.'
    }
  ];

  const [openItems, setOpenItems] = useState([]);

  const handleAccordionChange = (items) => {
    setOpenItems(items);
  };

  // Calculate dynamic image transform based on expanded content
  const expandedCount = openItems.length;
  // Calculate translateY to center image relative to accordion content
  const baseOffset = expandedCount > 0 ? (expandedCount * 40) + 60 : 0;
  const imageTransform = `translateY(${baseOffset}px)`;

  return (
    <section className="w-full bg-[#00343C] overflow-hidden">
      <div className="max-w-[1440px] mx-auto relative">
        {/* Title */}
        <h2
          className="text-white font-normal absolute"
          style={{
            width: '946px',
            height: '125px',
            top: '36px',
            fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
            fontWeight: 0,
            fontSize: '90px',
            lineHeight: '125px',
            letterSpacing: '5%'
          }}
        >
          OUR COMMITMENT
        </h2>

        {/* Description Text */}
        <p
          className="text-white font-normal absolute"
          style={{
            width: '1367px',
            height: '105px',
            top: '174px',
            fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
            fontWeight: 100,
            fontSize: '20px',
            lineHeight: '35px',
            letterSpacing: '1%'
          }}
        >
          At ALLINA, we are dedicated to sustainable development and energy efficiency. Our mission is to create infrastructure solutions that minimize environmental impact while maximizing energy savings and operational efficiency. By integrating advanced technologies like IoT, solar power, and energy-efficient systems, we aim to reduce carbon emissions and promote eco-friendly practices in every project we undertake.
        </p>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 pb-12 lg:pb-16 pt-[371px]">
          {/* Left side - Accordion Commitments */}
          <div className="flex-1 min-w-0 order-2 md:order-1">
            <Accordion type="multiple" value={openItems} onValueChange={handleAccordionChange}>
              {commitments.map((commitment, idx) => (
                <AccordionItem key={idx} value={idx.toString()} className="border-b border-white/30">
                  <AccordionTrigger className="flex items-center gap-6 py-6">
                    <span className="text-white text-[28px] font-normal min-w-[80px]"
                      style={{ fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif', fontWeight: 400 }}>
                      {commitment.num}
                    </span>
                    <span
                      className="text-white font-normal text-left flex-1"
                      style={{
                        fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                        fontWeight: 400,
                        fontSize: '32px',
                        lineHeight: '40px',
                        letterSpacing: '2%',
                        display: 'block',
                        marginBottom: 0
                      }}
                    >
                      {commitment.title}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-white text-[18px] leading-7 max-w-[500px] font-normal mt-0"
                      style={{ fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif', fontWeight: 400, marginTop: 0 }}>
                      {commitment.desc}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Right side - Image */}
          <div className="flex-shrink-0 mx-auto md:mx-0 flex justify-center order-1 md:order-2">
            <div 
              className="bg-cover bg-center rounded-lg"
              style={{
                width: '578px',
                height: '502px',
                backgroundImage: 'url(https://c.animaapp.com/zheglGTa/img/unsplash-xu5mqq0chck.png)',
                transform: imageTransform,
                transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}; 