import React, { useState } from 'react';

export const ContactHero: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="w-full bg-[#E7DED7] py-12 sm:py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                alt="Modern Office Space"
                className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover rounded-[20px] sm:rounded-[25px] md:rounded-[30px]"
              />
              <div className="absolute inset-0 bg-black/10 rounded-[20px] sm:rounded-[25px] md:rounded-[30px]"></div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-[20px] sm:rounded-[25px] md:rounded-[30px] p-6 sm:p-8 md:p-10 shadow-lg">
              <div className="mb-6 sm:mb-8">
                <h1 className="text-[#06153A] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-semibold mb-3 sm:mb-4">
                  Let's Get In Touch
                </h1>
                <p className="text-[#06153A] text-sm sm:text-base">
                  Or just reach out manually to{' '}
                  <a href="mailto:info@allina.co.in" className="text-[#06153A] underline hover:no-underline">
                    info@allina.co.in
                  </a>
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {/* First Name and Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-[#06153A] text-sm font-medium mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06153A] focus:border-transparent transition-colors"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-[#06153A] text-sm font-medium mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06153A] focus:border-transparent transition-colors"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-[#06153A] text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06153A] focus:border-transparent transition-colors"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-[#06153A] text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06153A] focus:border-transparent transition-colors"
                    placeholder="+91 12345 67890"
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-[#06153A] text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06153A] focus:border-transparent transition-colors resize-vertical"
                    placeholder="Tell us about your project..."
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#06153A] text-white py-3 sm:py-4 px-6 rounded-lg font-semibold text-base sm:text-lg hover:bg-[#0a1f4a] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#06153A] focus:ring-offset-2"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 