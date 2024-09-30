import React from 'react';

function Footer() {
  return (
    <footer className="footer container-fluid">
      <div className="footer-content d-flex justify-content-around row">
        <aside className="footer-icons text-center mt-4">
          <a href="https://github.com/CKCarr">
            <i className="bi bi-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/crystal-carrillo/" className="">
            <i className="bi bi-linkedin"></i>
          </a>
        </aside>
        <address className="d-block text-center mt-4">
          <p>
            Crystal Carrillo <br />
            Claremore, OK<br />
            (405)-456-9062
          </p>
        </address>
      </div>
      <div className="copy">
        <p className="text-center mb-sm-0 mt-">
          Copyright &copy; 2024 CKCarr.dev <br />
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
