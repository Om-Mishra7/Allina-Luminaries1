import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ContactHero } from '@/components/ContactHero';
import { ContactInfo } from '@/components/ContactInfo';

const Contact = () => {
  return (
    <div className="min-h-screen w-full bg-[#E7DED7] overflow-x-hidden">
      <Header />
      <ContactHero />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default Contact; 