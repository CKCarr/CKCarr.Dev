import React from 'react';

function TagsComponent({ tags }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <span key={index} className="px-2 py-1 text-sm bg-blue-500 text-white rounded-md">
          {tag}
        </span>
      ))}
    </div>
  );
}

export default TagsComponent;
