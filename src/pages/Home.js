import React from 'react';
import About from '../components/About';
import ContactBanner from '../components/ContactBanner';
import HeroSection from '../components/HeroSection';
import ProjectsSec from '../components/ProjectsSec';
import Services from '../components/Services';
import Testimo from '../components/Testimo';


export default function Home() {
  return (
    <div>
      <HeroSection />
      <About />
      <Services />
      <ProjectsSec />
      <Testimo />
      <ContactBanner />
    </div>
  )
}
