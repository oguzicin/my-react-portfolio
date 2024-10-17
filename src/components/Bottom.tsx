import React, { useEffect, useRef, useState } from "react";

const Bottom = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (section) {
        const rect = section.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;

        if (rect.top <= windowHeight * 0.95) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef}>
      <div
        className={` flex flex-col w-[57vw] justify-between   transition-all duration-[2s] ease-out  ${
          isVisible
            ? "opacity-100 filter blur-0 translate-y-0"
            : "opacity-0 filter blur-[2px] translate-y-[35%]"
        }`}
      >
        <div>
          <div className="flex flex-row justify-center text-gray-400 w-full h-full">
            <div className="text-xs custom-xs:text-[0.61rem] custom-sm:text-[0.6rem]">
              Built and designed by Oguz.<br></br>
              All rights reserved. ©
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bottom;
