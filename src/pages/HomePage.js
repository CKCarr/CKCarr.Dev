import React from 'react';
import HeroSection from '../components/HeroSection.js';
import AboutSection from '../components/AboutSection.js';
import TechnologiesTools from '../components/TechnologiesTools.js';
import ProjectsSection from '../components/ProjectsSection.js';
import CTAGithub from '../components/CTAGithub.js';
import CTALinkedin from '../components/CTALinkedin.js';
import ContactForm from '../components/ContactForm.js'

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
      <ProjectsSection />
      </div>
      <div>
      <CTAGithub />
      <CTALinkedin />
      </div>
      <div id='contact' className=''>
      <ContactForm/>
      </div>

    </div>
  );
}

export default HomePage;
