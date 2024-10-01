import React, { useState } from 'react';
import ProjectCard from './ProjectCard.js';
import SearchComponent from './SearchComponent.js';
import projectsData from '../../data/projects.js';

function ProjectPortfolio() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);

  // Extract all unique tags dynamically from projectsData
  const allTags = [...new Set(projectsData.flatMap(project => project.tags))];

  // Filter projects based on search and selected tags
  const filteredProjects = projectsData.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTags = selectedTags.length === 0 || selectedTags.every(tag => project.tags.includes(tag));
    return matchesSearch && matchesTags;
  });

  return (
    <section className="projects my-5 p-6 w-full max-w-screen-xl mx-auto">
      <h1 className="text-center text-4xl font-bold mb-8">
        <span className="color-b">Project</span>
        ✨
        <span className="color-p">Portfolio</span>
      </h1>

      {/* Search bar */}
      <SearchComponent searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* Tag filter buttons */}
      <div className="flex flex-wrap justify-center space-x-2 mt-4">
        {allTags.map((tag, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag])}
            className={`px-4 py-2 rounded ${selectedTags.includes(tag) ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {filteredProjects.length > 0 ? (
          filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <p className="text-center text-gray-600">No projects found.</p>
        )}
      </div>
    </section>
  );
}

export default ProjectPortfolio;
