import React from 'react';

function Footer() {
  return (
    <footer className="container-fluid pb-4 text-darkcyan font-outfit">
      <hr className=" w-3/4 border-7 border-darkcyan mx-auto"></hr>
      <div className=" d-flex justify-content-around row">
        <aside className="footer-icons text-center mt-4">
          <a href="https://github.com/CKCarr">
            <i className="bi bi-github "></i>
          </a>
          <a href="https://www.linkedin.com/in/crystal-carrillo/" className="">
            <i className="bi bi-linkedin"></i>
          </a>
        </aside>
        <address className="d-block text-center mt-4">
          <p className=" text-darkcyan font-outfit">
            <strong>Crystal Carrillo</strong><br />
            Claremore, OK<br />
            (539)-210-6478
          </p>
        </address>
      </div>
      <div className="copy">
        <p className="text-center mb-sm-0 mt-4">
          Copyright &copy; 2024 CKCarr.dev <br />
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
