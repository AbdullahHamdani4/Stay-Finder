import React from "react";

const Input = ({ placeholder, type, value, inputHandler }) => {
  return (
    // <input type={type} placeholder={placeholder} name={name} required className='border p-1.5 pl-2 rounded  mt-px mb-3 w-full border-[#ccc] text-base outline-none'/>

    <input
      type={type}
      placeholder={placeholder}
      className=" border p-1.5 pl-2 rounded mt-px mb-3 w-full border-[#ccc] text-base outline-none text-white"
      value={value}
      onChange={(e) => {
        inputHandler(e.target.value);
      }}
    />
  );
};

export default Input;
