import React from "react";

const List = () => {
    return(
        <div className="ms-8 flex flex-row gap-20 w-fit custom-xs:text-[0.7rem] custom-xs:m-0 custom-xs:gap-0">
            <ul className="list-circle marker:text-[#64ffda] list-inside custom-xs:w-24 ">
                <li>Python</li>
                <li>JavaScript</li>
                <li>OpenCV</li>
                <li>HTML/CSS</li>
            </ul>
            <ul className="list-circle marker:text-[#64ffda] list-inside custom-xs:w-24">
                <li>React</li>
                <li>C++</li>
                <li>MS SQL</li>
                <li>TypeScript</li>
            </ul>
        </div>
    )
}

export default List