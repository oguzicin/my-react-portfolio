import React, { useEffect, useRef, useState } from "react";
import Headers from "./Headers";
import HeaderUnderline from "./HeaderUnderline";
import ExpCard from "./ExpCard";



const ExpSec = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    

    useEffect(() => {
        const handleScroll = () => {
            const section = sectionRef.current;
            if (section) {
                const rect = section.getBoundingClientRect();
                const windowHeight = window.innerHeight || document.documentElement.clientHeight;

                if (rect.top <= windowHeight * 0.75) {
                    setIsVisible(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section ref={sectionRef}>
            <div
                className={` flex flex-col w-[65vw] p-6 justify-between mb-12 mt-16 transition-all duration-[2s] ease-out custom-sm:w-[90vw] custom-xs:p-0 ${
                    isVisible
                      ? "opacity-100 filter blur-0 translate-y-0"
                      : "opacity-0 filter blur-[2px] translate-y-[35%]"
                  }`}
            >
                <div className="">
                    <Headers heading={"/ experience"} />
                    <HeaderUnderline/>
                </div>
                <div>
                    <ExpCard heading={"Altinay Robotic Tech."} text={"Short-term Internship program. (September 2024 - October 2024)."} ></ExpCard>
                </div>
            </div>
        </section>
    );
};

export default ExpSec;
