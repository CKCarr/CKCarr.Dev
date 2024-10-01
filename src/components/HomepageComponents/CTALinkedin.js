import React from 'react';
import mobileContact from '../../assets/images/mobile-contact.png';

function CTALinkedin() {
  return (
    <section className="contact-me my-5 p-1">
      <div className="container d-flex justify-content-center">
        <div className="contact-content row">
          <div className="building-art-content col col-lg-4 col-md-4 col-sm-6 mx-auto w-50">
            <h5 className="text-info mt-5">Follow Me For More</h5>
            <h1 className="my-3 text-2xl">Let’s Connect, Collaborate, And Create!</h1>
            <p className="mb-4">
              I am usually found in a learning objective, tutorial, or fun coding craft. I love to learn, craft, game, and help build others up along the way.
            </p>
            <button type="button" className="linkedin-btn btn btn-md btn-outline-info mx-auto">
              <a href="https://www.linkedin.com/in/crystal-carrillo/" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin"> LINKEDIN</i>
              </a>
            </button>
          </div>
          <img className="col col-lg-4 col-md-4 col-sm-6 mx-auto w-50" src={mobileContact} alt="Mobile contact" />
        </div>
      </div>
    </section>
  );
}

export default CTALinkedin;
