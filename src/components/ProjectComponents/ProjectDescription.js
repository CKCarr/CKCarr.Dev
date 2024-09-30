import React from 'react';
import { Typography } from '@material-tailwind/react';

function ProjectDescription({ name, description }) {
  return (
    <div className="">
      <Typography variant="h5" color="white" className="mb-2">{name}</Typography>
      <Typography variant="body2" color="gray-200" className="mb-4">{description}</Typography>
    </div>
  )
}

export default ProjectDescription;
