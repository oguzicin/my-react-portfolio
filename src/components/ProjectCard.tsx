import React from "react";
import { FaGithub, FaRegFolder } from "react-icons/fa6";

type Props = {
  heading:string
  text:string
  link?:string
};

const ProjectCard = ({heading, text ,link}: Props) => {
  return (
    <div>
      <div className="w-[16rem] h-[16rem] bg-[#0e2443] rounded-xl gap-0 flex flex-col justify-evenly hover:-translate-y-2 duration-100 hover:bg-[#244773] custom-m:w-full custom-xs:w-[50rem] custom-xs:h-[10rem] custom-xm:w-full custom-sm:w-[13rem] custom-sm:h-[13rem]  ">
        <div className="flex flex-row justify-left items-center gap-3 ms-4">
          <div className="text-[100%] custom-xm:text-[1.1rem]  text-[#64ffda] "><FaRegFolder/></div>
          <div className="text-[1.3vw] text-gray-100 custom-xm:text-[1.2rem]">{heading}</div>
        </div>
        <div className="ms-6 me-6 mb-[1vw] font-redditMono text-[0.75vw] text-left justify-center text-gray-400 custom-xm:text-[0.7rem]">{text}
        </div>
        <div className="ps-7 text-xl hover:text-[#64ffda] text-gray-300 w-fit h-fit custom-xm:text-[1.1rem]"><a href={link} target="_blank" rel="noopener noreferrer"><FaGithub /></a></div>
      </div>
    </div>
  );
};

export default ProjectCard;
