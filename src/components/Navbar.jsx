import React, { use } from "react";
import Logo from "./logo.jsx"
import { useNavigate } from "react-router-dom"
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { User} from "../Context/UserContext.jsx";
import { toast,ToastContainer } from "react-toastify";
import logo from "./logo.jsx";
function Navbar() {
    const {user,logout}=User()
    
      const id = React.useId();
  const buttonId = `${id}-button`;
  const menuId = `${id}-menu`;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

    let navLinks=["Home","Stays","Destination","About","Contact"];
    const navigate=useNavigate()
    return (
     <header className="flex justify-between  p-2 sm:p-4 py-3 items-center shadow-md">
    <Logo/>
    <div>
        <ul className="gap-7 font-inter font-medium text-[14px] text-[#18201D] hidden md:flex">
         {navLinks.map(each => <li>{each}</li>)}
        </ul>
    </div>
    { <div>
        
       <Button
        id={buttonId}
        aria-controls={open ? menuId : undefined}
        aria-haspopup="true"
        aria-expanded={open}
        onClick={handleClick}
      >
        <div className="flex items-center gap-1 bg-[#e4dcdc] rounded p-1 sm:p-2 text-xs sm:text-base"> <img src={user.photoURL} alt="pfp" className="size-6 rounded-full object-center" /> {user.displayName}</div>
      </Button>
      <Menu
        id={menuId}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            'aria-labelledby': buttonId,
          },
        }}
      >
         
        <MenuItem onClick={()=>{logout()}}>Logout</MenuItem>
      </Menu>
    </div> }
     
  </header>
    )
 
}

export default Navbar
// onClick={(()=>navigate("/ListProperties"))}