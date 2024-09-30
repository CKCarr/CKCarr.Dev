import React from 'react';
import { Card } from '@material-tailwind/react';
import ProjectImg from './ProjectImg.js';
import ProjectDescription from './ProjectDescription.js';
import TagsComponent from './TagsComponent.js';

function ProjectCard({ project }) {
  return (
    <div className="group relative col-md-4">
      <Card className="relative overflow-hidden">
        <ProjectImg src={project.image} alt={project.name} />

        {/* Overlay for project details */}
        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ProjectDescription name={project.name} description={project.description} />
          <TagsComponent tags={project.tags} />
        </div>
      </Card>
    </div>
  );
}

export default ProjectCard;
