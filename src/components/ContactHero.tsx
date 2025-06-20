import React, { useState } from 'react';

export const ContactHero: React.FC = () => {
  const [activeTab, setActiveTab] = useState('General Enquiries');
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
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-[#06153A] text-[32px] sm:text-[40px] md:text-[48px] font-bold mb-4">
            Let's Get In Touch
          </h1>
          <p className="text-[#06153A] text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed">
            We're here to help! Whether you have a general inquiry, a business proposal, or are interested in partnering with us as a supplier, we'd love to hear from you. At ALLINA, we value open communication and are committed to providing prompt and helpful responses to all inquiries.
          </p>
        </div>

        {/* How can we help you? Section */}
        <div className="mb-12">
          <h2 className="text-[#06153A] text-[24px] sm:text-[28px] font-semibold mb-6">
            How can we help you?
          </h2>
          <p className="text-[#06153A] text-base mb-8">
            Explore the sections below to find the best way to get in touch with us.
          </p>

          {/* Tabs */}
          <div className="flex flex-wrap gap-4 mb-8">
            {['General Enquiries', 'Business Enquiries', 'Supplier Enquiries'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeTab === tab
                    ? 'bg-[#06153A] text-white'
                    : 'bg-white text-[#06153A] hover:bg-gray-50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                alt="Modern Office Conference Room"
                className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover rounded-[20px]"
              />
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-[20px] p-6 sm:p-8 shadow-lg">
              <div className="mb-6">
                <p className="text-[#06153A] text-base mb-6">
                  Allina Team is happy to assist! Use the form below to reach out to us for any general inquiries, and our team will get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06153A] focus:border-transparent"
                      placeholder="Your First Name..."
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06153A] focus:border-transparent"
                      placeholder="Your Last Name..."
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06153A] focus:border-transparent"
                    placeholder="Your Email Address..."
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06153A] focus:border-transparent"
                    placeholder="Your Contact Number..."
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06153A] focus:border-transparent resize-vertical"
                    placeholder="Your message or feedback..."
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#06153A] text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-[#0a1f4a] transition-colors duration-300"
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