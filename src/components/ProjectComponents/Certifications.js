import React from 'react';

function Certifications({ certifications }) {
  return (
    <section className="certifications my-12 p-6 container mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center p-2 text-darkcyan">Certifications & Achievements</h2>

      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-16">
        {certifications.map((certification) => (
          <div key={certification.id} className="bg-white shadow-lg rounded-lg p-6 border-2 border-darkcyan text-midnightblue">
            <h3 className="text-xl font-semibold text-purple-600 mb-2">{certification.title}</h3>
            <p className="text-gray-600 mb-4">
              <strong>Platform:</strong> {certification.platform}
            </p>
            <a
              href={certification.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-4 bg-darkpurple border-darkcyan text-plum px-4 py-2 rounded-md hover:border-plum hover:text-white transition"
            >
              View Certification
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
