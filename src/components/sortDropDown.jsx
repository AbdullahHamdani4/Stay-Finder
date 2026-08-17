import React from 'react'

const sortDropDown = ({sortValueSend}) => {
  return (
      <div className="mt-5 flex flex-col items-end">
           <div className="flex shrink-0 items-center gap-3">

            <span className="text-sm text-[#6B716D]">
              Sort by:
            </span>

            <select
              type="button"
              className="flex min-w-[160px] items-center justify-between rounded-[10px] border border-[#E4E5E1] bg-white px-4 py-3 text-sm font-medium text-[#18201D]" onChange={e=> sortValueSend(e.target.value)}
            >
              <option value="Recommended">Recommended</option>
              <option value="Low">Price: Low to High</option>
              <option value="High">Price: High to Low</option>

               
            </select>

          </div>
        </div>
  )
}

export default sortDropDown