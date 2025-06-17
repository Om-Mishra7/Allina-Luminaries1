import React from 'react';

export const ContactInfo: React.FC = () => {
  return (
    <section className="w-full bg-[#E7DED7] py-12 sm:py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-[#06153A] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-semibold mb-4">
            We'd love to Hear From You.
          </h2>
          <p className="text-[#06153A] text-base sm:text-lg">
            Or just reach out manually to{' '}
            <a href="mailto:ritik@allina.co.in" className="text-[#06153A] underline hover:no-underline">
              ritik@allina.co.in
            </a>
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
          {/* Visit Our Office */}
          <div className="text-center">
            <div className="mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#DDB9A2] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#06153A]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3 className="text-[#06153A] text-lg sm:text-xl font-semibold mb-4">
                Visit Our Office
              </h3>
              <div className="text-[#06153A] text-sm sm:text-base space-y-1">
                <p>Apartment 31, Street Alpine</p>
                <p>Sector - 50, Faridabad</p>
                <p>Haryana, India</p>
                <p>Pin: 121006</p>
              </div>
            </div>
          </div>

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
              <div className="text-[#06153A] text-sm sm:text-base space-y-1">
                <p>Apartment 31, Street Alpine</p>
                <p>Sector - 50, Faridabad</p>
                <p>Haryana, India</p>
                <p>Pin: 121006</p>
              </div>
            </div>
          </div>

          {/* Email Us */}
          <div className="text-center">
            <div className="mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#DDB9A2] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#06153A]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <h3 className="text-[#06153A] text-lg sm:text-xl font-semibold mb-4">
                Email Us
              </h3>
              <div className="text-[#06153A] text-sm sm:text-base space-y-1">
                <p>New Industrial Town,</p>
                <p>Faridabad, Haryana</p>
                <p>(121221)</p>
                <p className="mt-3">
                  <a href="mailto:example@allina.co.in" className="hover:underline">
                    example@allina.co.in
                  </a>
                </p>
                <p>
                  <a href="tel:+911234567890" className="hover:underline">
                    +911234567890
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 