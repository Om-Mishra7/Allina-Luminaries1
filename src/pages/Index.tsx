import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { DeviceShowcase } from '@/components/DeviceShowcase';
import { ServicesGallery } from '@/components/ServicesGallery';
import { Metrics } from '@/components/Metrics';
import { ContactCard } from '@/components/ContactCard';
import { Journey } from '@/components/Journey';

const Index = () => {
  return (
    <main className="min-h-screen w-full transition-colors duration-700">
      <Header />
      <Hero />
      <DeviceShowcase />
      <ServicesGallery />
      <Metrics />
      <Journey />
      <ContactCard />
    </main>
  );
};

export default Index;
