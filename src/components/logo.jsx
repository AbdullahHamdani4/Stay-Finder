import React from 'react'
import logoImg from "../assets/logo.png";
import logoLoginImg from "../assets/logoLogin.png";
const logo = ({textSize,logo,textColor}) => {
  
  return (
    <div className={` ${textSize} logo md:text-2xl flex items-center`}>
        <div><img src={logo? logo:logoImg} alt="" className="h-8 w-10"/></div>
        <span className={`font-recoleta font-semibold ${textColor? "text-[#7FAD51]":"text-[#0D3026] "}`}>StayFinder</span>
    </div>
  )
}

export default logo