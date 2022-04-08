import React from 'react';
import About from '../components/About';
import ContactBanner from '../components/ContactBanner';
import HeroSection from '../components/HeroSection';
import ProjectsSec from '../components/ProjectsSec';
import Services from '../components/Services';
import Testimo from '../components/Testimo';
import Skills from '../components/Skills'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <About />
      <Skills />
      <Services />
      <ProjectsSec />
      <Testimo />
      <ContactBanner />
    </div>
  )
}
