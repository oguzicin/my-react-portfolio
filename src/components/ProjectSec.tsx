import React, { useEffect, useRef, useState } from "react";
import Headers from "./Headers";
import ProjectCard from "./ProjectCard";
import ImageSlide from "./ImageSlide";
import p1 from "../assets/project1.png";
import p2 from "../assets/project2.png";
import HeaderUnderline from "./HeaderUnderline";

const Images = [
  { url: p1, alt: "Project One" },
  { url: p2, alt: "Project Two" },
]

const ProjectSec = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (section) {
        const rect = section.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;

        // Check if the section is in view (75% of the viewport height)
        if (rect.top <= windowHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check in case the section is already in view
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={` flex flex-col w-[65vw] p-5 justify-between  transition-all duration-[2s] ease-out custom-sm:w-[90vw] custom-xs:p-0 ${
        isVisible
          ? "opacity-100 filter blur-0 translate-y-0"
          : "opacity-0 filter blur-[2px] translate-y-[35%]"
      }`}
    >
      <div className="">
        <Headers heading={"/ projects"} />
        <HeaderUnderline/>
      </div>
      <div className="flex flex-col gap-10 items-center ">
        <div className="flex flex-row justify-between mt-6  w-full">
          <div className="flex flex-row justify-center w-full custom-xm:hidden ">
            <ImageSlide  images={Images} />
          </div>
        </div>
        <div id="prjct" className="grid grid-cols-3 justify-between gap-5 custom-sm:justify-center  custom-xm:w-[fit] custom-xm:grid-cols-2  custom-xs:flex custom-xs:flex-col custom-m:justify-between custom-m:w-[80vw]">
          <ProjectCard heading={"Plate Recognition"} text={"Basic image processing with python to recognate the car plates."} link={"https://github.com/oguzicin/license-plate-recognition"}/>
          <ProjectCard heading={"Robot Interface"} text={"Interactive user interface built with React to control and manage robots."} link={"https://github.com/oguzicin/React-Robot-Interface"}/>
          <ProjectCard  heading={"Portfolio"} text={"Simple portfolio website with vanilla HTML / CSS."}  />
        </div>
      </div>
    </div>
  );
};

export default ProjectSec;
