import React from "react";


type Props = {
  heading:string
  text:string
  link?:string
};

const ExpCard = ({heading, text ,link}: Props) => {
  return (
    <div>
    <div className="flex flex-row justify-evenly w-full mt-6 me-4 gap-14 custom-sm:justify-between text-gray-400 custom-xs:ms-5 custom-sm:w-fit ">
        <div className="custom-xs:text-[3.4vw] custom-xm:text-[1rem] flex items-center  min-h-10 w-48  text-left"><button className="w-full h-full focus:border-[#64ffda] focus:text-[#64ffda] border-e-2 flexitems-center">{heading}</button></div>
        <div className="custom-xs:text-[2.2vw] custom-xm:text-[0.8rem] items-center flex">{text}</div>
    </div>
</div>
  );
};

export default ExpCard;