import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CareerHero } from '@/components/CareerHero';
import { OpenRoles } from '@/components/OpenRoles';

const Career = () => {
  return (
    <div className="min-h-screen w-full bg-[#E7DED7] overflow-x-hidden">
      <Header />
      <main className="w-full">
        <CareerHero />
        <OpenRoles />
      </main>
      <Footer />
    </div>
  );
};

export default Career; 