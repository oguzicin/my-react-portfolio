import React, { useEffect, useRef, useState } from "react";

const phrases = [
  "Computer Engineer",
  "Coding Enthusiast",
  "Video Game Lover",
  "Interest for Tech",
];

const MainSec = () => {
  const el = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the visibility change after a short delay to allow for animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Adjust the delay as needed

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  useEffect(() => {
    let sleepTime = 100;
    let curPhraseIndex = 0;

    const sleep = (ms: number): Promise<void> => {
      return new Promise((resolve) => setTimeout(resolve, ms));
    };

    const writeLoop = async () => {
      if (el.current) {
        while (true) {
          let curWord = phrases[curPhraseIndex];

          for (let i = 0; i < curWord.length; i++) {
            el.current.innerText = curWord.substring(0, i + 1);
            await sleep(sleepTime);
          }

          await sleep(sleepTime * 6);

          for (let i = curWord.length; i > 0; i--) {
            el.current.innerText = curWord.substring(0, i - 1);
            await sleep(sleepTime);
          }

          await sleep(sleepTime * 10);

          curPhraseIndex =
            curPhraseIndex === phrases.length - 1
              ? 0
              : curPhraseIndex + 1;
        }
      }
    };

    writeLoop();
  }, []);

  return (
    <div
      className={`flex flex-col w-8/12 p-5 justify-between m-5 transition-all duration-[2s] ease-out custom-xs:p-0 ${
        isVisible
          ? "opacity-100 filter blur-0 translate-y-0"
          : "opacity-0 filter blur-[2px] translate-y-[35%]"
      }`}
    >
      <div className="text-left ps-[10vw] pt-20  custom-xm:justify-start custom-xm:ps-0 ">
        <div className="text-[2.4rem] font-nunito font-semibold text-gray-300 custom-xs:text-[1.5rem] custom-xs:mb-10">hi that's</div>
        <div className="text-[6rem] -mt-14 text-[#64ffda] font-bold font-nunito custom-xs:text-[4.5rem] ">oguz</div>
        <div ref={el} className="text-[2rem] h-16 font-tiny5 text-gray-500 custom-xs:text-[1.4rem]">
          Coding
        </div>
      </div>
    </div>
  );
};

export default MainSec;
