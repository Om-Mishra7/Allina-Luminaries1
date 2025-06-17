import React from 'react';
import { ChevronRight } from 'lucide-react';

export const CompletedProjects = () => {
  return (
    <div style={{ position: 'relative' }}>
      {/* Middle Horizontal Line */}
      <div style={{
        position: 'absolute',
        width: '1170px',
        height: '1px',
        top: '969px',
        left: '0',
        backgroundColor: '#323232'
      }} />

      {/* Section Header */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '279px',
        gap: '29px',
        position: 'absolute',
        top: '993px',
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
          COMPLETED PROJECTS
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
          Our completed projects showcase our expertise in delivering high-quality, reliable, and innovative
          streetlighting solutions. These projects have transformed communities by improving safety, energy
          efficiency, and sustainability.
        </p>
      </div>

      {/* Background Image with Dots */}
      <div style={{
        position: 'absolute',
        width: '391px',
        height: '356px',
        top: '1035px',
        left: '752px',
        backgroundImage: 'url(https://c.animaapp.com/C63Xsv19/img/group@2x.png)',
        backgroundSize: '100% 100%'
      }}>
        <div style={{
          position: 'absolute',
          width: '12px',
          height: '12px',
          top: '72px',
          left: '236px',
          borderRadius: '6px',
          backgroundColor: '#ffffff',
          boxShadow: '0px 0px 11px 3px rgba(255,255,255,0.71)'
        }} />
        <div style={{
          position: 'absolute',
          width: '12px',
          height: '12px',
          top: '184px',
          left: '61px',
          borderRadius: '6px',
          backgroundColor: '#ffffff',
          boxShadow: '0px 0px 11px 3px rgba(255,255,255,0.71)'
        }} />
      </div>

      {/* Card Container */}
      <div style={{
        position: 'absolute',
        width: '644px',
        height: '415px',
        top: '1486px',
        left: '435px',
        backgroundColor: '#111111',
        borderRadius: '21px',
        border: '1px solid #323232'
      }} />

      {/* Filter tabs and project card section */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '357px',
        gap: '93px',
        position: 'absolute',
        top: '993px',
        left: '376px'
      }}>
        {/* Filter Tabs */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '18px'
        }}>
          <div style={{ position: 'relative', width: '138px', height: '51px' }}>
            <div style={{
              width: '136px',
              height: '51px',
              backgroundColor: '#ffffff',
              borderRadius: '29px',
              border: '1px solid #323232'
            }} />
            <div style={{
              position: 'absolute',
              top: '13px',
              left: '30px',
              fontFamily: '"Myriad Pro-SemiExtended", Helvetica',
              fontWeight: '400',
              color: '#000000',
              fontSize: '15px',
              textAlign: 'center',
              letterSpacing: '1.05px',
              lineHeight: '21.7px',
              whiteSpace: 'nowrap'
            }}>
              Rajasthan
            </div>
          </div>
          <div style={{ position: 'relative', width: '138px', height: '51px' }}>
            <div style={{
              width: '136px',
              height: '51px',
              borderRadius: '29px',
              border: '1px solid #323232'
            }} />
            <div style={{
              position: 'absolute',
              top: '13px',
              left: '36px',
              fontFamily: '"Myriad Pro-SemiExtended", Helvetica',
              fontWeight: '400',
              color: '#ffffff',
              fontSize: '15px',
              textAlign: 'center',
              letterSpacing: '1.05px',
              lineHeight: '21.7px',
              whiteSpace: 'nowrap'
            }}>
              Haryana
            </div>
          </div>
        </div>
        
        {/* Project Card */}
        <div style={{
          position: 'relative',
          width: '369px',
          height: '230px'
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
              Faridabad, India
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
              CCMS Panels
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
              Status: Ongoing
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
              Small Description
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
                width: '207px',
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
              End Date: 17 Nov, 2025
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
              Start Date: 17 Nov, 2024
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Divider Line */}
      <div style={{
        position: 'absolute',
        width: '827px',
        height: '1px',
        top: '1440px',
        left: '343px',
        backgroundColor: '#323232'
      }} />

      {/* Navigation Buttons */}
      <div style={{
        position: 'absolute',
        width: '55px',
        height: '55px',
        top: '1666px',
        left: '1098px',
        backgroundColor: '#000000',
        borderRadius: '37px',
        border: '1px solid #323232',
        boxShadow: '0px 0px 11px rgba(255,255,255,0.26)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <ChevronRight style={{ width: '34px', height: '34px', color: '#e3e3e3' }} />
      </div>
      
      <div style={{
        position: 'absolute',
        width: '55px',
        height: '55px',
        top: '1666px',
        left: '361px',
        backgroundColor: '#000000',
        borderRadius: '37px',
        border: '1px solid #323232',
        boxShadow: '0px 0px 11px rgba(255,255,255,0.26)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <ChevronRight style={{ width: '34px', height: '34px', color: '#e3e3e3' }} />
      </div>
    </div>
  );
};
