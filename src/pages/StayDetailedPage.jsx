import React from 'react'
import { featuredStaysData } from '../data/data'
import { useParams } from 'react-router-dom'
import FeaturedStaysCard from '../components/featuredStayCard';
const StayDetailedPage = () => {
    const {id}=useParams();
    const obj=featuredStaysData.find(each => each.id == id)
  return (
    <main className='p-6 w-full'>
        {/* <div></div>
        <div className=' flex h-10'>
         <div className='bg-red-700 w-[60%] '><img src={`${featuredStaysData[0].image}`} alt="" className='object-cover' /></div>
         <div className='bg-gray-600 grid grid-cols-3 lg:grid-cols-1 lg:grid-rows-3 w-[40%]'>
             <img src={`${featuredStaysData[0].images[0]}`} alt="" className='' /> 
             <img src={`${featuredStaysData[0].images[1]}`} alt="" className=' ' /> 
            <img src={`${featuredStaysData[0].images[2]}`} alt="" className='' /> 
         </div>

        </div> */}
        <div><FeaturedStaysCard {...obj}/></div>
    </main>
   )
}

export default StayDetailedPage