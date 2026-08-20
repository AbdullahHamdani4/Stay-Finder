import React, { useEffect, useState } from 'react'
import { popularDestinationsData } from '../data/data'
import { guestList } from '../data/data'
import PriceRange from './priceRange'
import { memo } from 'react';

const filterBar = memo(({ destinationSend }) => {
  const [destination, setDestination] = useState("Any-Destination");
  const [minPrice, setMinPrice] = useState(5000);
  const [maxPrice, setMaxPrice] = useState(90000);
  const [guests, setGuests] = useState("Any Guest");
 console.log("Hello");
 
  const onData = (minVal, maxVal) => {
    setMinPrice(minVal)
    setMaxPrice(maxVal)
  }

  let obj = {
    destination: destination,
    minPrice: minPrice,
    maxPrice: maxPrice,
    guests: guests,
  }
  
  return (
    <div className="mt-9 rounded-2xl  border border-[#E4E5E1] bg-white shadow-[0_4px_20px_rgba(24,32,29,0.04)] py-1">

      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr_1fr_1fr_1.2fr_1fr_auto]">

        <div className="flex items-center gap-3 border-b border-[#E4E5E1] px-6 py-4 lg:border-b-0 lg:border-r">

          <i className="fa-solid fa-location-dot shrink-0 text-lg text-[#18201D]"></i>

          <div>
            <p className="text-[11px] font-medium text-[#6B716D]">
              Destination
            </p>

            <select className="mt-1 text-sm font-medium text-[#18201D]" onChange={(e) => setDestination(e.target.value)}>
              <option value="Any-destination" className='font-semibold'>Any destination</option>
              {popularDestinationsData.map((each) => (
                <option key={each.id} value={`${each.name}`} className='font-semibold'>{each.name}</option>
              ))}
            </select>
          </div>

        </div>


        <div className="flex items-center gap-3 border-b border-[#E4E5E1] px-6 py-4 lg:border-b-0 lg:border-r">

          <i className="fa-regular fa-calendar shrink-0 text-lg text-[#18201D]"></i>

          <div>
            <p className="text-[11px] font-medium text-[#6B716D]">
              Check in
            </p>

            <p className="mt-1 text-sm font-medium text-[#18201D]">
              15 Aug 2026
            </p>
          </div>
        </div>


        <div className="flex items-center gap-3 border-b border-[#E4E5E1] px-6 py-4 lg:border-b-0 lg:border-r">

          <i className="fa-regular fa-calendar shrink-0 text-lg text-[#18201D]"></i>

          <div>
            <p className="text-[11px] font-medium text-[#6B716D]">
              Check out
            </p>

            <p className="mt-1 text-sm font-medium text-[#18201D]">
              18 Aug 2026
            </p>
          </div>
        </div>


        <div className="flex items-center gap-3 border-b border-[#E4E5E1] px-6 py-4 lg:border-b-0 lg:border-r">

          <i className="fa-regular fa-user shrink-0 text-lg text-[#18201D]"></i>

          <div>
            <p className="text-[11px] font-medium text-[#6B716D]">
              Guests
            </p>

            <select className="mt-1 text-sm font-medium text-[#18201D]" onChange={(e) => setGuests(e.target.value)}>
              {guestList.map(each => <option key={each} value={each}>{each} Guests</option>)}
            </select>
          </div>

        </div>


        <PriceRange func={onData} />


        <div className="flex items-center gap-3 border-b border-[#E4E5E1] px-6 py-4 lg:border-b-0 lg:border-r">

          <i className="fa-solid fa-house shrink-0 text-lg text-[#18201D]"></i>

          <div>
            <p className="text-[11px] font-medium text-[#6B716D]">
              Property type
            </p>

            <select className="mt-1 text-sm font-medium text-[#18201D]">
              <option value="">All types</option>
            </select>
          </div>

        </div>


        <div className="flex items-center justify-center p-3">

          <button
            type="button"
            className="flex h-[46px] w-full items-center justify-center gap-2 rounded-[10px] bg-[#063C2F] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#042F26] lg:w-auto"
            onClick={() => destinationSend(obj)}>
            <i className="fa-solid fa-sliders"></i>

            Apply filters
          </button>

        </div>

      </div>
    </div>
  )
})

export default filterBar