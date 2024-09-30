import React from 'react';
import appList from '../assets/images/app-list.png';

function CTAGithub() {
  return (
    <section className="building-art my-5 p-1">
      <div className="container d-flex justify-content-center">
        <div className="art-img row">
          <img className="col col-lg-4 col-md-4 col-sm-6 mx-auto w-50" src={appList} alt="App list icon" />
          <div className="building-art-content col col-lg-4 col-md-4 col-sm-6 mx-auto w-50">
            <h5 className="text-info mt-5">Full-Stack Software Development</h5>
            <h1 className="my-3">Building Art W/ Code Creations</h1>
            <p className="mb-4">
              Using space, color, contrast, and creativity. Applying valuable insights from peers. The value of a
              personal portfolio is built over time.
            </p>
            <button type="button" className="github-btn btn btn-md btn-info mx-auto">
              <a href="https://github.com/CKCarr">
                <i className="bi bi-github"> GITHUB</i>
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTAGithub;
