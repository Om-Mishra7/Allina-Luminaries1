import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import ServicesHero from '@/components/ServicesHero';
import Solutions from '@/components/Solutions';
import { FutureServices } from '@/components/FutureServices';

const Services = () => {
  return (
    <div className="min-h-screen w-full bg-[#E7DED7] overflow-x-hidden">
      <Header />
      <ServicesHero />
      <Solutions />
      <FutureServices />
      <Footer />
    </div>
  );
};

export default Services; 