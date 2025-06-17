import React, { useState, useRef, useLayoutEffect } from 'react';
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
  const allOpen = openItems.length === commitments.length;

  // For vertical centering of the image
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const [imgMarginTop, setImgMarginTop] = useState(0);

  useLayoutEffect(() => {
    if (leftRef.current && rightRef.current) {
      const leftRect = leftRef.current.getBoundingClientRect();
      const rightRect = rightRef.current.getBoundingClientRect();
      const leftHeight = leftRect.height;
      const rightHeight = rightRect.height;
      setImgMarginTop((leftHeight - 502) / 2 > 0 ? (leftHeight - 502) / 2 : 0);
    }
  }, [openItems]);

  const handleExpandCollapseAll = () => {
    if (allOpen) {
      setOpenItems([]);
    } else {
      setOpenItems(commitments.map((_, idx) => idx.toString()));
    }
  };

  const handleAccordionChange = (items) => {
    setOpenItems(items);
  };

  return (
    <section className="w-full bg-[#00343C] flex flex-col items-center py-0 px-0 relative min-h-[800px]">
      <div className="relative flex flex-col lg:flex-row w-full max-w-[1440px] mx-auto items-center lg:items-center gap-0 lg:gap-16 px-0">
        {/* Left: Text and Accordion */}
        <div
          ref={leftRef}
          className="flex flex-col items-start"
          style={{ width: 946, minWidth: 946, maxWidth: 946, paddingLeft: 40, paddingTop: 36 }}
        >
          <h2
            className="text-white font-normal mb-2"
            style={{
              fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
              width: 946,
              height: 125,
              fontWeight: 400,
              fontSize: 99,
              lineHeight: '125px',
              letterSpacing: '5%',
              marginBottom: 12
            }}
          >
            OUR COMMITMENT
          </h2>
          <p
            className="text-white font-normal mb-10"
            style={{
              fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
              width: 1367,
              height: 105,
              fontWeight: 400,
              fontSize: 17,
              lineHeight: '22px',
              letterSpacing: '1%',
              marginBottom: 32
            }}
          >
            At ALLINA, we are dedicated to sustainable development and energy efficiency. Our mission is to create infrastructure solutions that minimize environmental impact while maximizing energy savings and operational efficiency. By integrating advanced technologies like IoT, solar power, and energy-efficient systems, we aim to reduce carbon emissions and promote eco-friendly practices in every project we undertake.
          </p>
          <Accordion type="multiple" value={openItems} onValueChange={handleAccordionChange}>
            {commitments.map((item, idx) => (
              <AccordionItem key={idx} value={idx.toString()} className="border-b border-white/30">
                <AccordionTrigger className="flex items-center gap-6 py-6">
                  <span className="text-white text-[20px] lg:text-[24px] xl:text-[28px] font-normal min-w-[60px] lg:min-w-[80px]" style={{ fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif', fontWeight: 400 }}>{item.num}</span>
                  <span className="text-white font-normal text-left flex-1" style={{ fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif', fontWeight: 400, fontSize: '24px', letterSpacing: '2px', display: 'block', marginBottom: 0 }}>{item.title}</span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-white text-[15px] lg:text-[16px] xl:text-[18px] leading-6 lg:leading-7 max-w-[500px] font-normal mt-0" style={{ fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif', fontWeight: 400, marginTop: 0 }}>{item.desc}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <button
            className="text-white text-lg font-normal tracking-[2px] px-6 py-2 border border-white rounded-full mt-8 hover:bg-white hover:text-black transition"
            style={{ fontWeight: 400 }}
            onClick={handleExpandCollapseAll}
          >
            {allOpen ? 'COLLAPSE ALL -' : 'EXPAND ALL +'}
          </button>
        </div>
        {/* Right: Image */}
        <div
          ref={rightRef}
          className="flex-shrink-0 flex items-center justify-center w-full lg:w-auto"
          style={{
            width: 520,
            height: 450,
            marginLeft: -150,
            marginTop: imgMarginTop,
            transition: 'margin-top 0.5s cubic-bezier(0.4,0,0.2,1)',
            marginBottom: -200
          }}
        >
          <div
            className="bg-cover bg-center rounded-[20px] w-[578px] h-[502px]"
            style={{
              backgroundImage: 'url(https://c.animaapp.com/zheglGTa/img/unsplash-xu5mqq0chck.png)',
              boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
              width: 578,
              height: 502,
              borderRadius: 20
            }}
          />
        </div>
      </div>
    </section>
  );
}; 