import React from 'react';

function Card({ imageSrc, title, content }) {
  return (
    <div className="border-4 border-darkcyan bg-cornflowerblue rounded-lg shadow-lg my-4 mx-auto max-w-sm lg:max-w-md p-6">
      {/* Image */}
      <img
        className="w-48 h-48 rounded-full mx-auto mb-4 border-4 border-darkcyan"
        src={imageSrc}
        alt={title}
      />
      
      {/* Content Section */}
      <div className="text-center bg-white border-2 border-darkcyan p-5 rounded-lg">
        {/* Title */}
        <h1 className="text-2xl font-bold mb-2 text-purple ">{title}</h1>
        <hr className="border-t-2 border-darkcyan mb-4" />
        
        {/* Content */}
        <p className="text-md text-midnightblue font-large">{content}</p>
      </div>
    </div>
  );
}

export default Card;
