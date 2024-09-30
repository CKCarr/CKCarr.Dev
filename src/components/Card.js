import React from 'react';

function Card({ imageSrc, title, content }) {
  return (
    <div className=" border-4 border-darkcyan bg-cornflowerblue  rounded-lg shadow-lg my-4 mx-auto w-75 p-6">
      <img
        className="img img-fluid rounded-full mx-auto mb-4 border-4 border-darkcyan"
        src={imageSrc}
        alt={title}
        style={{ width: '245px', height: '245px' }}
      />
      <div className="text-center bg-white
      border-darkcyan border-solid border-2 p-5">
        <h1 className="text-2xl font-outfitBold mb-2 text-purple">{title}</h1>
        <hr className="border-t-2 border-darkcyan mb-4" />
        <p className="text-md text-midnightblue font-outfit ">{content}</p>
      </div>
    </div>
  );
}

export default Card;
