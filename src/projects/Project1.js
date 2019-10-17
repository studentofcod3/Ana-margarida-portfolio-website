import React, { useEffect } from "react";

const Project1 = () => {
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
    designHalf.style.display = "block";
    designHidden.style.display = "none";

    about.style.display = "block";
    aboutHidden.style.display = "none";

    illustration.style.display = "block";
    illustrationHidden.style.display = "none";

    photography.style.display = "block";
    photographyHidden.style.display = "none";
  }, []);

  return (
    <div id='project1'>
      <ul>
        <li className='leftSide'>
          <div className='container'>
            <div className='contentContainer'>
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
          <div></div>
          <div></div>
        </li>
        <li className='rightSide'>
          <div className='content'></div>
        </li>
      </ul>
    </div>
  );
};

export default Project1;
