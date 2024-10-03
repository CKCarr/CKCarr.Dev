import React from 'react';
import messages from '../../data/messages.js'

function ScrollingBanner() {
  return (
    <div className="relative overflow-hidden bg-cornflowerblue text-brightturquoise py-4 p-2">
      <div className="animate-scroll whitespace-nowrap">
        {messages.map((message, index) => (
          <span key={index} className="inline-block mx-6 text-xl">
            {message}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ScrollingBanner;
