import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import React from 'react'

 function Button({name,loader}) {
  return (
    // <button
    // onClick={onClick}
    //   className={`border border-[#ccc] px-2.5 rounded-full py-1.5 transition duration-200 hover:bg-gray-400 hover:text-white font-bold text-[18px]`}
    // >
    //   {name}
    //       </button>

      <button
                type="submit"
                className="
                  px-[45px] py-[10px]
                  bg-[#0E1D2C]
                  rounded
                  text-white
                  font-bold
                  border-none
                  uppercase
                  cursor-pointer
                  flex 
                  justify-center
                  items-center
                  gap-3
                "
              >
                {name} 
                {loader? <Stack spacing={2} direction="row" sx={{ alignItems: 'center' }}>
      <CircularProgress size="16px" aria-label="Loading…" thickness={8} /> 
      </Stack>: "" } 
              </button>
  );
}

export default Button;