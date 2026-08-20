import React, { useCallback, useEffect, useState } from 'react'
import "../App.css"
import { MappedCards } from "../components/featuredStays.jsx"
import ViewMoreHeader from '../components/viewMoreHeader.jsx'
import FilterBar from '../components/filterBar.jsx'
import SortDropDown from '../components/sortDropDown.jsx'

const viewAll = () => {
    const [sortValue,setSortValue]=useState("Recommended")
    const [destination, setDestination] = useState({
        destination: "Any-Destination",
        minPrice: 5000,
        maxPrice: 90000,
        guests: "Any guest",
    });
    const valueFromFilterDestination =  useCallback((value) => {
        setDestination(value)
    },[])
    const valueFromSortDropDown=useCallback((value)=>{
       setSortValue(value)
    },[])

    return (
        <main className="min-h-screen bg-[#F8F7F3] px-6 py-10 text-[#18201D] lg:px-12">
            <section className=" topSec mx-auto max-w-[1440px] mb-3">


                <ViewMoreHeader />
                <FilterBar destinationSend={valueFromFilterDestination} />
                <SortDropDown sortValueSend={valueFromSortDropDown} />



            </section>
            <div className='cards'>
                <MappedCards filter={destination} sort={sortValue} wrapVal={"flex-wrap"} gapVal={6} justifyVal={"justify-center"} />
            </div>
        </main>
    )
}

export default viewAll