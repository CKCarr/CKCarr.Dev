import {
  Navbar,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { useState, useEffect } from "react";
import logo from '../assets/images/ck-logo.png';

export default function CustomNavbar() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () =>
      window.innerWidth >= 960 ? setOpenNav(false) : null
    );
  }, []);

  // Reusable links to keep consistency across desktop and mobile menus
  const desktopNavLinks = (
    <>
      <HashLink smooth to="/#home" onClick={() => setOpenNav(false)}>
        <Button
          variant="text"
          className="text-white text-sm border-2 border-darkcyan hover:border-plum w-full lg:w-auto px-4 py-2 transition-all"
        >
          🏠 Home
        </Button>
      </HashLink>
      <Link to="/blog" onClick={() => setOpenNav(false)}>
        <Button
          variant="text"
          className="text-white text-sm border-2 border-darkcyan hover:border-plum w-full lg:w-auto px-4 py-2 transition-all"
        >
          👋 Blog
        </Button>
      </Link>
      <Link to="/projects" onClick={() => setOpenNav(false)}>
        <Button
          variant="text"
          className="text-white text-sm border-2 border-darkcyan hover:border-plum w-full lg:w-auto px-4 py-2 transition-all"
        >
          🗃️ Projects
        </Button>
      </Link>
      <Link to="/resume" onClick={() => setOpenNav(false)}>
        <Button
          variant="text"
          className="text-white text-sm border-2 border-darkcyan hover:border-plum w-full lg:w-auto px-4 py-2 transition-all"
        >
          📄 Resume
        </Button>
      </Link>
      <HashLink smooth to="/#contact" onClick={() => setOpenNav(false)}>
        <Button
          variant="text"
          className="text-white text-sm border-2 border-darkcyan hover:border-plum w-full lg:w-auto px-4 py-2 transition-all"
        >
          📩 Contact Me
        </Button>
      </HashLink>
    </>
  );

  const mobileNavLinks = (
    <>
      <HashLink smooth to="/#home" onClick={() => setOpenNav(false)}>
        <Button
          variant="text"
          className="text-white text-sm w-full px-1 py-1 border-l-2  border-r-2 border-darkcyan hover:border-plum transition-all"
        >
          🏠 Home
        </Button>
      </HashLink>
      <Link to="/blog" onClick={() => setOpenNav(false)}>
        <Button
          variant="text"
          className="text-white text-sm w-full px-1 py-1 border-l-2 border-r-2 border-darkcyan hover:border-plum transition-all"
        >
          👋 Blog
        </Button>
      </Link>
      <Link to="/projects" onClick={() => setOpenNav(false)}>
        <Button
          variant="text"
          className="text-white text-sm w-full px-1 py-1 border-l-2 border-r-2 border-darkcyan hover:border-plum transition-all"
        >
          🗃️ Projects
        </Button>
      </Link>
      <Link to="/resume" onClick={() => setOpenNav(false)}>
        <Button
          variant="text"
          className="text-white text-sm w-full px-1 py-1 border-l-2 border-r-2 border-darkcyan hover:border-plum transition-all"
        >
          📄 Resume
        </Button>
      </Link>
      <HashLink smooth to="/#contact" onClick={() => setOpenNav(false)}>
        <Button
          variant="text"
          className="text-white text-sm w-full px-1 py-1 border-l-2 border-r-2 border-darkcyan hover:border-plum transition-all"
        >
          📩 Contact Me
        </Button>
      </HashLink>
    </>
  );

  return (
    <>
      {/* Desktop Navbar */}
      <Navbar id="header" className="fixed flex top-0 z-40 bg-midnightblue px-4 py-2 mb-4 w-full xl:w-full max-w-none">
        <div className="w-full mx-auto flex items-center justify-between text-white">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img id="logo" className="logo-img h-16 w-16" src={logo} alt="Logo" />
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex xl:flex space-x-6">
            {desktopNavLinks}
          </div>

          {/* Mobile Hamburger Icon */}
          <IconButton
            variant="text"
            className="lg:hidden text-white"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </IconButton>
        </div>
      </Navbar>

      {/* Mobile Navigation */}
      {openNav && (
        <div className="lg:hidden bg-midnightblue mt-5 bg-opacity-75 h-3/4 w-1/5 fixed top-14 left-0 z-20 transition-all duration-300 ease-in-out">
          <div className="container mx-auto flex flex-col items-center space-y-8 py-12 text-center">
            {/* Close Button in the Mobile Nav */}
            <IconButton
              variant="text"
              className="absolute top-4 right-4 text-white"
              ripple={false}
              onClick={() => setOpenNav(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </IconButton>

            {/* Mobile Links */}
            {mobileNavLinks}
          </div>
        </div>
      )}
    </>
  );
}
