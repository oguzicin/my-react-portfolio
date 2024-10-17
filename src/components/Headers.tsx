import React from "react";

type Props = {
    heading:string
};


const Headers = ({heading}: Props) => {

return(
<div className="w-fit h-16 flex flex-col justify-center text-4xl font-bold min-w-48 font-nunito p-3 text-gray-300">
{ heading }
</div>
   
);



};

export default Headers