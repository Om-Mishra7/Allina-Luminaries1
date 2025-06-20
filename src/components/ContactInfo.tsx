import React from 'react';

export const ContactInfo: React.FC = () => {
  return (
    <section className="w-full bg-[#E7DED7] py-12 sm:py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
        {/* General Inquiries Section */}
        <div className="mb-16 sm:mb-20">
          <h2 
            className="text-[#06153A] mb-4"
            style={{
              width: '300px',
              height: '38px',
              position: 'relative',
              top: '-100px',
 
              fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
              fontWeight: 600,
              fontSize: '32px',
              lineHeight: '100%',
              letterSpacing: '0.02em'
            }}
          >
            General Inquiries
          </h2>
          <p 
            className="text-[#06153A] mb-8"
            style={{
              width: '1360px',
              height: '70px',
              position: 'relative',
              top: '-100px',
              
              fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: '35px',
              letterSpacing: '0.01em'
            }}
          >
            For direct inquiries, feel free to contact us via phone or email or visit us at any of our office locations. Our team is available to assist you during business hours.
          </p>

        {/* Contact Cards */}
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12"
          style={{
            marginTop: '-100px',
            left: '35px',
            position: 'relative'
          }}
        >
          {/* Call Us Directly */}
          <div className="text-center">
            <div className="mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#DDB9A2] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#06153A]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <h3 className="text-[#06153A] text-lg sm:text-xl font-semibold mb-4">
                Call Us Directly
              </h3>
                <div className="text-sm sm:text-base" style={{ color: '#7B7B7B' }}>
                  <p>+91-9643437391</p>
                </div>
            </div>
          </div>

            {/* Email Support */}
          <div className="text-center">
            <div className="mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#DDB9A2] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#06153A]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <h3 className="text-[#06153A] text-lg sm:text-xl font-semibold mb-4">
                  Email Support
                </h3>
                <div className="text-sm sm:text-base" style={{ color: '#7B7B7B' }}>
                  <p>
                    <a href="mailto:info@allina.co.in" className="hover:underline" style={{ color: '#7B7B7B' }}>
                      info@allina.co.in
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Visit Our Office */}
            <div className="text-center">
              <div className="mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#DDB9A2] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#06153A]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <h3 className="text-[#06153A] text-lg sm:text-xl font-semibold mb-4">
                  Visit Our Office
              </h3>
              <div className="text-sm sm:text-base space-y-1" style={{ color: '#7B7B7B' }}>
                  <p>Joda Section 36, Faridabad,</p>
                  <p>Haryana - 121003</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Contact ALLINA Section */}
        <div>
          <h2 className="text-[#06153A] text-[24px] sm:text-[28px] font-semibold mb-12 text-center">
            Why Contact ALLINA?
          </h2>
          
          {/* Cards Container */}
          <div style={{
            width: '1361px',
            height: '393px',
            display: 'flex',
            flexDirection: 'row',
            position: 'relative',
            marginBottom: '48px',
            maxWidth: '100%'
          }}>
            {/* Card 1 - Prompt Responses */}
            <div style={{
              height: '393px',
              width: '454px',
              border: '1px solid #d5d5d5',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              background: '#fff',
              boxSizing: 'border-box'
            }}>
              <svg style={{
                position: 'absolute',
                top: '50px',
                left: '27px',
                width: '76px',
                height: '76px'
              }} viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="20" stroke="#323232" strokeWidth="3"/>
                <path d="M24 14v10l7 4" stroke="#323232" strokeWidth="3" strokeLinecap="round"/>
              </svg>
              
              <div style={{
                position: 'absolute',
                top: '170px',
                left: '44px',
                fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                fontSize: '25px',
                fontWeight: 400,
                color: '#000',
                letterSpacing: '0.25px',
                lineHeight: '30px',
                whiteSpace: 'nowrap'
              }}>
                Prompt Responses
              </div>
              
              <p style={{
                position: 'absolute',
                top: '225px',
                left: '44px',
                width: '378px',
                fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                fontSize: '19px',
                fontWeight: 400,
                color: '#7b7b7b',
                letterSpacing: '0.19px',
                lineHeight: '30px'
              }}>
                We're committed to addressing your inquiries quickly and efficiently with dedicated support.
              </p>
            </div>

            {/* Card 2 - Dedicated Support (Dark) */}
            <div style={{
              height: '393px',
              width: '454px',
              border: '1px solid #d5d5d5',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              background: 'rgba(6, 21, 58, 1)',
              boxSizing: 'border-box',
              marginLeft: '-1px',
              marginRight: '-1px'
            }}>
              <svg style={{
                position: 'absolute',
                top: '41px',
                left: '27px',
                width: '76px',
                height: '76px'
              }} viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="20" stroke="#fff" strokeWidth="3"/>
                <path d="M24 14v10l7 4" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
              </svg>
              
              <div style={{
                position: 'absolute',
                top: '164px',
                left: '40px',
                fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                fontSize: '25px',
                fontWeight: 400,
                color: '#fff',
                letterSpacing: '0.25px',
                lineHeight: '30px',
                whiteSpace: 'nowrap'
              }}>
                Dedicated Support
              </div>
              
              <p style={{
                position: 'absolute',
                top: '225px',
                left: '40px',
                width: '378px',
                fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                fontSize: '19px',
                fontWeight: 400,
                color: '#fff',
                letterSpacing: '0.19px',
                lineHeight: '30px'
              }}>
                Our team is here to assist you with any questions, comments, or feedback you may have.
              </p>
            </div>

            {/* Card 3 - Multiple Channels */}
            <div style={{
              height: '393px',
              width: '454px',
              border: '1px solid #d5d5d5',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              background: '#fff',
              boxSizing: 'border-box'
            }}>
              <svg style={{
                position: 'absolute',
                top: '41px',
                left: '41px',
                width: '76px',
                height: '76px'
              }} viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="20" stroke="#323232" strokeWidth="3"/>
                <path d="M24 14v10l7 4" stroke="#323232" strokeWidth="3" strokeLinecap="round"/>
              </svg>
              
              <div style={{
                position: 'absolute',
                top: '170px',
                left: '44px',
                fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                fontSize: '25px',
                fontWeight: 400,
                color: '#000',
                letterSpacing: '0.25px',
                lineHeight: '30px',
                whiteSpace: 'nowrap'
              }}>
                Multiple Channels
              </div>
              
              <p style={{
                position: 'absolute',
                top: '225px',
                left: '44px',
                width: '378px',
                fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                fontSize: '19px',
                fontWeight: 400,
                color: '#7b7b7b',
                letterSpacing: '0.19px',
                lineHeight: '30px'
              }}>
                Reach out via phone, email, or visit us - whatever works best for you and your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 