import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const DesignReverse = () => {
  useEffect(() => {
    const about = document.getElementById("about");
    const aboutHidden = document.getElementById("aboutHidden");

    const design = document.getElementById("design");
    const designHidden = document.getElementById("designHidden");
    const designHalf = document.getElementById("designHalf");

    const illustration = document.getElementById("illustration");
    const illustrationHidden = document.getElementById("illustrationHidden");

    const photography = document.getElementById("photography");
    const photographyHidden = document.getElementById("photographyHidden");

    design.style.display = "none";
    designHalf.style.display = "none";
    designHidden.style.display = "block";

    about.style.display = "block";
    aboutHidden.style.display = "none";

    illustration.style.display = "block";
    illustrationHidden.style.display = "none";

    photography.style.display = "block";
    photographyHidden.style.display = "none";
  });

  const designProject = () => {
    const design = document.getElementById("design");
    const designHidden = document.getElementById("designHidden");
    const designHalf = document.getElementById("designHalf");

    design.style.display = "none";
    designHidden.style.display = "none";
    designHalf.style.display = "block";
  };

  return (
    <div id='designPageReverse'>
      <ul>
        <li className='redLine'></li>
        <li className='content'>
          <div className='container'>
            <div className='contentContainer'>
              <Link
                to='/design/project1'
                className='project'
                onClick={designProject}
              >
                <div className='container'>
                  <div className='imageContainer'></div>
                  <div className='textContainer'>
                    Hey, Thanks for your time on my Portfolio. <br />
                    <br /> Here you can find projects in the areas where I'm
                    more focused right now - Design, Illustration and
                    Photography.
                  </div>
                </div>
              </Link>
              <div className='project'>
                <div className='container'>
                  <div className='imageContainer'></div>
                  <div className='textContainer'>
                    Hey, Thanks for your time on my Portfolio. <br />
                    <br /> Here you can find projects in the areas where I'm
                    more focused right now - Design, Illustration and
                    Photography.
                  </div>
                </div>
              </div>
              <div className='project'>
                <div className='container'>
                  <div className='imageContainer'></div>
                  <div className='textContainer'>
                    Hey, Thanks for your time on my Portfolio. <br />
                    <br /> Here you can find projects in the areas where I'm
                    more focused right now - Design, Illustration and
                    Photography.
                  </div>
                </div>
              </div>
              <div className='project'>
                <div className='container'>
                  <div className='imageContainer'></div>
                  <div className='textContainer'>
                    Hey, Thanks for your time on my Portfolio. <br />
                    <br /> Here you can find projects in the areas where I'm
                    more focused right now - Design, Illustration and
                    Photography.
                  </div>
                </div>
              </div>
              <div className='project'>
                <div className='container'>
                  <div className='imageContainer'></div>
                  <div className='textContainer'>
                    Hey, Thanks for your time on my Portfolio. <br />
                    <br /> Here you can find projects in the areas where I'm
                    more focused right now - Design, Illustration and
                    Photography.
                  </div>
                </div>
              </div>
              <div className='project'>
                <div className='container'>
                  <div className='imageContainer'></div>
                  <div className='textContainer'>
                    Hey, Thanks for your time on my Portfolio. <br />
                    <br /> Here you can find projects in the areas where I'm
                    more focused right now - Design, Illustration and
                    Photography.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default DesignReverse;
