import React from 'react';
import HeroSection from '../components/HomepageComponents/HeroSection.js';
import AboutSection from '../components/HomepageComponents/AboutSection.js';
import TechnologiesTools from '../components/HomepageComponents/TechnologiesTools.js';
import ProjectsSection from '../components/HomepageComponents/ProjectsSection.js';
import ScrollingBanner from '../components/HomepageComponents/ScrollingBanner.js';
import CTAGithub from '../components/HomepageComponents/CTAGithub.js';
import CTALinkedin from '../components/HomepageComponents/CTALinkedin.js';
import ContactForm from '../components/HomepageComponents/ContactForm.js'

function HomePage() {
  return (
    <div >
      <div id='home' className=''>
      <HeroSection />
      </div>
      <div id='about' className=''>
      <AboutSection  />
      </div>
      <div id='techtools'>
      <TechnologiesTools />
      </div>
      <div id='projects' className=''>
      {/* <ProjectsSection /> */}
      </div>

      <div>
      <CTAGithub />
      <ScrollingBanner/>
      <CTALinkedin />
      </div>
      <div id='contact' className=''>
      <ContactForm/>
      </div>

    </div>
  );
}

export default HomePage;
