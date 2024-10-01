import React from 'react';

function BlogPostCard({ imageSrc, title, content }) {
  // Split content by newlines and map to <p> elements
  const paragraphs = content.split('\n').map((paragraph, index) => (
    <p key={index} className="p-1 m-1 text-midnightblue font-outfit">
      {paragraph}
    </p>
  ));

  return (
    <div className="border-4 border-darkcyan bg-cornflowerblue rounded-lg shadow-lg my-4 mx-auto w-3/4 p-6">
      {/* Blog Post Image */}
      {imageSrc && (
        <img
          className="img img-fluid rounded-full mx-auto mb-4 border-4 border-darkcyan"
          src={imageSrc}
          alt={title}
          style={{ width: '245px', height: '245px' }}
        />
      )}
      
      {/* Blog Post Content */}
      <div className="text-center bg-white border-darkcyan border-solid border-2 p-5">
        {/* Blog Post Title */}
        <h1 className="text-2xl font-outfitBold mb-2 text-purple">{title}</h1>
        <hr className="border-t-2 border-darkcyan mb-4" />
        
        {/* Blog Post Paragraphs */}
        <div className="text-md text-midnightblue font-outfit">
          {paragraphs}
        </div>
      </div>
    </div>
  );
}

export default BlogPostCard;
