import React, { useEffect, useRef, useState } from "react";
import Headers from "./Headers";
import Image from "./Image";
import List from "./List";
import HeaderUnderline from "./HeaderUnderline";

const AboutSec = () => {
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
      className={` flex flex-col w-[65vw] p-5 justify-between mb-24 mt-24 transition-all duration-[2s] ease-out custom-sm:w-[90vw] custom-xs:p-0  ${
        isVisible
          ? "opacity-100 filter blur-0 translate-y-0"
          : "opacity-0 filter blur-[2px] translate-y-[35%]"
      }`}
    >
      <div className="">
        <Headers heading={"/ about me"} />
        <HeaderUnderline/>
      </div>
      <div className="flex flex-row justify-evenly gap-8 ms-2 me-2 font-nunito">
        <div className="w-2/3 flex flex-col leading-8 p-5 text-left gap-5 text-gray-400 custom-xs:text-[3vw] custom-xs:w-full custom-xm:w-full">
          <p>
            I'm studying Computer Engineering program in Dogus University (Istanbul), working as an intern at Altınay Robot Technologies. While I am practicing web development, I also have an interest in machine learning, image processing, and AI. I practice that interest with my pet projects.
            <br />
            Here are some technologies I have been working with:
          </p>
          <List />
        </div>
        <div className=" h-fit w-fit custom-xs:hidden custom-m:w-[20vw] custom-xm:hidden">
          <Image />
        </div>
      </div>
    </div>
  );
};

export default AboutSec;
