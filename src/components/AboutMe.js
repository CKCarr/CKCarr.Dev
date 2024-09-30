import React from 'react';

function AboutMe() {
  return (
    <section id='about' className="about-me container my-5 overflow-hidden">
      <h1 className="animate__animated animate__fadeInUp text-center m-5">
        Hello there, I'm Crystal Carrillo! Nice to meet you.
      </h1>

      <article className="plan p-3 m-3 overflow-hidden">
        <h3>Refactoring My Life</h3>
        <p className="p-3 m-3">
          I wear many hats – wife, proud mother to four wonderful children, a dedicated caregiver to my Grandma, and a pet mom to two dogs and a cat. 
          I've been a stay-at-home mother and caregiver in recent years, and like many others, life circumstances and the onset of the COVID-19 pandemic 
          prompted me to reevaluate my path.
        </p>

        <p className="p-3 m-3">
          The summer of 2022, my family and I relocated with the goal of giving our children a new environment to grow and graduate. 
          Alongside pursuing a personal education journey for myself, a significant shift from my previous career goals. 
          Heathcare to Technology – a big change, but one I'm excited to embrace.
        </p>
      </article>

      <article className="transition p-3 m-3">
        <h3>Transition to Tech</h3>
        <p className="p-3 m-3">
          My previous career spanned over 11 years in the healthcare field, where I played various roles from nurse assistant to business office manager. 
          Throughout this time, I witnessed technology's increasing role in healthcare, sparking my interest in the tech world. 
          I began to explore the possibility of a career change and started taking steps to make it happen.
        </p>

        <p className="p-3 m-3">
          In revising plans and setting new goals, I gained a fresh perspective and renewed hope. I started working on tutorials online and 
          researching possibilities. I sought opportunities to transition into a tech-focused career and discovered Holberton School, 
          a place where I can gain the skills I've always dreamed of. In January 2023, I placed another hat on my head – student.
        </p>
      </article>

      <article className="future p-3 m-3">
        <h3>My Future in Code</h3>
        <p className="p-3 m-3">
          I'm excited to embark on this journey of learning and personal growth. With curiosity, hard work, dedication, and perseverance, 
          I know I will be equipped with the knowledge and skills to succeed in a rapidly evolving tech landscape. 
          I have a passion for problem-solving, a love for creativity in all its forms, and a readiness to embrace this exciting career change.
        </p>

        <p className="p-3 m-3">
          As I dive into coding and technology, I look forward to becoming a valuable contributor to meaningful projects and carving out a rewarding career path. 
          Join me on this adventure as I explore the limitless possibilities that the world of software development has to offer!
        </p>
      </article>
    </section>
  );
}

export default AboutMe;
