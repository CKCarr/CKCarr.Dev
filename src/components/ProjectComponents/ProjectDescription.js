import React, { useState } from 'react';
import { Typography } from '@material-tailwind/react';

function ProjectDescription({ name, description }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const MAX_LENGTH = 100;

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  }

  const renderDescription = () => {
    if (isExpanded || description.length <= MAX_LENGTH ) {
      return description;
    }
    return `${description.substring(0, MAX_LENGTH)}...`;
  }

  return (
    <div className="">
      <Typography variant="h5" color="white" className="mb-2 text-plum">{name}</Typography>
      <Typography variant="body2" color="gray-200" className="text-white mb-4">{renderDescription()}
        {description.length > MAX_LENGTH && (
          <button onClick={toggleDescription} className="text-white hover:text-plum transition">
            {isExpanded ? 'Show less' : 'Show more'}
          </button>
        )}

      </Typography>
    </div>
  )
}

export default ProjectDescription;
