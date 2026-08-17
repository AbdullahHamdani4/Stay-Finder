import React, { useEffect, useState } from 'react'
const priceRange = ({func}) => {
    const [minVal, setMinVal] = useState(5000);
    const [maxVal, setMaxVal] = useState(90000);
    const minValFunc = (e) => {
        let value = Number(e.target.value)
        value < (maxVal - 500) ? setMinVal(value) : ""
        func(minVal,maxVal)
    }
    const maxValFunc = (e) => {
        let value = Number(e.target.value)
        value > (minVal) ? setMaxVal(value) : ""
        func(minVal,maxVal)
    }
    return (
        <div className="flex items-center gap-3 border-b border-[#E4E5E1] px-6 py-4 lg:border-b-0 lg:border-r">

            <i className="fa-solid fa-money-bill-wave shrink-0 text-lg text-[#18201D]"></i>

            <div>
                <p className="text-[11px] font-medium text-[#6B716D]">
                    Price range
                </p>

                <div className="relative w-full h-8 flex items-center justify-center mb-[-20px]">
                    {/* Single visible background track */}
                    <div className="absolute w-full h-1.5 bg-gray-300 rounded-full pointer-events-none" />

                    {/* Min range input */}
                    <input
                        type="range"
                        min="5000"
                        max="90000"
                        step="500"
                        className="minVal absolute inset-0 z-10"
                        value={minVal}
                        onChange={(e) => minValFunc(e)}
                    />

                    {/* Max range input */}
                    <input
                        type="range"
                        min="5000"
                        max="90000"
                        step="500"
                        className="maxVal absolute inset-0 z-20"
                        value={maxVal}
                        onChange={(e) => maxValFunc(e)}
                    />
                </div>
                <br />
                Rs. <span className='minPrice'>{minVal}</span> - Rs. <span className='maxPrice'>{maxVal}</span>

            </div>
        </div>
    )
}

export default priceRange