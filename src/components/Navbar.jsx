function Navbar() {
    let navLinks=["Home","Stays","Destination","About","Contact"]
    return (
     <header className="flex justify-between p-4 py-3 border items-center">
    <div className="logo text-[21px] md:text-2xl flex items-center">
        <div><i className="fa-regular fa-house text-[#063C2F] mb-2"></i></div>
        <span className="font-recoleta font-semibold  text-[#0D3026] ">StayFinder</span>
    </div>
    <div>
        <ul className="gap-7 font-inter font-medium text-[14px] text-[#18201D] hidden md:flex">
         {navLinks.map(each => <li>{each}</li>)}
        </ul>
    </div>
    <div>
        <button className="bg-[#0D3026] text-white font-inter font-semibold text-[12px] rounded-[8px] py-2 px-2.5 md:py-2.5 md:px-3">List your property</button>
    </div>
  </header>
    )
 
}

export default Navbar