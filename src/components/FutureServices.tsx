import React, { useState } from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './ui/accordion';

export const FutureServices = () => {
  const values = [
    { 
      num: '01.', 
      title: 'SUSTAINABILITY', 
      short: 'SUSTAINABILITY',
      desc: 'We are committed to environmentally responsible practices, ensuring that our projects contribute to a greener and more sustainable future.'
    },
    {
      num: '02.',
      title: 'INNOVATION',
      short: 'INNOVATION',
      desc: 'We embrace new technologies and ideas to deliver smarter, more efficient solutions that meet the evolving needs of our clients and communities.'
    },
    {
      num: '03.',
      title: 'QUALITY',
      short: 'QUALITY',
      desc: 'Excellence is at the heart of everything we do. From the materials we use to the services we provide, we maintain the highest standards of quality.'
    },
    {
      num: '04.',
      title: 'CUSTOMER FOCUS',
      short: 'CUSTOMER FOCUS',
      desc: 'Our clients are at the centre of our operations. We strive to build strong relationships by understanding their needs and exceeding their expectations.'
    }
  ];

  const [openItems, setOpenItems] = useState([]);

  const allOpen = openItems.length === values.length;

  const handleExpandCollapseAll = () => {
    if (allOpen) {
      setOpenItems([]);
    } else {
      setOpenItems(values.map((_, idx) => idx.toString()));
    }
  };

  const handleAccordionChange = (items) => {
    setOpenItems(items);
  };

  // Calculate dynamic image transform based on expanded content
  const expandedCount = openItems.length;
  // Calculate translateY to center image relative to accordion content
  const baseOffset = expandedCount > 0 ? (expandedCount * 50) + 80 : 0;
  const imageTransform = `translateY(${baseOffset}px)`;

  return (
    <>
      {/* FUTURE SERVICES Section Title */}
      <div className="flex justify-center items-center py-8 sm:py-10 md:py-12 px-4">
        <h2 className="text-[#06153A] text-lg sm:text-xl md:text-[25px] font-normal tracking-[2px] sm:tracking-[3px] md:tracking-[4px] text-center"
            style={{ fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif', fontWeight: 400 }}>
          FUTURE SERVICES
        </h2>
      </div>

      {/* FUTURE SERVICES Content */}
      <div className="w-full overflow-hidden" style={{ backgroundColor: '#06153A' }}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
          {/* Top Text and Expand/Collapse Button */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between pt-6 sm:pt-8 md:pt-12 mb-8 sm:mb-12 md:mb-16">
            <h3
              className="text-white font-normal"
              style={{
                fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                width: '854px',
                fontSize: '28px',
                lineHeight: '40px',
                letterSpacing: '1%',
                fontWeight: 200,
                height: 'auto',
                margin: 0
              }}
            >
              At ALLINA, our core values define who we are and guide every decision we make. These values are the foundation of our success.
            </h3>
            <button
              className="text-white text-lg font-normal tracking-[2px] px-6 py-2 border border-white rounded-full mt-6 md:mt-0 hover:bg-white hover:text-black transition"
              style={{ fontWeight: 400 }}
              onClick={handleExpandCollapseAll}
            >
              {allOpen ? 'COLLAPSE ALL -' : 'EXPAND ALL +'}
            </button>
          </div>

          <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
            {/* Left side - Image */}
            <div className="flex-shrink-0 w-[350px] lg:w-[500px] xl:w-[500px] mx-auto md:mx-0 flex justify-center">
              <div 
                className="w-[350px] h-[450px] lg:w-[500px] lg:h-[650px] xl:w-[500px] xl:h-[650px] bg-cover bg-center rounded-lg"
                style={{
                  backgroundImage: 'url(https://c.animaapp.com/zheglGTa/img/unsplash-xu5mqq0chck.png)',
                  transform: imageTransform,
                  transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              />
            </div>

            {/* Right side - Accordion Values */}
            <div className="flex-1 min-w-0">
              <Accordion type="multiple" value={openItems} onValueChange={handleAccordionChange}>
                {values.map((value, idx) => (
                  <AccordionItem key={idx} value={idx.toString()} className="border-b border-white/30">
                    <AccordionTrigger className="flex items-center gap-6 py-6">
                      <span className="text-white text-[20px] lg:text-[24px] xl:text-[28px] font-normal min-w-[60px] lg:min-w-[80px]"
                        style={{ fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif', fontWeight: 400 }}>
                        {value.num}
                      </span>
                      <span
                        className="text-white font-normal text-left flex-1"
                        style={{
                          fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                          fontWeight: 400,
                          fontSize: '32px',
                          lineHeight: '79px',
                          letterSpacing: '5%',
                          display: 'block',
                          marginBottom: 0
                        }}
                      >
                          {value.title}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-white text-[14px] lg:text-[16px] xl:text-[18px] leading-6 lg:leading-7 max-w-[500px] font-normal mt-0"
                        style={{ fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif', fontWeight: 400, marginTop: 0 }}>
                            {value.desc}
                          </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
