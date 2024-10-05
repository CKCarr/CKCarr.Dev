import React from 'react';
import { Card } from '@material-tailwind/react';
import ProjectImg from './ProjectImg';
import ProjectDescription from './ProjectDescription';
import TagsComponent from './TagsComponent';

function ProjectCard({ project }) {
  return (
    <div className="group relative w-full p-4">
      <Card className="relative overflow-hidden shadow-lg rounded-lg transform transition-transform hover:scale-105 w-full h-80">
        {/* Project Image */}
        <ProjectImg src={project.image} alt={project.name} />

        {/* Overlay for project details */}
        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
          <div className="text-center">
            {/* Project Title */}
            <ProjectDescription name={project.name} description={project.description} />
          </div>
          {/* Tags and View Project Button */}
          <div className="flex flex-col items-center">
            <TagsComponent tags={project.tags} />
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 bg-darkcyan text-plum px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                View Project
              </a>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}

export default ProjectCard;


