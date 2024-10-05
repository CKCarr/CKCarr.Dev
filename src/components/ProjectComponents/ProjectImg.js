import React from 'react';

function ProjectImg({ src, alt }) {
  return (
    <>
      <img src={src} alt={alt} className="w-full h-96 object-cover" />
    </>
  )
}

export default ProjectImg;
