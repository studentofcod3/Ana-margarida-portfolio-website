import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const aboutButton = () => {
    const about = document.getElementById("about");
    const aboutHidden = document.getElementById("aboutHidden");

    const design = document.getElementById("design");
    const designHidden = document.getElementById("designHidden");
    const designHalf = document.getElementById("designHalf");

    const illustration = document.getElementById("illustration");
    const illustrationHidden = document.getElementById("illustrationHidden");

    const photography = document.getElementById("photography");
    const photographyHidden = document.getElementById("photographyHidden");

    if (about.style.display === "block") {
      about.style.display = "none";
      aboutHidden.style.display = "block";
    } else {
      about.style.display = "block";
      aboutHidden.style.display = "none";
    }

    design.style.display = "block";
    designHidden.style.display = "none";
    designHalf.style.display = "none";

    illustration.style.display = "block";
    illustrationHidden.style.display = "none";

    photography.style.display = "block";
    photographyHidden.style.display = "none";
  };

  const designButton = () => {
    const about = document.getElementById("about");
    const aboutHidden = document.getElementById("aboutHidden");

    const design = document.getElementById("design");
    const designHidden = document.getElementById("designHidden");
    const designHalf = document.getElementById("designHalf");

    const illustration = document.getElementById("illustration");
    const illustrationHidden = document.getElementById("illustrationHidden");

    const photography = document.getElementById("photography");
    const photographyHidden = document.getElementById("photographyHidden");

    if (design.style.display === "block") {
      design.style.display = "none";
      designHalf.style.display = "none";
      designHidden.style.display = "block";
    } else {
      design.style.display = "block";
      designHidden.style.display = "none";
      designHalf.style.display = "none";
    }

    about.style.display = "block";
    aboutHidden.style.display = "none";

    illustration.style.display = "block";
    illustrationHidden.style.display = "none";

    photography.style.display = "block";
    photographyHidden.style.display = "none";
  };

  const illustrationButton = () => {
    const about = document.getElementById("about");
    const aboutHidden = document.getElementById("aboutHidden");

    const design = document.getElementById("design");
    const designHidden = document.getElementById("designHidden");
    const designHalf = document.getElementById("designHalf");

    const illustration = document.getElementById("illustration");
    const illustrationHidden = document.getElementById("illustrationHidden");

    const photography = document.getElementById("photography");
    const photographyHidden = document.getElementById("photographyHidden");

    if (illustration.style.display === "block") {
      illustration.style.display = "none";
      illustrationHidden.style.display = "block";
    } else {
      illustration.style.display = "block";
      illustrationHidden.style.display = "none";
    }

    about.style.display = "block";
    aboutHidden.style.display = "none";

    design.style.display = "block";
    designHidden.style.display = "none";
    designHalf.style.display = "none";

    photography.style.display = "block";
    photographyHidden.style.display = "none";
  };

  const photographyButton = () => {
    const about = document.getElementById("about");
    const aboutHidden = document.getElementById("aboutHidden");

    const design = document.getElementById("design");
    const designHidden = document.getElementById("designHidden");
    const designHalf = document.getElementById("designHalf");

    const illustration = document.getElementById("illustration");
    const illustrationHidden = document.getElementById("illustrationHidden");

    const photography = document.getElementById("photography");
    const photographyHidden = document.getElementById("photographyHidden");

    if (photography.style.display === "block") {
      photography.style.display = "none";
      photographyHidden.style.display = "block";
    } else {
      photography.style.display = "block";
      photographyHidden.style.display = "none";
    }

    about.style.display = "block";
    aboutHidden.style.display = "none";

    design.style.display = "block";
    designHidden.style.display = "none";
    designHalf.style.display = "none";

    illustration.style.display = "block";
    illustrationHidden.style.display = "none";
  };

  return (
    <Fragment>
      <div id='navbar'>
        <ul>
          <li>
            <Link to='/about' id='about' onClick={aboutButton}>
              ABOUT
            </Link>
            <Link to='/' id='aboutHidden' onClick={aboutButton}>
              ABOUT
            </Link>
          </li>
          <li>
            <Link to='/design' id='design' onClick={designButton}>
              DESIGN
            </Link>
            <Link to='/' id='designHidden' onClick={designButton}>
              DESIGN
            </Link>
            <Link to='/design2' id='designHalf' onClick={designButton}>
              DESIGN
            </Link>
          </li>
          <li>
            <Link
              to='/illustration'
              id='illustration'
              onClick={illustrationButton}
            >
              ILLUSTRATION
            </Link>
            <Link to='/' id='illustrationHidden' onClick={illustrationButton}>
              ILLUSTRATION
            </Link>
          </li>
          <li>
            <Link
              to='/photography'
              id='photography'
              onClick={photographyButton}
            >
              PHOTOGRAPHY
            </Link>
            <Link to='/' id='photographyHidden' onClick={photographyButton}>
              PHOTOGRAPHY
            </Link>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Navigation;
