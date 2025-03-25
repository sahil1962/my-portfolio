import "./project.css";
import ComplySimplify from "../../assets/Projects/ComplySimplify.png";
import OyeeCar from "../../assets/Projects/OyeeCar.png";
import EMS from "../../assets/Projects/EMS.png";

const Project = () => {
  return (
    <div className="Project">
      <div className="background">
        <div className="heading">
          # Project
          <div className="line"></div>
        </div>

        <div className="ParentDiv">
          <div className="ChildDivs">
            <div className="Photo">
              <img className="ProjectImage" src={ComplySimplify} alt="Logo" />
            </div>
            <div className="Technology">
              <p>React, NodeJS, Express, Bootstrap, Firebase, Python</p>
            </div>
            <div className="Details">
              <h3>ComplySimplify </h3>
              <a
                href="https://github.com/sahil1962/ComplySimplify"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="GitButton">Live {"<~>"}</div>{" "}
              </a>
            </div>
          </div>
          <div className="ChildDivs">
            <div className="Photo">
              <img className="ProjectImage" src={OyeeCar} alt="Logo" />
            </div>
            <div className="Technology">
              <p>React, NodeJS, Express, Bootstrap, MongoDB, CSS</p>
            </div>
            <div className="Details">
              <h3>Oyee Car Automobile</h3>
              <a
                href="https://github.com/sahil1962/OyeeCarAutomobile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="GitButton">Live {"<~>"}</div>{" "}
              </a>
            </div>
          </div>
          <div className="ChildDivs">
            <div className="Photo">
              <img className="ProjectImage" src={EMS} alt="Logo" />
            </div>
            <div className="Technology">
              <p>Java, JavaFX, File Handling</p>
            </div>
            <div className="Details">
              <h3>Energy Management System</h3>
              <a
                href="https://github.com/sahil1962/EnergyManagementSystem"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="GitButton">Live {"<~>"}</div>{" "}
              </a>
            </div>
          </div>
          <a
            className="ViewAll"
            href="https://github.com/sahil1962?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            View all {"~~>"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
