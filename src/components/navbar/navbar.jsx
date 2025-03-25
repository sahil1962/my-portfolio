import { useState, useEffect } from "react";
import Logo from "../../assets/Logo.png";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBarsStaggered } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  useEffect(() => {
    const navbar = document.querySelector(".navbar");

    const handleScroll = () => {
      if (window.pageYOffset > 10) {
        navbar.style.background = "transparent"; // Change background color on scroll
      } else {
        navbar.style.background = "transparent";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <a href="/">
            <img className="logo" src={Logo} alt="Logo" />
          </a>
        </div>

        <div className="menu-icon" onClick={handleShowNavbar}>
          <FontAwesomeIcon icon={showNavbar ? faBarsStaggered : faBars} />
        </div>

        <div className={`nav-elements ${showNavbar && "active"}`}>
          <ul>
            <li>
              <a href="#LandingPage">Home</a>
            </li>
            <li>
              <a href="#AboutMe">About me</a>
            </li>
            <li>
              <a href="#Skills">Skills</a>
            </li>
            <li>
              <a href="#Projects">Projects</a>
            </li>
            <li>
              <a className="contactMeButton" href="#ContactMe">
              {/* <a className="contactMeButton" href="#ContactMe"> */}
                Contact me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
