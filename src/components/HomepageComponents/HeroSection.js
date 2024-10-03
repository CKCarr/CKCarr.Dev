import { Typography } from "@material-tailwind/react";
import design from '../../assets/images/discover-text.png';
import monitor from "../../assets/images/pc-monitor.png";
// import Typewriter from "../Typewriter.js";

export default function HeroSection() {
  return (
    <section id="home" className="hero pt-12  text-white">
      <div className="container mx-auto my-5 py-5">
        {/* Header Section */}
        <div className="hero-header flex mx-4 justify-center items-center space-x-8">
          {/* Image 1 */}
          <img
            className="w-1/2 max-w-lg img-fluid"
            src={design}
            alt="Discover/Research/Design/Create/Deploy"
          />
          {/* Image 2 */}
          <img
            className="w-1/2 max-w-lg img-fluid border-darkcyan"
            src={monitor}
            alt="pc-monitor cute illustration"
          />
        </div>

        {/* Inspirational Quote */}
        <Typography variant="h2" className="text-center my-8">
          <span className="typewriter bg-clip-text text-transparent bg-gradient-to-r from-cornflowerblue via-paleturquoise to-plum">
            A source of Inspiration. A Muse. A Vibe. Learn while Doing and Never not Try.
          </span>
        </Typography>

        {/* Buttons Section */}
        <div className="flex justify-center mt-12">
          {/* Portfolio Button */}
          <button type="button" className="github-btn btn btn-md btn-info mx-auto">
            <a href="/projects">
              <i className="bi bi-briefcase"> PORTFOLIO</i>
            </a>
          </button>

          {/* Resume Button */}
          <button type="button" className="linkedin-btn btn btn-md btn-outline-info mx-auto">
            <a href="/resume" target="_blank">
              <i className="bi bi-file-earmark-text"> RESUME</i>
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}
