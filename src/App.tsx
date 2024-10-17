import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import AboutSec from "./components/AboutSec";
import ExpSec from "./components/ExpSec";
import ProjectSec from "./components/ProjectSec";
import MainSec from "./components/MainSec";
import Bottom from "./components/Bottom";


function App() {

  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${sectionId}`); 
    }
  };

  return (
    <div className="App bg-[#0a192f] h-full text-white w-full">
      <div className="fixed w-full z-50  custom-xs:z-50 custom-xs:text-[0.7rem] custom-xs:w-full">
        <Navbar></Navbar>
      </div>
      <section id="home" className="h-[100vh]  items-center flex w-full">
        <div className="flex flex-row justify-center  h-fit w-full">
        <MainSec></MainSec>
        </div>
      </section>

      <section id="about" className="h-fit items-center flex ">
        <div className="flex flex-row justify-center h-fit w-full ">
        <AboutSec></AboutSec>
        </div>
      </section>

      <section id="exp" className="h-fit w-full items-center flex">
        <div className="flex flex-row justify-center h-fit w-full mt-10 mb-10">
        <ExpSec></ExpSec>
        </div>
      </section>
      
      <section id="project" className="h-[65rem] items-center flex custom-xm:h-fit">
        <div className="flex flex-row justify-center h-fit w-full">
        <ProjectSec></ProjectSec>
        </div>
      </section>
      
      <section id="bottom" className="h-[100px] w-full items-center flex">
        <div className="flex flex-row justify-center h-full w-full mt-10 mb-10 items-center custom-xs:m-3">
        <Bottom></Bottom>
        </div>
      </section>
      
    </div>
  );
}

export default App;
