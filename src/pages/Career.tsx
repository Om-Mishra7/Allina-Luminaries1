import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CareerHero } from '@/components/CareerHero';
import { OpenRoles } from '@/components/OpenRoles';
import { PastRoles } from '@/components/PastRoles';

const Career = () => {
  return (
    <div className="min-h-screen w-full bg-[#06153A] overflow-x-hidden">
      <Header />
      <main className="w-full">
        <CareerHero />
        <OpenRoles />
        <PastRoles />
      </main>
      <Footer />
    </div>
  );
};

export default Career; 