import React from 'react';
import resumePdf from '../assets/CKCarrillo-RESUME.pdf'; // Path to your PDF

function ResumePage() {

  return (
    <div className="container mx-auto pt-28 my-12 p-6">
      {/* Resume Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-outfitBold ">Crystal Carrillo - Resume</h1>
        <p className="text-lg text-gray-600 mb-4">Software Developer & Freelancer</p>

        {/* Download Button */}
        <a
          href={resumePdf}
          download
          className="mt-6 inline-block px-6 py-3 bg-darkcyan text-white rounded-md hover:bg-cornflowerblue transition no-underline"
        >
          Download Resume
        </a>
      </div>

      {/* Embedded PDF Viewer */}
      <div className="mx-auto w-3/4 h-[90vh] border-4 border-darkcyan rounded-md shadow-md">
        <iframe
          src={resumePdf}
          title="Crystal Carrillo Resume"
          className="w-full h-full border-darkcyan"
        />
      </div>
    </div>
  );
}

export default ResumePage;
