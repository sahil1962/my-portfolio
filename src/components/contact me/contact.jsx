import React, { useState, useEffect } from "react";
import "./contact.css";
import linkedinLogo from "../../assets/Contact/linkedin.png";
import mailLogo from "../../assets/Contact/mail.png";
import githubLogo from "../../assets/Contact/github.png";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="Contact">
      <div className="background">
        <div className="heading">
          # Contact me
          <div className="line"></div>
        </div>

        <div className="ParentDiv">
          <div className="ContactDiv">
            <div className="Content">
              I'm interested in freelance opportunities. However, if you have
              other request or question, don't hesitate to contact me
            </div>

            <div className="ContactDetails">
              <div>Message me Here</div>

              <div>
                <img
                  className="iconsForContact"
                  src={mailLogo}
                  alt="LinkedIn"
                />
                <a href="mailto:sahiloutlook1962@gmail.com">
                  sahiloutlook1962@gmail.com
                </a>
              </div>
              <div>
                <img
                  className="iconsForContact"
                  src={githubLogo}
                  alt="LinkedIn"
                />
                <a
                  href="https://github.com/sahil1962"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  sahil1962
                </a>
              </div>
              <div>
                <img
                  className="iconsForContact"
                  src={linkedinLogo}
                  alt="LinkedIn"
                />
                <a
                  href="https://www.linkedin.com/in/sahil-parkash-40b464185/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  sahil-parkash-40b464185/
                </a>
              </div>
            </div>
          </div>
          <div className="Footer">
            <span>⨇</span>
            <div
              className="BackTop"
              style={{ display: isVisible ? "block" : "none" }}
              onClick={scrollToTop}
            >
              BACK TO TOP
            </div>
            <div className="SocialMedia">
            <a
                href="mailto:sahiloutlook1962@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="iconsForContact"
                  src={mailLogo}
                  alt="LinkedIn"
                />
              </a>
              <a
                href="https://github.com/sahil1962"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="iconsForContact"
                  src={githubLogo}
                  alt="LinkedIn"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/sahil-parkash-40b464185/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="iconsForContact"
                  src={linkedinLogo}
                  alt="LinkedIn"
                />
              </a>
            </div>
            <div className="Rights">
              @2023 Sahil Parkash All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
