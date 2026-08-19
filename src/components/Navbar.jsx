import { use } from "react";
import Logo from "./logo.jsx"
import { useNavigate } from "react-router-dom"
function Navbar() {
    let navLinks=["Home","Stays","Destination","About","Contact"];
    const navigate=useNavigate()
    return (
     <header className="flex justify-between p-4 py-3 border items-center">
    <Logo/>
    <div>
        <ul className="gap-7 font-inter font-medium text-[14px] text-[#18201D] hidden md:flex">
         {navLinks.map(each => <li>{each}</li>)}
        </ul>
    </div>
    <div>
        <button className="bg-[#0D3026] text-white font-inter font-semibold text-[12px] rounded-[8px] py-2 px-2.5 md:py-2.5 md:px-3 cursor-pointer" onClick={(()=>navigate("/ListProperties"))}>List your property</button>
    </div>
  </header>
    )
 
}

export default Navbar