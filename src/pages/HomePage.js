import React from 'react';
import HeroSection from '../components/HomepageComponents/HeroSection.js';
import AboutSection from '../components/HomepageComponents/AboutSection.js';
import TechnologiesTools from '../components/HomepageComponents/TechnologiesTools.js';
import ScrollingBanner from '../components/HomepageComponents/ScrollingBanner.js';
import CTAGithub from '../components/HomepageComponents/CTAGithub.js';
import CTALinkedin from '../components/HomepageComponents/CTALinkedin.js';
import ContactForm from '../components/HomepageComponents/ContactForm.js'
import Divider from '../components/Divider.js';


function HomePage() {
  return (
    <div >
      <div id='home' className=''>
      <HeroSection />
      </div>
      <Divider/>
      <div id='about' className=''>
      <AboutSection  />
      </div>
      <Divider/>
      <div id='techtools'>
      <TechnologiesTools />
      </div>
      <Divider/>
      <div>
      <CTAGithub />
      <ScrollingBanner/>
      <CTALinkedin />
      </div>
      <Divider/>
      <div id='contact' className=''>
      <ContactForm/>
      </div>

    </div>
  );
}

export default HomePage;
