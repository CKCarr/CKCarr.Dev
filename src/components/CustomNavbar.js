import {
  Navbar,
  MobileNav,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link'; // Import HashLink
import { useState, useEffect } from "react";
import logo from '../assets/images/ck-logo.png';

export default function CustomNavbar() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () =>
      window.innerWidth >= 960 ? setOpenNav(false) : null
    );
  }, []);

  return (
    <>
      {/* Desktop Navbar */}
      <Navbar id='header' className={`fixed flex top-0 z-10 bg-midnightblue px-4 py-4 mb-4 w-full xl:w-full max-w-none ${openNav ? 'hidden' : 'flex'}`}>
        <div className="w-full mx-auto flex items-center justify-between text-white">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img id="logo" className="logo-img h-16 w-16" src={logo} alt="Logo" />
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex xl:flex space-x-6">
            <HashLink smooth to="/#home">
            <Button variant="text" className="text-white w-full text-sm" >🏠 Home</Button>
          </HashLink>
            <HashLink smooth to="/#about" >
            <Button variant="text" className="text-white w-full text-sm" >👋 About Me</Button>
            </HashLink>
            <Link to="/projects">
            <Button variant="text" className="text-white w-full text-sm">Projects 🗃️</Button>
            </Link>
            <HashLink smooth to="/#resume" >
            <Button variant="text" className="text-white w-full text-sm" >📄 Resume</Button>
            </HashLink>
            <HashLink smooth to="/#contact" >
            <Button variant="text" className="text-white w-full text-sm" >📩 Contact Me</Button>
            </HashLink>
          </div>

          {/* Mobile Hamburger Icon */}
          <IconButton variant="text" className="lg:hidden text-white" ripple={false} onClick={() => setOpenNav(!openNav)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </IconButton>
        </div>
      </Navbar>

      {/* Mobile Navigation */}
      <MobileNav open={openNav} className="lg:hidden bg-midnightblue mt-5 bg-opacity-75 h-full w-1/5 fixed left-0 z-20 transition-all duration-300 ease-in-out">
        <div className="container mx-auto flex flex-col items-center space-y-8 py-12 text-center">
          {/* Close Button in the Mobile Nav */}
          <IconButton variant="text" className="absolute top-4 right-4 text-white" ripple={false} onClick={() => setOpenNav(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </IconButton>

          {/* Logo inside Mobile Sidebar */}
          <a href="/" className="flex items-center mb-8">
            <img id="logo" className="h-16 w-16" src={logo} alt="Logo" />
          </a>

          {/* Mobile Links */}
          <HashLink smooth to="#home" onClick={() => setOpenNav(false)}>
            <Button variant="text" className="text-white w-full text-sm" href="/" onClick={() => setOpenNav(false)}>🏠 Home</Button>
          </HashLink>
          <HashLink smooth to="/#about" onClick={() => setOpenNav(false)}>
          <Button variant="text" className="text-white w-full text-sm" >👋 About Me</Button>
          </HashLink>
          <Link to="/projects" onClick={() => setOpenNav(false)}>
            <Button variant="text" className="text-white w-full text-sm" >🗃️ Projects</Button>
          </Link>
          <HashLink smooth to="/#resume" onClick={() => setOpenNav(false)}>
          <Button variant="text" className="text-white w-full text-sm" >📄 Resume</Button>
          </HashLink>
          <HashLink smooth to="/#contact"  onClick={() => setOpenNav(false)}><Button variant="text" className="text-white w-full text-sm" >📩 Contact Me</Button>
          </HashLink>
        </div>
      </MobileNav>
    </>
  );
}
