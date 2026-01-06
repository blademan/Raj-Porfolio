import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Capabilities from './components/Capabilities';
import ProjectLoop from './components/ProjectLoop';
import LearningPath from './components/LearningPath';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-slate-100 selection:bg-primary selection:text-black">
      <Navbar />
      <main className="flex flex-col gap-20 pb-20">
        <Hero />
        <Stats />
        <Capabilities />
        <ProjectLoop />
        <LearningPath />
      </main>
      <Footer />
    </div>
  );
}