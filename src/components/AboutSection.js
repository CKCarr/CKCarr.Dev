import React from 'react';
import Card from './Card.js';
import storyImage from '../assets/images/story.png';
import processImage from '../assets/images/process2.png';
import goalsImage from '../assets/images/goals.png';

function AboutSection() {
  return (
    <section id="about" className="overflow-hidden p-5 text-midnightblue">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-center">
        {/* Card 1 - My Story */}
        <Card
          imageSrc={storyImage}
          title="My Story"
          content="As a freelance developer, I'm excited to bring my passion for creativity and problem-solving to every project. After years of experience in healthcare, I have transitioned to tech, motivated to create solutions and learn continuously."
          cardClass="animate__animated animate__fadeInUp animate__delay-2s w-1/2"
        />

        {/* Card 2 - My Process */}
        <Card
          imageSrc={processImage}
          title="My Process"
          content="I aim to work closely with clients to understand their unique needs and preferences, and to create custom solutions built with the end-user in mind."
          cardClass="w-1/2 animate__animated animate__fadeInUp animate__delay-3s"
        />

        {/* Card 3 - My Goals (Centered Below the Two Cards) */}
        <div className="md:col-span-2 flex justify-center">
          <Card
            imageSrc={goalsImage}
            title="My Goals"
            content="I'm dedicated to growing as a developer and delivering exceptional results. I’m focused on building intuitive websites, designing engaging interfaces, and solving real-world problems for businesses and individuals."
            cardClass="w-3/4 animate__animated animate__fadeInUp animate__delay-4s"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
