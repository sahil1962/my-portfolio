// import './App.css';
import React, { useEffect } from "react";
import Navbar from "./components/navbar/navbar"
import LandingPage from './components/landing page/landingpage';
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import Project from "./components/project/project";
import Contact from "./components/contact me/contact";


const App = () => {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');

    for (const link of links) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").slice(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
  }, []);

  return (
    <div className="App">
      
      {/* <SnowEffect /> */}
      <Navbar />
      <div id="LandingPage">
        <LandingPage />
      </div>
      <div id="AboutMe">
        <About/>
      </div>
      <div id="Skills">
        <Skills/>
      </div>
      <div id="Projects">
        <Project />
      </div>
      <div id="ContactMe">
        <Contact />
      </div>
  
    </div>
  );
};

export default App;
