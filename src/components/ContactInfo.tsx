import React from 'react';

export const ContactInfo: React.FC = () => {
  return (
    <section className="w-full bg-[#E7DED7] py-12 sm:py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
        {/* General Inquiries Section */}
        <div className="mb-16 sm:mb-20">
          <h2 className="text-[#06153A] text-[24px] sm:text-[28px] font-semibold mb-4">
            General Inquiries
          </h2>
          <p className="text-[#06153A] text-base mb-8">
            Feel free to contact us via phone or email or visit us at one of our office locations. Our team is available to assist you during business hours.
          </p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
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
                <div className="text-[#06153A] text-sm sm:text-base">
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
                <div className="text-[#06153A] text-sm sm:text-base">
                  <p>
                    <a href="mailto:info@allina.co.in" className="hover:underline">
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
              <div className="text-[#06153A] text-sm sm:text-base space-y-1">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
            {/* Prompt Responses */}
            <div className="text-center">
              <div className="mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#06153A]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/>
                  </svg>
                </div>
                <h3 className="text-[#06153A] text-lg sm:text-xl font-semibold mb-4">
                  Prompt Responses
                </h3>
                <p className="text-[#06153A] text-sm sm:text-base">
                  We're committed to addressing your inquiries quickly and efficiently.
                </p>
              </div>
            </div>

            {/* Dedicated Support */}
            <div className="text-center">
              <div className="mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#06153A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-[#06153A] text-lg sm:text-xl font-semibold mb-4">
                  Dedicated Support
                </h3>
                <p className="text-[#06153A] text-sm sm:text-base">
                  Our team is here to assist you with any questions, comments, or feedback.
                </p>
              </div>
            </div>

            {/* Multiple Channels */}
            <div className="text-center">
              <div className="mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#06153A]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"/>
                  </svg>
                </div>
                <h3 className="text-[#06153A] text-lg sm:text-xl font-semibold mb-4">
                  Multiple Channels
                </h3>
                <p className="text-[#06153A] text-sm sm:text-base">
                  Reach out via phone, email, or visit us - whatever works best for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 