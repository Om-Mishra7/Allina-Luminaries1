
import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

export const OngoingProjects = () => {
  const [selectedState, setSelectedState] = useState<'rajasthan' | 'haryana'>('rajasthan');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample project images for carousel in Card Container
  const projectImages = [
    {
      src: "/images/image1.jpg",
      alt: "Street lighting project 1",
      title: "Smart Street Lighting Installation"
    },
    {
      src: "/images/image2.png",
      alt: "Street lighting project 2", 
      title: "LED Infrastructure Development"
    },
    {
      src: "/images/image3.jpg",
      alt: "Street lighting project 3",
      title: "IoT Lighting Solutions"
    },
    {
      src: "/images/image4.jpg",
      alt: "Street lighting project 4",
      title: "Solar Street Light Implementation"
    }
  ];

  // Sample project card data (separate from image carousel)
  const currentCard = {
    title: "CCMS Panels",
    location: "Faridabad, India",
    status: "Status: Ongoing",
    description: "Smart control management system implementation",
    startDate: "Start Date: 17 Nov, 2024",
    endDate: "End Date: 17 Nov, 2025",
    progress: 66
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
  };

  const currentImage = projectImages[currentImageIndex];

  return (
    <div style={{ position: 'relative' }}>
      {/* Section Header */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '279px',
        gap: '29px',
        position: 'absolute',
        top: '23px',
        left: '30px'
      }}>
        <h2 style={{
          width: '245px',
          height: '130px',
          fontFamily: '"Myriad Pro-SemiExtended", Helvetica',
          fontWeight: '400',
          color: '#ffffff',
          fontSize: '38px',
          letterSpacing: '2.66px',
          lineHeight: '65px',
          margin: '0'
        }}>
          ONGOING PROJECTS
        </h2>
        <p style={{
          fontFamily: '"Myriad Pro-SemiExtended", Helvetica',
          fontWeight: '400',
          color: '#7b7b7b',
          fontSize: '17px',
          letterSpacing: '0.17px',
          lineHeight: '30px',
          margin: '0'
        }}>
          Our ongoing projects demonstrate our dedication to creating efficient and sustainable streetlighting
          networks. These projects involve the latest technologies, including IoT-enabled systems, GIS mapping, and
          CCMS integration, ensuring smarter and more reliable lighting solutions.
        </p>
      </div>

      {/* Map Display Area */}
      <div style={{
        position: 'absolute',
        width: '352px',
        height: '357px',
        top: '64px',
        left: '770px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderRadius: '10px',
        border: '1px solid #323232'
      }}>
        <img 
          src={selectedState === 'rajasthan' ? '/images/Rajasthan.svg' : '/images/Haryana.svg'}
          alt={selectedState === 'rajasthan' ? 'Rajasthan Map' : 'Haryana Map'}
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            width: 'auto',
            height: 'auto',
            filter: 'brightness(1.2)'
          }}
        />
      </div>

      {/* Divider Line */}
      <div style={{
        position: 'absolute',
        width: '827px',
        height: '1px',
        top: '465px',
        left: '343px',
        backgroundColor: '#323232'
      }} />

      {/* Card Container - Image Carousel */}
      <div style={{
        position: 'absolute',
        width: '644px',
        height: '415px',
        top: '510px',
        left: '435px',
        backgroundColor: '#111111',
        borderRadius: '21px',
        border: '1px solid #323232',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <img 
            src={currentImage.src}
            alt={currentImage.alt}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '21px'
            }}
          />
          <div style={{
            position: 'absolute',
            bottom: '20px',
            left: '20px',
            right: '20px',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            padding: '10px 15px',
            borderRadius: '8px'
          }}>
            <div style={{
              color: '#ffffff',
              fontFamily: '"Myriad Pro-SemiExtended", Helvetica',
              fontSize: '18px',
              fontWeight: '400',
              marginBottom: '5px'
            }}>
              {currentImage.title}
            </div>
            <div style={{
              display: 'flex',
              gap: '6px',
              justifyContent: 'center'
            }}>
              {projectImages.map((_, index) => (
                <div
                  key={index}
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: index === currentImageIndex ? '#ddb9a2' : '#666666',
                    transition: 'background-color 0.3s ease'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '18px',
        position: 'absolute',
        top: '23px',
        left: '376px'
      }}>
        <button 
          style={{ position: 'relative', width: '138px', height: '51px', cursor: 'pointer', border: 'none', background: 'none' }}
          onClick={() => setSelectedState('rajasthan')}
        >
          <div style={{
            width: '136px',
            height: '51px',
            backgroundColor: selectedState === 'rajasthan' ? '#ffffff' : 'transparent',
            borderRadius: '29px',
            border: '1px solid #323232'
          }} />
          <div style={{
            position: 'absolute',
            top: '13px',
            left: '30px',
            fontFamily: '"Myriad Pro-SemiExtended", Helvetica',
            fontWeight: '400',
            color: selectedState === 'rajasthan' ? '#000000' : '#ffffff',
            fontSize: '15px',
            textAlign: 'center',
            letterSpacing: '1.05px',
            lineHeight: '21.7px',
            whiteSpace: 'nowrap'
          }}>
            Rajasthan
          </div>
        </button>
        <button 
          style={{ position: 'relative', width: '138px', height: '51px', cursor: 'pointer', border: 'none', background: 'none' }}
          onClick={() => setSelectedState('haryana')}
        >
          <div style={{
            width: '136px',
            height: '51px',
            backgroundColor: selectedState === 'haryana' ? '#ffffff' : 'transparent',
            borderRadius: '29px',
            border: '1px solid #323232'
          }} />
          <div style={{
            position: 'absolute',
            top: '13px',
            left: '36px',
            fontFamily: '"Myriad Pro-SemiExtended", Helvetica',
            fontWeight: '400',
            color: selectedState === 'haryana' ? '#000000' : '#ffffff',
            fontSize: '15px',
            textAlign: 'center',
            letterSpacing: '1.05px',
            lineHeight: '21.7px',
            whiteSpace: 'nowrap'
          }}>
            Haryana
          </div>
        </button>
      </div>

      {/* Project Card */}
      <div style={{
        position: 'absolute',
        width: '369px',
        height: '230px',
        top: '146px',
        left: '374px'
      }}>
        <div style={{
          position: 'relative',
          width: '357px',
          height: '230px',
          backgroundColor: '#000000',
          borderRadius: '10px',
          border: '1px solid #323232',
          boxShadow: '0px 0px 11px rgba(255,255,255,0.26)'
        }}>
                      <div style={{
              position: 'absolute',
              top: '68px',
              left: '52px',
              fontFamily: '"Myriad Pro-SemiExtended", Helvetica',
              fontWeight: '400',
              color: '#7b7b7b',
              fontSize: '12.9px',
              textAlign: 'right'
            }}>
              {currentCard.location}
            </div>
            
            <img 
              style={{
                position: 'absolute',
                width: '24px',
                height: '24px',
                top: '64px',
                left: '20px'
              }}
              src="https://c.animaapp.com/C63Xsv19/img/frame-1.svg" 
            />
            
            <div style={{
              position: 'absolute',
              top: '34px',
              left: '27px',
              fontFamily: '"Myriad Pro-SemiExtended", Helvetica',
              fontWeight: '400',
              color: '#ffffff',
              fontSize: '23px',
              lineHeight: '22px',
              whiteSpace: 'nowrap'
            }}>
              {currentCard.title}
            </div>
            
            <div style={{
              position: 'absolute',
              top: '34px',
              left: '246px',
              fontFamily: '"Myriad Pro-SemiExtended", Helvetica',
              fontWeight: '400',
              color: '#7b7b7b',
              fontSize: '13px',
              lineHeight: '22px',
              whiteSpace: 'nowrap'
            }}>
              {currentCard.status}
            </div>
            
            <div style={{
              position: 'absolute',
              top: '114px',
              left: '27px',
              fontFamily: '"Myriad Pro-SemiExtended", Helvetica',
              fontWeight: '400',
              color: '#7b7b7b',
              fontSize: '13px',
              lineHeight: '22px',
              whiteSpace: 'nowrap'
            }}>
              {currentCard.description}
            </div>
            
            {/* Progress Bar */}
            <div style={{
              position: 'absolute',
              width: '314px',
              height: '3px',
              top: '184px',
              left: '28px',
              backgroundColor: '#d9d9d9',
              borderRadius: '3px'
            }}>
              <div style={{
                width: `${(currentCard.progress / 100) * 314}px`,
                height: '3px',
                backgroundColor: '#ddb9a2',
                borderRadius: '3px',
                boxShadow: '0px 0px 12px #ddb9a2'
              }} />
            </div>
            
            <div style={{
              position: 'absolute',
              width: '98px',
              top: '189px',
              left: '243px',
              fontFamily: '"Myriad Pro-SemiExtended", Helvetica',
              fontWeight: '400',
              color: '#7b7b7b',
              fontSize: '9px',
              textAlign: 'right',
              lineHeight: '22px'
            }}>
              {currentCard.endDate}
            </div>
            
            <div style={{
              position: 'absolute',
              top: '189px',
              left: '27px',
              fontFamily: '"Myriad Pro-SemiExtended", Helvetica',
              fontWeight: '400',
              color: '#7b7b7b',
              fontSize: '9px',
              lineHeight: '22px',
              whiteSpace: 'nowrap'
            }}>
              {currentCard.startDate}
            </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button 
        onClick={handleNextImage}
        style={{
          position: 'absolute',
          width: '55px',
          height: '55px',
          top: '690px',
          left: '1098px',
          backgroundColor: '#000000',
          borderRadius: '37px',
          border: '1px solid #323232',
          boxShadow: '0px 0px 11px rgba(255,255,255,0.26)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer'
        }}
      >
        <ChevronRight style={{ width: '34px', height: '34px', color: '#e3e3e3' }} />
      </button>
      
      <button 
        onClick={handlePrevImage}
        style={{
          position: 'absolute',
          width: '55px',
          height: '55px',
          top: '690px',
          left: '361px',
          backgroundColor: '#000000',
          borderRadius: '37px',
          border: '1px solid #323232',
          boxShadow: '0px 0px 11px rgba(255,255,255,0.26)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer'
        }}
      >
        <ChevronLeft style={{ width: '34px', height: '34px', color: '#e3e3e3' }} />
      </button>
    </div>
  );
};
