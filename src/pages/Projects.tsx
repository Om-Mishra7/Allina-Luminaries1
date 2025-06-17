import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProjectsHero } from '@/components/ProjectsHero';
import { ProjectStats } from '@/components/ProjectStats';
import { OngoingProjects } from '@/components/OngoingProjects';
import { CompletedProjects } from '@/components/CompletedProjects';
import { ProjectsContent } from '@/components/ProjectsContent';
import { ProjectsHighlights } from '@/components/ProjectsHighlights';

const Projects = () => {
  return (
    <div className="min-h-screen w-full bg-black overflow-x-hidden">
      <Header />
      <main className="w-full">
        <ProjectsHero />
        <ProjectsContent />
        <ProjectsHighlights />
      </main>
      <Footer />
    </div>
  );
};

export default Projects; 