import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

type NavProps = {};

const Navbar = ({}: NavProps) => {

  

  return (
    <div className="w-full  h-12 bg-[#0a192f] flex flex-row items-center justify-evenly gap-96 custom-xs:text-[0.7rem]  custom-sm:gap-2">
      <div className="flex flex-row justify-evenly  gap-6 font-semibold text-gray-300 custom-xs:ms-0 custom-sm:gap-4">
        <div className="hover:text-[#64ffda] cursor-pointer"><a onClick={() => handleScroll('home')}>Home</a></div>
        <div className="hover:text-[#64ffda] cursor-pointer"><a onClick={() => handleScroll('about')}>About</a></div>
        <div className="hover:text-[#64ffda] cursor-pointer"><a onClick={() => handleScroll('exp')}>Experience</a></div>
        <div className="hover:text-[#64ffda] cursor-pointer"><a onClick={() => handleScroll('project')}>Projects</a></div>
      </div>
      <div className="flex flex-row h-fit justify-center   gap-6 text-2xl text-gray-300 custom-xs:text-[1rem] custom-sm:gap-4">
        <div className=" hover:text-[#64ffda]"><a href="https://github.com/oguzicin" target="_blank" rel="noopener noreferrer"><FaGithub /></a></div>
        <div className=" hover:text-[#64ffda]  cursor-pointer"><a href="https://www.linkedin.com/in/oguzicin/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></div>
      </div>
    </div>
  );
};

export default Navbar;
