import React from 'react'

const Input = ({placeholder,type,name}) => {
  return (
    <input type={type} placeholder={placeholder} name={name} required className='border p-1.5 pl-2 rounded  mt-px mb-3 w-full border-[#ccc] text-base outline-none'/>

   )
}

export default Input