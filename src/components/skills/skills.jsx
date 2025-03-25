import "./skills.css";
import htmlLogo from "../../assets/Skills/html.png";
import cssLogo from "../../assets/Skills/css-3.png";
import reactLogo from "../../assets/Skills/react.png";
import nodejsLogo from "../../assets/Skills/nodejs.png";
import MongoDBLogo from "../../assets/Skills/MongoDB.png";
import figmaLogo from "../../assets/Skills/figma.png";
import bootstrapLogo from "../../assets/Skills/bootstrap.png";
import javascriptLogo from "../../assets/Skills/java-script.png";
import pythonLogo from "../../assets/Skills/python.png";
import javaLogo from "../../assets/Skills/java.png";
import cLogo from "../../assets/Skills/c.png";
import cppLogo from "../../assets/Skills/cpp.png";

const Skills = () => {
  return (
    <div className="Skills">
      <div className="background">
        <div className="heading">
          # Skills
          <div className="line"></div>
        </div>

        <div className="contentDiv">
          <div className="ParentDiv">
            <div className="UsingNow">
              <span className="SkillsHeading">Using Now:</span>

              <div className="SkillsImages">
                <div className="SkillsImagesFrontend">
                  <figure className="LogoContainer">
                    <img className="LogoImage" src={htmlLogo} alt="HTML" />
                    <figcaption className="SkillName">HTML</figcaption>
                  </figure>
                  <figure className="LogoContainer">
                    <img className="LogoImage" src={cssLogo} alt="Logo" />
                    <figcaption className="SkillName">CSS</figcaption>
                  </figure>
                  <figure className="LogoContainer">
                    <img className="LogoImage" src={reactLogo} alt="Logo" />
                    <figcaption className="SkillName">REACT</figcaption>
                  </figure>
                  <figure className="LogoContainer">
                    <img className="LogoImage" src={bootstrapLogo} alt="Logo" />
                    <figcaption className="SkillName">BOOTSTRAP</figcaption>
                  </figure>
                </div>

                <div className="SkillsImagesBackend">
                  <figure className="LogoContainer">
                    <img
                      className="LogoImage"
                      src={javascriptLogo}
                      alt="Logo"
                    />
                    <figcaption className="SkillName">JAVASCRIPT</figcaption>
                  </figure>
                  <figure className="LogoContainer">
                    <img className="LogoImage" src={nodejsLogo} alt="Logo" />
                    <figcaption className="SkillName">NODE JS</figcaption>
                  </figure>
                  <figure className="LogoContainer">
                    <img className="LogoImage" src={MongoDBLogo} alt="Logo" />
                    <figcaption className="SkillName">MongoDB</figcaption>
                  </figure>
                  <figure className="LogoContainer">
                    <img className="LogoImage" src={figmaLogo} alt="Logo" />
                    <figcaption className="SkillName">FIGMA</figcaption>
                  </figure>
                </div>
              </div>
            </div>

            <div className="OtherSkills">
              <span className="SkillsHeading">Other Skills:</span>
              
              {/* <div className="UsingNow"> */}
                <div className="SkillsImages">
                  <div className="SkillsImagesBackend">
                    <figure className="LogoContainer">
                      <img className="LogoImage" src={pythonLogo} alt="Logo" />
                      <figcaption className="SkillName">PYTHON</figcaption>
                    </figure>
                    <figure className="LogoContainer">
                      <img className="LogoImage" src={javaLogo} alt="Logo" />
                      <figcaption className="SkillName">JAVA</figcaption>
                    </figure>
                    <figure className="LogoContainer">
                      <img className="LogoImage" src={cppLogo} alt="Logo" />
                      <figcaption className="SkillName">C++</figcaption>
                    </figure>
                    <figure className="LogoContainer">
                      <img className="LogoImage" src={cLogo} alt="Logo" />
                      <figcaption className="SkillName">C</figcaption>
                    </figure>
                  </div>
                </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
