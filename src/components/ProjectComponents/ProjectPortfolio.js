import React, { useState, useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard.js';
import SearchComponent from './SearchComponent.js';
import projectsData from '../../data/projects.js';
import Certifications from './Certifications.js';
import certificationsData from '../../data/certificationsData.js';
import Divider from '../Divider.js';

function ProjectPortfolio() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [isSticky, setIsSticky] = useState(true); // For toggling stickiness
  const certificationsRef = useRef(null); // Ref to the certifications section

  // Extract all unique tags dynamically from projectsData
  const allTags = [...new Set(projectsData.flatMap(project => project.tags))];

  // Filter projects based on search and selected tags
  const filteredProjects = projectsData.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTags = selectedTags.length === 0 || selectedTags.every(tag => project.tags.includes(tag));
    return matchesSearch && matchesTags;
  });

  // Intersection Observer for Certifications
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsSticky(!entry.isIntersecting); // Stop sticky when certifications come into view
      },
      { threshold: 0.8 }
    );

    if (certificationsRef.current) {
      observer.observe(certificationsRef.current);
    }

    return () => {
      if (certificationsRef.current) {
        observer.unobserve(certificationsRef.current);
      }
    };
  }, []);

  return (
    <section className="projects my-5 p-6 w-full max-w-screen-xl mx-auto">
      <h1 className="text-center text-5xl font-bold mb-8">
        <span className="color-b">Project</span>
        ✨
        <span className="color-p">Portfolio</span>
      </h1>

      {/* Sticky container for Search Bar and Filters */}
      <div className={`${isSticky ? 'sticky top-16 z-10' : ''} bg-cornflowerblue bg-opacity-90 p-4 shadow-lg`}>
        {/* Search bar */}
        <SearchComponent searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        {/* Tag filter buttons */}
        <div className="flex flex-wrap justify-center space-2 mt-4">
          {allTags.map((tag, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag])}
              className={`px-4 py-2 rounded ${selectedTags.includes(tag) ? 'bg-darkcyan text-white' : 'bg-white text-darkcyan'} border-2 border-darkcyan hover:bg-darkcyan hover:text-white transition`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <Divider />

      {/* Projects Grid */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-6 w-full ">
        {filteredProjects.length > 0 ? (
          filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <div className="mx-auto text-md text-center text-plum">
            <p>No projects found.</p>
          </div>
        )}
      </div>

      <Divider />

      {/* Certifications Section */}
      <div ref={certificationsRef}>
        <Certifications certifications={certificationsData} />
      </div>
    </section>
  );
}

export default ProjectPortfolio;
