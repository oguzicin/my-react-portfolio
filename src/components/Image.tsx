import React from "react";
import img from '../assets/profile.jpg';

const Image = () => {
    return(
        <div className="hover:-translate-y-2 duration-200">
            <img src={img} alt="Profile" className="rounded-3xl w-56"/>
        </div>
    );
}

export default Image