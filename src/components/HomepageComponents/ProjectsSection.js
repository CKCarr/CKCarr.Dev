import React from 'react';
import project1 from '../../assets/images/MuseumOfImagination-project.png';
import project2 from '../../assets/images/BreakfastHacksprint-project.png';
import ckLogo from '../../assets/images/ck-logo.png';
import fileBox from '../../assets/images/file-box.png';

function ProjectsSection() {
  return (
    // <!--MAIN CONTENT - SECTION 5 - PROJECTS -->
    <section className="projects my-5 p-12">

      <h1 className="h1-colors text-center d-flex justify-content-center">
        <span className="color-b">Project</span>
        ✨
        <span className="color-p">Portfolio</span>
      </h1>

      <hr className=" w-3/4 mt-5 border-7 border-darkcyan mx-auto"></hr>

      <div className="project-container container p-2">

        <div className="row d-flex justify-content-center">
          <img className="prj-icon img img-fluid" src={fileBox} style={{ width: '280px', height: '300px' }} alt="File Box" />
        </div>

        <div className="row d-flex justify-content-around">
          <div>
            <a href="https://wonderland-3c94c.firebaseapp.com/index.html">
              <img className="prj-img img img-fluid" src={project1} alt="Museum of Imagination Project" style={{ width: '200px', height: '250px' }} />
            </a>
            <p className="text-center">Museum Of Imagination</p>
          </div>

          <div>
            <a href="https://ckcarr.github.io/breakfast_hacksprint/">
              <img className="prj-img img img-fluid" src={project2} alt="Breakfast Hacksprint Project" style={{ width: '200px', height: '250px' }} />
            </a>
            <p className="text-center">Breakfast Bites && Bytes</p>
          </div>
        </div>

        <div className="row d-flex justify-content-center">
          <div>
            <a href="#">
              <img className="prj-img img img-fluid" src={ckLogo} style={{ width: '200px', height: '250px' }} alt="CK Logo" />
            </a>
          </div>
        </div>

        <div className="row d-flex justify-content-between mb-5">
          <img className="prj-img img img-fluid" src={ckLogo} style={{ width: '200px', height: '250px' }} alt="CK Logo" />
          <img className="prj-img img img-fluid" src={ckLogo} style={{ width: '200px', height: '250px' }} alt="CK Logo" />
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
