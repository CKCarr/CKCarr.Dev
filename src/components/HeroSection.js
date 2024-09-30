import { Button, Typography } from "@material-tailwind/react";
import  design from '../assets/images/discover-text.png';
import monitor from "../assets/images/pc-monitor.png"


export default function HeroSection() {
  return (
    <section id="home" className="hero pt-16 bg-gradient-to-r from-midnightblue to-purple text-white">
      <div className="container mx-auto my-5 py-5">
        {/* Header Section */}
        <div className="hero-header flex mx-4 justify-center items-center space-x-8">
          {/* Image 1 */}
          <img
            className="w-1/2 max-w-md img-fluid"
            src={design}
            alt="Discover/Research/Design/Create/Deploy"
          />
          {/* Image 2 */}
          <img
            className="w-1/2 max-w-md img-fluid"
            src={monitor}
            alt="pc-monitor cute illustration"
          />
        </div>

        {/* Inspirational Quote */}
        <Typography variant="h3" className="text-center my-10">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cornflowerblue via-paleturquoise to-plum">
            A source of Inspiration, a Muse, a Vibe. Learn while
            Doing and Never not Try.
          </span>
        </Typography>

        {/* Buttons Section */}
        <div className="flex justify-center space-x-10 mt-10">
          <Button
            className="bg-darkcyan hover:bg-paleturquoise text-white text-lg"
            size="lg"
          >
            <a href="#">Portfolio</a>
          </Button>
          <Button
            variant="outlined"
            className="border-darkcyan text-darkcyan hover:text-paleturquoise text-lg"
            size="lg"
          >
            <a href="CKResume.pdf" target="_blank">
              Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
