import React from 'react';

function TagsComponent({ tags }) {
  return (
    <div className=" p-1 border-2 border-darkcyan bg-darkpurple" >
      {tags.map((tag, index) => (
        <span key={index} className="px-2 py-1 text-sm rounded-md font-outfit text-plum  ">
          {tag}
        </span>
      ))}
    </div>
  );
}

export default TagsComponent;
