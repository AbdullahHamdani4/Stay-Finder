import React, { useState } from 'react'
import "../App.css"
import {MappedCards} from "./featuredStays.jsx"
import {popularDestinationsData} from "../data/data.js"
import {guestList} from "../data/data.js"
const viewAll = () => {
     const [destination,setDestination]=useState("Any-Destination");
       
    return(
         <main className="min-h-screen bg-[#F8F7F3] px-6 py-10 text-[#18201D] lg:px-12">
      <section className=" topSec mx-auto max-w-[1440px] mb-3">

        {/* Featured Stays Header */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-start">

           <div>
             <div className="mb-4 flex items-center gap-2 text-sm text-[#6B716D]">
              <span>Home</span>

              <i className="fa-solid fa-chevron-right text-[10px]"></i>

              <span>Stays</span>
            </div>

            {/* Heading */}
            <h1 className="font-['Playfair_Display'] text-5xl font-semibold tracking-[-0.02em] text-[#18201D] lg:text-[52px]">
              Featured stays
            </h1>

            {/* Description */}
            <p className="mt-3 max-w-[460px] text-[15px] leading-7 text-[#6B716D]">
              Handpicked stays with amazing views, top ratings
              <br className="hidden sm:block" />
              and unforgettable experiences.
            </p>
          </div>
          
          {/* Best Price Guarantee */}
          <div className="flex w-full max-w-[330px] items-center gap-4 rounded-2xl bg-[#EEF1EA] px-6 py-5 lg:mt-5">

            {/* Icon */}
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F8F7F3] text-[#063C2F]">
              <i className="fa-solid fa-shield-halved text-xl"></i>
            </div>

            {/* Text */}
            <div>
              <p className="text-[14px] font-semibold text-[#18201D]">
                Best Price Guarantee
              </p>

              <p className="mt-1 text-[13px] leading-5 text-[#6B716D]">
                Found a lower price? We'll match it.
              </p>
            </div>
          </div>
        </div>


        {/* Filter Bar */}
        <div className="mt-9 rounded-2xl  border border-[#E4E5E1] bg-white shadow-[0_4px_20px_rgba(24,32,29,0.04)] py-1">

          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr_1fr_1fr_1.2fr_1fr_auto]">

            {/* Destination */}
            <div className="flex items-center gap-3 border-b border-[#E4E5E1] px-6 py-4 lg:border-b-0 lg:border-r">

              <i className="fa-solid fa-location-dot shrink-0 text-lg text-[#18201D]"></i>

              <div>
                <p className="text-[11px] font-medium text-[#6B716D]">
                  Destination
                </p>

                <select className="mt-1 text-sm font-medium text-[#18201D]" onChange={(e)=> console.log(e.target.value)
                }>
                    <option value="Any-destination" className='font-semibold'>Any destination</option>
                   {popularDestinationsData.map((each) => (
                  <option value={`${each.name}`} className='font-semibold'>{each.name}</option>
                   ))}
                </select>
              </div>

             </div>


            {/* Check In */}
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


            {/* Check Out */}
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


            {/* Guests */}
            <div className="flex items-center gap-3 border-b border-[#E4E5E1] px-6 py-4 lg:border-b-0 lg:border-r">

              <i className="fa-regular fa-user shrink-0 text-lg text-[#18201D]"></i>

              <div>
                <p className="text-[11px] font-medium text-[#6B716D]">
                  Guests
                </p>

                <select className="mt-1 text-sm font-medium text-[#18201D]">
                   {guestList.map(each =><option value="">{each} Guests</option>)}
                </select>
              </div>

             </div>


            {/* Price */}
            <div className="flex items-center gap-3 border-b border-[#E4E5E1] px-6 py-4 lg:border-b-0 lg:border-r">

              <i className="fa-solid fa-money-bill-wave shrink-0 text-lg text-[#18201D]"></i>

              <div>
                <p className="text-[11px] font-medium text-[#6B716D]">
                  Price range
                </p>

                <input type='range' min="5000Pkr" max="90000Pkr"className="minVal mt-1 text-sm font-medium text-[#18201D]"/>
                <input type='range' min="5000Pkr" max="90000Pkr"className="maxVal mt-1 text-sm font-medium text-[#18201D]"/>
                <br />
                  Rs. <span className='minPrice'>2,000</span> - Rs. <span className='maxPrice'>90,000</span>
                
              </div>
            </div>


            {/* Property Type */}
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


            {/* Apply Filters */}
            <div className="flex items-center justify-center p-3">

              <button
                type="button"
                className="flex h-[46px] w-full items-center justify-center gap-2 rounded-[10px] bg-[#063C2F] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#042F26] lg:w-auto"
              >
                <i className="fa-solid fa-sliders"></i>

                Apply filters
              </button>

            </div>

          </div>
        </div>


        {/* Categories + Sort */}
        <div className="mt-5 flex flex-col items-end">

          
       


          {/* Sort By */}
          <div className="flex shrink-0 items-center gap-3">

            <span className="text-sm text-[#6B716D]">
              Sort by:
            </span>

            <button
              type="button"
              className="flex min-w-[160px] items-center justify-between rounded-[10px] border border-[#E4E5E1] bg-white px-4 py-3 text-sm font-medium text-[#18201D]"
            >
              Recommended

              <i className="fa-solid fa-chevron-down text-xs text-[#6B716D]"></i>
            </button>

          </div>

        </div>

      </section>
      <MappedCards filter={""} wrapVal={"flex-wrap"} gapVal={6} justifyVal={"justify-center"}/> 
    </main>
    )
}

export default viewAll